(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/02814_viem__esm_c7bc87a7._.js", {

"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/version.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "version": (()=>version)
});
const version = '2.23.2'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseError": (()=>BaseError),
    "setErrorConfig": (()=>setErrorConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/version.js [app-client] (ecmascript)");
;
let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug })=>docsPath ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}` : undefined,
    version: `viem@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = (()=>{
            if (args.cause instanceof BaseError) return args.cause.details;
            if (args.cause?.message) return args.cause.message;
            return args.details;
        })();
        const docsPath = (()=>{
            if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({
            ...args,
            docsPath
        });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsUrl ? [
                `Docs: ${docsUrl}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            ...errorConfig.version ? [
                `Version: ${errorConfig.version}`
            ] : []
        ].join('\n');
        super(message, args.cause ? {
            cause: args.cause
        } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err)) return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause !== undefined) return walk(err.cause, fn);
    return fn ? null : err;
} //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAddressError": (()=>InvalidAddressError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class InvalidAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address }){
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.'
            ],
            name: 'InvalidAddressError'
        });
    }
} //# sourceMappingURL=address.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isHex": (()=>isHex)
});
function isHex(value, { strict = true } = {}) {
    if (!value) return false;
    if (typeof value !== 'string') return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
} //# sourceMappingURL=isHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidBytesLengthError": (()=>InvalidBytesLengthError),
    "SizeExceedsPaddingSizeError": (()=>SizeExceedsPaddingSizeError),
    "SliceOffsetOutOfBoundsError": (()=>SliceOffsetOutOfBoundsError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class SliceOffsetOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset, position, size }){
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`, {
            name: 'SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, {
            name: 'SizeExceedsPaddingSizeError'
        });
    }
}
class InvalidBytesLengthError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ size, targetSize, type }){
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, {
            name: 'InvalidBytesLengthError'
        });
    }
} //# sourceMappingURL=data.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/pad.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "pad": (()=>pad),
    "padBytes": (()=>padBytes),
    "padHex": (()=>padHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/data.js [app-client] (ecmascript)");
;
function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string') return padHex(hexOrBytes, {
        dir,
        size
    });
    return padBytes(hexOrBytes, {
        dir,
        size
    });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null) return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: Math.ceil(hex.length / 2),
        targetSize: size,
        type: 'hex'
    });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null) return bytes;
    if (bytes.length > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeExceedsPaddingSizeError"]({
        size: bytes.length,
        targetSize: size,
        type: 'bytes'
    });
    const paddedBytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
} //# sourceMappingURL=pad.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/encoding.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IntegerOutOfRangeError": (()=>IntegerOutOfRangeError),
    "InvalidBytesBooleanError": (()=>InvalidBytesBooleanError),
    "InvalidHexBooleanError": (()=>InvalidHexBooleanError),
    "InvalidHexValueError": (()=>InvalidHexValueError),
    "SizeOverflowError": (()=>SizeOverflowError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class IntegerOutOfRangeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ max, min, signed, size, value }){
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, {
            name: 'IntegerOutOfRangeError'
        });
    }
}
class InvalidBytesBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(bytes){
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: 'InvalidBytesBooleanError'
        });
    }
}
class InvalidHexBooleanError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(hex){
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: 'InvalidHexBooleanError'
        });
    }
}
class InvalidHexValueError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, {
            name: 'InvalidHexValueError'
        });
    }
}
class SizeOverflowError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenSize, maxSize }){
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, {
            name: 'SizeOverflowError'
        });
    }
} //# sourceMappingURL=encoding.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/size.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "size": (()=>size)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
;
function size(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    })) return Math.ceil((value.length - 2) / 2);
    return value.length;
} //# sourceMappingURL=size.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "trim": (()=>trim)
});
function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for(let i = 0; i < data.length - 1; i++){
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0') sliceLength++;
        else break;
    }
    data = dir === 'left' ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right') data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
} //# sourceMappingURL=trim.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assertSize": (()=>assertSize),
    "fromHex": (()=>fromHex),
    "hexToBigInt": (()=>hexToBigInt),
    "hexToBool": (()=>hexToBool),
    "hexToNumber": (()=>hexToNumber),
    "hexToString": (()=>hexToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/encoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
;
;
;
;
function assertSize(hexOrBytes, { size }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(hexOrBytes) > size) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SizeOverflowError"]({
        givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(hexOrBytes),
        maxSize: size
    });
}
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? {
        to: toOrOpts
    } : toOrOpts;
    const to = opts.to;
    if (to === 'number') return hexToNumber(hex, opts);
    if (to === 'bigint') return hexToBigInt(hex, opts);
    if (to === 'string') return hexToString(hex, opts);
    if (to === 'boolean') return hexToBool(hex, opts);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(hex, opts);
}
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size) assertSize(hex, {
        size: opts.size
    });
    const value = BigInt(hex);
    if (!signed) return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << BigInt(size) * 8n - 1n) - 1n;
    if (value <= max) return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, {
            size: opts.size
        });
        hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(hex);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(hex) === '0x00') return false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(hex) === '0x01') return true;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidHexBooleanError"](hex);
}
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
function hexToString(hex, opts = {}) {
    let bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(hex);
    if (opts.size) {
        assertSize(bytes, {
            size: opts.size
        });
        bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(bytes, {
            dir: 'right'
        });
    }
    return new TextDecoder().decode(bytes);
} //# sourceMappingURL=fromHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "boolToHex": (()=>boolToHex),
    "bytesToHex": (()=>bytesToHex),
    "numberToHex": (()=>numberToHex),
    "stringToHex": (()=>stringToHex),
    "toHex": (()=>toHex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/encoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/pad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
;
;
;
const hexes = /*#__PURE__*/ Array.from({
    length: 256
}, (_v, i)=>i.toString(16).padStart(2, '0'));
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean') return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(hex, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(hex, {
            size: opts.size
        });
    }
    return hex;
}
function bytesToHex(value, opts = {}) {
    let string = '';
    for(let i = 0; i < value.length; i++){
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(hex, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    return hex;
}
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
        else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    } else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if (maxValue && value > maxValue || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntegerOutOfRangeError"]({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(hex, {
        size
    });
    return hex;
}
const encoder = /*#__PURE__*/ new TextEncoder();
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
} //# sourceMappingURL=toHex.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "boolToBytes": (()=>boolToBytes),
    "hexToBytes": (()=>hexToBytes),
    "numberToBytes": (()=>numberToBytes),
    "stringToBytes": (()=>stringToBytes),
    "toBytes": (()=>toBytes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/pad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
;
;
const encoder = /*#__PURE__*/ new TextEncoder();
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint') return numberToBytes(value, opts);
    if (typeof value === 'boolean') return boolToBytes(value, opts);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(value)) return hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(bytes, {
            size: opts.size
        });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
    return undefined;
}
function hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(hex, {
            size: opts.size
        });
        hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(hex, {
            dir: 'right',
            size: opts.size
        });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2) hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for(let index = 0, j = 0; index < length; index++){
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
function numberToBytes(value, opts) {
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(value, opts);
    return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertSize"])(bytes, {
            size: opts.size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(bytes, {
            dir: 'right',
            size: opts.size
        });
    }
    return bytes;
} //# sourceMappingURL=toBytes.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "keccak256": (()=>keccak256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@1.7.1/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
;
function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$1$2e$7$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    }) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBytes"])(value) : value);
    if (to === 'bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(bytes);
} //# sourceMappingURL=keccak256.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/lru.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ __turbopack_context__.s({
    "LruMap": (()=>LruMap)
});
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) this.delete(firstKey);
        }
        return this;
    }
} //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isAddress": (()=>isAddress),
    "isAddressCache": (()=>isAddressCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/lru.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
;
;
const addressRegex = /^0x[a-fA-F0-9]{40}$/;
const isAddressCache = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LruMap"](8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    const cacheKey = `${address}.${strict}`;
    if (isAddressCache.has(cacheKey)) return isAddressCache.get(cacheKey);
    const result = (()=>{
        if (!addressRegex.test(address)) return false;
        if (address.toLowerCase() === address) return true;
        if (strict) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(address) === address;
        return true;
    })();
    isAddressCache.set(cacheKey, result);
    return result;
} //# sourceMappingURL=isAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checksumAddress": (()=>checksumAddress),
    "getAddress": (()=>getAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/lru.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
;
;
;
;
;
const checksumAddressCache = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LruMap"](8192);
function checksumAddress(address_, /**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */ chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToBytes"])(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, /**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */ chainId) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(address, {
        strict: false
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address
    });
    return checksumAddress(address, chainId);
} //# sourceMappingURL=getAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "publicKeyToAddress": (()=>publicKeyToAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
;
;
function publicKeyToAddress(publicKey) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(`0x${publicKey.substring(4)}`).substring(26);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checksumAddress"])(`0x${address}`);
} //# sourceMappingURL=publicKeyToAddress.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/recoverPublicKey.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "recoverPublicKey": (()=>recoverPublicKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
async function recoverPublicKey({ hash, signature }) {
    const hashHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(hash) ? hash : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(hash);
    const { secp256k1 } = await __turbopack_context__.r("[project]/node_modules/.pnpm/@noble+curves@1.8.1/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
    const signature_ = (()=>{
        // typeof signature: `Signature`
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(s)).addRecoveryBit(recoveryBit);
        }
        // typeof signature: `Hex | ByteArray`
        const signatureHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(signature) ? signature : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(signature);
        const yParityOrV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
    if (yParityOrV === 27) return 0;
    if (yParityOrV === 28) return 1;
    throw new Error('Invalid yParityOrV value');
} //# sourceMappingURL=recoverPublicKey.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "recoverAddress": (()=>recoverAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$publicKeyToAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverPublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.23.2_bufferutil@4.0.9_typescript@5.8.2_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/recoverPublicKey.js [app-client] (ecmascript)");
;
;
async function recoverAddress({ hash, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$publicKeyToAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyToAddress"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverPublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverPublicKey"])({
        hash: hash,
        signature
    }));
} //# sourceMappingURL=recoverAddress.js.map
}}),
}]);

//# sourceMappingURL=02814_viem__esm_c7bc87a7._.js.map