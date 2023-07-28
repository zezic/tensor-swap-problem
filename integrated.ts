import Big from "big.js";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { AnchorProvider, Wallet, BN } from "@project-serum/anchor";
import { Connection, Keypair, PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";
import { TensorSwapSDK, TensorWhitelistSDK, PoolType, castPoolConfig, PoolConfig, CurveType } from "@tensor-oss/tensorswap-sdk";

import { readFile } from "fs/promises";

import { homedir } from "os";

type NftagTensorSwapResponse = {
    order?: NftagTensorOrder;
    proof?: number[];
};

enum GqlCurveType {
  Exponential = 'EXPONENTIAL',
  Linear = 'LINEAR',
  Xyk = 'XYK'
}

const curveTypeMap = {
    [GqlCurveType.Exponential]: CurveType.Exponential,
    [GqlCurveType.Linear]: CurveType.Linear,
    [GqlCurveType.Xyk]: undefined
};

enum GqlPoolType {
  Nft = 'NFT',
  Token = 'TOKEN',
  Trade = 'TRADE'
}

const poolTypeMap = {
    [GqlPoolType.Nft]: PoolType.NFT,
    [GqlPoolType.Token]: PoolType.Token,
    [GqlPoolType.Trade]: PoolType.Trade,
};

type NftagTensorOrder = {
    address: string;
    curveType: GqlCurveType;
    delta: string;
    marginNr?: number;
    mmCompoundFees: boolean;
    mmFeeBps?: string;
    sellNowPrice?: string;
    sellNowPriceNetFees?: string;
    startingPrice: string;
    ownerAddress: string;
    poolType: GqlPoolType;
    whitelistAddress: string;
};

async function readJsonFile(path: string) {
    const file = await readFile(path, "utf8");
    return JSON.parse(file);
}

const main = async () => {
    const home = homedir();
    const secretKey = await readJsonFile(`${home}/.config/solana/id.json`);

    const keypair = Keypair.fromSecretKey(new Uint8Array(secretKey));

    const conn = new Connection("https://api.mainnet-beta.solana.com");
    const provider = new AnchorProvider(conn, new Wallet(keypair), {});
    const swapSdk = new TensorSwapSDK({ provider });
    const wlSdk = new TensorWhitelistSDK({ provider });

    // SSS
    // const nftMint = new PublicKey("6FSB6y9yjUcCGrFbibBq9jHFhAwxSuXCgS8jLikCuNV7");

    // Toonies
    const nftMint = new PublicKey("8Mwz6ctSiz2hqjdHKcX1bbCWBJHSRDFsijbH8M9TzuhG");

    const nftATA = getAssociatedTokenAddressSync(
        nftMint,
        keypair.publicKey
    );

    const response = await fetch(`http://localhost:3000/tensor_swap?mint=${nftMint}`);
    const nftagResponse: NftagTensorSwapResponse = await response.json();

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
    } else {
        console.log("Target price:", price);
    }

    const curveType = curveTypeMap[tswapOrder.curveType];
    if (curveType === undefined) {
        console.error("Unsupported curve type");
        return;
    }
    const config: PoolConfig = {
        poolType: poolTypeMap[tswapOrder.poolType],
        curveType: curveType,
        startingPrice: new Big(tswapOrder.startingPrice),
        delta: new Big(tswapOrder.delta),
        mmCompoundFees: tswapOrder.mmCompoundFees,
        mmFeeBps: tswapOrder.mmFeeBps ? parseInt(tswapOrder.mmFeeBps) : null,
    };

    const allIxs: TransactionInstruction[] = [];

    const whitelistAddr = new PublicKey(tswapOrder.whitelistAddress);

    // Step 1: Update mint proof Ixs (optional)
    {
        const whitelist = await wlSdk.fetchWhitelist(whitelistAddr);

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
            const mint = new PublicKey(nftMint);

            const { tx: { ixs } } = await wlSdk.initUpdateMintProof({
                user,
                whitelist: whitelistAddr,
                mint,
                proof: [proof],
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

    // Step 2: Sell Ixs.
    {
        const { tx: { ixs }, } = await swapSdk.sellNft({
            type: config.poolType === PoolType.Token ? "token" : "trade",
            whitelist: whitelistAddr,
            nftMint: nftMint,
            nftSellerAcc: nftATA,
            owner: new PublicKey(tswapOrder.ownerAddress),
            seller: keypair.publicKey,
            config: castPoolConfig(config),
            minPrice: new BN(price),
            marginNr: tswapOrder.marginNr,
        });
        allIxs.push(...ixs);
    }

    let tx = new Transaction();
    tx.add(...allIxs);

    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair], { skipPreflight: true });
    // var signature = await sendAndConfirmTransaction(conn, tx, [keypair]);
    // console.log('SIGNATURE:', signature);
};

main();