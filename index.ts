import { getAssociatedTokenAddressSync } from "@solana/spl-token";
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

    // SSS
    // const nftMint = new PublicKey("6FSB6y9yjUcCGrFbibBq9jHFhAwxSuXCgS8jLikCuNV7");

    // Toonies
    const nftMint = new PublicKey("6ZGCWMAVXupC4PDiNdZqSVdq8YQ2i2fiyXzCFdt24jEf");

    const nftATA = getAssociatedTokenAddressSync(
        nftMint,
        keypair.publicKey
    );

    const nftInfo = await fetchNftInfo(nftMint);

    nftInfo.tswapOrders.sort((a, b) => a.sellNowPriceNetFees - b.sellNowPriceNetFees);

    for (const order of nftInfo.tswapOrders) {
        console.log("Order:", order.sellNowPriceNetFees);
    }

    const tswapOrder = nftInfo.tswapOrders.pop();

    if (tswapOrder === undefined) {
        console.error("No orders");
        return;
    }

    if (nftInfo.collection === undefined || nftInfo.collection === null) {
        console.error("Can't find collection");
        return;
    }

    if (nftInfo.collection.id === undefined) {
        console.error("Collection has no id");
        return;
    }

    const collectionUUIDString = nftInfo.collection.id;

    // Remove "-" symbols from uuid, so it's within the 32 seed length limit. Additionally convert the uuid to a Uint8Array
    const collectionUUID = Buffer.from(nftInfo.collection.id.replace(/-/g, "")).toJSON().data;

    // Fetch the pool PDA for its settings.
    const pool = await swapSdk.fetchPool(new PublicKey(tswapOrder.address));

    const config = castPoolConfigAnchor(pool.config);

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

    console.log("PRICE", price.toString());

    const wlAddr = findWhitelistPDA({uuid: collectionUUID})[0];

    const allIxs = [];

    // Step 1: Update mint proof Ixs (optional)
    {
        const whitelist = await wlSdk.fetchWhitelist(wlAddr);

        // Proof is only required if rootHash is NOT a 0 array, o/w not necessary!
        if (JSON.stringify(whitelist.rootHash) !== JSON.stringify(Array(32).fill(0))) {
            console.log('Fetching proof...');
            // Off-chain merkle proof (see "Mint Proof" API endpoint below).
            const proof = await fetchNftMintProof(nftMint, wlAddr);

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

    if (config.poolType === PoolType.NFT) {
        console.error("Unsupported pool type");
        return;
    }

    const marginNr = pool.margin ? (await swapSdk.fetchMarginAccount(pool.margin)).nr : undefined;

    // Step 2: Sell Ixs.
    {
        const { tx: { ixs }, } = await swapSdk.sellNft({
            type: config.poolType === PoolType.Token ? "token" : "trade",
            whitelist: wlAddr,
            nftMint: nftMint,
            nftSellerAcc: nftATA,
            owner: pool.owner,
            seller: keypair.publicKey,
            config: pool.config,
            minPrice: new BN(price.toString()),
            marginNr,
        });
        allIxs.push(...ixs);
    }

    let tx = new Transaction();
    tx.add(...allIxs);

    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair], { skipPreflight: true });
    var signature = await sendAndConfirmTransaction(conn, tx, [keypair]);
    console.log('SIGNATURE:', signature);
};

main();