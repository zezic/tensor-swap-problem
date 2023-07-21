"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const anchor_1 = require("@project-serum/anchor");
const web3_js_1 = require("@solana/web3.js");
const tensorswap_sdk_1 = require("@tensor-oss/tensorswap-sdk");
const nftInfo_1 = require("./nftInfo");
const promises_1 = require("fs/promises");
const os_1 = require("os");
function readJsonFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, promises_1.readFile)(path, "utf8");
        return JSON.parse(file);
    });
}
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const home = (0, os_1.homedir)();
    const secretKey = yield readJsonFile(`${home}/.config/solana/id.json`);
    const keypair = web3_js_1.Keypair.fromSecretKey(new Uint8Array(secretKey));
    const conn = new web3_js_1.Connection("https://api.mainnet-beta.solana.com");
    const provider = new anchor_1.AnchorProvider(conn, new anchor_1.Wallet(keypair), {});
    const swapSdk = new tensorswap_sdk_1.TensorSwapSDK({ provider });
    const wlSdk = new tensorswap_sdk_1.TensorWhitelistSDK({ provider });
    const nftMint = "6FSB6y9yjUcCGrFbibBq9jHFhAwxSuXCgS8jLikCuNV7";
    const nftATA = "F37fdfmun42ATgzxQ4gpVc2UBvTVLsPAvnKP6ZcQsior";
    const nftInfo = yield (0, nftInfo_1.fetchNftInfo)(nftMint);
    console.log("NFT info", nftInfo);
    const tswapOrder = nftInfo.tswapOrders.pop();
    if (tswapOrder === undefined) {
        console.error("No orders");
        return;
    }
    console.log("Order", tswapOrder);
    if (nftInfo.collection === undefined || nftInfo.collection === null) {
        console.error("Can't find collection");
        return;
    }
    if (nftInfo.collection.id === undefined) {
        console.error("Collection has no id");
        return;
    }
    console.log("Parsing UUID", nftInfo.collection.id);
    const collectionUUIDString = nftInfo.collection.id;
    // Remove "-" symbols from uuid, so it's within the 32 seed length limit. Additionally convert the uuid to a Uint8Array
    const collectionUUID = Buffer.from(nftInfo.collection.id.replace(/-/g, "")).toJSON().data;
    // Fetch the pool PDA for its settings.
    const pool = yield swapSdk.fetchPool(new web3_js_1.PublicKey(tswapOrder.address));
    console.log("Pool:", pool);
    const config = (0, tensorswap_sdk_1.castPoolConfigAnchor)(pool.config);
    console.log("Config:", config);
    const price = (0, tensorswap_sdk_1.computeTakerPrice)({
        takerSide: tensorswap_sdk_1.TakerSide.Sell,
        extraNFTsSelected: 0,
        // These fields can be extracted from the pool object above.
        config,
        takerSellCount: pool.takerSellCount,
        takerBuyCount: pool.takerBuyCount,
        maxTakerSellCount: pool.maxTakerSellCount,
        statsTakerSellCount: pool.stats.takerSellCount,
        statsTakerBuyCount: pool.stats.takerBuyCount,
        slippage: 0,
        marginated: pool.margin == null ? false : true
    });
    console.log("Price", price);
    const wlAddr = (0, tensorswap_sdk_1.findWhitelistPDA)({ uuid: collectionUUID })[0];
    console.log("Whitelist", wlAddr);
    const allIxs = [];
    // Step 1: Update mint proof Ixs (optional)
    {
        const whitelist = yield wlSdk.fetchWhitelist(wlAddr);
        console.log("Whitelist:", whitelist);
        // Proof is only required if rootHash is NOT a 0 array, o/w not necessary!
        if (JSON.stringify(whitelist.rootHash) !== JSON.stringify(Array(32).fill(0))) {
            console.log('Fetching proof');
            // Off-chain merkle proof (see "Mint Proof" API endpoint below).
            const proof = yield (0, nftInfo_1.fetchNftMintProof)(nftMint, wlAddr.toString());
            const user = keypair.publicKey;
            const mint = new web3_js_1.PublicKey(nftMint);
            const { tx: { ixs } } = yield wlSdk.initUpdateMintProof({
                user,
                whitelist: wlAddr,
                mint,
                proof: proof.proof
            });
            allIxs.push(...ixs);
        }
        else {
            console.log('Whitelist root hash is zero, skipping proof fetch.');
        }
    }
    // Step 2: Sell Ixs.
    {
        const { tx: { ixs }, } = yield swapSdk.sellNft({
            type: config.poolType === tensorswap_sdk_1.PoolType.Token ? "token" : "trade",
            whitelist: wlAddr,
            nftMint: new web3_js_1.PublicKey(nftMint),
            nftSellerAcc: new web3_js_1.PublicKey(nftATA),
            owner: new web3_js_1.PublicKey(pool.owner),
            seller: keypair.publicKey,
            config: pool.config,
            minPrice: new anchor_1.BN(tswapOrder.sellNowPriceNetFees),
        });
        allIxs.push(...ixs);
    }
    for (let ix of allIxs) {
        console.log(ix);
    }
    let tx = new web3_js_1.Transaction();
    for (const ix of allIxs) {
        tx = tx.add(ix);
    }
    // Impossible, just to make sure TX will fail to not loose my NFT
    let ix = web3_js_1.SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: new web3_js_1.PublicKey("2VBw9GvAWhJuGziv5aKjaCWF1X2E6qPd3kqD2eiwJnwx"),
        lamports: 80000000000000, // 80k SOL
    });
    tx.add(ix);
    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair], { skipPreflight: true });
    var signature = yield (0, web3_js_1.sendAndConfirmTransaction)(conn, tx, [keypair]);
    console.log('SIGNATURE:', signature);
});
main();
