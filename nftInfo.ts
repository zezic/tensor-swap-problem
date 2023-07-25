import { HttpLink, ApolloClient, ApolloLink, InMemoryCache, gql, NormalizedCacheObject } from "@apollo/client";
import fetch from "cross-fetch";

import { MintWithColl, TSwapMintProof } from "./src/generated/graphql"
import { PublicKey } from "@solana/web3.js";

const createClient = (): ApolloClient<NormalizedCacheObject> => {
    const API_KEY = process.env.TENSOR_API_KEY ?? "";
    if (!API_KEY) throw new Error("please specify envvar TENSOR_API_KEY");

    // Setup Apollo client.
    const authLink = new ApolloLink((operation, forward) => {
        operation.setContext({
            headers: {
            "X-TENSOR-API-KEY": API_KEY,
            },
        });
        return forward(operation);
    });
    const httpLink = new HttpLink({ uri: "https://api.tensor.so/graphql", fetch });
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: "no-cache",
            },
            watchQuery: {
                fetchPolicy: 'no-cache',
                nextFetchPolicy: 'no-cache',
            }
        },
    });
    return client;
}

const fetchNftInfo = async (mint: PublicKey): Promise<MintWithColl> => {
    const client = createClient();
    const resp = await client.query({
        query: gql`
        query Mint($mint: String!) {
            mint(mint: $mint) {
                slug
                collection {
                    id
                    statsV2 {
                        sellNowPrice
                        sellNowPriceNetFees
                    }
                }
                tswapOrders {
                    address
                    sellNowPrice
                    sellNowPriceNetFees
                    ownerAddress
                    poolType
                }
            }
        }
        `,
        variables: {
            "mint": mint.toString()
        },
    });

    const result = resp.data.mint;
    return result;
};

const fetchNftMintProof = async (mint: PublicKey, whitelist: PublicKey): Promise<TSwapMintProof> => {
    const client = createClient();
    const resp = await client.query({
        query: gql`
        query TswapMintProofs($mints: [String!]!, $whitelist: String!) {
            tswapMintProofs(mints: $mints, whitelist: $whitelist) {
                address
                slug
                proof
            }
        }
        `,
        variables: {
            "mints": [mint.toString()],
            "whitelist": whitelist.toString()
        },
    });

    const result = resp.data.tswapMintProofs[0];
    return result;
};


export { fetchNftInfo, fetchNftMintProof }