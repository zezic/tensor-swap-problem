export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: { input: any; output: any; }
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

export type ActiveListingPrice = {
  __typename?: 'ActiveListingPrice';
  owner?: Maybe<Scalars['String']['output']>;
  price: Scalars['Decimal']['output'];
  source: DataSource;
  tx: LinkedTransactionTv2;
  txAt: Scalars['Timestamp']['output'];
  unit: Scalars['String']['output'];
};

export type ActiveListingsCursorInputV2 = {
  /** stringified cursor. Could be object, array, number or string after parsing. */
  str: Scalars['String']['input'];
};

export type ActiveListingsCursorV2 = {
  __typename?: 'ActiveListingsCursorV2';
  /** stringified cursor. Could be object, array, number or string after parsing. */
  str: Scalars['String']['output'];
};

export type ActiveListingsFilters = {
  mintsFilter?: InputMaybe<Array<Scalars['String']['input']>>;
  nameFilter?: InputMaybe<Scalars['String']['input']>;
  ownerFilter?: InputMaybe<OwnerFilter>;
  prices?: InputMaybe<PriceFilter>;
  rarities?: InputMaybe<RarityFilter>;
  sources?: InputMaybe<Array<DataSource>>;
  traitCount?: InputMaybe<TraitCountFilter>;
  traits?: InputMaybe<Array<TraitFilter>>;
};

export type ActiveListingsPageV2 = {
  __typename?: 'ActiveListingsPageV2';
  endCursor?: Maybe<ActiveListingsCursorV2>;
  hasMore: Scalars['Boolean']['output'];
};

export type ActiveListingsPricesV2 = {
  __typename?: 'ActiveListingsPricesV2';
  maxPrice?: Maybe<ActiveListingPrice>;
  numListed: Scalars['Int']['output'];
  prices: Array<ActiveListingPrice>;
};

export enum ActiveListingsSortBy {
  LastSaleAsc = 'LastSaleAsc',
  LastSaleDesc = 'LastSaleDesc',
  ListedDesc = 'ListedDesc',
  PriceAsc = 'PriceAsc',
  PriceDesc = 'PriceDesc',
  RankHrttAsc = 'RankHrttAsc',
  RankHrttDesc = 'RankHrttDesc',
  RankStatAsc = 'RankStatAsc',
  RankStatDesc = 'RankStatDesc',
  RankTeamAsc = 'RankTeamAsc',
  RankTeamDesc = 'RankTeamDesc',
  RankTnAsc = 'RankTnAsc',
  RankTnDesc = 'RankTnDesc'
}

export type ActiveListingsV2 = {
  __typename?: 'ActiveListingsV2';
  page: ActiveListingsPageV2;
  sortBy: ActiveListingsSortBy;
  txs: Array<LinkedTransactionTv2>;
};

export type AirdropBoxes = {
  __typename?: 'AirdropBoxes';
  nftBoxCommon: Scalars['Int']['output'];
  nftBoxEpic: Scalars['Int']['output'];
  nftBoxLegendary: Scalars['Int']['output'];
  nftBoxRare: Scalars['Int']['output'];
  nftBoxUncommon: Scalars['Int']['output'];
  tokenBoxCommon: Scalars['Int']['output'];
  tokenBoxEpic: Scalars['Int']['output'];
  tokenBoxLegendary: Scalars['Int']['output'];
  tokenBoxRare: Scalars['Int']['output'];
  tokenBoxUncommon: Scalars['Int']['output'];
};

export type AirdropOne = {
  __typename?: 'AirdropOne';
  /** null if not (yet) claimed */
  claimedBoxes?: Maybe<AirdropBoxes>;
  completedAirdrop: Scalars['Boolean']['output'];
  completedBid: Scalars['Boolean']['output'];
  completedListing: Scalars['Boolean']['output'];
  eligibleSpecialBoxes: Scalars['Boolean']['output'];
  totalTensorPoints: Scalars['Int']['output'];
  volume: Scalars['Int']['output'];
};

export type AirdropTwoProfileStats = {
  __typename?: 'AirdropTwoProfileStats';
  /** This differs from loyaltyLevel on UserProfile in that it's updated async */
  loyalty: Scalars['Int']['output'];
  pts24h: Scalars['Int']['output'];
  ptsTotal: Scalars['Int']['output'];
  rank24h: Scalars['Int']['output'];
  rankTotal: Scalars['Int']['output'];
  wallet: Scalars['String']['output'];
};

export enum AirdropTwoSortBy {
  By24h = 'By24h',
  ByTotal = 'ByTotal'
}

export type AllCollections = {
  __typename?: 'AllCollections';
  collections: Array<InstrumentTv2>;
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** Whether you want to attach or detach margin */
export enum AttachDetachAction {
  Attach = 'ATTACH',
  Detach = 'DETACH'
}

export type Attribute = {
  __typename?: 'Attribute';
  trait_type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BidsCursorInputV2 = {
  /** Stringified cursor. Could be object, array, number or string after parsing. */
  str: Scalars['String']['input'];
};

export type BidsCursorV2 = {
  __typename?: 'BidsCursorV2';
  /** Stringified cursor. Could be object, array, number or string after parsing. */
  str: Scalars['String']['output'];
};

export type BidsPage = {
  __typename?: 'BidsPage';
  endCursor?: Maybe<BidsCursorV2>;
  hasMore: Scalars['Boolean']['output'];
};

export enum BidsSortBy {
  PriceAsc = 'PriceAsc',
  PriceDesc = 'PriceDesc'
}

export type CaptchaStatus = {
  __typename?: 'CaptchaStatus';
  response: CaptchaWallet;
  valid: Scalars['Boolean']['output'];
};

export type CaptchaWallet = {
  __typename?: 'CaptchaWallet';
  overrideChecks: Scalars['Boolean']['output'];
  score: Scalars['Float']['output'];
  verifiedAt: Scalars['Timestamp']['output'];
  version: Scalars['Int']['output'];
  wallet: Scalars['String']['output'];
};

export type CollInfo = {
  __typename?: 'CollInfo';
  floorPrice?: Maybe<Scalars['Decimal']['output']>;
  name: Scalars['String']['output'];
  numMints?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
};

export type CollectionFavorite = {
  __typename?: 'CollectionFavorite';
  favList: Scalars['Int']['output'];
  profileId: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionHolder = {
  __typename?: 'CollectionHolder';
  numListed: Scalars['Int']['output'];
  numOwned: Scalars['Int']['output'];
  wallet: Scalars['String']['output'];
};

export type CollectionHolderStats = {
  __typename?: 'CollectionHolderStats';
  topHolders: Array<CollectionHolder>;
  uniqueHolders: Scalars['Int']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CollectionMints = {
  __typename?: 'CollectionMints';
  mints: Array<LinkedTxMintTv2>;
  page: CollectionMintsPage;
};

export type CollectionMintsFilters = {
  listingPrices?: InputMaybe<PriceFilter>;
  /** filter for listings from specific data sources */
  listingSources?: InputMaybe<Array<DataSource>>;
  mintsFilter?: InputMaybe<Array<Scalars['String']['input']>>;
  nameFilter?: InputMaybe<Scalars['String']['input']>;
  /** filter for only NFTs that are listed for sale */
  onlyListings?: InputMaybe<Scalars['Boolean']['input']>;
  /** TODO: doesn't work for unlisted regular NFTs */
  ownerFilter?: InputMaybe<OwnerFilter>;
  rarities?: InputMaybe<RarityFilter>;
  traitCount?: InputMaybe<TraitCountFilter>;
  traits?: InputMaybe<Array<TraitFilter>>;
};

export type CollectionMintsPage = {
  __typename?: 'CollectionMintsPage';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasMore: Scalars['Boolean']['output'];
  total?: Maybe<Scalars['Int']['output']>;
};

export enum CollectionMintsSortBy {
  LastSaleAsc = 'LastSaleAsc',
  LastSaleDesc = 'LastSaleDesc',
  ListedTimeDesc = 'ListedTimeDesc',
  ListingPriceAsc = 'ListingPriceAsc',
  ListingPriceDesc = 'ListingPriceDesc',
  RankHrttAsc = 'RankHrttAsc',
  RankHrttDesc = 'RankHrttDesc',
  RankStatAsc = 'RankStatAsc',
  RankStatDesc = 'RankStatDesc',
  RankTeamAsc = 'RankTeamAsc',
  RankTeamDesc = 'RankTeamDesc',
  RankTnAsc = 'RankTnAsc',
  RankTnDesc = 'RankTnDesc'
}

export type CollectionMintsV2 = {
  __typename?: 'CollectionMintsV2';
  mints: Array<MintWithTx>;
  page: CollectionMintsV2Page;
};

export type CollectionMintsV2Page = {
  __typename?: 'CollectionMintsV2Page';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasMore: Scalars['Boolean']['output'];
};

export type CollectionStats = {
  __typename?: 'CollectionStats';
  floor1h?: Maybe<Scalars['Float']['output']>;
  floor7d?: Maybe<Scalars['Float']['output']>;
  floor24h?: Maybe<Scalars['Float']['output']>;
  floorPrice?: Maybe<Scalars['Decimal']['output']>;
  marketCap?: Maybe<Scalars['Decimal']['output']>;
  numListed: Scalars['Float']['output'];
  numMints: Scalars['Float']['output'];
  pctListed?: Maybe<Scalars['Float']['output']>;
  priceUnit: Currency;
  sales1h: Scalars['Int']['output'];
  sales7d: Scalars['Int']['output'];
  sales24h: Scalars['Int']['output'];
  volume1h: Scalars['Decimal']['output'];
  volume7d: Scalars['Decimal']['output'];
  volume24h: Scalars['Decimal']['output'];
};

export type CollectionStatsSwap = ICollectionStatsSwap & {
  __typename?: 'CollectionStatsSwap';
  buyNowPrice?: Maybe<Scalars['Decimal']['output']>;
  nftsForSale: Scalars['Float']['output'];
  priceUnit: Currency;
  sales1h: Scalars['Int']['output'];
  sales7d: Scalars['Int']['output'];
  sales24h: Scalars['Int']['output'];
  sellNowPrice?: Maybe<Scalars['Decimal']['output']>;
  solDeposited: Scalars['Decimal']['output'];
  volume1h: Scalars['Decimal']['output'];
  volume7d: Scalars['Decimal']['output'];
  volume24h: Scalars['Decimal']['output'];
};

export type CollectionStatsTSwap = ICollectionStatsSwap & {
  __typename?: 'CollectionStatsTSwap';
  buyNowPrice?: Maybe<Scalars['Decimal']['output']>;
  nftsForSale: Scalars['Float']['output'];
  numMints: Scalars['Float']['output'];
  priceUnit: Currency;
  sales1h: Scalars['Int']['output'];
  sales7d: Scalars['Int']['output'];
  sales24h: Scalars['Int']['output'];
  sellNowPrice?: Maybe<Scalars['Decimal']['output']>;
  solDeposited: Scalars['Decimal']['output'];
  volume1h: Scalars['Decimal']['output'];
  volume7d: Scalars['Decimal']['output'];
  volume24h: Scalars['Decimal']['output'];
};

export type CollectionStatsV2 = {
  __typename?: 'CollectionStatsV2';
  /** null means no listings */
  buyNowPrice?: Maybe<Scalars['Decimal']['output']>;
  /** includes fees and royalties */
  buyNowPriceNetFees?: Maybe<Scalars['Decimal']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  floor1h?: Maybe<Scalars['Float']['output']>;
  floor7d?: Maybe<Scalars['Float']['output']>;
  floor24h?: Maybe<Scalars['Float']['output']>;
  marketCap?: Maybe<Scalars['Decimal']['output']>;
  numBids: Scalars['Float']['output'];
  numListed: Scalars['Float']['output'];
  numMints: Scalars['Float']['output'];
  pctListed?: Maybe<Scalars['Float']['output']>;
  sales1h: Scalars['Int']['output'];
  sales7d: Scalars['Int']['output'];
  sales24h: Scalars['Int']['output'];
  salesAll: Scalars['Int']['output'];
  /** null means no bids */
  sellNowPrice?: Maybe<Scalars['Decimal']['output']>;
  /** includes fees and royalties */
  sellNowPriceNetFees?: Maybe<Scalars['Decimal']['output']>;
  volume1h: Scalars['Decimal']['output'];
  volume7d: Scalars['Decimal']['output'];
  volume24h: Scalars['Decimal']['output'];
  volumeAll: Scalars['Decimal']['output'];
};

export type CollectionTraitsRarities = {
  __typename?: 'CollectionTraitsRarities';
  numMints: Scalars['Int']['output'];
  /** @deprecated use traitMeta.raritySystems */
  rarityAlgos: Array<Scalars['String']['output']>;
  raritySystems: Array<RaritySystem>;
  traitActive?: Maybe<Scalars['JSON']['output']>;
  traitMeta: Scalars['JSON']['output'];
};

export type ConfirmMeAuthResponse = {
  __typename?: 'ConfirmMeAuthResponse';
  exp: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** The currency of the associated price amount(s) */
export enum Currency {
  EthWei = 'ETH_WEI',
  SolLamport = 'SOL_LAMPORT'
}

export enum CurveType {
  Exponential = 'EXPONENTIAL',
  Linear = 'LINEAR',
  Xyk = 'XYK'
}

export enum DataSource {
  Alpha = 'ALPHA',
  AuctionHouse = 'AUCTION_HOUSE',
  Bubblegum = 'BUBBLEGUM',
  Digitaleyez = 'DIGITALEYEZ',
  DigitaleyezV2 = 'DIGITALEYEZ_V2',
  Elixir = 'ELIXIR',
  ElixirComposed = 'ELIXIR_COMPOSED',
  Hadeswap = 'HADESWAP',
  Hyperspace = 'HYPERSPACE',
  Magiceden = 'MAGICEDEN',
  MagicedenAuction = 'MAGICEDEN_AUCTION',
  MagicedenV2 = 'MAGICEDEN_V2',
  Onchain = 'ONCHAIN',
  Smb = 'SMB',
  SmbV2 = 'SMB_V2',
  Solanart = 'SOLANART',
  Solsea = 'SOLSEA',
  Tcomp = 'TCOMP',
  Tensorbid = 'TENSORBID',
  Tensorswap = 'TENSORSWAP',
  TokenMetadata = 'TOKEN_METADATA',
  Yawww = 'YAWWW'
}

/** Whether you want to deposit or withdraw NFT or SOL */
export enum DepositWithdrawAction {
  Deposit = 'DEPOSIT',
  Withdraw = 'WITHDRAW'
}

export type ElixirPool = {
  __typename?: 'ElixirPool';
  address: Scalars['String']['output'];
  baseDecimals: Scalars['Float']['output'];
  baseLiquidity: Scalars['String']['output'];
  buyPrices: Array<Scalars['Float']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  pNftMint: Scalars['String']['output'];
  quoteDecimals: Scalars['Float']['output'];
  quoteLiquidity: Scalars['String']['output'];
  sellPrices: Array<Scalars['Float']['output']>;
  vaults: Array<ElixirVault>;
};

export type ElixirPoolUpdate = {
  __typename?: 'ElixirPoolUpdate';
  address: Scalars['String']['output'];
  pool?: Maybe<ElixirPool>;
};

export type ElixirVault = {
  __typename?: 'ElixirVault';
  address: Scalars['String']['output'];
  fNftMint: Scalars['String']['output'];
  mint: LinkedTxMintTv2;
  mintAta: Scalars['String']['output'];
};

export type FavMintsAllSlugs = {
  __typename?: 'FavMintsAllSlugs';
  mints: Array<MintWithColl>;
  page: FavMintsAllSlugsPage;
};

export type FavMintsAllSlugsPage = {
  __typename?: 'FavMintsAllSlugsPage';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasMore: Scalars['Boolean']['output'];
  total?: Maybe<Scalars['Int']['output']>;
};

export type FeaturedCollection = {
  __typename?: 'FeaturedCollection';
  banner: Scalars['String']['output'];
  dateExpires?: Maybe<Scalars['Timestamp']['output']>;
  dateLaunches: Scalars['Timestamp']['output'];
  discord?: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  launchpadUrl?: Maybe<Scalars['String']['output']>;
  multiplier: Scalars['Decimal']['output'];
  name: Scalars['String']['output'];
  ordinal: Scalars['Int']['output'];
  parsed?: Maybe<InstrumentTv2>;
  readyToTrade: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type FeeInfo = {
  __typename?: 'FeeInfo';
  bps: Scalars['Int']['output'];
  kind: Scalars['String']['output'];
};

export enum HSwapCurveType {
  Exponential = 'Exponential',
  Linear = 'Linear',
  Xyk = 'XYK'
}

export type HSwapModifyPairConfig = {
  delta: Scalars['Decimal']['input'];
  feeBps?: InputMaybe<Scalars['Int']['input']>;
  spotPrice: Scalars['Decimal']['input'];
};

export type HSwapNftBox = {
  __typename?: 'HSwapNftBox';
  address: Scalars['String']['output'];
  mint: LinkedTxMintTv2;
  pair: Scalars['String']['output'];
  vaultTokenAccount: Scalars['String']['output'];
};

export type HSwapPairConfig = {
  curveType: HSwapCurveType;
  delta: Scalars['Decimal']['input'];
  feeBps?: InputMaybe<Scalars['Int']['input']>;
  pairType: HSwapPairType;
  spotPrice: Scalars['Decimal']['input'];
};

export enum HSwapPairType {
  LiquidityProvision = 'LiquidityProvision',
  NftForToken = 'NftForToken',
  TokenForNft = 'TokenForNFT'
}

export type HSwapPool = {
  __typename?: 'HSwapPool';
  address: Scalars['String']['output'];
  assetReceiver: Scalars['String']['output'];
  baseSpotPrice: Scalars['BigInt']['output'];
  boxes: Array<HSwapNftBox>;
  buyOrdersQuantity: Scalars['Int']['output'];
  /** only an approx: first time this PDA was ingested */
  createdAt: Scalars['Timestamp']['output'];
  curveType: CurveType;
  delta: Scalars['BigInt']['output'];
  feeBalance?: Maybe<Scalars['Decimal']['output']>;
  feeBps: Scalars['Int']['output'];
  fundsSolOrTokenBalance: Scalars['BigInt']['output'];
  lastTransactedAt: Scalars['Timestamp']['output'];
  mathCounter: Scalars['Int']['output'];
  pairType: PoolType;
};

export type HSwapPoolUpdate = {
  __typename?: 'HSwapPoolUpdate';
  address: Scalars['String']['output'];
  pool?: Maybe<HSwapPool>;
};

export type HSwapPoolWithColl = {
  __typename?: 'HSwapPoolWithColl';
  collName: Scalars['String']['output'];
  floorPrice?: Maybe<Scalars['Decimal']['output']>;
  numMints?: Maybe<Scalars['Int']['output']>;
  pool: HSwapPool;
  slug: Scalars['String']['output'];
};

export type ICollectionStatsSwap = {
  buyNowPrice?: Maybe<Scalars['Decimal']['output']>;
  nftsForSale: Scalars['Float']['output'];
  priceUnit: Currency;
  sales1h: Scalars['Int']['output'];
  sales7d: Scalars['Int']['output'];
  sales24h: Scalars['Int']['output'];
  sellNowPrice?: Maybe<Scalars['Decimal']['output']>;
  solDeposited: Scalars['Decimal']['output'];
  volume1h: Scalars['Decimal']['output'];
  volume7d: Scalars['Decimal']['output'];
  volume24h: Scalars['Decimal']['output'];
};

export type InitEditPoolTxResponse = {
  __typename?: 'InitEditPoolTxResponse';
  pool: Scalars['String']['output'];
  txs: Array<OnchainTx>;
};

export type InitPairTxResponse = {
  __typename?: 'InitPairTxResponse';
  authAdapter: Scalars['String']['output'];
  pair: Scalars['String']['output'];
  txs: Array<OnchainTx>;
};

export type InstrumentForPortfolio = {
  __typename?: 'InstrumentForPortfolio';
  bidCount: Scalars['Float']['output'];
  compressed: Scalars['Boolean']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  favCount: Scalars['Float']['output'];
  firstListDate?: Maybe<Scalars['Timestamp']['output']>;
  hidden: Scalars['Boolean']['output'];
  /** @deprecated no longer tracked */
  hswapTVL?: Maybe<Scalars['Decimal']['output']>;
  /** if hadeswap supports this collection */
  hswapWhitelisted: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  listedCount: Scalars['Float']['output'];
  mintCount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  slugDisplay?: Maybe<Scalars['String']['output']>;
  slugMe?: Maybe<Scalars['String']['output']>;
  /** @deprecated no longer used */
  slugOs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use statsV2 */
  stats?: Maybe<CollectionStats>;
  /** @deprecated Please use statsV2 */
  statsHSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsOverall?: Maybe<CollectionStats>;
  /** @deprecated Please use statsV2 */
  statsSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsTHSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsTSwap?: Maybe<CollectionStatsTSwap>;
  statsV2?: Maybe<CollectionStatsV2>;
  /** @deprecated no longer tracked */
  swapTVL?: Maybe<Scalars['Decimal']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  /** unsupported on all Tensor protocols (eg OCP/creator disabled) */
  tensorUnsupported?: Maybe<Scalars['Boolean']['output']>;
  tensorVerified: Scalars['Boolean']['output'];
  /** if we have whitelisted this collection already for collection-wide bids + pools */
  tensorWhitelisted: Scalars['Boolean']['output'];
  /** @deprecated no longer tracked */
  thswapTVL?: Maybe<Scalars['Decimal']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  traits?: Maybe<CollectionTraitsRarities>;
  /** @deprecated no longer tracked */
  tswapTVL?: Maybe<Scalars['Decimal']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type InstrumentTv2 = {
  __typename?: 'InstrumentTV2';
  compressed: Scalars['Boolean']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  firstListDate?: Maybe<Scalars['Timestamp']['output']>;
  hidden: Scalars['Boolean']['output'];
  /** @deprecated no longer tracked */
  hswapTVL?: Maybe<Scalars['Decimal']['output']>;
  /** if hadeswap supports this collection */
  hswapWhitelisted: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  slugDisplay?: Maybe<Scalars['String']['output']>;
  slugMe?: Maybe<Scalars['String']['output']>;
  /** @deprecated no longer used */
  slugOs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use statsV2 */
  stats?: Maybe<CollectionStats>;
  /** @deprecated Please use statsV2 */
  statsHSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsOverall?: Maybe<CollectionStats>;
  /** @deprecated Please use statsV2 */
  statsSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsTHSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsTSwap?: Maybe<CollectionStatsTSwap>;
  statsV2?: Maybe<CollectionStatsV2>;
  /** @deprecated no longer tracked */
  swapTVL?: Maybe<Scalars['Decimal']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  /** unsupported on all Tensor protocols (eg OCP/creator disabled) */
  tensorUnsupported?: Maybe<Scalars['Boolean']['output']>;
  tensorVerified: Scalars['Boolean']['output'];
  /** if we have whitelisted this collection already for collection-wide bids + pools */
  tensorWhitelisted: Scalars['Boolean']['output'];
  /** @deprecated no longer tracked */
  thswapTVL?: Maybe<Scalars['Decimal']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  traits?: Maybe<CollectionTraitsRarities>;
  /** @deprecated no longer tracked */
  tswapTVL?: Maybe<Scalars['Decimal']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type InstrumentWithMints = {
  __typename?: 'InstrumentWithMints';
  compressed: Scalars['Boolean']['output'];
  createdAt: Scalars['Timestamp']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discord?: Maybe<Scalars['String']['output']>;
  firstListDate?: Maybe<Scalars['Timestamp']['output']>;
  hidden: Scalars['Boolean']['output'];
  /** @deprecated no longer tracked */
  hswapTVL?: Maybe<Scalars['Decimal']['output']>;
  /** if hadeswap supports this collection */
  hswapWhitelisted: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  mintCount: Scalars['Float']['output'];
  mints?: Maybe<Array<MintWithColl>>;
  name: Scalars['String']['output'];
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  slugDisplay?: Maybe<Scalars['String']['output']>;
  slugMe?: Maybe<Scalars['String']['output']>;
  /** @deprecated no longer used */
  slugOs?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use statsV2 */
  stats?: Maybe<CollectionStats>;
  /** @deprecated Please use statsV2 */
  statsHSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsOverall?: Maybe<CollectionStats>;
  /** @deprecated Please use statsV2 */
  statsSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsTHSwap?: Maybe<CollectionStatsSwap>;
  /** @deprecated Please use statsV2 */
  statsTSwap?: Maybe<CollectionStatsTSwap>;
  statsV2?: Maybe<CollectionStatsV2>;
  /** @deprecated no longer tracked */
  swapTVL?: Maybe<Scalars['Decimal']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  /** unsupported on all Tensor protocols (eg OCP/creator disabled) */
  tensorUnsupported?: Maybe<Scalars['Boolean']['output']>;
  tensorVerified: Scalars['Boolean']['output'];
  /** if we have whitelisted this collection already for collection-wide bids + pools */
  tensorWhitelisted: Scalars['Boolean']['output'];
  /** @deprecated no longer tracked */
  thswapTVL?: Maybe<Scalars['Decimal']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  traits?: Maybe<CollectionTraitsRarities>;
  /** @deprecated no longer tracked */
  tswapTVL?: Maybe<Scalars['Decimal']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type LastSale = TLastSale & {
  __typename?: 'LastSale';
  price: Scalars['Decimal']['output'];
  priceUnit: Currency;
  txAt: Scalars['Timestamp']['output'];
};

export type LinkedTransactionMintWithColl = {
  __typename?: 'LinkedTransactionMintWithColl';
  mint: MintWithColl;
  tx: ParsedTransaction;
};

export type LinkedTransactionTv2 = {
  __typename?: 'LinkedTransactionTV2';
  mint: LinkedTxMintTv2;
  tx: ParsedTransaction;
};

export type LinkedTxMintTv2 = TLinkedTxMintTv2 & {
  __typename?: 'LinkedTxMintTV2';
  accState?: Maybe<Scalars['String']['output']>;
  animationUri?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  compressed: Scalars['Boolean']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  lastSale?: Maybe<LastSale>;
  metadataFetchedAt?: Maybe<Scalars['Timestamp']['output']>;
  metadataUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  onchainId: Scalars['String']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  rarityRankHR?: Maybe<Scalars['Int']['output']>;
  rarityRankStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTN?: Maybe<Scalars['Int']['output']>;
  rarityRankTT?: Maybe<Scalars['Int']['output']>;
  rarityRankTTCustom?: Maybe<Scalars['Int']['output']>;
  rarityRankTTStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTeam?: Maybe<Scalars['Int']['output']>;
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  tokenEdition?: Maybe<Scalars['Int']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  verifiedCollection?: Maybe<Scalars['String']['output']>;
};

export type MeWalletProfile = {
  __typename?: 'MEWalletProfile';
  meVerified: Scalars['Boolean']['output'];
  wallet: Scalars['String']['output'];
};

export type MadBox = {
  __typename?: 'MadBox';
  entries: Scalars['Int']['output'];
  from: Scalars['Timestamp']['output'];
  to: Scalars['Timestamp']['output'];
  week: Scalars['Int']['output'];
  /** if null, means winners havent't been chosen yet */
  winner?: Maybe<Scalars['Boolean']['output']>;
};

export type MintBid = {
  __typename?: 'MintBid';
  bidder?: Maybe<Scalars['String']['output']>;
  expiry?: Maybe<Scalars['Timestamp']['output']>;
  margin?: Maybe<Scalars['String']['output']>;
  mint: MintWithColl;
  mp: SupportedMarketplace;
  price: Scalars['Decimal']['output'];
  validFrom?: Maybe<Scalars['Timestamp']['output']>;
};

export type MintFavorite = {
  __typename?: 'MintFavorite';
  favList: Scalars['Int']['output'];
  mint: Scalars['String']['output'];
  profileId: Scalars['String']['output'];
};

export type MintV2 = {
  __typename?: 'MintV2';
  accState?: Maybe<Scalars['String']['output']>;
  animationUri?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<Attribute>>;
  compressed: Scalars['Boolean']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  lastSale?: Maybe<LastSale>;
  metadataFetchedAt?: Maybe<Scalars['Timestamp']['output']>;
  metadataUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  onchainId: Scalars['String']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  rarityRankHR?: Maybe<Scalars['Int']['output']>;
  rarityRankStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTN?: Maybe<Scalars['Int']['output']>;
  rarityRankTT?: Maybe<Scalars['Int']['output']>;
  rarityRankTTCustom?: Maybe<Scalars['Int']['output']>;
  rarityRankTTStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTeam?: Maybe<Scalars['Int']['output']>;
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  tokenEdition?: Maybe<Scalars['Int']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  verifiedCollection?: Maybe<Scalars['String']['output']>;
};

export type MintWithColl = TLinkedTxMintTv2 & {
  __typename?: 'MintWithColl';
  accState?: Maybe<Scalars['String']['output']>;
  activeListings: Array<LinkedTransactionTv2>;
  animationUri?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  collId: Scalars['String']['output'];
  collName: Scalars['String']['output'];
  collection?: Maybe<InstrumentTv2>;
  compressed: Scalars['Boolean']['output'];
  hswapOrders: Array<HSwapPool>;
  imageUri?: Maybe<Scalars['String']['output']>;
  lastSale?: Maybe<LastSale>;
  metadataFetchedAt?: Maybe<Scalars['Timestamp']['output']>;
  metadataUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numMints?: Maybe<Scalars['Int']['output']>;
  onchainId: Scalars['String']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  rarityRankHR?: Maybe<Scalars['Int']['output']>;
  rarityRankStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTN?: Maybe<Scalars['Int']['output']>;
  rarityRankTT?: Maybe<Scalars['Int']['output']>;
  rarityRankTTCustom?: Maybe<Scalars['Int']['output']>;
  rarityRankTTStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTeam?: Maybe<Scalars['Int']['output']>;
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  slugDisplay?: Maybe<Scalars['String']['output']>;
  tcompBids: Array<TCompBid>;
  tensorBids?: Maybe<Array<MintBid>>;
  tokenEdition?: Maybe<Scalars['Int']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  tswapOrders: Array<TSwapPool>;
  verifiedCollection?: Maybe<Scalars['String']['output']>;
};


export type MintWithCollTensorBidsArgs = {
  bestSellNowOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortBy>;
};


export type MintWithCollTswapOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortBy>;
};

export type MintWithTx = {
  __typename?: 'MintWithTx';
  mint: MintV2;
  tx?: Maybe<ParsedTransaction>;
};

export type MpFees = {
  __typename?: 'MpFees';
  makerFeeBps: Scalars['Float']['output'];
  mp: SupportedMarketplace;
  takerFeeBps: Scalars['Float']['output'];
  takerRoyalties: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFavCollection: Scalars['String']['output'];
  addFavMint: Scalars['String']['output'];
  addFavWallet: Scalars['String']['output'];
  claimAirdropOne: UserProfile;
  discordAuthenticate: UserProfile;
  discordVerifyJoin?: Maybe<UserProfile>;
  emailVerifyBegin: UserProfile;
  emailVerifyComplete: UserProfile;
  linkUserProfileV2?: Maybe<UserProfile>;
  removeFavCollection: Scalars['String']['output'];
  removeFavMint: Scalars['String']['output'];
  removeFavWallet: Scalars['String']['output'];
  sendUserTransaction: Scalars['String']['output'];
  setBidNotifMinPctFloor: Scalars['Int']['output'];
  twitterApiV1Authenticate: UserProfile;
  twitterApiV1VerifyFollow?: Maybe<UserProfile>;
  twitterApiV2Authenticate: UserProfile;
  unlinkUserProfileV2?: Maybe<UserProfile>;
  updateUserProfile: UserProfile;
  verifyCaptcha: CaptchaStatus;
  verifyCreateUserProfileV2: UserProfileWithJwtV2;
};


export type MutationAddFavCollectionArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type MutationAddFavMintArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  mint: Scalars['String']['input'];
};


export type MutationAddFavWalletArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationClaimAirdropOneArgs = {
  jwt: Scalars['String']['input'];
};


export type MutationDiscordAuthenticateArgs = {
  code: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationDiscordVerifyJoinArgs = {
  jwt: Scalars['String']['input'];
};


export type MutationEmailVerifyBeginArgs = {
  domain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
};


export type MutationEmailVerifyCompleteArgs = {
  code: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
};


export type MutationLinkUserProfileV2Args = {
  jwt: Scalars['String']['input'];
  lastValidBlockHeight?: InputMaybe<Scalars['Int']['input']>;
  memoTx?: InputMaybe<Array<Scalars['Int']['input']>>;
  signatureBase58?: InputMaybe<Scalars['String']['input']>;
  wallet: Scalars['String']['input'];
};


export type MutationRemoveFavCollectionArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type MutationRemoveFavMintArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  mint: Scalars['String']['input'];
};


export type MutationRemoveFavWalletArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationSendUserTransactionArgs = {
  action: Scalars['String']['input'];
  amounts?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  data: UserTxDataInput;
  lastValidBlockHeight?: InputMaybe<Scalars['Int']['input']>;
  mints?: InputMaybe<Array<Scalars['String']['input']>>;
  mp: SupportedMarketplace;
  poolAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  serializedTx: Array<Scalars['Int']['input']>;
  txMpMetadata?: InputMaybe<Scalars['JSON']['input']>;
  txVersion?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type MutationSetBidNotifMinPctFloorArgs = {
  jwt: Scalars['String']['input'];
  minPctFloor: Scalars['Int']['input'];
};


export type MutationTwitterApiV1AuthenticateArgs = {
  jwt: Scalars['String']['input'];
  oauth_token: Scalars['String']['input'];
  oauth_verifier: Scalars['String']['input'];
};


export type MutationTwitterApiV1VerifyFollowArgs = {
  jwt: Scalars['String']['input'];
};


export type MutationTwitterApiV2AuthenticateArgs = {
  code: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationUnlinkUserProfileV2Args = {
  jwt: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationUpdateUserProfileArgs = {
  jwt: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  wallet: Scalars['String']['input'];
};


export type MutationVerifyCaptchaArgs = {
  signatureBase58: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationVerifyCreateUserProfileV2Args = {
  lastValidBlockHeight?: InputMaybe<Scalars['Int']['input']>;
  memoTx?: InputMaybe<Array<Scalars['Int']['input']>>;
  signatureBase58?: InputMaybe<Scalars['String']['input']>;
  wallet: Scalars['String']['input'];
};

export type OnchainTx = {
  __typename?: 'OnchainTx';
  lastValidBlockHeight?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  /** only present if fits into size */
  tx?: Maybe<Scalars['Byte']['output']>;
  txV0: Scalars['Byte']['output'];
};

export enum OrderSortBy {
  SellNowPriceDesc = 'SellNowPriceDesc'
}

export type OverallStatsSwap = {
  __typename?: 'OverallStatsSwap';
  nftsForSale: Scalars['Float']['output'];
  priceUnit: Currency;
  sales1h: Scalars['Int']['output'];
  sales7d: Scalars['Int']['output'];
  sales24h: Scalars['Int']['output'];
  solDeposited: Scalars['Decimal']['output'];
  volume1h: Scalars['Decimal']['output'];
  volume7d: Scalars['Decimal']['output'];
  volume24h: Scalars['Decimal']['output'];
};

export type OwnerFilter = {
  exclude?: InputMaybe<Array<Scalars['String']['input']>>;
  include?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PaginatedTransactions = {
  __typename?: 'PaginatedTransactions';
  page: TransactionsPage;
  txs: Array<LinkedTransactionTv2>;
};

export type PaginatedTransactionsWithColl = {
  __typename?: 'PaginatedTransactionsWithColl';
  page: TransactionsPage;
  txs: Array<LinkedTransactionMintWithColl>;
};

export type PaginatedUserTransactions = {
  __typename?: 'PaginatedUserTransactions';
  page: TransactionsPage;
  txs: Array<UserTransaction>;
};

export type ParsedTransaction = {
  __typename?: 'ParsedTransaction';
  blockNumber: Scalars['BigInt']['output'];
  buyerId?: Maybe<Scalars['String']['output']>;
  grossAmount?: Maybe<Scalars['Decimal']['output']>;
  grossAmountUnit?: Maybe<Scalars['String']['output']>;
  keyVersion: Scalars['Float']['output'];
  listingEnd?: Maybe<Scalars['Timestamp']['output']>;
  mintOnchainId: Scalars['String']['output'];
  poolOnchainId?: Maybe<Scalars['String']['output']>;
  sellerId?: Maybe<Scalars['String']['output']>;
  source: DataSource;
  txAt: Scalars['Timestamp']['output'];
  txId: Scalars['String']['output'];
  txKey: Scalars['String']['output'];
  txMetadata?: Maybe<TxMetadata>;
  txType: TransactionType;
};

export type PoolConfig = {
  curveType: CurveType;
  delta: Scalars['Decimal']['input'];
  mmCompoundFees?: InputMaybe<Scalars['Boolean']['input']>;
  mmFeeBps?: InputMaybe<Scalars['Int']['input']>;
  poolType: PoolType;
  startingPrice: Scalars['Decimal']['input'];
};

export enum PoolType {
  Nft = 'NFT',
  Token = 'TOKEN',
  Trade = 'TRADE'
}

export type PriceFilter = {
  max?: InputMaybe<Scalars['Decimal']['input']>;
  min?: InputMaybe<Scalars['Decimal']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns the lowest priced active listing for each mint in the collection. `filters.source` is ignored. */
  activeListingsPricesV2: ActiveListingsPricesV2;
  activeListingsV2: ActiveListingsV2;
  airdropTwoLeaderboard: Array<AirdropTwoProfileStats>;
  /** Only available in API mode! */
  allCollections: AllCollections;
  allMeBids: Array<MintBid>;
  /** Fetches all NFT transactions for wallet, listing AND swap. */
  allUserTransactionsV2: PaginatedTransactionsWithColl;
  bidTx: TxResponse;
  cancelBidTx: TxResponse;
  captchaStatus?: Maybe<CaptchaStatus>;
  collectionHolderStats?: Maybe<CollectionHolderStats>;
  /** @deprecated Use collectionMintsV2 instead. */
  collectionMints: CollectionMints;
  collectionMintsV2: CollectionMintsV2;
  discordRedirectUrl: Scalars['String']['output'];
  elixirBuyNftTx: TxResponse;
  elixirOrderTransactions: PaginatedTransactions;
  elixirOrders: Array<ElixirPool>;
  elixirSellNftTx: TxResponse;
  favMintsAllSlugs: FavMintsAllSlugs;
  favMintsBySlug: Array<MintFavorite>;
  featuredCollections: Array<FeaturedCollection>;
  getMeAuth?: Maybe<ConfirmMeAuthResponse>;
  getMemoTxToSign: TxResponse;
  getMessageToSign: Scalars['String']['output'];
  globalVol?: Maybe<Scalars['String']['output']>;
  hswapBuyNftTx: TxResponse;
  hswapClosePairTx: TxResponse;
  /** @deprecated see hswapDepositWithdrawBuyOrdersTx and hswapDepositWithdrawSellOrdersTx */
  hswapDepositWithdrawBalancedLiquidityTx: TxResponse;
  hswapDepositWithdrawBuyOrdersTx: TxResponse;
  hswapDepositWithdrawNftTx: TxResponse;
  hswapDepositWithdrawSellOrderTx: TxResponse;
  hswapDepositWithdrawSolTx: TxResponse;
  hswapExchangeNftTx: TxResponse;
  hswapInitPairTx: InitPairTxResponse;
  hswapModifyPairTx: TxResponse;
  hswapOrderTransactions: PaginatedTransactions;
  hswapOrders: Array<HSwapPool>;
  hswapSellNftTx: TxResponse;
  /**
   * This withdraws 2 buy orders worth of SOL at a time from an LP pair.
   * @deprecated see hswapDepositWithdrawBuyOrdersTx
   */
  hswapWithdrawBuyLiquidityTx: TxResponse;
  hswapWithdrawFeesTx: TxResponse;
  /**
   * This withdraws 2 NFTs at a time from an LP pair.
   * @deprecated see hswapDepositWithdrawSellOrdersTx
   */
  hswapWithdrawSellLiquidityTx: TxResponse;
  hyperspaceBuyNftTx: TxResponse;
  instrumentTV2?: Maybe<InstrumentTv2>;
  /** returns inventory info (unverified mints will be under the catch-all UNVERIFIED collection) */
  inventoryBySlug: Array<InstrumentWithMints>;
  meAuthEnabled: Scalars['Boolean']['output'];
  meBids: Array<MintBid>;
  meBuyNftTx: TxResponse;
  meDelistNftTx: TxResponse;
  /** returns mint with collection details (unverified and verified collections included) */
  mint?: Maybe<MintWithColl>;
  mintList: Array<Scalars['String']['output']>;
  /** @deprecated Use mintList instead. */
  mintListTSwap: Array<Scalars['String']['output']>;
  mintTensorBids: Array<MintBid>;
  mintTransactions: PaginatedTransactions;
  /** returns all mints with collection details (unverified and verified collections included) */
  mints: Array<MintWithColl>;
  mpFees: Array<MpFees>;
  overallStatsTSwap?: Maybe<OverallStatsSwap>;
  recentTransactions: PaginatedTransactions;
  serviceStatuses: Array<ServiceStatus>;
  solanaTps: Scalars['Int']['output'];
  solanartBuyNftTx: TxResponse;
  takeBidTx: TxResponse;
  tcompBidTransactions: PaginatedTransactions;
  tcompBidTx: TxResponse;
  tcompBids: Array<TCompBid>;
  tcompBuyTx: TxResponse;
  tcompCancelBidTx: TxResponse;
  tcompCancelCollBidTx: TxResponse;
  tcompDelistTx: TxResponse;
  tcompEditBidTx: TxResponse;
  tcompEditTx: TxResponse;
  tcompListTx: TxResponse;
  tcompTakeBidTx: TxResponse;
  tcompTransferTx: TxResponse;
  traits?: Maybe<CollectionTraitsRarities>;
  tswapAttachPoolMarginAccountTx: TxResponse;
  tswapBuyNftTx: TxResponse;
  tswapBuySingleListingTx: TxResponse;
  tswapCloseMarginAccountTx: TxResponse;
  tswapClosePoolTx: TxResponse;
  tswapDelistNftTx: TxResponse;
  tswapDepositWithdrawMarginAccountTx: TxResponse;
  /** This differs from the non-Raw version by not requiring our backend to have indexed the pool address */
  tswapDepositWithdrawNftRawTx: TxResponse;
  tswapDepositWithdrawNftTx: TxResponse;
  /** This differs from the non-Raw version by not requiring our backend to have indexed the pool address */
  tswapDepositWithdrawSolRawTx: TxResponse;
  tswapDepositWithdrawSolTx: TxResponse;
  tswapDetachPoolMarginAccountTx: TxResponse;
  tswapEditPoolTx: InitEditPoolTxResponse;
  tswapEditSingleListingTx: TxResponse;
  tswapExchangeNftTx: TxResponse;
  tswapInitMarginAccountTx: TxResponse;
  tswapInitPoolTx: InitEditPoolTxResponse;
  tswapInitUpdateProofTx: TxResponse;
  tswapListNftTx: TxResponse;
  tswapMarginAccounts: Array<TSwapMarginAccount>;
  tswapMintProofs: Array<TSwapMintProof>;
  tswapOrderTransactions: PaginatedTransactions;
  tswapOrders: Array<TSwapPool>;
  tswapSellNftTx: TxResponse;
  tswapWhitelist?: Maybe<TSwapWhitelist>;
  tswapWithdrawMmFeeTx: TxResponse;
  twitterApiV1RedirectUrl: Scalars['String']['output'];
  twitterApiV2RedirectUrl: Scalars['String']['output'];
  userActiveListingsV2: UserActiveListingsV2;
  userEscrowedBidCount: Scalars['Float']['output'];
  userHswapOrders: Array<HSwapPoolWithColl>;
  userPortfolioBids: Array<MintBid>;
  userPortfolioCollections: Array<InstrumentForPortfolio>;
  userProfileV2?: Maybe<UserProfile>;
  userSentTransactionStats: UserSentTransactionStats;
  /** Fetches transactions for wallet that were sent through Tensor. */
  userSentTransactions: PaginatedUserTransactions;
  userTcompBids: Array<TCompBidWithColl>;
  /** @deprecated use `userTensorBidsV2` instead */
  userTensorBids: Array<MintBid>;
  userTensorBidsV2: TensorBidsV2;
  userTswapOrders: Array<TSwapPoolWithColl>;
  walletProfile?: Maybe<MeWalletProfile>;
};


export type QueryActiveListingsPricesV2Args = {
  filters?: InputMaybe<ActiveListingsFilters>;
  slug: Scalars['String']['input'];
};


export type QueryActiveListingsV2Args = {
  cursor?: InputMaybe<ActiveListingsCursorInputV2>;
  filters?: InputMaybe<ActiveListingsFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  sortBy: ActiveListingsSortBy;
};


export type QueryAirdropTwoLeaderboardArgs = {
  sortBy: AirdropTwoSortBy;
};


export type QueryAllCollectionsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<Scalars['String']['input']>>;
  slugsDisplay?: InputMaybe<Array<Scalars['String']['input']>>;
  slugsMe?: InputMaybe<Array<Scalars['String']['input']>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllMeBidsArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryAllUserTransactionsV2Args = {
  cursor?: InputMaybe<TransactionsCursorInput>;
  filters?: InputMaybe<TransactionsFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  wallets: Array<Scalars['String']['input']>;
};


export type QueryBidTxArgs = {
  bidder: Scalars['String']['input'];
  expireIn?: InputMaybe<Scalars['Float']['input']>;
  marginNr?: InputMaybe<Scalars['Float']['input']>;
  mint: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
};


export type QueryCancelBidTxArgs = {
  bidder: Scalars['String']['input'];
  mint: Scalars['String']['input'];
};


export type QueryCaptchaStatusArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryCollectionHolderStatsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionMintsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<CollectionMintsFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  sortBy: CollectionMintsSortBy;
};


export type QueryCollectionMintsV2Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CollectionMintsFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  sortBy: CollectionMintsSortBy;
};


export type QueryDiscordRedirectUrlArgs = {
  callbackUrl: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
};


export type QueryElixirBuyNftTxArgs = {
  buyer: Scalars['String']['input'];
  maxLamports: Scalars['String']['input'];
  mint: Scalars['String']['input'];
};


export type QueryElixirOrderTransactionsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<TransactionsCursorInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryElixirOrdersArgs = {
  slug: Scalars['String']['input'];
};


export type QueryElixirSellNftTxArgs = {
  minLamports: Scalars['String']['input'];
  mint: Scalars['String']['input'];
  seller: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type QueryFavMintsAllSlugsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFavMintsBySlugArgs = {
  favList?: InputMaybe<Scalars['Int']['input']>;
  jwt: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type QueryGetMeAuthArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryGetMemoTxToSignArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryGetMessageToSignArgs = {
  msgType: SignMsgType;
  wallet: Scalars['String']['input'];
};


export type QueryHswapBuyNftTxArgs = {
  buyer: Scalars['String']['input'];
  mathCounter?: InputMaybe<Scalars['Float']['input']>;
  maxPriceLamports: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHswapClosePairTxArgs = {
  pair: Scalars['String']['input'];
};


export type QueryHswapDepositWithdrawBalancedLiquidityTxArgs = {
  action: DepositWithdrawAction;
  authAdapter?: InputMaybe<Scalars['String']['input']>;
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHswapDepositWithdrawBuyOrdersTxArgs = {
  action: DepositWithdrawAction;
  authAdapter?: InputMaybe<Scalars['String']['input']>;
  buyOrders: Scalars['Int']['input'];
  owner: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHswapDepositWithdrawNftTxArgs = {
  action: DepositWithdrawAction;
  authAdapter?: InputMaybe<Scalars['String']['input']>;
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHswapDepositWithdrawSellOrderTxArgs = {
  action: DepositWithdrawAction;
  authAdapter?: InputMaybe<Scalars['String']['input']>;
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHswapDepositWithdrawSolTxArgs = {
  action: DepositWithdrawAction;
  authAdapter?: InputMaybe<Scalars['String']['input']>;
  buyOrdersQuantity: Scalars['Int']['input'];
  owner: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHswapExchangeNftTxArgs = {
  maxPriceLamports: Scalars['Decimal']['input'];
  minPriceLamports: Scalars['Decimal']['input'];
  mintToBuy: Scalars['String']['input'];
  mintToSell: Scalars['String']['input'];
  pair: Scalars['String']['input'];
  taker: Scalars['String']['input'];
};


export type QueryHswapInitPairTxArgs = {
  authKpSecretBase64?: InputMaybe<Scalars['String']['input']>;
  config: HSwapPairConfig;
  owner: Scalars['String']['input'];
  pairKpSecretBase64?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryHswapModifyPairTxArgs = {
  config: HSwapModifyPairConfig;
  pair: Scalars['String']['input'];
};


export type QueryHswapOrderTransactionsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<TransactionsCursorInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHswapOrdersArgs = {
  owner?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryHswapSellNftTxArgs = {
  mathCounter?: InputMaybe<Scalars['Float']['input']>;
  minPriceLamports: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  pair: Scalars['String']['input'];
  seller: Scalars['String']['input'];
};


export type QueryHswapWithdrawBuyLiquidityTxArgs = {
  pair: Scalars['String']['input'];
};


export type QueryHswapWithdrawFeesTxArgs = {
  pair: Scalars['String']['input'];
};


export type QueryHswapWithdrawSellLiquidityTxArgs = {
  mint1: Scalars['String']['input'];
  mint2: Scalars['String']['input'];
  pair: Scalars['String']['input'];
};


export type QueryHyperspaceBuyNftTxArgs = {
  buyer: Scalars['String']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyBps?: InputMaybe<Scalars['Int']['input']>;
  priceLamports: Scalars['Decimal']['input'];
  seller?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInstrumentTv2Args = {
  slug: Scalars['String']['input'];
};


export type QueryInventoryBySlugArgs = {
  includeCompressed?: InputMaybe<Scalars['Boolean']['input']>;
  includeFrozen?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnverified?: InputMaybe<Scalars['Boolean']['input']>;
  owner: Scalars['String']['input'];
  slugsToInflate?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryMeBidsArgs = {
  slug: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type QueryMeBuyNftTxArgs = {
  buyer: Scalars['String']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  priceLamports: Scalars['Decimal']['input'];
  seller?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMeDelistNftTxArgs = {
  mint: Scalars['String']['input'];
  priceLamports: Scalars['Decimal']['input'];
  seller: Scalars['String']['input'];
};


export type QueryMintArgs = {
  mint: Scalars['String']['input'];
};


export type QueryMintListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryMintListTSwapArgs = {
  slug: Scalars['String']['input'];
};


export type QueryMintTensorBidsArgs = {
  maxCount?: InputMaybe<Scalars['Float']['input']>;
  mint: Scalars['String']['input'];
};


export type QueryMintTransactionsArgs = {
  cursor?: InputMaybe<TransactionsCursorInput>;
  filters?: InputMaybe<TransactionsFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mint: Scalars['String']['input'];
};


export type QueryMintsArgs = {
  tokenMints: Array<Scalars['String']['input']>;
};


export type QueryMpFeesArgs = {
  owner?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRecentTransactionsArgs = {
  cursor?: InputMaybe<TransactionsCursorInput>;
  filters?: InputMaybe<TransactionsFilters>;
  keepLatestListDelistOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
};


export type QuerySolanartBuyNftTxArgs = {
  buyer: Scalars['String']['input'];
  mint: Scalars['String']['input'];
  priceLamports: Scalars['Decimal']['input'];
  seller: Scalars['String']['input'];
};


export type QueryTakeBidTxArgs = {
  bidder: Scalars['String']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Decimal']['input'];
  seller: Scalars['String']['input'];
};


export type QueryTcompBidTransactionsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<TransactionsCursorInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTcompBidTxArgs = {
  depositLamports?: InputMaybe<Scalars['Decimal']['input']>;
  expireIn?: InputMaybe<Scalars['Float']['input']>;
  field?: InputMaybe<TCompField>;
  fieldId?: InputMaybe<Scalars['String']['input']>;
  marginNr?: InputMaybe<Scalars['Float']['input']>;
  owner: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
  privateTaker?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<TCompTarget>;
  targetId?: InputMaybe<Scalars['String']['input']>;
  topUpMarginWhenBidding?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTcompBidsArgs = {
  filters?: InputMaybe<TCompBidsFilters>;
  owner?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryTcompBuyTxArgs = {
  buyer: Scalars['String']['input'];
  maxPrice: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  owner: Scalars['String']['input'];
  payer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTcompCancelBidTxArgs = {
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
};


export type QueryTcompCancelCollBidTxArgs = {
  bidStateAddress: Scalars['String']['input'];
};


export type QueryTcompDelistTxArgs = {
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
};


export type QueryTcompEditBidTxArgs = {
  attachDetachMargin?: InputMaybe<AttachDetachAction>;
  bidStateAddress: Scalars['String']['input'];
  expireIn?: InputMaybe<Scalars['Float']['input']>;
  marginNr?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  privateTaker?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryTcompEditTxArgs = {
  expireIn?: InputMaybe<Scalars['Float']['input']>;
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
  privateTaker?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTcompListTxArgs = {
  delegateSigner?: InputMaybe<Scalars['Boolean']['input']>;
  expireIn?: InputMaybe<Scalars['Float']['input']>;
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  payer?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
  privateTaker?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTcompTakeBidTxArgs = {
  bidStateAddress?: InputMaybe<Scalars['String']['input']>;
  buyer?: InputMaybe<Scalars['String']['input']>;
  delegateSigner?: InputMaybe<Scalars['Boolean']['input']>;
  minPrice: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  seller: Scalars['String']['input'];
};


export type QueryTcompTransferTxArgs = {
  from: Scalars['String']['input'];
  mint: Scalars['String']['input'];
  to: Scalars['String']['input'];
};


export type QueryTraitsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTswapAttachPoolMarginAccountTxArgs = {
  config: PoolConfig;
  marginNr: Scalars['Float']['input'];
  owner: Scalars['String']['input'];
  whitelist: Scalars['String']['input'];
};


export type QueryTswapBuyNftTxArgs = {
  buyer: Scalars['String']['input'];
  maxPriceLamports: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  pool: Scalars['String']['input'];
};


export type QueryTswapBuySingleListingTxArgs = {
  buyer: Scalars['String']['input'];
  maxPrice: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  owner: Scalars['String']['input'];
};


export type QueryTswapCloseMarginAccountTxArgs = {
  marginNr: Scalars['Float']['input'];
  owner: Scalars['String']['input'];
};


export type QueryTswapClosePoolTxArgs = {
  pool: Scalars['String']['input'];
};


export type QueryTswapDelistNftTxArgs = {
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  payer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTswapDepositWithdrawMarginAccountTxArgs = {
  action: DepositWithdrawAction;
  lamports: Scalars['Decimal']['input'];
  marginNr: Scalars['Float']['input'];
  owner: Scalars['String']['input'];
};


export type QueryTswapDepositWithdrawNftRawTxArgs = {
  action: DepositWithdrawAction;
  config: PoolConfig;
  includeProof?: InputMaybe<Scalars['Boolean']['input']>;
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  whitelist: Scalars['String']['input'];
};


export type QueryTswapDepositWithdrawNftTxArgs = {
  action: DepositWithdrawAction;
  includeProof?: InputMaybe<Scalars['Boolean']['input']>;
  mint: Scalars['String']['input'];
  pool: Scalars['String']['input'];
};


export type QueryTswapDepositWithdrawSolRawTxArgs = {
  action: DepositWithdrawAction;
  config: PoolConfig;
  lamports: Scalars['Decimal']['input'];
  owner: Scalars['String']['input'];
  whitelist: Scalars['String']['input'];
};


export type QueryTswapDepositWithdrawSolTxArgs = {
  action: DepositWithdrawAction;
  lamports: Scalars['Decimal']['input'];
  pool: Scalars['String']['input'];
};


export type QueryTswapDetachPoolMarginAccountTxArgs = {
  config: PoolConfig;
  marginNr: Scalars['Float']['input'];
  owner: Scalars['String']['input'];
  whitelist: Scalars['String']['input'];
};


export type QueryTswapEditPoolTxArgs = {
  attachDetachMargin?: InputMaybe<AttachDetachAction>;
  marginNr?: InputMaybe<Scalars['Float']['input']>;
  maxTakerSellCount?: InputMaybe<Scalars['Float']['input']>;
  newConfig?: InputMaybe<PoolConfig>;
  pool: Scalars['String']['input'];
};


export type QueryTswapEditSingleListingTxArgs = {
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
};


export type QueryTswapExchangeNftTxArgs = {
  includeProof?: InputMaybe<Scalars['Boolean']['input']>;
  maxPriceLamports: Scalars['Decimal']['input'];
  minPriceLamports: Scalars['Decimal']['input'];
  mintToBuy: Scalars['String']['input'];
  mintToSell: Scalars['String']['input'];
  pool: Scalars['String']['input'];
  taker: Scalars['String']['input'];
};


export type QueryTswapInitMarginAccountTxArgs = {
  desiredNr?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  owner: Scalars['String']['input'];
};


export type QueryTswapInitPoolTxArgs = {
  config: PoolConfig;
  depositLamports?: InputMaybe<Scalars['Decimal']['input']>;
  marginNr?: InputMaybe<Scalars['Float']['input']>;
  maxTakerSellCount?: InputMaybe<Scalars['Float']['input']>;
  mintForProof?: InputMaybe<Scalars['String']['input']>;
  owner: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  topUpMarginWhenBidding?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTswapInitUpdateProofTxArgs = {
  mint: Scalars['String']['input'];
  payer: Scalars['String']['input'];
  whitelist: Scalars['String']['input'];
};


export type QueryTswapListNftTxArgs = {
  mint: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  ownerTokenAccount?: InputMaybe<Scalars['String']['input']>;
  payer?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
};


export type QueryTswapMarginAccountsArgs = {
  owner: Scalars['String']['input'];
};


export type QueryTswapMintProofsArgs = {
  mints: Array<Scalars['String']['input']>;
  whitelist: Scalars['String']['input'];
};


export type QueryTswapOrderTransactionsArgs = {
  address: Scalars['String']['input'];
  cursor?: InputMaybe<TransactionsCursorInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTswapOrdersArgs = {
  owner?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryTswapSellNftTxArgs = {
  includeProof?: InputMaybe<Scalars['Boolean']['input']>;
  minPriceLamports: Scalars['Decimal']['input'];
  mint: Scalars['String']['input'];
  optionalRoyaltyPct?: InputMaybe<Scalars['Int']['input']>;
  pool: Scalars['String']['input'];
  seller: Scalars['String']['input'];
  sellerTokenAccount?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTswapWhitelistArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTswapWithdrawMmFeeTxArgs = {
  lamports: Scalars['Decimal']['input'];
  pool: Scalars['String']['input'];
};


export type QueryTwitterApiV1RedirectUrlArgs = {
  callbackUrl: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
};


export type QueryTwitterApiV2RedirectUrlArgs = {
  callbackUrl: Scalars['String']['input'];
  jwt: Scalars['String']['input'];
};


export type QueryUserActiveListingsV2Args = {
  cursor?: InputMaybe<ActiveListingsCursorInputV2>;
  includeCompressed?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortBy: ActiveListingsSortBy;
  wallets: Array<Scalars['String']['input']>;
};


export type QueryUserEscrowedBidCountArgs = {
  wallet: Scalars['String']['input'];
};


export type QueryUserHswapOrdersArgs = {
  owner: Scalars['String']['input'];
};


export type QueryUserPortfolioBidsArgs = {
  filterOutOwn?: InputMaybe<Scalars['Boolean']['input']>;
  includeCompressed?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnverified?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  wallets: Array<Scalars['String']['input']>;
};


export type QueryUserPortfolioCollectionsArgs = {
  includeCompressed?: InputMaybe<Scalars['Boolean']['input']>;
  includeUnverified?: InputMaybe<Scalars['Boolean']['input']>;
  wallets: Array<Scalars['String']['input']>;
};


export type QueryUserProfileV2Args = {
  jwt: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type QueryUserSentTransactionStatsArgs = {
  wallets: Array<Scalars['String']['input']>;
};


export type QueryUserSentTransactionsArgs = {
  cursor?: InputMaybe<TransactionsCursorInput>;
  filters?: InputMaybe<TransactionsFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  wallets: Array<Scalars['String']['input']>;
};


export type QueryUserTcompBidsArgs = {
  filters?: InputMaybe<TCompBidsFilters>;
  owner: Scalars['String']['input'];
};


export type QueryUserTensorBidsArgs = {
  filterFunded?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  wallet: Scalars['String']['input'];
};


export type QueryUserTensorBidsV2Args = {
  cursor?: InputMaybe<BidsCursorInputV2>;
  filterFunded: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nameFilter?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortBy: BidsSortBy;
  wallet: Scalars['String']['input'];
};


export type QueryUserTswapOrdersArgs = {
  owner: Scalars['String']['input'];
};


export type QueryWalletProfileArgs = {
  wallet: Scalars['String']['input'];
};

export type RarityFilter = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  system: RaritySystem;
};

export enum RaritySystem {
  Hrtt = 'Hrtt',
  Stat = 'Stat',
  Team = 'Team',
  Tn = 'Tn'
}

export type SentTransactionStats = {
  __typename?: 'SentTransactionStats';
  failed: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  success: Scalars['Int']['output'];
};

export type ServiceStatus = {
  __typename?: 'ServiceStatus';
  numConsecutive: Scalars['Int']['output'];
  service: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

/** What type of msg to sign for wallet verification */
export enum SignMsgType {
  Link = 'LINK',
  Verify = 'VERIFY'
}

export type Subscription = {
  __typename?: 'Subscription';
  elixirOrderUpdate?: Maybe<ElixirPoolUpdate>;
  hswapOrderUpdate?: Maybe<HSwapPoolUpdate>;
  newTransactionTV2?: Maybe<LinkedTransactionTv2>;
  newUserTransaction?: Maybe<UserTransaction>;
  tcompBidUpdate?: Maybe<TCompBidUpdate>;
  tcompBidUpdateAll?: Maybe<TCompBidUpdateAll>;
  tswapMarginUpdate?: Maybe<TSwapMarginUpdate>;
  tswapOrderUpdate?: Maybe<TSwapPoolUpdate>;
  tswapOrderUpdateAll?: Maybe<TSwapPoolUpdateAll>;
};


export type SubscriptionElixirOrderUpdateArgs = {
  slug: Scalars['String']['input'];
};


export type SubscriptionHswapOrderUpdateArgs = {
  slug: Scalars['String']['input'];
};


export type SubscriptionNewTransactionTv2Args = {
  slug: Scalars['String']['input'];
};


export type SubscriptionNewUserTransactionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  wallet: Scalars['String']['input'];
};


export type SubscriptionTcompBidUpdateArgs = {
  slug: Scalars['String']['input'];
};


export type SubscriptionTswapMarginUpdateArgs = {
  owner: Scalars['String']['input'];
};


export type SubscriptionTswapOrderUpdateArgs = {
  slug: Scalars['String']['input'];
};

export enum SupportedMarketplace {
  CoralCube = 'CoralCube',
  Elixir = 'Elixir',
  Fractal = 'Fractal',
  HadeSwap = 'HadeSwap',
  HyperSpace = 'HyperSpace',
  MagicEden = 'MagicEden',
  OpenSea = 'OpenSea',
  Solanart = 'Solanart',
  SolanartAh = 'SolanartAH',
  TComp = 'TComp',
  TensorSwap = 'TensorSwap',
  Yawww = 'Yawww'
}

export type TCompBid = {
  __typename?: 'TCompBid';
  address: Scalars['String']['output'];
  amount: Scalars['Decimal']['output'];
  /** only an approx: first time this PDA was ingested */
  createdAt: Scalars['Timestamp']['output'];
  field?: Maybe<TCompField>;
  fieldId?: Maybe<Scalars['String']['output']>;
  filledQuantity: Scalars['Float']['output'];
  margin?: Maybe<Scalars['String']['output']>;
  marginNr?: Maybe<Scalars['Float']['output']>;
  ownerAddress: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  solBalance: Scalars['Decimal']['output'];
  target: TCompTarget;
  targetId: Scalars['String']['output'];
};

export type TCompBidFieldFilter = {
  field: TCompField;
  fieldIds: Array<Scalars['String']['input']>;
};

export type TCompBidUpdate = {
  __typename?: 'TCompBidUpdate';
  address: Scalars['String']['output'];
  bid?: Maybe<TCompBid>;
};

export type TCompBidUpdateAll = {
  __typename?: 'TCompBidUpdateAll';
  address: Scalars['String']['output'];
  bid?: Maybe<TCompBidWithSlug>;
};

export type TCompBidWithColl = {
  __typename?: 'TCompBidWithColl';
  bid: TCompBid;
  collInfo?: Maybe<CollInfo>;
  marginNr?: Maybe<Scalars['Float']['output']>;
};

export type TCompBidWithSlug = {
  __typename?: 'TCompBidWithSlug';
  address: Scalars['String']['output'];
  amount: Scalars['Decimal']['output'];
  /** only an approx: first time this PDA was ingested */
  createdAt: Scalars['Timestamp']['output'];
  field?: Maybe<TCompField>;
  fieldId?: Maybe<Scalars['String']['output']>;
  filledQuantity: Scalars['Float']['output'];
  margin?: Maybe<Scalars['String']['output']>;
  marginNr?: Maybe<Scalars['Float']['output']>;
  ownerAddress: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  solBalance: Scalars['Decimal']['output'];
  target: TCompTarget;
  targetId: Scalars['String']['output'];
};

export type TCompBidsFilters = {
  fields?: InputMaybe<Array<TCompBidFieldFilter>>;
  /** If true, excludes any bids that specify a field. Ignores `fields` if true. */
  noFields?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TCompField {
  Name = 'NAME'
}

export enum TCompTarget {
  AssetId = 'ASSET_ID',
  Whitelist = 'WHITELIST'
}

export type TLastSale = {
  price: Scalars['Decimal']['output'];
  priceUnit: Currency;
  txAt: Scalars['Timestamp']['output'];
};

export type TLinkedTxMintTv2 = {
  accState?: Maybe<Scalars['String']['output']>;
  animationUri?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Scalars['JSON']['output']>;
  compressed: Scalars['Boolean']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  lastSale?: Maybe<LastSale>;
  metadataFetchedAt?: Maybe<Scalars['Timestamp']['output']>;
  metadataUri?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  onchainId: Scalars['String']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  rarityRankHR?: Maybe<Scalars['Int']['output']>;
  rarityRankStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTN?: Maybe<Scalars['Int']['output']>;
  rarityRankTT?: Maybe<Scalars['Int']['output']>;
  rarityRankTTCustom?: Maybe<Scalars['Int']['output']>;
  rarityRankTTStat?: Maybe<Scalars['Int']['output']>;
  rarityRankTeam?: Maybe<Scalars['Int']['output']>;
  sellRoyaltyFeeBPS?: Maybe<Scalars['Int']['output']>;
  tokenEdition?: Maybe<Scalars['Int']['output']>;
  tokenStandard?: Maybe<TokenStandard>;
  verifiedCollection?: Maybe<Scalars['String']['output']>;
};

export type TSwapMarginAccount = {
  __typename?: 'TSwapMarginAccount';
  address: Scalars['String']['output'];
  balance: Scalars['BigInt']['output'];
  createdAt: Scalars['Timestamp']['output'];
  currentActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nr: Scalars['Int']['output'];
  owner: Scalars['String']['output'];
  pendingActive: Scalars['Boolean']['output'];
  poolsAttached: Scalars['Int']['output'];
  slot: Scalars['BigInt']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type TSwapMarginUpdate = {
  __typename?: 'TSwapMarginUpdate';
  address: Scalars['String']['output'];
  margin?: Maybe<TSwapMarginAccount>;
};

export type TSwapMintProof = {
  __typename?: 'TSwapMintProof';
  address: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  proof: Array<Scalars['Byte']['output']>;
  rootHash: Scalars['Byte']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type TSwapPool = {
  __typename?: 'TSwapPool';
  address: Scalars['String']['output'];
  balance: Scalars['BigInt']['output'];
  buyNowPrice?: Maybe<Scalars['Decimal']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  createdUnix: Scalars['Timestamp']['output'];
  currentActive: Scalars['Boolean']['output'];
  curveType: CurveType;
  delta: Scalars['BigInt']['output'];
  /** Only present when queried with tswapOrders for MintWithColl */
  feeInfos?: Maybe<Array<FeeInfo>>;
  frozenAmount?: Maybe<Scalars['BigInt']['output']>;
  frozenTime?: Maybe<Scalars['Timestamp']['output']>;
  isCosigned: Scalars['Boolean']['output'];
  lastTransactedAt?: Maybe<Scalars['Timestamp']['output']>;
  margin?: Maybe<Scalars['String']['output']>;
  marginNr?: Maybe<Scalars['Float']['output']>;
  maxTakerSellCount: Scalars['Int']['output'];
  mmCompoundFees: Scalars['Boolean']['output'];
  mmFeeBalance: Scalars['BigInt']['output'];
  mmFeeBps?: Maybe<Scalars['Int']['output']>;
  nftAuthorityAddress: Scalars['String']['output'];
  nftsForSale: Array<LinkedTxMintTv2>;
  nftsHeld: Scalars['Int']['output'];
  orderType: Scalars['Int']['output'];
  ownerAddress: Scalars['String']['output'];
  pendingActive: Scalars['Boolean']['output'];
  poolType: PoolType;
  sellNowPrice?: Maybe<Scalars['Decimal']['output']>;
  /** Only present when queried with tswapOrders for MintWithColl */
  sellNowPriceNetFees?: Maybe<Scalars['Decimal']['output']>;
  slot: Scalars['BigInt']['output'];
  solBalance: Scalars['BigInt']['output'];
  solEscrowAddress: Scalars['String']['output'];
  startingPrice: Scalars['BigInt']['output'];
  statsAccumulatedMmProfit: Scalars['BigInt']['output'];
  statsTakerBuyCount: Scalars['Int']['output'];
  statsTakerSellCount: Scalars['Int']['output'];
  takerBuyCount: Scalars['Int']['output'];
  takerSellCount: Scalars['Int']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  version: Scalars['Int']['output'];
  whitelistAddress: Scalars['String']['output'];
};

export type TSwapPoolUpdate = {
  __typename?: 'TSwapPoolUpdate';
  address: Scalars['String']['output'];
  pool?: Maybe<TSwapPool>;
};

export type TSwapPoolUpdateAll = {
  __typename?: 'TSwapPoolUpdateAll';
  address: Scalars['String']['output'];
  pool?: Maybe<TSwapPoolWithSlug>;
};

export type TSwapPoolWithColl = {
  __typename?: 'TSwapPoolWithColl';
  collName: Scalars['String']['output'];
  floorPrice?: Maybe<Scalars['Decimal']['output']>;
  marginNr?: Maybe<Scalars['Float']['output']>;
  numMints?: Maybe<Scalars['Int']['output']>;
  pool: TSwapPool;
  slug: Scalars['String']['output'];
};

export type TSwapPoolWithSlug = {
  __typename?: 'TSwapPoolWithSlug';
  address: Scalars['String']['output'];
  balance: Scalars['BigInt']['output'];
  buyNowPrice?: Maybe<Scalars['Decimal']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  createdUnix: Scalars['Timestamp']['output'];
  currentActive: Scalars['Boolean']['output'];
  curveType: CurveType;
  delta: Scalars['BigInt']['output'];
  /** Only present when queried with tswapOrders for MintWithColl */
  feeInfos?: Maybe<Array<FeeInfo>>;
  frozenAmount?: Maybe<Scalars['BigInt']['output']>;
  frozenTime?: Maybe<Scalars['Timestamp']['output']>;
  isCosigned: Scalars['Boolean']['output'];
  lastTransactedAt?: Maybe<Scalars['Timestamp']['output']>;
  margin?: Maybe<Scalars['String']['output']>;
  marginNr?: Maybe<Scalars['Float']['output']>;
  maxTakerSellCount: Scalars['Int']['output'];
  mmCompoundFees: Scalars['Boolean']['output'];
  mmFeeBalance: Scalars['BigInt']['output'];
  mmFeeBps?: Maybe<Scalars['Int']['output']>;
  nftAuthorityAddress: Scalars['String']['output'];
  nftsForSale: Array<LinkedTxMintTv2>;
  nftsHeld: Scalars['Int']['output'];
  orderType: Scalars['Int']['output'];
  ownerAddress: Scalars['String']['output'];
  pendingActive: Scalars['Boolean']['output'];
  poolType: PoolType;
  sellNowPrice?: Maybe<Scalars['Decimal']['output']>;
  /** Only present when queried with tswapOrders for MintWithColl */
  sellNowPriceNetFees?: Maybe<Scalars['Decimal']['output']>;
  slot: Scalars['BigInt']['output'];
  slug: Scalars['String']['output'];
  solBalance: Scalars['BigInt']['output'];
  solEscrowAddress: Scalars['String']['output'];
  startingPrice: Scalars['BigInt']['output'];
  statsAccumulatedMmProfit: Scalars['BigInt']['output'];
  statsTakerBuyCount: Scalars['Int']['output'];
  statsTakerSellCount: Scalars['Int']['output'];
  takerBuyCount: Scalars['Int']['output'];
  takerSellCount: Scalars['Int']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  version: Scalars['Int']['output'];
  whitelistAddress: Scalars['String']['output'];
};

export type TSwapWhitelist = {
  __typename?: 'TSwapWhitelist';
  address: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  frozen: Scalars['Boolean']['output'];
  fvc?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rootHash: Scalars['Byte']['output'];
  slot: Scalars['BigInt']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  uuid: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
  version: Scalars['Int']['output'];
  voc?: Maybe<Scalars['String']['output']>;
};

export type TensorBidsV2 = {
  __typename?: 'TensorBidsV2';
  bids: Array<MintBid>;
  page: BidsPage;
  sortBy: BidsSortBy;
};

export enum TokenStandard {
  Fungible = 'FUNGIBLE',
  FungibleAsset = 'FUNGIBLE_ASSET',
  NonFungible = 'NON_FUNGIBLE',
  NonFungibleEdition = 'NON_FUNGIBLE_EDITION',
  ProgrammableNonFungible = 'PROGRAMMABLE_NON_FUNGIBLE'
}

export enum TradeAction {
  Accept = 'ACCEPT',
  Bid = 'BID',
  Buy = 'BUY',
  Cancel = 'CANCEL',
  Delist = 'DELIST',
  Deposit = 'DEPOSIT',
  ElixirAppraise = 'ELIXIR_APPRAISE',
  InitUpdateMintProof = 'INIT_UPDATE_MINT_PROOF',
  List = 'LIST',
  MarginAttach = 'MARGIN_ATTACH',
  MarginClose = 'MARGIN_CLOSE',
  MarginDeposit = 'MARGIN_DEPOSIT',
  MarginDetach = 'MARGIN_DETACH',
  MarginInit = 'MARGIN_INIT',
  MarginWithdraw = 'MARGIN_WITHDRAW',
  SwapBuyNft = 'SWAP_BUY_NFT',
  SwapBuySingleListing = 'SWAP_BUY_SINGLE_LISTING',
  SwapClosePool = 'SWAP_CLOSE_POOL',
  SwapDelist = 'SWAP_DELIST',
  SwapDepositLiq = 'SWAP_DEPOSIT_LIQ',
  SwapDepositNft = 'SWAP_DEPOSIT_NFT',
  SwapDepositSol = 'SWAP_DEPOSIT_SOL',
  SwapEditPool = 'SWAP_EDIT_POOL',
  SwapEditSingleListing = 'SWAP_EDIT_SINGLE_LISTING',
  SwapExchangeNft = 'SWAP_EXCHANGE_NFT',
  SwapInitPool = 'SWAP_INIT_POOL',
  SwapList = 'SWAP_LIST',
  SwapSellNft = 'SWAP_SELL_NFT',
  SwapWithdrawLiq = 'SWAP_WITHDRAW_LIQ',
  SwapWithdrawMmFee = 'SWAP_WITHDRAW_MM_FEE',
  SwapWithdrawNft = 'SWAP_WITHDRAW_NFT',
  SwapWithdrawSol = 'SWAP_WITHDRAW_SOL',
  Withdraw = 'WITHDRAW'
}

export type TraitCountFilter = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type TraitFilter = {
  traitType: Scalars['String']['input'];
  values: Array<Scalars['String']['input']>;
};

export enum TransactionType {
  AdjustPrice = 'ADJUST_PRICE',
  AuctionCancel = 'AUCTION_CANCEL',
  AuctionCreate = 'AUCTION_CREATE',
  AuctionPlaceBid = 'AUCTION_PLACE_BID',
  AuctionSettle = 'AUCTION_SETTLE',
  CancelBid = 'CANCEL_BID',
  CreateMint = 'CREATE_MINT',
  Delist = 'DELIST',
  ElixirAppraise = 'ELIXIR_APPRAISE',
  ElixirBuyPnft = 'ELIXIR_BUY_PNFT',
  ElixirComposedBuyNft = 'ELIXIR_COMPOSED_BUY_NFT',
  ElixirComposedSellNft = 'ELIXIR_COMPOSED_SELL_NFT',
  ElixirFractionalize = 'ELIXIR_FRACTIONALIZE',
  ElixirFuse = 'ELIXIR_FUSE',
  ElixirPoolDepositFnft = 'ELIXIR_POOL_DEPOSIT_FNFT',
  ElixirPoolExchangeFnft = 'ELIXIR_POOL_EXCHANGE_FNFT',
  ElixirPoolWithdrawFnft = 'ELIXIR_POOL_WITHDRAW_FNFT',
  ElixirSellPnft = 'ELIXIR_SELL_PNFT',
  Failed = 'FAILED',
  List = 'LIST',
  MarginAttach = 'MARGIN_ATTACH',
  MarginClose = 'MARGIN_CLOSE',
  MarginDeposit = 'MARGIN_DEPOSIT',
  MarginDetach = 'MARGIN_DETACH',
  MarginInit = 'MARGIN_INIT',
  MarginWithdraw = 'MARGIN_WITHDRAW',
  Other = 'OTHER',
  PlaceBid = 'PLACE_BID',
  SaleAcceptBid = 'SALE_ACCEPT_BID',
  SaleBuyNow = 'SALE_BUY_NOW',
  SwapBuyNft = 'SWAP_BUY_NFT',
  SwapBuySingleListing = 'SWAP_BUY_SINGLE_LISTING',
  SwapClosePool = 'SWAP_CLOSE_POOL',
  SwapDelist = 'SWAP_DELIST',
  SwapDepositLiq = 'SWAP_DEPOSIT_LIQ',
  SwapDepositNft = 'SWAP_DEPOSIT_NFT',
  SwapDepositSol = 'SWAP_DEPOSIT_SOL',
  SwapEditPool = 'SWAP_EDIT_POOL',
  SwapEditSingleListing = 'SWAP_EDIT_SINGLE_LISTING',
  SwapInitPool = 'SWAP_INIT_POOL',
  SwapList = 'SWAP_LIST',
  SwapSellNft = 'SWAP_SELL_NFT',
  SwapWithdrawLiq = 'SWAP_WITHDRAW_LIQ',
  SwapWithdrawMmFee = 'SWAP_WITHDRAW_MM_FEE',
  SwapWithdrawNft = 'SWAP_WITHDRAW_NFT',
  SwapWithdrawSol = 'SWAP_WITHDRAW_SOL',
  Transfer = 'TRANSFER',
  UpdateMint = 'UPDATE_MINT'
}

export type TransactionsCursor = {
  __typename?: 'TransactionsCursor';
  txAt: Scalars['Timestamp']['output'];
  txKey: Scalars['String']['output'];
};

export type TransactionsCursorInput = {
  txAt: Scalars['Timestamp']['input'];
  txKey: Scalars['String']['input'];
};

export type TransactionsFilters = {
  mps?: InputMaybe<Array<DataSource>>;
  /** only relevant for recentTransactions */
  prices?: InputMaybe<PriceFilter>;
  /** only relevant for recentTransactions */
  traitCount?: InputMaybe<TraitCountFilter>;
  /** only relevant for recentTransactions */
  traits?: InputMaybe<Array<TraitFilter>>;
  txTypes?: InputMaybe<Array<TransactionType>>;
};

export type TransactionsPage = {
  __typename?: 'TransactionsPage';
  endCursor?: Maybe<TransactionsCursor>;
  hasMore: Scalars['Boolean']['output'];
};

export type TxMetadata = {
  __typename?: 'TxMetadata';
  auctionHouse?: Maybe<Scalars['String']['output']>;
  pdaAddr?: Maybe<Scalars['String']['output']>;
  sellerRef?: Maybe<Scalars['String']['output']>;
  tokenAcc?: Maybe<Scalars['String']['output']>;
  urlId?: Maybe<Scalars['String']['output']>;
};

export type TxResponse = {
  __typename?: 'TxResponse';
  /** For some Tensor txs eg tswapBuyNftTx, this will be populated with the price including Tensor fees and royalties */
  totalPriceNetFees?: Maybe<Scalars['Decimal']['output']>;
  txs: Array<OnchainTx>;
};

export type UserActiveListingsV2 = {
  __typename?: 'UserActiveListingsV2';
  page: ActiveListingsPageV2;
  txs: Array<LinkedTransactionMintWithColl>;
};

export type UserDiscordPrivate = {
  __typename?: 'UserDiscordPrivate';
  accessToken: Scalars['String']['output'];
  expiresAt: Scalars['Timestamp']['output'];
  profileId: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  _count?: Maybe<UserProfileCount>;
  /** null if didn't qualify for Tensor Aidrop 1 */
  airdropOne?: Maybe<AirdropOne>;
  /** null if no Airdrop Two activity */
  airdropTwo?: Maybe<AirdropTwoProfileStats>;
  bidNotifMinPctFloor: Scalars['Int']['output'];
  claimedAirdropOneAt?: Maybe<Scalars['Timestamp']['output']>;
  claimedAirdropTwoAt?: Maybe<Scalars['Timestamp']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  discord?: Maybe<Scalars['String']['output']>;
  discordJoined: Scalars['Boolean']['output'];
  discordPrivate?: Maybe<UserDiscordPrivate>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  favCollections: Array<CollectionFavorite>;
  favMints: Array<MintFavorite>;
  favWallets: Array<WalletFavorite>;
  genesisWallet: Scalars['String']['output'];
  id: Scalars['String']['output'];
  loyaltyLevel: Scalars['Int']['output'];
  madBoxes: Array<MadBox>;
  openedNftBoxesAt?: Maybe<Scalars['Timestamp']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  twitterFollowed: Scalars['Boolean']['output'];
  twitterPrivate?: Maybe<UserTwitterPrivate>;
  updatedAt: Scalars['Timestamp']['output'];
  username?: Maybe<Scalars['String']['output']>;
  wallets: Array<UserWallet>;
};

export type UserProfileCount = {
  __typename?: 'UserProfileCount';
  favColls: Scalars['Int']['output'];
  favMints: Scalars['Int']['output'];
  favWallets: Scalars['Int']['output'];
  transitions: Scalars['Int']['output'];
  wallets: Scalars['Int']['output'];
};

export type UserProfileWithJwtV2 = {
  __typename?: 'UserProfileWithJwtV2';
  jwt: Scalars['String']['output'];
  profile: UserProfile;
};

export type UserSentTransactionStats = {
  __typename?: 'UserSentTransactionStats';
  past24h: SentTransactionStats;
  past30d: SentTransactionStats;
};

export type UserTransaction = {
  __typename?: 'UserTransaction';
  action: TradeAction;
  amounts?: Maybe<Array<Scalars['Decimal']['output']>>;
  attemptedAt: Scalars['Timestamp']['output'];
  data: UserTxData;
  inflatedTx?: Maybe<Scalars['JSON']['output']>;
  mints?: Maybe<Array<Scalars['String']['output']>>;
  mp?: Maybe<SupportedMarketplace>;
  poolAddresses?: Maybe<Array<Scalars['String']['output']>>;
  sig: Scalars['String']['output'];
  status: UserTxStatus;
  wallet: Scalars['String']['output'];
};

export type UserTwitterPrivate = {
  __typename?: 'UserTwitterPrivate';
  profileId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  v1AccessSecret?: Maybe<Scalars['String']['output']>;
  v1AccessToken?: Maybe<Scalars['String']['output']>;
  v2AccessToken?: Maybe<Scalars['String']['output']>;
  v2ExpiresAt?: Maybe<Scalars['Timestamp']['output']>;
  v2RefreshToken?: Maybe<Scalars['String']['output']>;
};

export type UserTxData = {
  __typename?: 'UserTxData';
  data: Scalars['JSON']['output'];
  version: Scalars['Int']['output'];
};

export type UserTxDataInput = {
  data: Scalars['JSON']['input'];
  version: Scalars['Int']['input'];
};

export enum UserTxStatus {
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
  Finalized = 'FINALIZED',
  Pending = 'PENDING'
}

export type UserWallet = {
  __typename?: 'UserWallet';
  _count?: Maybe<UserWalletCount>;
  createdAt: Scalars['Timestamp']['output'];
  profileId: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  wallet: Scalars['String']['output'];
};

export type UserWalletCount = {
  __typename?: 'UserWalletCount';
  transitions: Scalars['Int']['output'];
};

export type WalletFavorite = {
  __typename?: 'WalletFavorite';
  address: Scalars['String']['output'];
  favList: Scalars['Int']['output'];
  profileId: Scalars['String']['output'];
};
