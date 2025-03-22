(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/36647_@privy-io_react-auth_dist_esm_adf2b60c._.js", {

"[project]/node_modules/.pnpm/@privy-io+react-auth@2.6.4_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-_c95c1eec79214f2df3c204ffc2cd9d5d/node_modules/@privy-io/react-auth/dist/esm/internal-context-O3TPYUku.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "$": (()=>z),
    "A": (()=>X),
    "B": (()=>i),
    "C": (()=>oa),
    "D": (()=>la),
    "E": (()=>La),
    "F": (()=>n),
    "G": (()=>E),
    "H": (()=>c),
    "I": (()=>Na),
    "J": (()=>aa),
    "K": (()=>Z),
    "L": (()=>ea),
    "M": (()=>A),
    "N": (()=>_),
    "O": (()=>h),
    "P": (()=>d),
    "Q": (()=>v),
    "R": (()=>Aa),
    "S": (()=>va),
    "T": (()=>u),
    "U": (()=>pa),
    "V": (()=>ca),
    "W": (()=>Ea),
    "X": (()=>x),
    "Y": (()=>Y),
    "Z": (()=>I),
    "_": (()=>g),
    "a": (()=>r),
    "a0": (()=>y),
    "a1": (()=>ua),
    "a2": (()=>wa),
    "a3": (()=>Sa),
    "a4": (()=>Ta),
    "a5": (()=>ma),
    "a6": (()=>S),
    "a7": (()=>T),
    "a8": (()=>m),
    "a9": (()=>w),
    "aa": (()=>D),
    "ab": (()=>L),
    "ac": (()=>J),
    "ad": (()=>da),
    "ae": (()=>f),
    "af": (()=>O),
    "ag": (()=>$),
    "ah": (()=>B),
    "ai": (()=>N),
    "aj": (()=>Ia),
    "ak": (()=>Oa),
    "al": (()=>p),
    "am": (()=>C),
    "an": (()=>P),
    "b": (()=>F),
    "c": (()=>ha),
    "d": (()=>M),
    "e": (()=>H),
    "f": (()=>l),
    "g": (()=>o),
    "h": (()=>W),
    "i": (()=>U),
    "j": (()=>R),
    "k": (()=>k),
    "l": (()=>Q),
    "m": (()=>q),
    "n": (()=>Da),
    "o": (()=>j),
    "p": (()=>b),
    "q": (()=>_a),
    "r": (()=>ra),
    "s": (()=>na),
    "t": (()=>ia),
    "u": (()=>ga),
    "v": (()=>ta),
    "w": (()=>sa),
    "x": (()=>G),
    "y": (()=>K),
    "z": (()=>V)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ofetch$40$1$2e$4$2e$1$2f$node_modules$2f$ofetch$2f$dist$2f$shared$2f$ofetch$2e$03887fc3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__FetchError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ofetch@1.4.1/node_modules/ofetch/dist/shared/ofetch.03887fc3.mjs [app-client] (ecmascript) <export F as FetchError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var t;
class i extends Error {
    toString() {
        return `${this.type}${this.privyErrorCode ? `-${this.privyErrorCode}` : ""}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
    }
    constructor(a, e, s){
        super(a), e instanceof Error && (this.cause = e), this.privyErrorCode = s;
    }
}
class n extends i {
    constructor(a, e, s, t, i, n){
        super(s, t, i), this.type = a, this.status = e, this.data = n;
    }
}
class r extends i {
    constructor(a, e, s){
        super(a, e, s), this.type = "client_error";
    }
}
class _ extends r {
    constructor(){
        super("Request timed out", void 0, "client_request_timeout");
    }
}
class o extends i {
    constructor(a, e, s){
        super(a, e, s), this.type = "connector_error";
    }
}
const l = (e)=>{
    if (e instanceof i) return e;
    if (!(e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ofetch$40$1$2e$4$2e$1$2f$node_modules$2f$ofetch$2f$dist$2f$shared$2f$ofetch$2e$03887fc3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__FetchError$3e$__["FetchError"])) return u(e);
    if (!e.response) return new n("api_error", null, e.message, e);
    let { type: s, message: t, error: r, code: _ } = e.data;
    return new n(s || "ApiError", e.response.status, t || r, e, _, e.data);
}, u = (a)=>a instanceof i ? a : a instanceof Error ? new r(a.message, a) : new r(`Internal error: ${a}`);
var d = ((t = {}).OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended", t.MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id", t.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id", t.MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token", t.INVALID_DATA = "invalid_data", t.INVALID_CAPTCHA = "invalid_captcha", t.LINKED_TO_ANOTHER_USER = "linked_to_another_user", t.CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type", t.FAILED_TO_LINK_ACCOUNT = "failed_to_link_account", t.FAILED_TO_UPDATE_ACCOUNT = "failed_to_update_account", t.USER_EXITED_UPDATE_FLOW = "exited_update_flow", t.ALLOWLIST_REJECTED = "allowlist_rejected", t.OAUTH_USER_DENIED = "oauth_user_denied", t.OAUTH_UNEXPECTED = "oauth_unexpected", t.UNKNOWN_AUTH_ERROR = "unknown_auth_error", t.USER_EXITED_AUTH_FLOW = "exited_auth_flow", t.USER_EXITED_LINK_FLOW = "exited_link_flow", t.USER_EXITED_SET_PASSWORD_FLOW = "user_exited_set_password_flow", t.MUST_BE_AUTHENTICATED = "must_be_authenticated", t.UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error", t.GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error", t.CLIENT_REQUEST_TIMEOUT = "client_request_timeout", t.INVALID_CREDENTIALS = "invalid_credentials", t.MISSING_MFA_CREDENTIALS = "missing_or_invalid_mfa", t.UNKNOWN_MFA_ERROR = "unknown_mfa_error", t.EMBEDDED_WALLET_ALREADY_EXISTS = "embedded_wallet_already_exists", t.EMBEDDED_WALLET_NOT_FOUND = "embedded_wallet_not_found", t.EMBEDDED_WALLET_CREATE_ERROR = "embedded_wallet_create_error", t.UNKNOWN_EMBEDDED_WALLET_ERROR = "unknown_embedded_wallet_error", t.EMBEDDED_WALLET_PASSWORD_UNCONFIRMED = "embedded_wallet_password_unconfirmed", t.EMBEDDED_WALLET_PASSWORD_ALREADY_EXISTS = "embedded_wallet_password_already_exists", t.EMBEDDED_WALLET_RECOVERY_ALREADY_EXISTS = "embedded_wallet_recovery_already_exists", t.TRANSACTION_FAILURE = "transaction_failure", t.UNSUPPORTED_CHAIN_ID = "unsupported_chain_id", t.NOT_SUPPORTED = "not_supported", t.CAPTCHA_TIMEOUT = "captcha_timeout", t.INVALID_MESSAGE = "invalid_message", t.UNABLE_TO_SIGN = "unable_to_sign", t.CAPTCHA_FAILURE = "captcha_failure", t.CAPTCHA_DISABLED = "captcha_disabled", t.SESSION_STORAGE_UNAVAILABLE = "session_storage_unavailable", t.TOO_MANY_REQUESTS = "too_many_requests", t.USER_LIMIT_REACHED = "max_accounts_reached", t.DISALLOWED_LOGIN_METHOD = "disallowed_login_method", t.DISALLOWED_PLUS_EMAIL = "disallowed_plus_email", t.PASSKEY_NOT_ALLOWED = "passkey_not_allowed", t.USER_DOES_NOT_EXIST = "user_does_not_exist", t.INSUFFICIENT_BALANCE = "insufficient_balance", t.ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required", t);
class p extends r {
    constructor(){
        super("Method called before `ready`. Ensure you wait until `ready` is true before calling.");
    }
}
class c extends r {
    constructor(a = "Embedded wallet error", e){
        super(a, e, "unknown_embedded_wallet_error");
    }
}
class E extends r {
    constructor(a = "User must be authenticated"){
        super(a, void 0, "must_be_authenticated");
    }
}
class A extends r {
    constructor(a){
        super("This application is in development mode and must be upgraded to production to log in new users.", a, "max_accounts_reached");
    }
}
const h = "/api/v1/sessions", v = "/api/v1/sessions/logout", S = "/api/v1/siwe/init", T = "/api/v1/siwe/authenticate", m = "/api/v1/siwe/link", w = "/api/v1/siwe/link_smart_wallet", I = "/api/v1/siwe/unlink", O = "/api/v1/siwe/transfer", D = "/api/v1/siws/init", L = "/api/v1/siws/authenticate", N = "/api/v1/siws/link", g = "/api/v1/siws/unlink", R = "/api/v1/farcaster/init", W = "/api/v1/farcaster/authenticate", U = "/api/v1/farcaster/link", k = "/api/v1/farcaster/status", y = "/api/v1/farcaster/unlink", f = "/api/v1/farcaster/transfer", C = "api/v2/farcaster/init", P = "api/v2/farcaster/authenticate", M = "/api/v1/passwordless/init", b = "/api/v1/passwordless/authenticate", F = "/api/v1/passwordless/link", x = "/api/v1/passwordless/unlink", H = "/api/v1/passwordless/update", B = "/api/v1/passwordless/transfer", V = "/api/v1/passwordless_sms/init", K = "/api/v1/passwordless_sms/link", Y = "/api/v1/passwordless_sms/unlink", G = "/api/v1/passwordless_sms/authenticate", X = "/api/v1/passwordless_sms/update", $ = "/api/v1/passwordless_sms/transfer", q = "/api/v1/oauth/init", j = "/api/v1/oauth/authenticate", Q = "/api/v1/oauth/link", z = "/api/v1/oauth/unlink", J = "/api/v1/oauth/transfer", Z = "/api/v1/recovery/oauth/init", aa = "/api/v1/recovery/oauth/init_icloud", ea = "/api/v1/recovery/oauth/authenticate", sa = "/api/v1/passkeys/link/init", ta = "/api/v1/passkeys/authenticate/init", ia = "/api/v1/passkeys/register/init", na = "/api/v1/passkeys/link", ra = "/api/v1/passkeys/authenticate", _a = "/api/v1/passkeys/register", oa = "/api/v1/telegram/authenticate", la = "/api/v1/telegram/link", ua = "/api/v1/telegram/unlink", da = "/api/v1/telegram/transfer", pa = "/api/v1/mfa/passwordless_sms/init", ca = "/api/v1/mfa/passkeys/init", Ea = "/api/v1/users/me/accept_terms", Aa = "/api/v1/analytics_events", ha = "/api/v1/custom_jwt_account/authenticate", va = "/api/v1/guest/authenticate", Sa = "/api/v1/plugins/moonpay_on_ramp/sign", Ta = "/api/v1/funding/coinbase_on_ramp/init", ma = "/api/v1/funding/coinbase_on_ramp/status", wa = "/api/v1/wallets/revoke", Ia = "/api/v1/users/me", Oa = "/api/v1/scan/transaction", Da = ()=>{
    throw Error("You need to wrap your application with the <PrivyProvider> initialized with your app id.");
}, La = (a)=>()=>{
        throw Error(a.trim());
    }, Na = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    setAuthenticated: Da,
    setUser: Da,
    setIsNewUser: Da,
    isNewUserThisSession: !1,
    walletConnectionStatus: null,
    connectors: [],
    solanaWallets: [],
    rpcConfig: {
        rpcUrls: {}
    },
    showFiatPrices: !0,
    chains: [],
    clientAnalyticsId: null,
    pendingTransaction: null,
    client: null,
    appId: "notAdded",
    customAuthStatus: {
        status: "not-enabled"
    },
    hideWalletUIs: {
        current: !1
    },
    nativeTokenSymbolForChainId: Da,
    initializeWalletProxy: Da,
    getAuthMeta: Da,
    getAuthFlow: Da,
    closePrivyModal: Da,
    openPrivyModal: Da,
    connectWallet: Da,
    initLoginWithWallet: Da,
    loginWithWallet: Da,
    initLoginWithFarcaster: Da,
    loginWithFarcaster: Da,
    loginWithCode: Da,
    initLoginWithEmail: Da,
    initLoginWithSms: Da,
    initUpdateEmail: Da,
    initUpdatePhone: Da,
    resendEmailCode: Da,
    resendSmsCode: Da,
    initLoginWithHeadlessOAuth: Da,
    loginWithHeadlessOAuth: Da,
    crossAppAuthFlow: Da,
    initLoginWithOAuth: Da,
    recoveryOAuthFlow: Da,
    loginWithOAuth: Da,
    passkeyAuthState: {
        status: "initial"
    },
    setPasskeyAuthState: Da,
    initSignupWithPasskey: Da,
    signupWithPasskey: Da,
    initLoginWithPasskey: Da,
    loginWithPasskey: Da,
    initLinkWithPasskey: Da,
    linkWithPasskey: Da,
    refreshSessionAndUser: Da,
    walletProxy: null,
    createAnalyticsEvent: Da,
    acceptTerms: Da,
    getUsdTokenPrice: Da,
    getUsdPriceForSol: Da,
    getSplTokenMetadata: Da,
    recoverPrimaryWallet: Da,
    updateWallets: Da,
    fundWallet: Da,
    openModal: Da,
    setReadyToTrue: Da,
    requestFarcasterSignerStatus: Da,
    initLoginWithTelegram: Da,
    loginWithTelegram: Da,
    generateSiweMessage: Da,
    generateSiweMessageForSmartWallet: Da,
    linkWithSiwe: Da,
    linkSmartWallet: Da,
    delegateWallet: Da,
    revokeDelegatedWallets: Da,
    createEmbeddedSolanaWallet: Da,
    exportSolanaWallet: Da,
    connectCoinbaseSmartWallet: Da,
    initiateAccountTransfer: Da,
    emailOtpState: {
        status: "initial"
    },
    setEmailOtpState: Da,
    smsOtpState: {
        status: "initial"
    },
    setSmsOtpState: Da,
    siweState: {
        status: "initial"
    },
    setSiweState: Da,
    oAuthState: {
        status: "initial"
    },
    setOAuthState: Da,
    telegramAuthState: {
        status: "initial"
    },
    setTelegramAuthState: Da,
    isHeadlessOAuthLoading: !1,
    isHeadlessSigning: Da
}), ga = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Na);
;
}}),
"[project]/node_modules/.pnpm/@privy-io+react-auth@2.6.4_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-_c95c1eec79214f2df3c204ffc2cd9d5d/node_modules/@privy-io/react-auth/dist/esm/privy-provider-DSQ8FU83.mjs [app-client] (ecmascript) <export f as usePrivy>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePrivy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$privy$2d$io$2b$react$2d$auth$40$2$2e$6$2e$4_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$_c95c1eec79214f2df3c204ffc2cd9d5d$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$privy$2d$provider$2d$DSQ8FU83$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$privy$2d$io$2b$react$2d$auth$40$2$2e$6$2e$4_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$_c95c1eec79214f2df3c204ffc2cd9d5d$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$privy$2d$provider$2d$DSQ8FU83$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@privy-io+react-auth@2.6.4_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-_c95c1eec79214f2df3c204ffc2cd9d5d/node_modules/@privy-io/react-auth/dist/esm/privy-provider-DSQ8FU83.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=36647_%40privy-io_react-auth_dist_esm_adf2b60c._.js.map