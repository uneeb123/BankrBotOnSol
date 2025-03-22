(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_ac2959e4._.js", {

"[project]/src/lib/privy.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Privy configuration
__turbopack_context__.s({
    "privyAppId": (()=>privyAppId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const privyAppId = ("TURBOPACK compile-time value", "cm8jy00by007ndd8pzmrbqnyj") || "";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PrivyClientProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PrivyClientProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$privy$2d$io$2b$react$2d$auth$40$2$2e$6$2e$4_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$_c95c1eec79214f2df3c204ffc2cd9d5d$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$privy$2d$provider$2d$DSQ8FU83$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__PrivyProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@privy-io+react-auth@2.6.4_@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-_c95c1eec79214f2df3c204ffc2cd9d5d/node_modules/@privy-io/react-auth/dist/esm/privy-provider-DSQ8FU83.mjs [app-client] (ecmascript) <export m as PrivyProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$privy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/privy.ts [app-client] (ecmascript)");
"use client";
;
;
;
function PrivyClientProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$privy$2d$io$2b$react$2d$auth$40$2$2e$6$2e$4_$40$solana$2b$web3$2e$js$40$1$2e$98$2e$0_bufferutil$40$4$2e$0$2e$9_encoding$40$0$2e$1$2e$13_utf$2d$_c95c1eec79214f2df3c204ffc2cd9d5d$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$privy$2d$provider$2d$DSQ8FU83$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__m__as__PrivyProvider$3e$__["PrivyProvider"], {
        appId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$privy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privyAppId"],
        config: {
            loginMethods: [
                "twitter"
            ],
            appearance: {
                theme: "dark",
                accentColor: "#000000"
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/PrivyClientProvider.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PrivyClientProvider;
var _c;
__turbopack_context__.k.register(_c, "PrivyClientProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ac2959e4._.js.map