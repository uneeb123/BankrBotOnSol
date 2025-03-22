(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/4fe5b_@solflare-wallet_metamask-sdk_lib_esm_30f397ee._.js", {

"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addSignature": (()=>addSignature),
    "isLegacyTransactionInstance": (()=>isLegacyTransactionInstance),
    "serializeTransaction": (()=>serializeTransaction),
    "serializeTransactionMessage": (()=>serializeTransactionMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_$40$babel$2b$core$40$7$2e$26$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_@babel+core@7.26.10_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
function isLegacyTransactionInstance(transaction) {
    return transaction.version === undefined;
}
function serializeTransaction(transaction) {
    return isLegacyTransactionInstance(transaction) ? transaction.serialize({
        verifySignatures: false,
        requireAllSignatures: false
    }) : transaction.serialize();
}
function serializeTransactionMessage(transaction) {
    return isLegacyTransactionInstance(transaction) ? transaction.serializeMessage() : transaction.message.serialize();
}
function addSignature(transaction, publicKey, signature) {
    if (isLegacyTransactionInstance(transaction)) {
        transaction.addSignature(publicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_$40$babel$2b$core$40$7$2e$26$2e$10_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(signature));
    } else {
        const signerPubkeys = transaction.message.staticAccountKeys.slice(0, transaction.message.header.numRequiredSignatures);
        const signerIndex = signerPubkeys.findIndex((pubkey)=>pubkey.equals(publicKey));
        if (signerIndex >= 0) {
            transaction.signatures[signerIndex] = signature;
        }
    }
}
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/detectProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detectProvider": (()=>detectProvider),
    "isSnapSupported": (()=>isSnapSupported)
});
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function isSnapSupported(provider) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            yield provider.request({
                method: 'wallet_getSnaps'
            });
            return true;
        } catch (error) {
            return false;
        }
    });
}
function detectProvider() {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const provider = window.ethereum;
            if (!provider) {
                return null;
            }
            if (provider.providers && Array.isArray(provider.providers)) {
                const providers = provider.providers;
                for (const provider of providers){
                    if (yield isSnapSupported(provider)) {
                        return provider;
                    }
                }
            }
            if (provider.detected && Array.isArray(provider.detected)) {
                const providers = provider.detected;
                for (const provider of providers){
                    if (yield isSnapSupported(provider)) {
                        return provider;
                    }
                }
            }
            if (yield isSnapSupported(provider)) {
                return provider;
            }
            return null;
        } catch (error) {
            console.error(error);
            return null;
        }
    });
}
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/solana.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This is copied from @solana/wallet-standard-chains
/** Solana Mainnet (beta) cluster, e.g. https://api.mainnet-beta.solana.com */ __turbopack_context__.s({
    "SOLANA_CHAINS": (()=>SOLANA_CHAINS),
    "SOLANA_DEVNET_CHAIN": (()=>SOLANA_DEVNET_CHAIN),
    "SOLANA_LOCALNET_CHAIN": (()=>SOLANA_LOCALNET_CHAIN),
    "SOLANA_MAINNET_CHAIN": (()=>SOLANA_MAINNET_CHAIN),
    "SOLANA_TESTNET_CHAIN": (()=>SOLANA_TESTNET_CHAIN),
    "isSolanaChain": (()=>isSolanaChain)
});
const SOLANA_MAINNET_CHAIN = 'solana:mainnet';
const SOLANA_DEVNET_CHAIN = 'solana:devnet';
const SOLANA_TESTNET_CHAIN = 'solana:testnet';
const SOLANA_LOCALNET_CHAIN = 'solana:localnet';
const SOLANA_CHAINS = [
    SOLANA_MAINNET_CHAIN,
    SOLANA_DEVNET_CHAIN,
    SOLANA_TESTNET_CHAIN,
    SOLANA_LOCALNET_CHAIN
];
function isSolanaChain(chain) {
    return SOLANA_CHAINS.includes(chain);
}
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/account.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This is copied with modification from @wallet-standard/wallet
__turbopack_context__.s({
    "StandardSolflareMetaMaskWalletAccount": (()=>StandardSolflareMetaMaskWalletAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$standard$2d$features$40$1$2e$3$2e$0$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signAndSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signAndSendTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$standard$2d$features$40$1$2e$3$2e$0$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$standard$2d$features$40$1$2e$3$2e$0$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+wallet-standard-features@1.3.0/node_modules/@solana/wallet-standard-features/lib/esm/signTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/solana.js [app-client] (ecmascript)");
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _StandardSolflareMetaMaskWalletAccount_address, _StandardSolflareMetaMaskWalletAccount_publicKey, _StandardSolflareMetaMaskWalletAccount_chains, _StandardSolflareMetaMaskWalletAccount_features, _StandardSolflareMetaMaskWalletAccount_label, _StandardSolflareMetaMaskWalletAccount_icon;
;
;
const chains = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_CHAINS"];
const features = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$standard$2d$features$40$1$2e$3$2e$0$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signAndSendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaSignAndSendTransaction"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$standard$2d$features$40$1$2e$3$2e$0$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaSignTransaction"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$wallet$2d$standard$2d$features$40$1$2e$3$2e$0$2f$node_modules$2f40$solana$2f$wallet$2d$standard$2d$features$2f$lib$2f$esm$2f$signMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaSignMessage"]
];
class StandardSolflareMetaMaskWalletAccount {
    get address() {
        return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_address, "f");
    }
    get publicKey() {
        return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_publicKey, "f").slice();
    }
    get chains() {
        return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_chains, "f").slice();
    }
    get features() {
        return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_features, "f").slice();
    }
    get label() {
        return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_label, "f");
    }
    get icon() {
        return __classPrivateFieldGet(this, _StandardSolflareMetaMaskWalletAccount_icon, "f");
    }
    constructor({ address, publicKey, label, icon }){
        _StandardSolflareMetaMaskWalletAccount_address.set(this, void 0);
        _StandardSolflareMetaMaskWalletAccount_publicKey.set(this, void 0);
        _StandardSolflareMetaMaskWalletAccount_chains.set(this, void 0);
        _StandardSolflareMetaMaskWalletAccount_features.set(this, void 0);
        _StandardSolflareMetaMaskWalletAccount_label.set(this, void 0);
        _StandardSolflareMetaMaskWalletAccount_icon.set(this, void 0);
        if (new.target === StandardSolflareMetaMaskWalletAccount) {
            Object.freeze(this);
        }
        __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_address, address, "f");
        __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_publicKey, publicKey, "f");
        __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_chains, chains, "f");
        __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_features, features, "f");
        __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_label, label, "f");
        __classPrivateFieldSet(this, _StandardSolflareMetaMaskWalletAccount_icon, icon, "f");
    }
}
_StandardSolflareMetaMaskWalletAccount_address = new WeakMap(), _StandardSolflareMetaMaskWalletAccount_publicKey = new WeakMap(), _StandardSolflareMetaMaskWalletAccount_chains = new WeakMap(), _StandardSolflareMetaMaskWalletAccount_features = new WeakMap(), _StandardSolflareMetaMaskWalletAccount_label = new WeakMap(), _StandardSolflareMetaMaskWalletAccount_icon = new WeakMap();
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bs58@5.0.0/node_modules/bs58/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$detectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/detectProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/solana.js [app-client] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
;
;
;
;
;
;
class SolflareMetaMask extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    constructor(config){
        super();
        this._network = 'mainnet-beta';
        this._iframeParams = {};
        this._element = null;
        this._iframe = null;
        this._publicKey = null;
        this._account = null;
        this._isConnected = false;
        this._connectHandler = null;
        this._messageHandlers = {};
        this._handleEvent = (event)=>{
            var _a, _b;
            switch(event.type){
                case 'connect':
                    {
                        this._collapseIframe();
                        if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.publicKey) {
                            this._publicKey = event.data.publicKey;
                            this._isConnected = true;
                            if (this._connectHandler) {
                                this._connectHandler.resolve();
                                this._connectHandler = null;
                            }
                            this._connected();
                        } else {
                            if (this._connectHandler) {
                                this._connectHandler.reject();
                                this._connectHandler = null;
                            }
                            this._disconnected();
                        }
                        return;
                    }
                case 'disconnect':
                    {
                        if (this._connectHandler) {
                            this._connectHandler.reject();
                            this._connectHandler = null;
                        }
                        this._disconnected();
                        return;
                    }
                case 'accountChanged':
                    {
                        if ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) {
                            this._publicKey = event.data.publicKey;
                            this.emit('accountChanged', this.publicKey);
                            this._standardConnected();
                        } else {
                            this.emit('accountChanged', undefined);
                            this._standardDisconnected();
                        }
                        return;
                    }
                default:
                    {
                        return;
                    }
            }
        };
        this._handleResize = (data)=>{
            if (data.resizeMode === 'full') {
                if (data.params.mode === 'fullscreen') {
                    this._expandIframe();
                } else if (data.params.mode === 'hide') {
                    this._collapseIframe();
                }
            } else if (data.resizeMode === 'coordinates') {
                this._resizeIframe(data.params);
            }
        };
        this._handleMessage = (event)=>{
            var _a;
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== 'solflareIframeToWalletAdapter') {
                return;
            }
            const data = event.data.data || {};
            if (data.type === 'event') {
                this._handleEvent(data.event);
            } else if (data.type === 'resize') {
                this._handleResize(data);
            } else if (data.type === 'response') {
                if (this._messageHandlers[data.id]) {
                    const { resolve, reject } = this._messageHandlers[data.id];
                    delete this._messageHandlers[data.id];
                    if (data.error) {
                        reject(data.error);
                    } else {
                        resolve(data.result);
                    }
                }
            }
        };
        this._removeElement = ()=>{
            if (this._element) {
                this._element.remove();
                this._element = null;
            }
        };
        this._removeDanglingElements = ()=>{
            const elements = document.getElementsByClassName('solflare-metamask-wallet-adapter-iframe');
            for (const element of elements){
                if (element.parentElement) {
                    element.remove();
                }
            }
        };
        this._injectElement = ()=>{
            this._removeElement();
            this._removeDanglingElements();
            const params = Object.assign(Object.assign({}, this._iframeParams), {
                mm: true,
                v: 1,
                cluster: this._network || 'mainnet-beta',
                origin: window.location.origin || '',
                title: document.title || ''
            });
            const queryString = Object.keys(params).map((key)=>`${key}=${encodeURIComponent(params[key])}`).join('&');
            const iframeUrl = `${SolflareMetaMask.IFRAME_URL}?${queryString}`;
            this._element = document.createElement('div');
            this._element.className = 'solflare-metamask-wallet-adapter-iframe';
            this._element.innerHTML = `
      <iframe src='${iframeUrl}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `;
            document.body.appendChild(this._element);
            this._iframe = this._element.querySelector('iframe');
            window.addEventListener('message', this._handleMessage, false);
        };
        this._collapseIframe = ()=>{
            if (this._iframe) {
                this._iframe.style.top = '';
                this._iframe.style.right = '';
                this._iframe.style.height = '2px';
                this._iframe.style.width = '2px';
            }
        };
        this._expandIframe = ()=>{
            if (this._iframe) {
                this._iframe.style.top = '0px';
                this._iframe.style.bottom = '0px';
                this._iframe.style.left = '0px';
                this._iframe.style.right = '0px';
                this._iframe.style.width = '100%';
                this._iframe.style.height = '100%';
            }
        };
        this._resizeIframe = (params)=>{
            if (!this._iframe) {
                return;
            }
            this._iframe.style.top = isFinite(params.top) ? `${params.top}px` : '';
            this._iframe.style.bottom = isFinite(params.bottom) ? `${params.bottom}px` : '';
            this._iframe.style.left = isFinite(params.left) ? `${params.left}px` : '';
            this._iframe.style.right = isFinite(params.right) ? `${params.right}px` : '';
            this._iframe.style.width = isFinite(params.width) ? `${params.width}px` : params.width;
            this._iframe.style.height = isFinite(params.height) ? `${params.height}px` : params.height;
        };
        this._sendIframeMessage = (data)=>{
            if (!this.connected || !this.publicKey) {
                throw new Error('Wallet not connected');
            }
            return new Promise((resolve, reject)=>{
                var _a, _b;
                const messageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$9$2e$0$2e$1$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                this._messageHandlers[messageId] = {
                    resolve,
                    reject
                };
                (_b = (_a = this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
                    channel: 'solflareWalletAdapterToIframe',
                    data: Object.assign({
                        id: messageId
                    }, data)
                }, '*');
            });
        };
        this._connected = ()=>{
            this._isConnected = true;
            this.emit('connect', this.publicKey);
            this._standardConnected();
        };
        this._disconnected = ()=>{
            this._publicKey = null;
            this._isConnected = false;
            window.removeEventListener('message', this._handleMessage, false);
            this._removeElement();
            this.emit('disconnect');
            this._standardDisconnected();
        };
        this._standardConnected = ()=>{
            if (!this.publicKey) {
                return;
            }
            const address = this.publicKey.toString();
            if (!this._account || this._account.address !== address) {
                this._account = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardSolflareMetaMaskWalletAccount"]({
                    address,
                    publicKey: this.publicKey.toBytes()
                });
                this.emit('standard_change', {
                    accounts: this.standardAccounts
                });
            }
        };
        this._standardDisconnected = ()=>{
            if (this._account) {
                this._account = null;
                this.emit('standard_change', {
                    accounts: this.standardAccounts
                });
            }
        };
        if (config === null || config === void 0 ? void 0 : config.network) {
            this._network = config === null || config === void 0 ? void 0 : config.network;
        }
        if (window.SolflareMetaMaskParams) {
            this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), window.SolflareMetaMaskParams);
        }
        if (config === null || config === void 0 ? void 0 : config.params) {
            this._iframeParams = Object.assign(Object.assign({}, this._iframeParams), config === null || config === void 0 ? void 0 : config.params);
        }
    }
    get publicKey() {
        return this._publicKey ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](this._publicKey) : null;
    }
    get standardAccount() {
        return this._account;
    }
    get standardAccounts() {
        return this._account ? [
            this._account
        ] : [];
    }
    get isConnected() {
        return this._isConnected;
    }
    get connected() {
        return this.isConnected;
    }
    get autoApprove() {
        return false;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.connected) {
                return;
            }
            this._injectElement();
            yield new Promise((resolve, reject)=>{
                this._connectHandler = {
                    resolve,
                    reject
                };
            });
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this._sendIframeMessage({
                method: 'disconnect'
            });
            this._disconnected();
        });
    }
    signTransaction(transaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected || !this.publicKey) {
                throw new Error('Wallet not connected');
            }
            try {
                const serializedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction);
                const response = yield this._sendIframeMessage({
                    method: 'signTransactionV2',
                    params: {
                        transaction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(serializedTransaction)
                    }
                });
                const { transaction: signedTransaction } = response;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLegacyTransactionInstance"])(transaction) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(signedTransaction)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(signedTransaction));
            } catch (e) {
                throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || 'Failed to sign transaction');
            }
        });
    }
    signAllTransactions(transactions) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected || !this.publicKey) {
                throw new Error('Wallet not connected');
            }
            try {
                const serializedTransactions = transactions.map((transaction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction));
                const { transactions: signedTransactions } = yield this._sendIframeMessage({
                    method: 'signAllTransactionsV2',
                    params: {
                        transactions: serializedTransactions.map((transaction)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(transaction))
                    }
                });
                return signedTransactions.map((signedTransaction, index)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLegacyTransactionInstance"])(transactions[index]) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"].from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(signedTransaction)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(signedTransaction));
                });
            } catch (e) {
                throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || 'Failed to sign transactions');
            }
        });
    }
    signAndSendTransaction(transaction, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected || !this.publicKey) {
                throw new Error('Wallet not connected');
            }
            try {
                const serializedTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction);
                const { signature } = yield this._sendIframeMessage({
                    method: 'signAndSendTransaction',
                    params: {
                        transaction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(serializedTransaction),
                        options
                    }
                });
                return signature;
            } catch (e) {
                throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || 'Failed to sign and send transaction');
            }
        });
    }
    signMessage(data, display = 'utf8') {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected || !this.publicKey) {
                throw new Error('Wallet not connected');
            }
            try {
                const { signature } = yield this._sendIframeMessage({
                    method: 'signMessage',
                    params: {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].encode(data),
                        display
                    }
                });
                return Uint8Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(signature));
            } catch (e) {
                throw new Error(((_a = e === null || e === void 0 ? void 0 : e.toString) === null || _a === void 0 ? void 0 : _a.call(e)) || 'Failed to sign message');
            }
        });
    }
    sign(data, display = 'utf8') {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.signMessage(data, display);
        });
    }
    static isSupported() {
        return __awaiter(this, void 0, void 0, function*() {
            const provider = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$detectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectProvider"])();
            return !!provider;
        });
    }
    standardSignAndSendTransaction(...inputs) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected) throw new Error('not connected');
            const outputs = [];
            if (inputs.length === 1) {
                const { transaction, account, chain, options } = inputs[0];
                const { minContextSlot, preflightCommitment, skipPreflight, maxRetries } = options || {};
                if (account !== this._account) throw new Error('invalid account');
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolanaChain"])(chain)) throw new Error('invalid chain');
                const signature = yield this.signAndSendTransaction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(transaction), {
                    preflightCommitment,
                    minContextSlot,
                    maxRetries,
                    skipPreflight
                });
                outputs.push({
                    signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].decode(signature)
                });
            } else if (inputs.length > 1) {
                for (const input of inputs){
                    outputs.push(...yield this.standardSignAndSendTransaction(input));
                }
            }
            return outputs;
        });
    }
    standardSignTransaction(...inputs) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected) throw new Error('not connected');
            const outputs = [];
            if (inputs.length === 1) {
                const { transaction, account, chain } = inputs[0];
                if (account !== this._account) throw new Error('invalid account');
                if (chain && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolanaChain"])(chain)) throw new Error('invalid chain');
                const signedTransaction = yield this.signTransaction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(transaction));
                outputs.push({
                    signedTransaction: signedTransaction.serialize()
                });
            } else if (inputs.length > 1) {
                let chain;
                for (const input of inputs){
                    if (input.account !== this._account) throw new Error('invalid account');
                    if (input.chain) {
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSolanaChain"])(input.chain)) throw new Error('invalid chain');
                        if (chain) {
                            if (input.chain !== chain) throw new Error('conflicting chain');
                        } else {
                            chain = input.chain;
                        }
                    }
                }
                const transactions = inputs.map(({ transaction })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(transaction));
                const signedTransactions = yield this.signAllTransactions(transactions);
                outputs.push(...signedTransactions.map((signedTransaction)=>({
                        signedTransaction: signedTransaction.serialize()
                    })));
            }
            return outputs;
        });
    }
    standardSignMessage(...inputs) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected) throw new Error('not connected');
            const outputs = [];
            if (inputs.length === 1) {
                const { message, account } = inputs[0];
                if (account !== this._account) throw new Error('invalid account');
                const signature = yield this.signMessage(message);
                outputs.push({
                    signedMessage: message,
                    signature
                });
            } else if (inputs.length > 1) {
                for (const input of inputs){
                    outputs.push(...yield this.standardSignMessage(input));
                }
            }
            return outputs;
        });
    }
}
SolflareMetaMask.IFRAME_URL = 'https://widget.solflare.com/';
const __TURBOPACK__default__export__ = SolflareMetaMask;
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eventemitter3$40$5$2e$0$2e$1$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bs58$40$5$2e$0$2e$0$2f$node_modules$2f$bs58$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bs58@5.0.0/node_modules/bs58/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$detectProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/detectProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$solana$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/solana.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StandardSolflareMetaMaskWalletAccount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardSolflareMetaMaskWalletAccount"]),
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$standard$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/standard/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StandardSolflareMetaMaskWalletAccount": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StandardSolflareMetaMaskWalletAccount"]),
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$solflare$2d$wallet$2b$metamask$2d$sdk$40$1$2e$0$2e$3_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$8$2d$validate$40$5$2e$0$2e$10_$2f$node_modules$2f40$solflare$2d$wallet$2f$metamask$2d$sdk$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@solflare-wallet+metamask-sdk@1.0.3_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10_/node_modules/@solflare-wallet/metamask-sdk/lib/esm/index.js [app-client] (ecmascript) <exports>");
}}),
}]);

//# sourceMappingURL=4fe5b_%40solflare-wallet_metamask-sdk_lib_esm_30f397ee._.js.map