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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const big_js_1 = __importDefault(require("big.js"));
const spl_token_1 = require("@solana/spl-token");
const anchor_1 = require("@project-serum/anchor");
const web3_js_1 = require("@solana/web3.js");
const tensorswap_sdk_1 = require("@tensor-oss/tensorswap-sdk");
const promises_1 = require("fs/promises");
const os_1 = require("os");
var GqlCurveType;
(function (GqlCurveType) {
    GqlCurveType["Exponential"] = "EXPONENTIAL";
    GqlCurveType["Linear"] = "LINEAR";
    GqlCurveType["Xyk"] = "XYK";
})(GqlCurveType || (GqlCurveType = {}));
const curveTypeMap = {
    [GqlCurveType.Exponential]: tensorswap_sdk_1.CurveType.Exponential,
    [GqlCurveType.Linear]: tensorswap_sdk_1.CurveType.Linear,
    [GqlCurveType.Xyk]: undefined
};
var GqlPoolType;
(function (GqlPoolType) {
    GqlPoolType["Nft"] = "NFT";
    GqlPoolType["Token"] = "TOKEN";
    GqlPoolType["Trade"] = "TRADE";
})(GqlPoolType || (GqlPoolType = {}));
const poolTypeMap = {
    [GqlPoolType.Nft]: tensorswap_sdk_1.PoolType.NFT,
    [GqlPoolType.Token]: tensorswap_sdk_1.PoolType.Token,
    [GqlPoolType.Trade]: tensorswap_sdk_1.PoolType.Trade,
};
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
    // SSS
    // const nftMint = new PublicKey("6FSB6y9yjUcCGrFbibBq9jHFhAwxSuXCgS8jLikCuNV7");
    // Toonies
    const nftMint = new web3_js_1.PublicKey("8Mwz6ctSiz2hqjdHKcX1bbCWBJHSRDFsijbH8M9TzuhG");
    const nftATA = (0, spl_token_1.getAssociatedTokenAddressSync)(nftMint, keypair.publicKey);
    const response = yield fetch(`http://localhost:3000/tensor_swap?mint=${nftMint}`);
    const nftagResponse = yield response.json();
    console.log("nftag response", nftagResponse);
    const tswapOrder = nftagResponse.order;
    if (tswapOrder === undefined) {
        console.error("No orders");
        return;
    }
    const price = tswapOrder.sellNowPrice;
    if (price === undefined) {
        console.error("No price");
        return;
    }
    else {
        console.log("Target price:", price);
    }
    const curveType = curveTypeMap[tswapOrder.curveType];
    if (curveType === undefined) {
        console.error("Unsupported curve type");
        return;
    }
    const config = {
        poolType: poolTypeMap[tswapOrder.poolType],
        curveType: curveType,
        startingPrice: new big_js_1.default(tswapOrder.startingPrice),
        delta: new big_js_1.default(tswapOrder.delta),
        mmCompoundFees: tswapOrder.mmCompoundFees,
        mmFeeBps: tswapOrder.mmFeeBps ? parseInt(tswapOrder.mmFeeBps) : null,
    };
    const allIxs = [];
    const whitelistAddr = new web3_js_1.PublicKey(tswapOrder.whitelistAddress);
    // Step 1: Update mint proof Ixs (optional)
    {
        const whitelist = yield wlSdk.fetchWhitelist(whitelistAddr);
        // Proof is only required if rootHash is NOT a 0 array, o/w not necessary!
        if (JSON.stringify(whitelist.rootHash) !== JSON.stringify(Array(32).fill(0))) {
            console.log('Preparing update mint proof Ixs...');
            // Off-chain merkle proof
            if (!nftagResponse.proof) {
                console.error("No mint proof");
                return;
            }
            const proof = Buffer.from(nftagResponse.proof);
            const user = keypair.publicKey;
            const mint = new web3_js_1.PublicKey(nftMint);
            const { tx: { ixs } } = yield wlSdk.initUpdateMintProof({
                user,
                whitelist: whitelistAddr,
                mint,
                proof: [proof],
            });
            allIxs.push(...ixs);
        }
        else {
            console.log('Whitelist root hash is zero, skipping proof fetch.');
        }
    }
    if (config.poolType === tensorswap_sdk_1.PoolType.NFT) {
        console.error("Unsupported pool type");
        return;
    }
    // Step 2: Sell Ixs.
    {
        const { tx: { ixs }, } = yield swapSdk.sellNft({
            type: config.poolType === tensorswap_sdk_1.PoolType.Token ? "token" : "trade",
            whitelist: whitelistAddr,
            nftMint: nftMint,
            nftSellerAcc: nftATA,
            owner: new web3_js_1.PublicKey(tswapOrder.ownerAddress),
            seller: keypair.publicKey,
            config: (0, tensorswap_sdk_1.castPoolConfig)(config),
            minPrice: new anchor_1.BN(price),
            marginNr: tswapOrder.marginNr,
        });
        allIxs.push(...ixs);
    }
    let tx = new web3_js_1.Transaction();
    tx.add(...allIxs);
    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair], { skipPreflight: true });
    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair]);
    // console.log('SIGNATURE:', signature);
});
main();
