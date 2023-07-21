"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTxStatus = exports.TransactionType = exports.TradeAction = exports.TokenStandard = exports.TCompTarget = exports.TCompField = exports.SupportedMarketplace = exports.SignMsgType = exports.RaritySystem = exports.PoolType = exports.OrderSortBy = exports.HSwapPairType = exports.HSwapCurveType = exports.DepositWithdrawAction = exports.DataSource = exports.CurveType = exports.Currency = exports.CollectionMintsSortBy = exports.BidsSortBy = exports.AttachDetachAction = exports.AirdropTwoSortBy = exports.ActiveListingsSortBy = void 0;
var ActiveListingsSortBy;
(function (ActiveListingsSortBy) {
    ActiveListingsSortBy["LastSaleAsc"] = "LastSaleAsc";
    ActiveListingsSortBy["LastSaleDesc"] = "LastSaleDesc";
    ActiveListingsSortBy["ListedDesc"] = "ListedDesc";
    ActiveListingsSortBy["PriceAsc"] = "PriceAsc";
    ActiveListingsSortBy["PriceDesc"] = "PriceDesc";
    ActiveListingsSortBy["RankHrttAsc"] = "RankHrttAsc";
    ActiveListingsSortBy["RankHrttDesc"] = "RankHrttDesc";
    ActiveListingsSortBy["RankStatAsc"] = "RankStatAsc";
    ActiveListingsSortBy["RankStatDesc"] = "RankStatDesc";
    ActiveListingsSortBy["RankTeamAsc"] = "RankTeamAsc";
    ActiveListingsSortBy["RankTeamDesc"] = "RankTeamDesc";
    ActiveListingsSortBy["RankTnAsc"] = "RankTnAsc";
    ActiveListingsSortBy["RankTnDesc"] = "RankTnDesc";
})(ActiveListingsSortBy || (exports.ActiveListingsSortBy = ActiveListingsSortBy = {}));
var AirdropTwoSortBy;
(function (AirdropTwoSortBy) {
    AirdropTwoSortBy["By24h"] = "By24h";
    AirdropTwoSortBy["ByTotal"] = "ByTotal";
})(AirdropTwoSortBy || (exports.AirdropTwoSortBy = AirdropTwoSortBy = {}));
/** Whether you want to attach or detach margin */
var AttachDetachAction;
(function (AttachDetachAction) {
    AttachDetachAction["Attach"] = "ATTACH";
    AttachDetachAction["Detach"] = "DETACH";
})(AttachDetachAction || (exports.AttachDetachAction = AttachDetachAction = {}));
var BidsSortBy;
(function (BidsSortBy) {
    BidsSortBy["PriceAsc"] = "PriceAsc";
    BidsSortBy["PriceDesc"] = "PriceDesc";
})(BidsSortBy || (exports.BidsSortBy = BidsSortBy = {}));
var CollectionMintsSortBy;
(function (CollectionMintsSortBy) {
    CollectionMintsSortBy["LastSaleAsc"] = "LastSaleAsc";
    CollectionMintsSortBy["LastSaleDesc"] = "LastSaleDesc";
    CollectionMintsSortBy["ListedTimeDesc"] = "ListedTimeDesc";
    CollectionMintsSortBy["ListingPriceAsc"] = "ListingPriceAsc";
    CollectionMintsSortBy["ListingPriceDesc"] = "ListingPriceDesc";
    CollectionMintsSortBy["RankHrttAsc"] = "RankHrttAsc";
    CollectionMintsSortBy["RankHrttDesc"] = "RankHrttDesc";
    CollectionMintsSortBy["RankStatAsc"] = "RankStatAsc";
    CollectionMintsSortBy["RankStatDesc"] = "RankStatDesc";
    CollectionMintsSortBy["RankTeamAsc"] = "RankTeamAsc";
    CollectionMintsSortBy["RankTeamDesc"] = "RankTeamDesc";
    CollectionMintsSortBy["RankTnAsc"] = "RankTnAsc";
    CollectionMintsSortBy["RankTnDesc"] = "RankTnDesc";
})(CollectionMintsSortBy || (exports.CollectionMintsSortBy = CollectionMintsSortBy = {}));
/** The currency of the associated price amount(s) */
var Currency;
(function (Currency) {
    Currency["EthWei"] = "ETH_WEI";
    Currency["SolLamport"] = "SOL_LAMPORT";
})(Currency || (exports.Currency = Currency = {}));
var CurveType;
(function (CurveType) {
    CurveType["Exponential"] = "EXPONENTIAL";
    CurveType["Linear"] = "LINEAR";
    CurveType["Xyk"] = "XYK";
})(CurveType || (exports.CurveType = CurveType = {}));
var DataSource;
(function (DataSource) {
    DataSource["Alpha"] = "ALPHA";
    DataSource["AuctionHouse"] = "AUCTION_HOUSE";
    DataSource["Bubblegum"] = "BUBBLEGUM";
    DataSource["Digitaleyez"] = "DIGITALEYEZ";
    DataSource["DigitaleyezV2"] = "DIGITALEYEZ_V2";
    DataSource["Elixir"] = "ELIXIR";
    DataSource["ElixirComposed"] = "ELIXIR_COMPOSED";
    DataSource["Hadeswap"] = "HADESWAP";
    DataSource["Hyperspace"] = "HYPERSPACE";
    DataSource["Magiceden"] = "MAGICEDEN";
    DataSource["MagicedenAuction"] = "MAGICEDEN_AUCTION";
    DataSource["MagicedenV2"] = "MAGICEDEN_V2";
    DataSource["Onchain"] = "ONCHAIN";
    DataSource["Smb"] = "SMB";
    DataSource["SmbV2"] = "SMB_V2";
    DataSource["Solanart"] = "SOLANART";
    DataSource["Solsea"] = "SOLSEA";
    DataSource["Tcomp"] = "TCOMP";
    DataSource["Tensorbid"] = "TENSORBID";
    DataSource["Tensorswap"] = "TENSORSWAP";
    DataSource["TokenMetadata"] = "TOKEN_METADATA";
    DataSource["Yawww"] = "YAWWW";
})(DataSource || (exports.DataSource = DataSource = {}));
/** Whether you want to deposit or withdraw NFT or SOL */
var DepositWithdrawAction;
(function (DepositWithdrawAction) {
    DepositWithdrawAction["Deposit"] = "DEPOSIT";
    DepositWithdrawAction["Withdraw"] = "WITHDRAW";
})(DepositWithdrawAction || (exports.DepositWithdrawAction = DepositWithdrawAction = {}));
var HSwapCurveType;
(function (HSwapCurveType) {
    HSwapCurveType["Exponential"] = "Exponential";
    HSwapCurveType["Linear"] = "Linear";
    HSwapCurveType["Xyk"] = "XYK";
})(HSwapCurveType || (exports.HSwapCurveType = HSwapCurveType = {}));
var HSwapPairType;
(function (HSwapPairType) {
    HSwapPairType["LiquidityProvision"] = "LiquidityProvision";
    HSwapPairType["NftForToken"] = "NftForToken";
    HSwapPairType["TokenForNft"] = "TokenForNFT";
})(HSwapPairType || (exports.HSwapPairType = HSwapPairType = {}));
var OrderSortBy;
(function (OrderSortBy) {
    OrderSortBy["SellNowPriceDesc"] = "SellNowPriceDesc";
})(OrderSortBy || (exports.OrderSortBy = OrderSortBy = {}));
var PoolType;
(function (PoolType) {
    PoolType["Nft"] = "NFT";
    PoolType["Token"] = "TOKEN";
    PoolType["Trade"] = "TRADE";
})(PoolType || (exports.PoolType = PoolType = {}));
var RaritySystem;
(function (RaritySystem) {
    RaritySystem["Hrtt"] = "Hrtt";
    RaritySystem["Stat"] = "Stat";
    RaritySystem["Team"] = "Team";
    RaritySystem["Tn"] = "Tn";
})(RaritySystem || (exports.RaritySystem = RaritySystem = {}));
/** What type of msg to sign for wallet verification */
var SignMsgType;
(function (SignMsgType) {
    SignMsgType["Link"] = "LINK";
    SignMsgType["Verify"] = "VERIFY";
})(SignMsgType || (exports.SignMsgType = SignMsgType = {}));
var SupportedMarketplace;
(function (SupportedMarketplace) {
    SupportedMarketplace["CoralCube"] = "CoralCube";
    SupportedMarketplace["Elixir"] = "Elixir";
    SupportedMarketplace["Fractal"] = "Fractal";
    SupportedMarketplace["HadeSwap"] = "HadeSwap";
    SupportedMarketplace["HyperSpace"] = "HyperSpace";
    SupportedMarketplace["MagicEden"] = "MagicEden";
    SupportedMarketplace["OpenSea"] = "OpenSea";
    SupportedMarketplace["Solanart"] = "Solanart";
    SupportedMarketplace["SolanartAh"] = "SolanartAH";
    SupportedMarketplace["TComp"] = "TComp";
    SupportedMarketplace["TensorSwap"] = "TensorSwap";
    SupportedMarketplace["Yawww"] = "Yawww";
})(SupportedMarketplace || (exports.SupportedMarketplace = SupportedMarketplace = {}));
var TCompField;
(function (TCompField) {
    TCompField["Name"] = "NAME";
})(TCompField || (exports.TCompField = TCompField = {}));
var TCompTarget;
(function (TCompTarget) {
    TCompTarget["AssetId"] = "ASSET_ID";
    TCompTarget["Whitelist"] = "WHITELIST";
})(TCompTarget || (exports.TCompTarget = TCompTarget = {}));
var TokenStandard;
(function (TokenStandard) {
    TokenStandard["Fungible"] = "FUNGIBLE";
    TokenStandard["FungibleAsset"] = "FUNGIBLE_ASSET";
    TokenStandard["NonFungible"] = "NON_FUNGIBLE";
    TokenStandard["NonFungibleEdition"] = "NON_FUNGIBLE_EDITION";
    TokenStandard["ProgrammableNonFungible"] = "PROGRAMMABLE_NON_FUNGIBLE";
})(TokenStandard || (exports.TokenStandard = TokenStandard = {}));
var TradeAction;
(function (TradeAction) {
    TradeAction["Accept"] = "ACCEPT";
    TradeAction["Bid"] = "BID";
    TradeAction["Buy"] = "BUY";
    TradeAction["Cancel"] = "CANCEL";
    TradeAction["Delist"] = "DELIST";
    TradeAction["Deposit"] = "DEPOSIT";
    TradeAction["ElixirAppraise"] = "ELIXIR_APPRAISE";
    TradeAction["InitUpdateMintProof"] = "INIT_UPDATE_MINT_PROOF";
    TradeAction["List"] = "LIST";
    TradeAction["MarginAttach"] = "MARGIN_ATTACH";
    TradeAction["MarginClose"] = "MARGIN_CLOSE";
    TradeAction["MarginDeposit"] = "MARGIN_DEPOSIT";
    TradeAction["MarginDetach"] = "MARGIN_DETACH";
    TradeAction["MarginInit"] = "MARGIN_INIT";
    TradeAction["MarginWithdraw"] = "MARGIN_WITHDRAW";
    TradeAction["SwapBuyNft"] = "SWAP_BUY_NFT";
    TradeAction["SwapBuySingleListing"] = "SWAP_BUY_SINGLE_LISTING";
    TradeAction["SwapClosePool"] = "SWAP_CLOSE_POOL";
    TradeAction["SwapDelist"] = "SWAP_DELIST";
    TradeAction["SwapDepositLiq"] = "SWAP_DEPOSIT_LIQ";
    TradeAction["SwapDepositNft"] = "SWAP_DEPOSIT_NFT";
    TradeAction["SwapDepositSol"] = "SWAP_DEPOSIT_SOL";
    TradeAction["SwapEditPool"] = "SWAP_EDIT_POOL";
    TradeAction["SwapEditSingleListing"] = "SWAP_EDIT_SINGLE_LISTING";
    TradeAction["SwapExchangeNft"] = "SWAP_EXCHANGE_NFT";
    TradeAction["SwapInitPool"] = "SWAP_INIT_POOL";
    TradeAction["SwapList"] = "SWAP_LIST";
    TradeAction["SwapSellNft"] = "SWAP_SELL_NFT";
    TradeAction["SwapWithdrawLiq"] = "SWAP_WITHDRAW_LIQ";
    TradeAction["SwapWithdrawMmFee"] = "SWAP_WITHDRAW_MM_FEE";
    TradeAction["SwapWithdrawNft"] = "SWAP_WITHDRAW_NFT";
    TradeAction["SwapWithdrawSol"] = "SWAP_WITHDRAW_SOL";
    TradeAction["Withdraw"] = "WITHDRAW";
})(TradeAction || (exports.TradeAction = TradeAction = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["AdjustPrice"] = "ADJUST_PRICE";
    TransactionType["AuctionCancel"] = "AUCTION_CANCEL";
    TransactionType["AuctionCreate"] = "AUCTION_CREATE";
    TransactionType["AuctionPlaceBid"] = "AUCTION_PLACE_BID";
    TransactionType["AuctionSettle"] = "AUCTION_SETTLE";
    TransactionType["CancelBid"] = "CANCEL_BID";
    TransactionType["CreateMint"] = "CREATE_MINT";
    TransactionType["Delist"] = "DELIST";
    TransactionType["ElixirAppraise"] = "ELIXIR_APPRAISE";
    TransactionType["ElixirBuyPnft"] = "ELIXIR_BUY_PNFT";
    TransactionType["ElixirComposedBuyNft"] = "ELIXIR_COMPOSED_BUY_NFT";
    TransactionType["ElixirComposedSellNft"] = "ELIXIR_COMPOSED_SELL_NFT";
    TransactionType["ElixirFractionalize"] = "ELIXIR_FRACTIONALIZE";
    TransactionType["ElixirFuse"] = "ELIXIR_FUSE";
    TransactionType["ElixirPoolDepositFnft"] = "ELIXIR_POOL_DEPOSIT_FNFT";
    TransactionType["ElixirPoolExchangeFnft"] = "ELIXIR_POOL_EXCHANGE_FNFT";
    TransactionType["ElixirPoolWithdrawFnft"] = "ELIXIR_POOL_WITHDRAW_FNFT";
    TransactionType["ElixirSellPnft"] = "ELIXIR_SELL_PNFT";
    TransactionType["Failed"] = "FAILED";
    TransactionType["List"] = "LIST";
    TransactionType["MarginAttach"] = "MARGIN_ATTACH";
    TransactionType["MarginClose"] = "MARGIN_CLOSE";
    TransactionType["MarginDeposit"] = "MARGIN_DEPOSIT";
    TransactionType["MarginDetach"] = "MARGIN_DETACH";
    TransactionType["MarginInit"] = "MARGIN_INIT";
    TransactionType["MarginWithdraw"] = "MARGIN_WITHDRAW";
    TransactionType["Other"] = "OTHER";
    TransactionType["PlaceBid"] = "PLACE_BID";
    TransactionType["SaleAcceptBid"] = "SALE_ACCEPT_BID";
    TransactionType["SaleBuyNow"] = "SALE_BUY_NOW";
    TransactionType["SwapBuyNft"] = "SWAP_BUY_NFT";
    TransactionType["SwapBuySingleListing"] = "SWAP_BUY_SINGLE_LISTING";
    TransactionType["SwapClosePool"] = "SWAP_CLOSE_POOL";
    TransactionType["SwapDelist"] = "SWAP_DELIST";
    TransactionType["SwapDepositLiq"] = "SWAP_DEPOSIT_LIQ";
    TransactionType["SwapDepositNft"] = "SWAP_DEPOSIT_NFT";
    TransactionType["SwapDepositSol"] = "SWAP_DEPOSIT_SOL";
    TransactionType["SwapEditPool"] = "SWAP_EDIT_POOL";
    TransactionType["SwapEditSingleListing"] = "SWAP_EDIT_SINGLE_LISTING";
    TransactionType["SwapInitPool"] = "SWAP_INIT_POOL";
    TransactionType["SwapList"] = "SWAP_LIST";
    TransactionType["SwapSellNft"] = "SWAP_SELL_NFT";
    TransactionType["SwapWithdrawLiq"] = "SWAP_WITHDRAW_LIQ";
    TransactionType["SwapWithdrawMmFee"] = "SWAP_WITHDRAW_MM_FEE";
    TransactionType["SwapWithdrawNft"] = "SWAP_WITHDRAW_NFT";
    TransactionType["SwapWithdrawSol"] = "SWAP_WITHDRAW_SOL";
    TransactionType["Transfer"] = "TRANSFER";
    TransactionType["UpdateMint"] = "UPDATE_MINT";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
var UserTxStatus;
(function (UserTxStatus) {
    UserTxStatus["Confirmed"] = "CONFIRMED";
    UserTxStatus["Failed"] = "FAILED";
    UserTxStatus["Finalized"] = "FINALIZED";
    UserTxStatus["Pending"] = "PENDING";
})(UserTxStatus || (exports.UserTxStatus = UserTxStatus = {}));
