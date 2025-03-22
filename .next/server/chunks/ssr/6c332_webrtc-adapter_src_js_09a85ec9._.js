module.exports = {

"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "compactObject": (()=>compactObject),
    "deprecated": (()=>deprecated),
    "detectBrowser": (()=>detectBrowser),
    "disableLog": (()=>disableLog),
    "disableWarnings": (()=>disableWarnings),
    "extractVersion": (()=>extractVersion),
    "filterStats": (()=>filterStats),
    "log": (()=>log),
    "walkStats": (()=>walkStats),
    "wrapPeerConnectionEvent": (()=>wrapPeerConnectionEvent)
});
'use strict';
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
}
function wrapPeerConnectionEvent(window1, eventNameToWrap, wrapper) {
    if (!window1.RTCPeerConnection) {
        return;
    }
    const proto = window1.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) {
            return nativeAddEventListener.apply(this, arguments);
        }
        const wrappedCallback = (e)=>{
            const modifiedEvent = wrapper(e);
            if (modifiedEvent) {
                if (cb.handleEvent) {
                    cb.handleEvent(modifiedEvent);
                } else {
                    cb(modifiedEvent);
                }
            }
        };
        this._eventMap = this._eventMap || {};
        if (!this._eventMap[eventNameToWrap]) {
            this._eventMap[eventNameToWrap] = new Map();
        }
        this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
        return nativeAddEventListener.apply(this, [
            nativeEventName,
            wrappedCallback
        ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
            return nativeRemoveEventListener.apply(this, arguments);
        }
        if (!this._eventMap[eventNameToWrap].has(cb)) {
            return nativeRemoveEventListener.apply(this, arguments);
        }
        const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
        this._eventMap[eventNameToWrap].delete(cb);
        if (this._eventMap[eventNameToWrap].size === 0) {
            delete this._eventMap[eventNameToWrap];
        }
        if (Object.keys(this._eventMap).length === 0) {
            delete this._eventMap;
        }
        return nativeRemoveEventListener.apply(this, [
            nativeEventName,
            unwrappedCb
        ]);
    };
    Object.defineProperty(proto, 'on' + eventNameToWrap, {
        get () {
            return this['_on' + eventNameToWrap];
        },
        set (cb) {
            if (this['_on' + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                delete this['_on' + eventNameToWrap];
            }
            if (cb) {
                this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
            }
        },
        enumerable: true,
        configurable: true
    });
}
function disableLog(bool) {
    if (typeof bool !== 'boolean') {
        return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
function disableWarnings(bool) {
    if (typeof bool !== 'boolean') {
        return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}
function log() {
    if (typeof window === 'object') {
        if (logDisabled_) {
            return;
        }
        if (typeof console !== 'undefined' && typeof console.log === 'function') {
            console.log.apply(console, arguments);
        }
    }
}
function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
        return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
function detectBrowser(window1) {
    // Returned result object.
    const result = {
        browser: null,
        version: null
    };
    // Fail early if it's not a browser
    if (typeof window1 === 'undefined' || !window1.navigator) {
        result.browser = 'Not a browser.';
        return result;
    }
    const { navigator } = window1;
    if (navigator.mozGetUserMedia) {
        result.browser = 'firefox';
        result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia || window1.isSecureContext === false && window1.webkitRTCPeerConnection && !window1.RTCIceGatherer) {
        // Chrome, Chromium, Webview, Opera.
        // Version matches Chrome/WebRTC version.
        // Chrome 74 removed webkitGetUserMedia on http as well so we need the
        // more complicated fallback to webkitRTCPeerConnection.
        result.browser = 'chrome';
        result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
        result.browser = 'edge';
        result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
    } else if (window1.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = 'safari';
        result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
        result.supportsUnifiedPlan = window1.RTCRtpTransceiver && 'currentDirection' in window1.RTCRtpTransceiver.prototype;
    } else {
        result.browser = 'Not a supported browser.';
        return result;
    }
    return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */ function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
function compactObject(data) {
    if (!isObject(data)) {
        return data;
    }
    return Object.keys(data).reduce(function(accumulator, key) {
        const isObj = isObject(data[key]);
        const value = isObj ? compactObject(data[key]) : data[key];
        const isEmptyObject = isObj && !Object.keys(value).length;
        if (value === undefined || isEmptyObject) {
            return accumulator;
        }
        return Object.assign(accumulator, {
            [key]: value
        });
    }, {});
}
function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) {
        return;
    }
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name)=>{
        if (name.endsWith('Id')) {
            walkStats(stats, stats.get(base[name]), resultSet);
        } else if (name.endsWith('Ids')) {
            base[name].forEach((id)=>{
                walkStats(stats, stats.get(id), resultSet);
            });
        }
    });
}
function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
    const filteredResult = new Map();
    if (track === null) {
        return filteredResult;
    }
    const trackStats = [];
    result.forEach((value)=>{
        if (value.type === 'track' && value.trackIdentifier === track.id) {
            trackStats.push(value);
        }
    });
    trackStats.forEach((trackStat)=>{
        result.forEach((stats)=>{
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
                walkStats(result, stats, filteredResult);
            }
        });
    });
    return filteredResult;
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/getusermedia.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimGetUserMedia": (()=>shimGetUserMedia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
const logging = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"];
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    if (!navigator.mediaDevices) {
        return;
    }
    const constraintsToChrome_ = function(c) {
        if (typeof c !== 'object' || c.mandatory || c.optional) {
            return c;
        }
        const cc = {};
        Object.keys(c).forEach((key)=>{
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                return;
            }
            const r = typeof c[key] === 'object' ? c[key] : {
                ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === 'number') {
                r.min = r.max = r.exact;
            }
            const oldname_ = function(prefix, name) {
                if (prefix) {
                    return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                }
                return name === 'deviceId' ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                let oc = {};
                if (typeof r.ideal === 'number') {
                    oc[oldname_('min', key)] = r.ideal;
                    cc.optional.push(oc);
                    oc = {};
                    oc[oldname_('max', key)] = r.ideal;
                    cc.optional.push(oc);
                } else {
                    oc[oldname_('', key)] = r.ideal;
                    cc.optional.push(oc);
                }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_('', key)] = r.exact;
            } else {
                [
                    'min',
                    'max'
                ].forEach((mix)=>{
                    if (r[mix] !== undefined) {
                        cc.mandatory = cc.mandatory || {};
                        cc.mandatory[oldname_(mix, key)] = r[mix];
                    }
                });
            }
        });
        if (c.advanced) {
            cc.optional = (cc.optional || []).concat(c.advanced);
        }
        return cc;
    };
    const shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) {
            return func(constraints);
        }
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === 'object') {
            const remap = function(obj, a, b) {
                if (a in obj && !(b in obj)) {
                    obj[b] = obj[a];
                    delete obj[a];
                }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === 'object') {
            // Shim facingMode for mobile & surface pro.
            let face = constraints.video.facingMode;
            face = face && (typeof face === 'object' ? face : {
                ideal: face
            });
            const getSupportedFacingModeLies = browserDetails.version < 66;
            if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                let matches;
                if (face.exact === 'environment' || face.ideal === 'environment') {
                    matches = [
                        'back',
                        'rear'
                    ];
                } else if (face.exact === 'user' || face.ideal === 'user') {
                    matches = [
                        'front'
                    ];
                }
                if (matches) {
                    // Look for matches in label, or use last cam for back (typical).
                    return navigator.mediaDevices.enumerateDevices().then((devices)=>{
                        devices = devices.filter((d)=>d.kind === 'videoinput');
                        let dev = devices.find((d)=>matches.some((match)=>d.label.toLowerCase().includes(match)));
                        if (!dev && devices.length && matches.includes('back')) {
                            dev = devices[devices.length - 1]; // more likely the back cam
                        }
                        if (dev) {
                            constraints.video.deviceId = face.exact ? {
                                exact: dev.deviceId
                            } : {
                                ideal: dev.deviceId
                            };
                        }
                        constraints.video = constraintsToChrome_(constraints.video);
                        logging('chrome: ' + JSON.stringify(constraints));
                        return func(constraints);
                    });
                }
            }
            constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
    };
    const shimError_ = function(e) {
        if (browserDetails.version >= 64) {
            return e;
        }
        return {
            name: ({
                PermissionDeniedError: 'NotAllowedError',
                PermissionDismissedError: 'NotAllowedError',
                InvalidStateError: 'NotAllowedError',
                DevicesNotFoundError: 'NotFoundError',
                ConstraintNotSatisfiedError: 'OverconstrainedError',
                TrackStartError: 'NotReadableError',
                MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                MediaDeviceKillSwitchOn: 'NotAllowedError',
                TabCaptureError: 'AbortError',
                ScreenCaptureError: 'AbortError',
                DeviceCaptureError: 'AbortError'
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString () {
                return this.name + (this.message && ': ') + this.message;
            }
        };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, (c)=>{
            navigator.webkitGetUserMedia(c, onSuccess, (e)=>{
                if (onError) {
                    onError(shimError_(e));
                }
            });
        });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
            return shimConstraints_(cs, (c)=>origGetUserMedia(c).then((stream)=>{
                    if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                        stream.getTracks().forEach((track)=>{
                            track.stop();
                        });
                        throw new DOMException('', 'NotFoundError');
                    }
                    return stream;
                }, (e)=>Promise.reject(shimError_(e))));
        };
    }
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimGetDisplayMedia": (()=>shimGetDisplayMedia)
});
'use strict';
function shimGetDisplayMedia(window, getSourceId) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
        return;
    }
    if (!window.navigator.mediaDevices) {
        return;
    }
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== 'function') {
        console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        return getSourceId(constraints).then((sourceId)=>{
            const widthSpecified = constraints.video && constraints.video.width;
            const heightSpecified = constraints.video && constraints.video.height;
            const frameRateSpecified = constraints.video && constraints.video.frameRate;
            constraints.video = {
                mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: sourceId,
                    maxFrameRate: frameRateSpecified || 3
                }
            };
            if (widthSpecified) {
                constraints.video.mandatory.maxWidth = widthSpecified;
            }
            if (heightSpecified) {
                constraints.video.mandatory.maxHeight = heightSpecified;
            }
            return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "fixNegotiationNeeded": (()=>fixNegotiationNeeded),
    "shimAddTrackRemoveTrack": (()=>shimAddTrackRemoveTrack),
    "shimAddTrackRemoveTrackWithNative": (()=>shimAddTrackRemoveTrackWithNative),
    "shimGetSendersWithDtmf": (()=>shimGetSendersWithDtmf),
    "shimGetStats": (()=>shimGetStats),
    "shimMediaStream": (()=>shimMediaStream),
    "shimOnTrack": (()=>shimOnTrack),
    "shimPeerConnection": (()=>shimPeerConnection),
    "shimSenderReceiverGetStats": (()=>shimSenderReceiverGetStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
;
;
function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get () {
                return this._ontrack;
            },
            set (f) {
                if (this._ontrack) {
                    this.removeEventListener('track', this._ontrack);
                }
                this.addEventListener('track', this._ontrack = f);
            },
            enumerable: true,
            configurable: true
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            if (!this._ontrackpoly) {
                this._ontrackpoly = (e)=>{
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener('addtrack', (te)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) {
                            receiver = this.getReceivers().find((r)=>r.track && r.track.id === te.track.id);
                        } else {
                            receiver = {
                                track: te.track
                            };
                        }
                        const event = new Event('track');
                        event.track = te.track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach((track)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) {
                            receiver = this.getReceivers().find((r)=>r.track && r.track.id === track.id);
                        } else {
                            receiver = {
                                track
                            };
                        }
                        const event = new Event('track');
                        event.track = track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                };
                this.addEventListener('addstream', this._ontrackpoly);
            }
            return origSetRemoteDescription.apply(this, arguments);
        };
    } else {
        // even if RTCRtpTransceiver is in window, it is only used and
        // emitted in unified-plan. Unfortunately this means we need
        // to unconditionally wrap the event.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"])(window, 'track', (e)=>{
            if (!e.transceiver) {
                Object.defineProperty(e, 'transceiver', {
                    value: {
                        receiver: e.receiver
                    }
                });
            }
            return e;
        });
    }
}
function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
        const shimSenderWithDtmf = function(pc, track) {
            return {
                track,
                get dtmf () {
                    if (this._dtmf === undefined) {
                        if (track.kind === 'audio') {
                            this._dtmf = pc.createDTMFSender(track);
                        } else {
                            this._dtmf = null;
                        }
                    }
                    return this._dtmf;
                },
                _pc: pc
            };
        };
        // augment addTrack when getSenders is not available.
        if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
            };
            const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                let sender = origAddTrack.apply(this, arguments);
                if (!sender) {
                    sender = shimSenderWithDtmf(this, track);
                    this._senders.push(sender);
                }
                return sender;
            };
            const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                origRemoveTrack.apply(this, arguments);
                const idx = this._senders.indexOf(sender);
                if (idx !== -1) {
                    this._senders.splice(idx, 1);
                }
            };
        }
        const origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            this._senders = this._senders || [];
            origAddStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                this._senders.push(shimSenderWithDtmf(this, track));
            });
        };
        const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            this._senders = this._senders || [];
            origRemoveStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                const sender = this._senders.find((s)=>s.track === track);
                if (sender) {
                    this._senders.splice(this._senders.indexOf(sender), 1);
                }
            });
        };
    } else if (typeof window === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') {
                        this._dtmf = this._pc.createDTMFSender(this.track);
                    } else {
                        this._dtmf = null;
                    }
                }
                return this._dtmf;
            }
        });
    }
}
function shimGetStats(window) {
    if (!window.RTCPeerConnection) {
        return;
    }
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        // If selector is a function then we are in the old style stats so just
        // pass back the original getStats format to avoid breaking old users.
        if (arguments.length > 0 && typeof selector === 'function') {
            return origGetStats.apply(this, arguments);
        }
        // When spec-style getStats is supported, return those when called with
        // either no arguments or the selector argument is null.
        if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
            return origGetStats.apply(this, []);
        }
        const fixChromeStats_ = function(response) {
            const standardReport = {};
            const reports = response.result();
            reports.forEach((report)=>{
                const standardStats = {
                    id: report.id,
                    timestamp: report.timestamp,
                    type: {
                        localcandidate: 'local-candidate',
                        remotecandidate: 'remote-candidate'
                    }[report.type] || report.type
                };
                report.names().forEach((name)=>{
                    standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
            });
            return standardReport;
        };
        // shim getStats with maplike support
        const makeMapStats = function(stats) {
            return new Map(Object.keys(stats).map((key)=>[
                    key,
                    stats[key]
                ]));
        };
        if (arguments.length >= 2) {
            const successCallbackWrapper_ = function(response) {
                onSucc(makeMapStats(fixChromeStats_(response)));
            };
            return origGetStats.apply(this, [
                successCallbackWrapper_,
                selector
            ]);
        }
        // promise-support
        return new Promise((resolve, reject)=>{
            origGetStats.apply(this, [
                function(response) {
                    resolve(makeMapStats(fixChromeStats_(response)));
                },
                reject
            ]);
        }).then(onSucc, onErr);
    };
}
function shimSenderReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
        return;
    }
    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                const senders = origGetSenders.apply(this, []);
                senders.forEach((sender)=>sender._pc = this);
                return senders;
            };
        }
        const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) {
            window.RTCPeerConnection.prototype.addTrack = function addTrack() {
                const sender = origAddTrack.apply(this, arguments);
                sender._pc = this;
                return sender;
            };
        }
        window.RTCRtpSender.prototype.getStats = function getStats() {
            const sender = this;
            return this._pc.getStats().then((result)=>/* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterStats"])(result, sender.track, true));
        };
    }
    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
        const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) {
            window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
                const receivers = origGetReceivers.apply(this, []);
                receivers.forEach((receiver)=>receiver._pc = this);
                return receivers;
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"])(window, 'track', (e)=>{
            e.receiver._pc = e.srcElement;
            return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function getStats() {
            const receiver = this;
            return this._pc.getStats().then((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterStats"])(result, receiver.track, false));
        };
    }
    if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
        return;
    }
    // shim RTCPeerConnection.getStats(track).
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
            const track = arguments[0];
            let sender;
            let receiver;
            let err;
            this.getSenders().forEach((s)=>{
                if (s.track === track) {
                    if (sender) {
                        err = true;
                    } else {
                        sender = s;
                    }
                }
            });
            this.getReceivers().forEach((r)=>{
                if (r.track === track) {
                    if (receiver) {
                        err = true;
                    } else {
                        receiver = r;
                    }
                }
                return r.track === track;
            });
            if (err || sender && receiver) {
                return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
            } else if (sender) {
                return sender.getStats();
            } else if (receiver) {
                return receiver.getStats();
            }
            return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
        }
        return origGetStats.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map((streamId)=>this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (!stream) {
            return origAddTrack.apply(this, arguments);
        }
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) {
            this._shimmedLocalStreams[stream.id] = [
                stream,
                sender
            ];
        } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
            this._shimmedLocalStreams[stream.id].push(sender);
        }
        return sender;
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            }
        });
        const existingSenders = this.getSenders();
        origAddStream.apply(this, arguments);
        const newSenders = this.getSenders().filter((newSender)=>existingSenders.indexOf(newSender) === -1);
        this._shimmedLocalStreams[stream.id] = [
            stream
        ].concat(newSenders);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender) {
            Object.keys(this._shimmedLocalStreams).forEach((streamId)=>{
                const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
                if (idx !== -1) {
                    this._shimmedLocalStreams[streamId].splice(idx, 1);
                }
                if (this._shimmedLocalStreams[streamId].length === 1) {
                    delete this._shimmedLocalStreams[streamId];
                }
            });
        }
        return origRemoveTrack.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrack(window, browserDetails) {
    if (!window.RTCPeerConnection) {
        return;
    }
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
        return shimAddTrackRemoveTrackWithNative(window);
    }
    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        const nativeStreams = origGetLocalStreams.apply(this);
        this._reverseStreams = this._reverseStreams || {};
        return nativeStreams.map((stream)=>this._reverseStreams[stream.id]);
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            }
        });
        // Add identity mapping for consistency with addTrack.
        // Unless this is being used with a stream from addTrack.
        if (!this._reverseStreams[stream.id]) {
            const newStream = new window.MediaStream(stream.getTracks());
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            stream = newStream;
        }
        origAddStream.apply(this, [
            stream
        ]);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        origRemoveStream.apply(this, [
            this._streams[stream.id] || stream
        ]);
        delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
        delete this._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (this.signalingState === 'closed') {
            throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        }
        const streams = [].slice.call(arguments, 1);
        if (streams.length !== 1 || !streams[0].getTracks().find((t)=>t === track)) {
            // this is not fully correct but all we can manage without
            // [[associated MediaStreams]] internal slot.
            throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
        }
        const alreadyExists = this.getSenders().find((s)=>s.track === track);
        if (alreadyExists) {
            throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        const oldStream = this._streams[stream.id];
        if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
            // Trigger ONN async.
            Promise.resolve().then(()=>{
                this.dispatchEvent(new Event('negotiationneeded'));
            });
        } else {
            const newStream = new window.MediaStream([
                track
            ]);
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            this.addStream(newStream);
        }
        return this.getSenders().find((s)=>s.track === track);
    };
    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    function replaceExternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    [
        'createOffer',
        'createAnswer'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                const args = arguments;
                const isLegacyCall = arguments.length && typeof arguments[0] === 'function';
                if (isLegacyCall) {
                    return nativeMethod.apply(this, [
                        (description)=>{
                            const desc = replaceInternalStreamId(this, description);
                            args[0].apply(null, [
                                desc
                            ]);
                        },
                        (err)=>{
                            if (args[1]) {
                                args[1].apply(null, err);
                            }
                        },
                        arguments[2]
                    ]);
                }
                return nativeMethod.apply(this, arguments).then((description)=>replaceInternalStreamId(this, description));
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        if (!arguments.length || !arguments[0].type) {
            return origSetLocalDescription.apply(this, arguments);
        }
        arguments[0] = replaceExternalStreamId(this, arguments[0]);
        return origSetLocalDescription.apply(this, arguments);
    };
    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
        get () {
            const description = origLocalDescription.get.apply(this);
            if (description.type === '') {
                return description;
            }
            return replaceInternalStreamId(this, description);
        }
    });
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        if (this.signalingState === 'closed') {
            throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        }
        // We can not yet check for sender instanceof RTCRtpSender
        // since we shim RTPSender. So we check if sender._pc is set.
        if (!sender._pc) {
            throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
        }
        const isLocal = sender._pc === this;
        if (!isLocal) {
            throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
        }
        // Search for the native stream the senders track belongs to.
        this._streams = this._streams || {};
        let stream;
        Object.keys(this._streams).forEach((streamid)=>{
            const hasTrack = this._streams[streamid].getTracks().find((track)=>sender.track === track);
            if (hasTrack) {
                stream = this._streams[streamid];
            }
        });
        if (stream) {
            if (stream.getTracks().length === 1) {
                // if this is the last track of the stream, remove the stream. This
                // takes care of any shimmed _senders.
                this.removeStream(this._reverseStreams[stream.id]);
            } else {
                // relying on the same odd chrome behaviour as above.
                stream.removeTrack(sender.track);
            }
            this.dispatchEvent(new Event('negotiationneeded'));
        }
    };
}
function shimPeerConnection(window, browserDetails) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
        // very basic support for old versions.
        window.RTCPeerConnection = window.webkitRTCPeerConnection;
    }
    if (!window.RTCPeerConnection) {
        return;
    }
    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    if (browserDetails.version < 53) {
        [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(method) {
            const nativeMethod = window.RTCPeerConnection.prototype[method];
            const methodObj = {
                [method] () {
                    arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                    return nativeMethod.apply(this, arguments);
                }
            };
            window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
    }
}
function fixNegotiationNeeded(window, browserDetails) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"])(window, 'negotiationneeded', (e)=>{
        const pc = e.target;
        if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
            if (pc.signalingState !== 'stable') {
                return;
            }
        }
        return e;
    });
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/getusermedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fixNegotiationNeeded": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fixNegotiationNeeded"]),
    "shimAddTrackRemoveTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimAddTrackRemoveTrack"]),
    "shimAddTrackRemoveTrackWithNative": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimAddTrackRemoveTrackWithNative"]),
    "shimGetDisplayMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimGetDisplayMedia"]),
    "shimGetSendersWithDtmf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimGetSendersWithDtmf"]),
    "shimGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimGetStats"]),
    "shimGetUserMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimGetUserMedia"]),
    "shimMediaStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimMediaStream"]),
    "shimOnTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimOnTrack"]),
    "shimPeerConnection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimPeerConnection"]),
    "shimSenderReceiverGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimSenderReceiverGetStats"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/getusermedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fixNegotiationNeeded": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["fixNegotiationNeeded"]),
    "shimAddTrackRemoveTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimAddTrackRemoveTrack"]),
    "shimAddTrackRemoveTrackWithNative": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimAddTrackRemoveTrackWithNative"]),
    "shimGetDisplayMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetDisplayMedia"]),
    "shimGetSendersWithDtmf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetSendersWithDtmf"]),
    "shimGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetStats"]),
    "shimGetUserMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetUserMedia"]),
    "shimMediaStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimMediaStream"]),
    "shimOnTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimOnTrack"]),
    "shimPeerConnection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimPeerConnection"]),
    "shimSenderReceiverGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimSenderReceiverGetStats"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/filtericeservers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "filterIceServers": (()=>filterIceServers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
function filterIceServers(iceServers, edgeVersion) {
    let hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter((server)=>{
        if (server && (server.urls || server.url)) {
            let urls = server.urls || server.url;
            if (server.url && !server.urls) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deprecated"])('RTCIceServer.url', 'RTCIceServer.urls');
            }
            const isString = typeof urls === 'string';
            if (isString) {
                urls = [
                    urls
                ];
            }
            urls = urls.filter((url)=>{
                // filter STUN unconditionally.
                if (url.indexOf('stun:') === 0) {
                    return false;
                }
                const validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');
                if (validTurn && !hasTurn) {
                    hasTurn = true;
                    return true;
                }
                return validTurn && !hasTurn;
            });
            delete server.url;
            server.urls = isString ? urls[0] : urls;
            return !!urls.length;
        }
    });
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/getusermedia.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimGetUserMedia": (()=>shimGetUserMedia)
});
'use strict';
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    const shimError_ = function(e) {
        return {
            name: ({
                PermissionDeniedError: 'NotAllowedError'
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint,
            toString () {
                return this.name;
            }
        };
    };
    // getUserMedia error shim.
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
        return origGetUserMedia(c).catch((e)=>Promise.reject(shimError_(e)));
    };
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimGetDisplayMedia": (()=>shimGetDisplayMedia)
});
'use strict';
function shimGetDisplayMedia(window) {
    if (!('getDisplayMedia' in window.navigator)) {
        return;
    }
    if (!window.navigator.mediaDevices) {
        return;
    }
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimPeerConnection": (()=>shimPeerConnection),
    "shimReplaceTrack": (()=>shimReplaceTrack)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$filtericeservers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/filtericeservers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rtcpeerconnection$2d$shim$40$1$2e$2$2e$15$2f$node_modules$2f$rtcpeerconnection$2d$shim$2f$rtcpeerconnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rtcpeerconnection-shim@1.2.15/node_modules/rtcpeerconnection-shim/rtcpeerconnection.js [app-ssr] (ecmascript)");
'use strict';
;
;
;
;
;
function shimPeerConnection(window, browserDetails) {
    if (window.RTCIceGatherer) {
        if (!window.RTCIceCandidate) {
            window.RTCIceCandidate = function RTCIceCandidate(args) {
                return args;
            };
        }
        if (!window.RTCSessionDescription) {
            window.RTCSessionDescription = function RTCSessionDescription(args) {
                return args;
            };
        }
        // this adds an additional event listener to MediaStrackTrack that signals
        // when a tracks enabled property was changed. Workaround for a bug in
        // addStream, see below. No longer required in 15025+
        if (browserDetails.version < 15025) {
            const origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
                set (value) {
                    origMSTEnabled.set.call(this, value);
                    const ev = new Event('enabled');
                    ev.enabled = value;
                    this.dispatchEvent(ev);
                }
            });
        }
    }
    // ORTC defines the DTMF sender a bit different.
    // https://github.com/w3c/ortc/issues/714
    if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
        Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') {
                        this._dtmf = new window.RTCDtmfSender(this);
                    } else if (this.track.kind === 'video') {
                        this._dtmf = null;
                    }
                }
                return this._dtmf;
            }
        });
    }
    // Edge currently only implements the RTCDtmfSender, not the
    // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
    if (window.RTCDtmfSender && !window.RTCDTMFSender) {
        window.RTCDTMFSender = window.RTCDtmfSender;
    }
    const RTCPeerConnectionShim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rtcpeerconnection$2d$shim$40$1$2e$2$2e$15$2f$node_modules$2f$rtcpeerconnection$2d$shim$2f$rtcpeerconnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(window, browserDetails.version);
    window.RTCPeerConnection = function RTCPeerConnection(config) {
        if (config && config.iceServers) {
            config.iceServers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$filtericeservers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterIceServers"])(config.iceServers, browserDetails.version);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"])('ICE servers after filtering:', config.iceServers);
        }
        return new RTCPeerConnectionShim(config);
    };
    window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}
function shimReplaceTrack(window) {
    // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
    if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
        window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
    }
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$filtericeservers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/filtericeservers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$rtcpeerconnection$2d$shim$40$1$2e$2$2e$15$2f$node_modules$2f$rtcpeerconnection$2d$shim$2f$rtcpeerconnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/rtcpeerconnection-shim@1.2.15/node_modules/rtcpeerconnection-shim/rtcpeerconnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/getusermedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shimGetDisplayMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimGetDisplayMedia"]),
    "shimGetUserMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimGetUserMedia"]),
    "shimPeerConnection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimPeerConnection"]),
    "shimReplaceTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimReplaceTrack"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/getusermedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shimGetDisplayMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetDisplayMedia"]),
    "shimGetUserMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetUserMedia"]),
    "shimPeerConnection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimPeerConnection"]),
    "shimReplaceTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimReplaceTrack"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/getusermedia.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimGetUserMedia": (()=>shimGetUserMedia)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    const MediaStreamTrack = window && window.MediaStreamTrack;
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deprecated"])('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
        const remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
            }
        };
        const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
            if (typeof c === 'object' && typeof c.audio === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
        };
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function() {
                const obj = nativeGetSettings.apply(this, arguments);
                remap(obj, 'mozAutoGainControl', 'autoGainControl');
                remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                return obj;
            };
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function(c) {
                if (this.kind === 'audio' && typeof c === 'object') {
                    c = JSON.parse(JSON.stringify(c));
                    remap(c, 'autoGainControl', 'mozAutoGainControl');
                    remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                }
                return nativeApplyConstraints.apply(this, [
                    c
                ]);
            };
        }
    }
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimGetDisplayMedia": (()=>shimGetDisplayMedia)
});
'use strict';
function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
        return;
    }
    if (!window.navigator.mediaDevices) {
        return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        if (!(constraints && constraints.video)) {
            const err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
            err.name = 'NotFoundError';
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
        }
        if (constraints.video === true) {
            constraints.video = {
                mediaSource: preferredMediaSource
            };
        } else {
            constraints.video.mediaSource = preferredMediaSource;
        }
        return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "shimAddTransceiver": (()=>shimAddTransceiver),
    "shimCreateAnswer": (()=>shimCreateAnswer),
    "shimCreateOffer": (()=>shimCreateOffer),
    "shimGetParameters": (()=>shimGetParameters),
    "shimOnTrack": (()=>shimOnTrack),
    "shimPeerConnection": (()=>shimPeerConnection),
    "shimRTCDataChannel": (()=>shimRTCDataChannel),
    "shimReceiverGetStats": (()=>shimReceiverGetStats),
    "shimRemoveStream": (()=>shimRemoveStream),
    "shimSenderGetStats": (()=>shimSenderGetStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
;
;
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
        Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get () {
                return {
                    receiver: this.receiver
                };
            }
        });
    }
}
function shimPeerConnection(window, browserDetails) {
    if (typeof window !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
        return; // probably media.peerconnection.enabled=false in about:config
    }
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
        // very basic support for old versions.
        window.RTCPeerConnection = window.mozRTCPeerConnection;
    }
    if (browserDetails.version < 53) {
        // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
        [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(method) {
            const nativeMethod = window.RTCPeerConnection.prototype[method];
            const methodObj = {
                [method] () {
                    arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                    return nativeMethod.apply(this, arguments);
                }
            };
            window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
    }
    const modernStatsTypes = {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
    };
    const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        return nativeGetStats.apply(this, [
            selector || null
        ]).then((stats)=>{
            if (browserDetails.version < 53 && !onSucc) {
                // Shim only promise getStats with spec-hyphens in type names
                // Leave callback version alone; misc old uses of forEach before Map
                try {
                    stats.forEach((stat)=>{
                        stat.type = modernStatsTypes[stat.type] || stat.type;
                    });
                } catch (e) {
                    if (e.name !== 'TypeError') {
                        throw e;
                    }
                    // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                    stats.forEach((stat, i)=>{
                        stats.set(i, Object.assign({}, stat, {
                            type: modernStatsTypes[stat.type] || stat.type
                        }));
                    });
                }
            }
            return stats;
        }).then(onSucc, onErr);
    };
}
function shimSenderGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
        return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
        return;
    }
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
    }
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
        window.RTCPeerConnection.prototype.addTrack = function addTrack() {
            const sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
        };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
}
function shimReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
        return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
        return;
    }
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
        window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
            const receivers = origGetReceivers.apply(this, []);
            receivers.forEach((receiver)=>receiver._pc = this);
            return receivers;
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"])(window, 'track', (e)=>{
        e.receiver._pc = e.srcElement;
        return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
        return this._pc.getStats(this.track);
    };
}
function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
        return;
    }
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deprecated"])('removeStream', 'removeTrack');
        this.getSenders().forEach((sender)=>{
            if (sender.track && stream.getTracks().includes(sender.track)) {
                this.removeTrack(sender);
            }
        });
    };
}
function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) {
        window.RTCDataChannel = window.DataChannel;
    }
}
function shimAddTransceiver(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) {
        return;
    }
    const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) {
        window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
            this.setParametersPromises = [];
            const initParameters = arguments[1];
            const shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;
            if (shouldPerformCheck) {
                // If sendEncodings params are provided, validate grammar
                initParameters.sendEncodings.forEach((encodingParam)=>{
                    if ('rid' in encodingParam) {
                        const ridRegex = /^[a-z0-9]{0,16}$/i;
                        if (!ridRegex.test(encodingParam.rid)) {
                            throw new TypeError('Invalid RID value provided.');
                        }
                    }
                    if ('scaleResolutionDownBy' in encodingParam) {
                        if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
                            throw new RangeError('scale_resolution_down_by must be >= 1.0');
                        }
                    }
                    if ('maxFramerate' in encodingParam) {
                        if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                            throw new RangeError('max_framerate must be >= 0.0');
                        }
                    }
                });
            }
            const transceiver = origAddTransceiver.apply(this, arguments);
            if (shouldPerformCheck) {
                // Check if the init options were applied. If not we do this in an
                // asynchronous way and save the promise reference in a global object.
                // This is an ugly hack, but at the same time is way more robust than
                // checking the sender parameters before and after the createOffer
                // Also note that after the createoffer we are not 100% sure that
                // the params were asynchronously applied so we might miss the
                // opportunity to recreate offer.
                const { sender } = transceiver;
                const params = sender.getParameters();
                if (!('encodings' in params) || params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                    params.encodings = initParameters.sendEncodings;
                    sender.sendEncodings = initParameters.sendEncodings;
                    this.setParametersPromises.push(sender.setParameters(params).then(()=>{
                        delete sender.sendEncodings;
                    }).catch(()=>{
                        delete sender.sendEncodings;
                    }));
                }
            }
            return transceiver;
        };
    }
}
function shimGetParameters(window) {
    if (!(typeof window === 'object' && window.RTCRtpSender)) {
        return;
    }
    const origGetParameters = window.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) {
        window.RTCRtpSender.prototype.getParameters = function getParameters() {
            const params = origGetParameters.apply(this, arguments);
            if (!('encodings' in params)) {
                params.encodings = [].concat(this.sendEncodings || [
                    {}
                ]);
            }
            return params;
        };
    }
}
function shimCreateOffer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) {
        return;
    }
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer() {
        if (this.setParametersPromises && this.setParametersPromises.length) {
            return Promise.all(this.setParametersPromises).then(()=>{
                return origCreateOffer.apply(this, arguments);
            }).finally(()=>{
                this.setParametersPromises = [];
            });
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimCreateAnswer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) {
        return;
    }
    const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
    window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
        if (this.setParametersPromises && this.setParametersPromises.length) {
            return Promise.all(this.setParametersPromises).then(()=>{
                return origCreateAnswer.apply(this, arguments);
            }).finally(()=>{
                this.setParametersPromises = [];
            });
        }
        return origCreateAnswer.apply(this, arguments);
    };
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/getusermedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shimAddTransceiver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimAddTransceiver"]),
    "shimCreateAnswer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimCreateAnswer"]),
    "shimCreateOffer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimCreateOffer"]),
    "shimGetDisplayMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimGetDisplayMedia"]),
    "shimGetParameters": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimGetParameters"]),
    "shimGetUserMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimGetUserMedia"]),
    "shimOnTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimOnTrack"]),
    "shimPeerConnection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimPeerConnection"]),
    "shimRTCDataChannel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimRTCDataChannel"]),
    "shimReceiverGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimReceiverGetStats"]),
    "shimRemoveStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimRemoveStream"]),
    "shimSenderGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shimSenderGetStats"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getusermedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/getusermedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$getdisplaymedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "shimAddTransceiver": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimAddTransceiver"]),
    "shimCreateAnswer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimCreateAnswer"]),
    "shimCreateOffer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimCreateOffer"]),
    "shimGetDisplayMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetDisplayMedia"]),
    "shimGetParameters": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetParameters"]),
    "shimGetUserMedia": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimGetUserMedia"]),
    "shimOnTrack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimOnTrack"]),
    "shimPeerConnection": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimPeerConnection"]),
    "shimRTCDataChannel": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimRTCDataChannel"]),
    "shimReceiverGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimReceiverGetStats"]),
    "shimRemoveStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimRemoveStream"]),
    "shimSenderGetStats": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["shimSenderGetStats"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/safari/safari_shim.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ __turbopack_context__.s({
    "shimAudioContext": (()=>shimAudioContext),
    "shimCallbacksAPI": (()=>shimCallbacksAPI),
    "shimConstraints": (()=>shimConstraints),
    "shimCreateOfferLegacy": (()=>shimCreateOfferLegacy),
    "shimGetUserMedia": (()=>shimGetUserMedia),
    "shimLocalStreamsAPI": (()=>shimLocalStreamsAPI),
    "shimRTCIceServerUrls": (()=>shimRTCIceServerUrls),
    "shimRemoteStreamsAPI": (()=>shimRemoteStreamsAPI),
    "shimTrackEventTransceiver": (()=>shimTrackEventTransceiver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
function shimLocalStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
        return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
        window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
            if (!this._localStreams) {
                this._localStreams = [];
            }
            return this._localStreams;
        };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
        const _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            if (!this._localStreams) {
                this._localStreams = [];
            }
            if (!this._localStreams.includes(stream)) {
                this._localStreams.push(stream);
            }
            // Try to emulate Chrome's behaviour of adding in audio-video order.
            // Safari orders by track id.
            stream.getAudioTracks().forEach((track)=>_addTrack.call(this, track, stream));
            stream.getVideoTracks().forEach((track)=>_addTrack.call(this, track, stream));
        };
        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
            if (streams) {
                streams.forEach((stream)=>{
                    if (!this._localStreams) {
                        this._localStreams = [
                            stream
                        ];
                    } else if (!this._localStreams.includes(stream)) {
                        this._localStreams.push(stream);
                    }
                });
            }
            return _addTrack.apply(this, arguments);
        };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            if (!this._localStreams) {
                this._localStreams = [];
            }
            const index = this._localStreams.indexOf(stream);
            if (index === -1) {
                return;
            }
            this._localStreams.splice(index, 1);
            const tracks = stream.getTracks();
            this.getSenders().forEach((sender)=>{
                if (tracks.includes(sender.track)) {
                    this.removeTrack(sender);
                }
            });
        };
    }
}
function shimRemoteStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
        return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
        window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
            return this._remoteStreams ? this._remoteStreams : [];
        };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
            get () {
                return this._onaddstream;
            },
            set (f) {
                if (this._onaddstream) {
                    this.removeEventListener('addstream', this._onaddstream);
                    this.removeEventListener('track', this._onaddstreampoly);
                }
                this.addEventListener('addstream', this._onaddstream = f);
                this.addEventListener('track', this._onaddstreampoly = (e)=>{
                    e.streams.forEach((stream)=>{
                        if (!this._remoteStreams) {
                            this._remoteStreams = [];
                        }
                        if (this._remoteStreams.includes(stream)) {
                            return;
                        }
                        this._remoteStreams.push(stream);
                        const event = new Event('addstream');
                        event.stream = stream;
                        this.dispatchEvent(event);
                    });
                });
            }
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            const pc = this;
            if (!this._onaddstreampoly) {
                this.addEventListener('track', this._onaddstreampoly = function(e) {
                    e.streams.forEach((stream)=>{
                        if (!pc._remoteStreams) {
                            pc._remoteStreams = [];
                        }
                        if (pc._remoteStreams.indexOf(stream) >= 0) {
                            return;
                        }
                        pc._remoteStreams.push(stream);
                        const event = new Event('addstream');
                        event.stream = stream;
                        pc.dispatchEvent(event);
                    });
                });
            }
            return origSetRemoteDescription.apply(pc, arguments);
        };
    }
}
function shimCallbacksAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) {
        return;
    }
    const prototype = window.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateOffer.apply(this, [
            options
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateAnswer.apply(this, [
            options
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
        const promise = setLocalDescription.apply(this, [
            description
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
        const promise = setRemoteDescription.apply(this, [
            description
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
        const promise = addIceCandidate.apply(this, [
            candidate
        ]);
        if (!failureCallback) {
            return promise;
        }
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // shim not needed in Safari 12.1
        const mediaDevices = navigator.mediaDevices;
        const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
        navigator.mediaDevices.getUserMedia = (constraints)=>{
            return _getUserMedia(shimConstraints(constraints));
        };
    }
    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.getUserMedia = (function getUserMedia(constraints, cb, errcb) {
            navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
        }).bind(navigator);
    }
}
function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) {
        return Object.assign({}, constraints, {
            video: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compactObject"])(constraints.video)
        });
    }
    return constraints;
}
function shimRTCIceServerUrls(window) {
    if (!window.RTCPeerConnection) {
        return;
    }
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    const OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
            const newIceServers = [];
            for(let i = 0; i < pcConfig.iceServers.length; i++){
                let server = pcConfig.iceServers[i];
                if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deprecated"])('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                }
            }
            pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in OrigPeerConnection) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
            get () {
                return OrigPeerConnection.generateCertificate;
            }
        });
    }
}
function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
        Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
            get () {
                return {
                    receiver: this.receiver
                };
            }
        });
    }
}
function shimCreateOfferLegacy(window) {
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
        if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            }
            const audioTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'audio');
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                    if (audioTransceiver.setDirection) {
                        audioTransceiver.setDirection('sendonly');
                    } else {
                        audioTransceiver.direction = 'sendonly';
                    }
                } else if (audioTransceiver.direction === 'recvonly') {
                    if (audioTransceiver.setDirection) {
                        audioTransceiver.setDirection('inactive');
                    } else {
                        audioTransceiver.direction = 'inactive';
                    }
                }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
                this.addTransceiver('audio');
            }
            if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            }
            const videoTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'video');
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                    if (videoTransceiver.setDirection) {
                        videoTransceiver.setDirection('sendonly');
                    } else {
                        videoTransceiver.direction = 'sendonly';
                    }
                } else if (videoTransceiver.direction === 'recvonly') {
                    if (videoTransceiver.setDirection) {
                        videoTransceiver.setDirection('inactive');
                    } else {
                        videoTransceiver.direction = 'inactive';
                    }
                }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
                this.addTransceiver('video');
            }
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimAudioContext(window) {
    if (typeof window !== 'object' || window.AudioContext) {
        return;
    }
    window.AudioContext = window.webkitAudioContext;
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/common_shim.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "removeExtmapAllowMixed": (()=>removeExtmapAllowMixed),
    "shimAddIceCandidateNullOrEmpty": (()=>shimAddIceCandidateNullOrEmpty),
    "shimConnectionState": (()=>shimConnectionState),
    "shimMaxMessageSize": (()=>shimMaxMessageSize),
    "shimRTCIceCandidate": (()=>shimRTCIceCandidate),
    "shimSendThrowTypeError": (()=>shimSendThrowTypeError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sdp$40$2$2e$12$2e$0$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sdp@2.12.0/node_modules/sdp/sdp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
'use strict';
;
;
function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
        return;
    }
    const NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function RTCIceCandidate(args) {
        // Remove the a= which shouldn't be part of the candidate string.
        if (typeof args === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substr(2);
        }
        if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            const nativeCandidate = new NativeRTCIceCandidate(args);
            const parsedCandidate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sdp$40$2$2e$12$2e$0$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parseCandidate(args.candidate);
            const augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);
            // Add a serializer that does not serialize the extra attributes.
            augmentedCandidate.toJSON = function toJSON() {
                return {
                    candidate: augmentedCandidate.candidate,
                    sdpMid: augmentedCandidate.sdpMid,
                    sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                    usernameFragment: augmentedCandidate.usernameFragment
                };
            };
            return augmentedCandidate;
        }
        return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"])(window, 'icecandidate', (e)=>{
        if (e.candidate) {
            Object.defineProperty(e, 'candidate', {
                value: new window.RTCIceCandidate(e.candidate),
                writable: 'false'
            });
        }
        return e;
    });
}
function shimMaxMessageSize(window, browserDetails) {
    if (!window.RTCPeerConnection) {
        return;
    }
    if (!('sctp' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
            get () {
                return typeof this._sctp === 'undefined' ? null : this._sctp;
            }
        });
    }
    const sctpInDescription = function(description) {
        if (!description || !description.sdp) {
            return false;
        }
        const sections = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sdp$40$2$2e$12$2e$0$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].splitSections(description.sdp);
        sections.shift();
        return sections.some((mediaSection)=>{
            const mLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sdp$40$2$2e$12$2e$0$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parseMLine(mediaSection);
            return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
        });
    };
    const getRemoteFirefoxVersion = function(description) {
        // TODO: Is there a better solution for detecting Firefox?
        const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (match === null || match.length < 2) {
            return -1;
        }
        const version = parseInt(match[1], 10);
        // Test for NaN (yes, this is ugly)
        return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
        // Every implementation we know can send at least 64 KiB.
        // Note: Although Chrome is technically able to send up to 256 KiB, the
        //       data does not reach the other peer reliably.
        //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
        let canSendMaxMessageSize = 65536;
        if (browserDetails.browser === 'firefox') {
            if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) {
                    // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                    // fragmentation.
                    canSendMaxMessageSize = 16384;
                } else {
                    // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                    // messages. Thus, supporting ~2 GiB when sending.
                    canSendMaxMessageSize = 2147483637;
                }
            } else if (browserDetails.version < 60) {
                // Currently, all FF >= 57 will reset the remote maximum message size
                // to the default value when a data channel is created at a later
                // stage. :(
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
            } else {
                // FF >= 60 supports sending ~2 GiB
                canSendMaxMessageSize = 2147483637;
            }
        }
        return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
        // Note: 65536 bytes is the default value from the SDP spec. Also,
        //       every implementation we know supports receiving 65536 bytes.
        let maxMessageSize = 65536;
        // FF 57 has a slightly incorrect default remote max message size, so
        // we need to adjust it here to avoid a failure when sending.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
        if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
            maxMessageSize = 65535;
        }
        const match = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sdp$40$2$2e$12$2e$0$2f$node_modules$2f$sdp$2f$sdp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].matchPrefix(description.sdp, 'a=max-message-size:');
        if (match.length > 0) {
            maxMessageSize = parseInt(match[0].substr(19), 10);
        } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
            // If the maximum message size is not present in the remote SDP and
            // both local and remote are Firefox, the remote peer can receive
            // ~2 GiB.
            maxMessageSize = 2147483637;
        }
        return maxMessageSize;
    };
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        this._sctp = null;
        // Chrome decided to not expose .sctp in plan-b mode.
        // As usual, adapter.js has to do an 'ugly worakaround'
        // to cover up the mess.
        if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
            const { sdpSemantics } = this.getConfiguration();
            if (sdpSemantics === 'plan-b') {
                Object.defineProperty(this, 'sctp', {
                    get () {
                        return typeof this._sctp === 'undefined' ? null : this._sctp;
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        }
        if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            const isFirefox = getRemoteFirefoxVersion(arguments[0]);
            // Get the maximum message size the local peer is capable of sending
            const canSendMMS = getCanSendMaxMessageSize(isFirefox);
            // Get the maximum message size of the remote peer.
            const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
            // Determine final maximum message size
            let maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) {
                maxMessageSize = Number.POSITIVE_INFINITY;
            } else if (canSendMMS === 0 || remoteMMS === 0) {
                maxMessageSize = Math.max(canSendMMS, remoteMMS);
            } else {
                maxMessageSize = Math.min(canSendMMS, remoteMMS);
            }
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            const sctp = {};
            Object.defineProperty(sctp, 'maxMessageSize', {
                get () {
                    return maxMessageSize;
                }
            });
            this._sctp = sctp;
        }
        return origSetRemoteDescription.apply(this, arguments);
    };
}
function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
        return;
    }
    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    function wrapDcSend(dc, pc) {
        const origDataChannelSend = dc.send;
        dc.send = function send() {
            const data = arguments[0];
            const length = data.length || data.size || data.byteLength;
            if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
                throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
            }
            return origDataChannelSend.apply(dc, arguments);
        };
    }
    const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
        const dataChannel = origCreateDataChannel.apply(this, arguments);
        wrapDcSend(dataChannel, this);
        return dataChannel;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapPeerConnectionEvent"])(window, 'datachannel', (e)=>{
        wrapDcSend(e.channel, e.target);
        return e;
    });
}
function shimConnectionState(window) {
    if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
        return;
    }
    const proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, 'connectionState', {
        get () {
            return ({
                completed: 'connected',
                checking: 'connecting'
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, 'onconnectionstatechange', {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (cb) {
            if (this._onconnectionstatechange) {
                this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
                delete this._onconnectionstatechange;
            }
            if (cb) {
                this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
            }
        },
        enumerable: true,
        configurable: true
    });
    [
        'setLocalDescription',
        'setRemoteDescription'
    ].forEach((method)=>{
        const origMethod = proto[method];
        proto[method] = function() {
            if (!this._connectionstatechangepoly) {
                this._connectionstatechangepoly = (e)=>{
                    const pc = e.target;
                    if (pc._lastConnectionState !== pc.connectionState) {
                        pc._lastConnectionState = pc.connectionState;
                        const newEvent = new Event('connectionstatechange', e);
                        pc.dispatchEvent(newEvent);
                    }
                    return e;
                };
                this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
            }
            return origMethod.apply(this, arguments);
        };
    });
}
function removeExtmapAllowMixed(window, browserDetails) {
    /* remove a=extmap-allow-mixed for webrtc.org < M71 */ if (!window.RTCPeerConnection) {
        return;
    }
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
        return;
    }
    if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
        return;
    }
    const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
        if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
            const sdp = desc.sdp.split('\n').filter((line)=>{
                return line.trim() !== 'a=extmap-allow-mixed';
            }).join('\n');
            // Safari enforces read-only-ness of RTCSessionDescription fields.
            if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) {
                arguments[0] = new window.RTCSessionDescription({
                    type: desc.type,
                    sdp
                });
            } else {
                desc.sdp = sdp;
            }
        }
        return nativeSRD.apply(this, arguments);
    };
}
function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
    // Support for addIceCandidate(null or undefined)
    // as well as addIceCandidate({candidate: "", ...})
    // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
    // Note: must be called before other polyfills which change the signature.
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
        return;
    }
    const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
        return;
    }
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
        if (!arguments[0]) {
            if (arguments[1]) {
                arguments[1].apply(null);
            }
            return Promise.resolve();
        }
        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
        // in older versions.
        // Native support for ignoring exists for Chrome M77+.
        // Safari ignores as well, exact version unknown but works in the same
        // version that also ignores addIceCandidate(null).
        if ((browserDetails.browser === 'chrome' && browserDetails.version < 78 || browserDetails.browser === 'firefox' && browserDetails.version < 68 || browserDetails.browser === 'safari') && arguments[0] && arguments[0].candidate === '') {
            return Promise.resolve();
        }
        return nativeAddIceCandidate.apply(this, arguments);
    };
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/adapter_factory.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ __turbopack_context__.s({
    "adapterFactory": (()=>adapterFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/utils.js [app-ssr] (ecmascript)");
// Browser shims.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/edge/edge_shim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/safari/safari_shim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/common_shim.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function adapterFactory({ window } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
}) {
    // Utils.
    const logging = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"];
    const browserDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectBrowser"])(window);
    const adapter = {
        browserDetails,
        commonShim: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
        extractVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractVersion"],
        disableLog: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableLog"],
        disableWarnings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disableWarnings"]
    };
    // Shim browser if found.
    switch(browserDetails.browser){
        case 'chrome':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimPeerConnection || !options.shimChrome) {
                logging('Chrome shim is not included in this adapter release.');
                return adapter;
            }
            if (browserDetails.version === null) {
                logging('Chrome shim can not determine version, not shimming.');
                return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
            // Must be called before shimPeerConnection.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimAddIceCandidateNullOrEmpty"])(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimMediaStream(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimPeerConnection(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimOnTrack(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimAddTrackRemoveTrack(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetSendersWithDtmf(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimSenderReceiverGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$chrome$2f$chrome_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.fixNegotiationNeeded(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimRTCIceCandidate"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimConnectionState"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimMaxMessageSize"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeExtmapAllowMixed"])(window, browserDetails);
            break;
        case 'firefox':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimPeerConnection || !options.shimFirefox) {
                logging('Firefox shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
            // Must be called before shimPeerConnection.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimAddIceCandidateNullOrEmpty"])(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimPeerConnection(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimOnTrack(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimRemoveStream(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimSenderGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimReceiverGetStats(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimRTCDataChannel(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimAddTransceiver(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetParameters(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimCreateOffer(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$firefox$2f$firefox_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimCreateAnswer(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimRTCIceCandidate"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimConnectionState"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimMaxMessageSize"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"])(window, browserDetails);
            break;
        case 'edge':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimPeerConnection || !options.shimEdge) {
                logging('MS edge shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming edge.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetDisplayMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimPeerConnection(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$edge$2f$edge_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimReplaceTrack(window, browserDetails);
            // the edge shim implements the full RTCIceCandidate object.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimMaxMessageSize"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"])(window, browserDetails);
            break;
        case 'safari':
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ || !options.shimSafari) {
                logging('Safari shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
            // Must be called before shimCallbackAPI.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimAddIceCandidateNullOrEmpty"])(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimRTCIceServerUrls(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimCreateOfferLegacy(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimCallbacksAPI(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimLocalStreamsAPI(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimRemoteStreamsAPI(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimTrackEventTransceiver(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimGetUserMedia(window, browserDetails);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$safari$2f$safari_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.shimAudioContext(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimRTCIceCandidate"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimMaxMessageSize"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shimSendThrowTypeError"])(window, browserDetails);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$common_shim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeExtmapAllowMixed"])(window, browserDetails);
            break;
        default:
            logging('Unsupported browser!');
            break;
    }
    return adapter;
}
}}),
"[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/adapter_core.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$adapter_factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/webrtc-adapter@7.7.1/node_modules/webrtc-adapter/src/js/adapter_factory.js [app-ssr] (ecmascript)");
'use strict';
;
const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$webrtc$2d$adapter$40$7$2e$7$2e$1$2f$node_modules$2f$webrtc$2d$adapter$2f$src$2f$js$2f$adapter_factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adapterFactory"])({
    window: typeof window === 'undefined' ? undefined : window
});
const __TURBOPACK__default__export__ = adapter;
}}),

};

//# sourceMappingURL=6c332_webrtc-adapter_src_js_09a85ec9._.js.map