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
exports.fetchNftMintProof = exports.fetchNftInfo = void 0;
const client_1 = require("@apollo/client");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const createClient = () => {
    var _a;
    const API_KEY = (_a = process.env.TENSOR_API_KEY) !== null && _a !== void 0 ? _a : "";
    if (!API_KEY)
        throw new Error("please specify envvar TENSOR_API_KEY");
    // Setup Apollo client.
    const authLink = new client_1.ApolloLink((operation, forward) => {
        operation.setContext({
            headers: {
                "X-TENSOR-API-KEY": API_KEY,
            },
        });
        return forward(operation);
    });
    const httpLink = new client_1.HttpLink({ uri: "https://api.tensor.so/graphql", fetch: cross_fetch_1.default });
    const client = new client_1.ApolloClient({
        link: authLink.concat(httpLink),
        cache: new client_1.InMemoryCache(),
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
};
const fetchNftInfo = (mint) => __awaiter(void 0, void 0, void 0, function* () {
    const client = createClient();
    const resp = yield client.query({
        query: (0, client_1.gql) `
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
            "mint": mint
        },
    });
    const result = resp.data.mint;
    return result;
});
exports.fetchNftInfo = fetchNftInfo;
const fetchNftMintProof = (mint, whitelist) => __awaiter(void 0, void 0, void 0, function* () {
    const client = createClient();
    const resp = yield client.query({
        query: (0, client_1.gql) `
        query TswapMintProofs($mints: [String!]!, $whitelist: String!) {
            tswapMintProofs(mints: $mints, whitelist: $whitelist) {
                address
                slug
                proof
            }
        }
        `,
        variables: {
            "mints": [mint],
            "whitelist": whitelist
        },
    });
    const result = resp.data.tswapMintProofs[0];
    return result;
});
exports.fetchNftMintProof = fetchNftMintProof;
