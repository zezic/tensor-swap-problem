import { AnchorProvider, Wallet, BN } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { TensorSwapSDK, TensorWhitelistSDK, computeTakerPrice, TakerSide, castPoolConfigAnchor, findWhitelistPDA, PoolType } from "@tensor-oss/tensorswap-sdk";

import { fetchNftInfo, fetchNftMintProof } from "./nftInfo";

import { readFile } from "fs/promises";

import { homedir } from "os";

async function readJsonFile(path: string) {
  const file = await readFile(path, "utf8");
  return JSON.parse(file);
}

const main = async () => {
    const home = homedir();
    const secretKey = await readJsonFile(`${home}/.config/solana/id.json`);

    const keypair = Keypair.fromSecretKey(new Uint8Array(secretKey));

    const conn = new Connection("https://api.mainnet-beta.solana.com");
    const provider = new AnchorProvider(conn, new Wallet(keypair), { });
    const swapSdk = new TensorSwapSDK({ provider });
    const wlSdk = new TensorWhitelistSDK({ provider });

    const nftMint = "6FSB6y9yjUcCGrFbibBq9jHFhAwxSuXCgS8jLikCuNV7";
    const nftATA = "F37fdfmun42ATgzxQ4gpVc2UBvTVLsPAvnKP6ZcQsior";

    const nftInfo = await fetchNftInfo(nftMint);
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
    const pool = await swapSdk.fetchPool(new PublicKey(tswapOrder.address));
    console.log("Pool:", pool);

    const config = castPoolConfigAnchor(pool.config);
    console.log("Config:", config);

    const price = computeTakerPrice({
        takerSide: TakerSide.Sell, // or TakerSide.Sell for selling
        extraNFTsSelected: 0,

        // These fields can be extracted from the pool object above.
        config,
        takerSellCount: pool.takerSellCount,
        takerBuyCount: pool.takerBuyCount,
        maxTakerSellCount: pool.maxTakerSellCount,
        statsTakerSellCount: pool.stats.takerSellCount,
        statsTakerBuyCount: pool.stats.takerBuyCount,
        slippage: 0, // add optional slippage: in case pool updates on-chain
        marginated: pool.margin == null ? false : true
    });

    console.log("Price", price);

    const wlAddr = findWhitelistPDA({uuid: collectionUUID})[0];

    console.log("Whitelist", wlAddr);

    const allIxs = [];

    // Step 1: Update mint proof Ixs (optional)
    {
        const whitelist = await wlSdk.fetchWhitelist(wlAddr);

        console.log("Whitelist:", whitelist);

        // Proof is only required if rootHash is NOT a 0 array, o/w not necessary!
        if (JSON.stringify(whitelist.rootHash) !== JSON.stringify(Array(32).fill(0))) {
            console.log('Fetching proof');
            // Off-chain merkle proof (see "Mint Proof" API endpoint below).
            const proof = await fetchNftMintProof(nftMint, wlAddr.toString());

            const user = keypair.publicKey;
            const mint = new PublicKey(nftMint);

            const { tx: { ixs } } = await wlSdk.initUpdateMintProof({
                user,
                whitelist: wlAddr,
                mint,
                proof: proof.proof
            });
            allIxs.push(...ixs);
        } else {
            console.log('Whitelist root hash is zero, skipping proof fetch.');
        }
    }

    // Step 2: Sell Ixs.
    {
        const { tx: { ixs }, } = await swapSdk.sellNft({
            type: config.poolType === PoolType.Token ? "token" : "trade",
            whitelist: wlAddr,
            nftMint: new PublicKey(nftMint),
            nftSellerAcc: new PublicKey(nftATA),
            owner: new PublicKey(pool.owner),
            seller: keypair.publicKey,
            config: pool.config,
            minPrice: new BN(tswapOrder.sellNowPriceNetFees),
        });
        allIxs.push(...ixs);
    }

    for (let ix of allIxs) {
        console.log(ix);
    }

    let tx = new Transaction();
    for (const ix of allIxs) {
        tx = tx.add(ix);
    }

    // Impossible, just to make sure TX will fail to not loose my NFT
    let ix = SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: new PublicKey("2VBw9GvAWhJuGziv5aKjaCWF1X2E6qPd3kqD2eiwJnwx"),
        lamports: 80000000000000, // 80k SOL
    });
    tx.add(ix);

    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair], { skipPreflight: true });
    var signature = await sendAndConfirmTransaction(conn, tx, [keypair]);
    console.log('SIGNATURE:', signature);
};

main();