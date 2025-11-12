import {
    a as m
} from "./js.cookie.1.sha256-b274c81169.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    b as C,
    c as de,
    q as P,
    J as b,
    l as E,
    P as B
} from "./utils.1.sha256-3b1d7cc795.js";
import {
    a as le
} from "./index.1.sha256-34dadb4a62.js";
import {
    a as k
} from "./exports.1.sha256-e7ea12f564.js";
import {
    a as ue
} from "./_commonjsHelpers.1.sha256-de4c51d13d.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f15a4dfb-ef1f-47cc-9204-a5d15288550f", e._sentryDebugIdIdentifier = "sentry-dbid-f15a4dfb-ef1f-47cc-9204-a5d15288550f")
} catch {}

function pe() {
    return m.get("_fbc")
}

function fe() {
    return m.get("_fbp")
}
const he = () => {
        const e = Array.from(document.querySelectorAll(".privacy-choices-link"));
        window.ketch("on", "regionInfo", n => {
            ["US-CA"].includes(n) && e.forEach(c => {
                const l = document.createElement("span");
                l.textContent = "Do Not Sell My Personal Information", c.replaceChildren(l)
            })
        })
    },
    ye = () => {
        Array.from(document.querySelectorAll(".privacy-choices-link")).forEach(n => {
            n.addEventListener("click", () => {
                window.ketch("showExperience")
            })
        })
    },
    q = async (e, n) => {
        const t = {
            purposes: {
                essential_services: !0,
                advertising: e,
                data_analytics: n
            }
        };
        return le.patch("/privacy/ketch-consent/", t, {
            headers: de()
        })
    },
    V = (e, n) => {
        window.ketch("setConsent", {
            purposes: {
                essential_services: !0,
                advertising: e,
                data_analytics: n
            }
        })
    };
async function R() {
    return window.ketch ? new Promise(e => {
        window.ketch("on", "consent", n => {
            e(n.purposes)
        })
    }) : {
        essential_services: !0,
        advertising: !1,
        data_analytics: !1
    }
}
const Me = async () => {
        if (!window.ketch || (he(), ye(), !P("customer_uid"))) return;
        const n = await R(),
            t = n.advertising,
            c = n.data_analytics,
            l = C("allow_ads"),
            u = C("allow_analytics");
        (!(u === c) || !(l === t)) && V(l, u), window.ketch("on", "userConsentUpdated", async f => {
            const a = f.purposes.advertising,
                i = f.purposes.data_analytics;
            try {
                await q(a, i)
            } catch (s) {
                k(s)
            }
        })
    },
    Le = async () => {
        const e = await R(),
            n = e.advertising,
            t = e.data_analytics,
            c = C("allow_ads"),
            l = C("allow_analytics");
        if (!t && l || !n && c) try {
            await q(n, t), V(n, t)
        } catch (r) {
            k(r)
        }
    };

function ge(e, n, t, c = 500, l = 1e4) {
    return new Promise((u, p) => {
        const r = Date.now();
        async function f() {
            e() ? (await t ? .(), u()) : Date.now() - r >= l ? p(new Error(`Polling for dependency ${n} timed out after ${l}ms: Dependency not available.`)) : setTimeout(f, c)
        }
        f()
    })
}
async function G(e, n, t, c = 500, l = 1e4) {
    try {
        await ge(e, n, t, c, l)
    } catch (u) {
        console.warn(u.message)
    }
}
async function we(e) {
    return C("customer_do_not_sell") ? !1 : (await R()) ? .[e]
}

function S(e, n) {
    return async (...t) => {
        try {
            if (!await we(e)) return
        } catch (c) {
            k(c)
        }
        await n(...t)
    }
}
var M = (e => (e.CompleteRegistration = "CompleteRegistration", e.EmailCapture = "EmailCapture", e))(M || {});
const H = S("advertising", (e, n) => {
        try {
            window.fbq("track", e, n)
        } catch (t) {
            k(t)
        }
    }),
    Ie = S("data_analytics", e => {
        try {
            const n = e ? ? P("customer_uid");
            if (!n) return;
            window.clarity("identify", n, void 0, void 0, n)
        } catch (n) {
            k(n)
        }
    }),
    Oe = S("advertising", () => {
        try {
            C("sendGtagEventsToPrecise") && (window.gtag("config", "AW-11378402053"), window.gtag("event", "conversion", {
                send_to: "AW-11378402053/LljUCMrq0dgZEIXG0rEq"
            }))
        } catch {}
    }),
    $ = S("advertising", (e, n) => {
        const t = {
            device_id: P("customer_uid"),
            ...n ? ? {}
        };
        if (window.podscribe) try {
            window.podscribe(e, t)
        } catch (c) {
            k(c)
        } else window.addEventListener("podscribeLoaded", function c() {
            try {
                window.removeEventListener("podscribeLoaded", c), window.podscribe(e, t)
            } catch (l) {
                k(l)
            }
        })
    }),
    z = S("advertising", (e, n) => {
        try {
            const t = C("audiohookConfig"),
                c = P("customer_uid"),
                l = {
                    type: e.replace(/\s/g, ""),
                    pageurl: window.location.href,
                    ...n ? ? {}
                };
            c && (l.userid = c);
            const u = `https://listen.audiohook.com/${t.AUDIOHOOK_UUID}/pixel.png`,
                p = new URLSearchParams(l),
                r = `${u}?${p.toString()}`,
                f = document.createElement("img");
            f.src = r, f.alt = "", f.style.display = "none", document.body.appendChild(f)
        } catch (t) {
            k(t)
        }
    });
var K = (e => (e.CompleteRegistration = "complete_registration", e.ScheduledPickup = "scheduled_pickup", e))(K || {});
const X = S("advertising", (e, n, {
    customerId: t,
    lastTouchChannel: c
}) => {
    try {
        const l = C("tvScientificConfig"),
            u = "https://tvspix.com/t.png",
            p = new URLSearchParams;
        p.append("t", new Date().getTime().toString()), p.append("l", l.TV_SCIENTIFIC_PIXEL_ID), p.append("u1", e), p.append("u3", window.location.href), p.append("u4", n), p.append("u5", c ? ? ""), t && p.append("u6", t);
        const r = `${u}?${p.toString()}`,
            f = document.createElement("img");
        f.src = r, f.alt = "", f.style.display = "none", f.style.position = "fixed", f.height = 0, f.width = 0, document.body.appendChild(f)
    } catch (l) {
        k(l)
    }
});
var Z = (e => (e.Registration = "registrations", e.EmailSignup = "email_signups", e.ScheduledPickup = "scheduled_pickups", e))(Z || {});
const J = S("advertising", e => {
    try {
        const n = new CustomEvent("AgentioConversion", {
            detail: {
                conversionType: e
            }
        });
        document.dispatchEvent(n)
    } catch (n) {
        k(n)
    }
});
var Y = (e => (e.WebsiteRegistration = "WebsiteRegistration", e.ScheduledPickup = "ScheduledPickUp", e))(Y || {});
const Q = S("advertising", e => {
        try {
            const n = document.createElement("script");
            n.async = !0, n.src = `https://js.adstk.io/convpixel.js?cust=5389713-000&event_type=${e}&region_code=NA`, document.head.appendChild(n)
        } catch (n) {
            k(n)
        }
    }),
    De = (e, n) => {
        X("scheduled_pickup", n, {
            customerId: e.uid
        }), J("scheduled_pickups"), Q("ScheduledPickUp")
    };
var j = (e => (e.PageView = "visits/unive0+unique", e.CustomerLeadSubmitted = "signu0/claim0+unique", e.ViewedHomePage = "visits/homep0+unique", e.ViewedSignupPage = "signu0/accou00+unique", e.WebsiteRegistration = "signu0/accou0+unique", e))(j || {});
const N = S("advertising", (e, n) => {
    G(() => !!window.gtag, "Gtag", () => {
        const t = C("floodlightConfig");
        window.gtag("config", t.FLOODLIGHT_DESTINATION_ID), window.gtag("event", "conversion", {
            allow_custom_scripts: !0,
            send_to: `${t.FLOODLIGHT_DESTINATION_ID}/${e}`,
            ...n ? ? {}
        })
    })
});

function We() {
    N("visits/unive0+unique")
}
var ee = (e => (e.WebsiteRegistration = "signup", e.LeadCapturePopupSubmitted = "lead", e.Alias = "alias", e))(ee || {});
const te = S("advertising", (e, n) => {
        G(() => !!window.spdt, "Spotify", () => {
            window.spdt(e, n)
        })
    }),
    Ce = (e = {}) => {
        try {
            const n = {};
            if (e.email) n.email = e.email;
            else {
                const t = P("customer_email");
                t && (n.email = t)
            }
            e.phoneNumber && (n.phone_number = e.phoneNumber), te("alias", e)
        } catch (n) {
            k(n)
        }
    };
var A = {
        exports: {}
    },
    T = {
        exports: {}
    },
    I;

function ke() {
    return I || (I = 1, function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = {
                rotl: function(t, c) {
                    return t << c | t >>> 32 - c
                },
                rotr: function(t, c) {
                    return t << 32 - c | t >>> c
                },
                endian: function(t) {
                    if (t.constructor == Number) return n.rotl(t, 8) & 16711935 | n.rotl(t, 24) & 4278255360;
                    for (var c = 0; c < t.length; c++) t[c] = n.endian(t[c]);
                    return t
                },
                randomBytes: function(t) {
                    for (var c = []; t > 0; t--) c.push(Math.floor(Math.random() * 256));
                    return c
                },
                bytesToWords: function(t) {
                    for (var c = [], l = 0, u = 0; l < t.length; l++, u += 8) c[u >>> 5] |= t[l] << 24 - u % 32;
                    return c
                },
                wordsToBytes: function(t) {
                    for (var c = [], l = 0; l < t.length * 32; l += 8) c.push(t[l >>> 5] >>> 24 - l % 32 & 255);
                    return c
                },
                bytesToHex: function(t) {
                    for (var c = [], l = 0; l < t.length; l++) c.push((t[l] >>> 4).toString(16)), c.push((t[l] & 15).toString(16));
                    return c.join("")
                },
                hexToBytes: function(t) {
                    for (var c = [], l = 0; l < t.length; l += 2) c.push(parseInt(t.substr(l, 2), 16));
                    return c
                },
                bytesToBase64: function(t) {
                    for (var c = [], l = 0; l < t.length; l += 3)
                        for (var u = t[l] << 16 | t[l + 1] << 8 | t[l + 2], p = 0; p < 4; p++) l * 8 + p * 6 <= t.length * 8 ? c.push(e.charAt(u >>> 6 * (3 - p) & 63)) : c.push("=");
                    return c.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/ig, "");
                    for (var c = [], l = 0, u = 0; l < t.length; u = ++l % 4) u != 0 && c.push((e.indexOf(t.charAt(l - 1)) & Math.pow(2, -2 * u + 8) - 1) << u * 2 | e.indexOf(t.charAt(l)) >>> 6 - u * 2);
                    return c
                }
            };
        T.exports = n
    }()), T.exports
}
var F, O;

function D() {
    if (O) return F;
    O = 1;
    var e = {
        utf8: {
            stringToBytes: function(n) {
                return e.bin.stringToBytes(unescape(encodeURIComponent(n)))
            },
            bytesToString: function(n) {
                return decodeURIComponent(escape(e.bin.bytesToString(n)))
            }
        },
        bin: {
            stringToBytes: function(n) {
                for (var t = [], c = 0; c < n.length; c++) t.push(n.charCodeAt(c) & 255);
                return t
            },
            bytesToString: function(n) {
                for (var t = [], c = 0; c < n.length; c++) t.push(String.fromCharCode(n[c]));
                return t.join("")
            }
        }
    };
    return F = e, F
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var x, W;

function Se() {
    if (W) return x;
    W = 1, x = function(t) {
        return t != null && (e(t) || n(t) || !!t._isBuffer)
    };

    function e(t) {
        return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
    }

    function n(t) {
        return typeof t.readFloatLE == "function" && typeof t.slice == "function" && e(t.slice(0, 0))
    }
    return x
}
var U;

function _e() {
    return U || (U = 1, function() {
        var e = ke(),
            n = D().utf8,
            t = Se(),
            c = D().bin,
            l = function(u, p) {
                u.constructor == String ? p && p.encoding === "binary" ? u = c.stringToBytes(u) : u = n.stringToBytes(u) : t(u) ? u = Array.prototype.slice.call(u, 0) : !Array.isArray(u) && u.constructor !== Uint8Array && (u = u.toString());
                for (var r = e.bytesToWords(u), f = u.length * 8, a = 1732584193, i = -271733879, s = -1732584194, o = 271733878, d = 0; d < r.length; d++) r[d] = (r[d] << 8 | r[d] >>> 24) & 16711935 | (r[d] << 24 | r[d] >>> 8) & 4278255360;
                r[f >>> 5] |= 128 << f % 32, r[(f + 64 >>> 9 << 4) + 14] = f;
                for (var h = l._ff, y = l._gg, g = l._hh, w = l._ii, d = 0; d < r.length; d += 16) {
                    var oe = a,
                        ae = i,
                        se = s,
                        ce = o;
                    a = h(a, i, s, o, r[d + 0], 7, -680876936), o = h(o, a, i, s, r[d + 1], 12, -389564586), s = h(s, o, a, i, r[d + 2], 17, 606105819), i = h(i, s, o, a, r[d + 3], 22, -1044525330), a = h(a, i, s, o, r[d + 4], 7, -176418897), o = h(o, a, i, s, r[d + 5], 12, 1200080426), s = h(s, o, a, i, r[d + 6], 17, -1473231341), i = h(i, s, o, a, r[d + 7], 22, -45705983), a = h(a, i, s, o, r[d + 8], 7, 1770035416), o = h(o, a, i, s, r[d + 9], 12, -1958414417), s = h(s, o, a, i, r[d + 10], 17, -42063), i = h(i, s, o, a, r[d + 11], 22, -1990404162), a = h(a, i, s, o, r[d + 12], 7, 1804603682), o = h(o, a, i, s, r[d + 13], 12, -40341101), s = h(s, o, a, i, r[d + 14], 17, -1502002290), i = h(i, s, o, a, r[d + 15], 22, 1236535329), a = y(a, i, s, o, r[d + 1], 5, -165796510), o = y(o, a, i, s, r[d + 6], 9, -1069501632), s = y(s, o, a, i, r[d + 11], 14, 643717713), i = y(i, s, o, a, r[d + 0], 20, -373897302), a = y(a, i, s, o, r[d + 5], 5, -701558691), o = y(o, a, i, s, r[d + 10], 9, 38016083), s = y(s, o, a, i, r[d + 15], 14, -660478335), i = y(i, s, o, a, r[d + 4], 20, -405537848), a = y(a, i, s, o, r[d + 9], 5, 568446438), o = y(o, a, i, s, r[d + 14], 9, -1019803690), s = y(s, o, a, i, r[d + 3], 14, -187363961), i = y(i, s, o, a, r[d + 8], 20, 1163531501), a = y(a, i, s, o, r[d + 13], 5, -1444681467), o = y(o, a, i, s, r[d + 2], 9, -51403784), s = y(s, o, a, i, r[d + 7], 14, 1735328473), i = y(i, s, o, a, r[d + 12], 20, -1926607734), a = g(a, i, s, o, r[d + 5], 4, -378558), o = g(o, a, i, s, r[d + 8], 11, -2022574463), s = g(s, o, a, i, r[d + 11], 16, 1839030562), i = g(i, s, o, a, r[d + 14], 23, -35309556), a = g(a, i, s, o, r[d + 1], 4, -1530992060), o = g(o, a, i, s, r[d + 4], 11, 1272893353), s = g(s, o, a, i, r[d + 7], 16, -155497632), i = g(i, s, o, a, r[d + 10], 23, -1094730640), a = g(a, i, s, o, r[d + 13], 4, 681279174), o = g(o, a, i, s, r[d + 0], 11, -358537222), s = g(s, o, a, i, r[d + 3], 16, -722521979), i = g(i, s, o, a, r[d + 6], 23, 76029189), a = g(a, i, s, o, r[d + 9], 4, -640364487), o = g(o, a, i, s, r[d + 12], 11, -421815835), s = g(s, o, a, i, r[d + 15], 16, 530742520), i = g(i, s, o, a, r[d + 2], 23, -995338651), a = w(a, i, s, o, r[d + 0], 6, -198630844), o = w(o, a, i, s, r[d + 7], 10, 1126891415), s = w(s, o, a, i, r[d + 14], 15, -1416354905), i = w(i, s, o, a, r[d + 5], 21, -57434055), a = w(a, i, s, o, r[d + 12], 6, 1700485571), o = w(o, a, i, s, r[d + 3], 10, -1894986606), s = w(s, o, a, i, r[d + 10], 15, -1051523), i = w(i, s, o, a, r[d + 1], 21, -2054922799), a = w(a, i, s, o, r[d + 8], 6, 1873313359), o = w(o, a, i, s, r[d + 15], 10, -30611744), s = w(s, o, a, i, r[d + 6], 15, -1560198380), i = w(i, s, o, a, r[d + 13], 21, 1309151649), a = w(a, i, s, o, r[d + 4], 6, -145523070), o = w(o, a, i, s, r[d + 11], 10, -1120210379), s = w(s, o, a, i, r[d + 2], 15, 718787259), i = w(i, s, o, a, r[d + 9], 21, -343485551), a = a + oe >>> 0, i = i + ae >>> 0, s = s + se >>> 0, o = o + ce >>> 0
                }
                return e.endian([a, i, s, o])
            };
        l._ff = function(u, p, r, f, a, i, s) {
            var o = u + (p & r | ~p & f) + (a >>> 0) + s;
            return (o << i | o >>> 32 - i) + p
        }, l._gg = function(u, p, r, f, a, i, s) {
            var o = u + (p & f | r & ~f) + (a >>> 0) + s;
            return (o << i | o >>> 32 - i) + p
        }, l._hh = function(u, p, r, f, a, i, s) {
            var o = u + (p ^ r ^ f) + (a >>> 0) + s;
            return (o << i | o >>> 32 - i) + p
        }, l._ii = function(u, p, r, f, a, i, s) {
            var o = u + (r ^ (p | ~f)) + (a >>> 0) + s;
            return (o << i | o >>> 32 - i) + p
        }, l._blocksize = 16, l._digestsize = 16, A.exports = function(u, p) {
            if (u == null) throw new Error("Illegal argument " + u);
            var r = e.wordsToBytes(l(u, p));
            return p && p.asBytes ? r : p && p.asString ? c.bytesToString(r) : e.bytesToHex(r)
        }
    }()), A.exports
}
var Pe = _e();
const ne = ue(Pe);
var _ = (e => (e.ABTestSplitLandingPageExperiment = "AB Test - Split URL Landing Page Experiment", e.ABTestFunnelReorder = "AB Test - Funnel Reorder", e.ABTestServicesPricingHeroVideo = "AB Test - Services Pricing Hero Video", e.ClickedContinueAfterAddressEntry = "Clicked Continue Button After Address Entry", e.ClickedContinueWithButton = "Clicked Continue With Button", e.ClickedCTA = "Clicked CTA", e.ClickedDynamicScheduleCtaArea = "Clicked Dynamic Schedule CTA Area", e.ClickedLearnMoreRinseRepeat = 'Clicked "Learn More" About Rinse Repeat', e.ClickedOrderPortalRRUpsell = "Clicked Order Portal RR Upsell", e.ClickedRinseRepeatCTA = "Clicked Rinse Repeat CTA", e.ClickedRinseRepeatChangeBillingFrequency = "Clicked Rinse Repeat Change Billing Frequency", e.ClickedScheduleLearnMoreModal = "Clicked Schedule Learn More Modal", e.ClickedSeeFullDCPriceList = "Clicked See Full Dry Cleaning Price List", e.ClickedServicesPricingWFCTA = "Clicked Services-Pricing WF CTA", e.ClickedShare = "Clicked Share (web)", e.CompletedPaymentEntry = "Completed Payment Entry", e.PartnerContactFormSubmitted = "Partner Contact Form Submitted", e.EnteredNonSpecificAddress = "Entered a Non-specific Address", e.ExposedToPerBagPAYG = "Exposed to Per-bag-PAYG", e.ExpandedSinglePageSchedulingSection = "Expanded Single-Page-Scheduling Section", e.FirstScroll = "First Scroll", e.LeadCapturePopupShown = "Lead Capture Popup Shown", e.LeadCapturePopupSubmitted = "Lead Capture Popup Submitted", e.OrderPortalCrossSellShown = "Order Portal - Services Cross-Sell Banner Shown", e.OrderPortalCrossSellOpened = "Order Portal - Services Cross-Sell Banner Opened", e.OrderPortalCrossSellNewServicesSelected = "Order Portal - Services Cross-Sell New Services Selected", e.OpenedCreditDetailModal = "Opened Credit Detail Modal", e.OpenedFirstPickupStepsModal = "Opened First Pickup Steps Modal", e.PaymentEntryFailed = "Payment Entry Failed", e.PaymentEntrySuccess = "Payment Method Entry Success", e.PostConversionSurveyShown = "Post-Conversion Survey Shown", e.PostConversionSurveySubmitted = "Post-Conversion Survey Submitted", e.PurchasedRinseRepeatSubscription = "Purchased Rinse Repeat Subscription", e.ReenteredFunnel = "Re-Entered Funnel", e.RinseRepeatPurchaseFailed = "Rinse Repeat Purchase Failed", e.SelectedServiceTypes = "Selected Service Types", e.ShowedOrderPortalRRUpsell = "Showed Order Portal RR Upsell", e.SelectedOrderCancellationReason = "Selected Order Cancellation Reason", e.StartedAddressEntry = "Started Address Entry", e.StartedPaymentEntry = "Started Payment Entry", e.UpdatedRushSelection = "Updated Rush Selection", e.VideoPlayed = "Video Played", e.ViewedLandingPageSocialProofCard = "Viewed Landing Page Social Proof Card", e.ViewedOrderCancellationReasonModal = "Viewed Order Cancellation Reason Modal", e.ShownPriorityService = "Shown Priority Service", e.WebsiteRegistration = "Website Registration", e.EmailCaptured = "Email Captured", e.WFBagSizeSelected = "WF Bag Size Selected", e.WFBagSizeModalShown = "WF Bag Size Modal Shown", e.WFBagSizeModalDismissed = "WF Bag Size Modal Dismissed", e))(_ || {});
const v = async e => {
        const n = C("customer_do_not_sell"),
            t = await R(),
            c = t.advertising,
            l = t.data_analytics,
            r = {
                consent: {
                    categoryPreferences: {
                        advertising: c && !n,
                        data_analytics: l && !n
                    }
                }
            };
        return {
            context: {
                traits: e ? {
                    email: e.email,
                    firstName: e.firstName,
                    lastName: e.lastName,
                    phone: e.phoneNumber,
                    address: {
                        street: e.address1,
                        city: e.city,
                        state: e.addressState,
                        postalCode: e.zipCode,
                        country: e.country
                    }
                } : void 0,
                fbc: pe(),
                fbp: fe(),
                ...r
            }
        }
    },
    ve = async (e, n, t) => {
        const c = await v();
        window.analytics.identify(e, {
            email: n,
            phone_number: t
        }, c), (n || t) && Ce({
            email: n,
            phoneNumber: t
        })
    },
    Ue = () => {
        const e = P("customer_uid"),
            n = P("customer_email");
        ve(e, n)
    },
    me = async (e, n = {}, t = document.title) => {
        const c = {
            is_authenticated: !!C("is_authenticated"),
            page_url: window.location.href,
            page_title: t,
            referrer_url: document.referrer
        };
        ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_keyword"].forEach(u => {
            c[u] = E(u)
        }), Object.assign(c, n);
        const l = await v();
        window.analytics.page(e, c, l)
    },
    Ee = async () => {
        const e = { ...B(),
                is_authenticated: !!C("is_authenticated")
            },
            n = await v();
        window.analytics.page("Landing", e, n)
    },
    Re = {
        "": "Marketing",
        faqs: "Marketing",
        contact: "Marketing",
        "how-it-works": "Marketing",
        about: "Marketing",
        guarantee: "Marketing",
        blog: "Blog",
        share: "Marketing",
        referral: "Marketing",
        repeat: "Marketing",
        partner: "Marketing",
        "services-pricing": "Marketing",
        "dry-cleaning": "Marketing",
        "wash-and-fold": "Marketing",
        "app-for-laundry": "Marketing"
    },
    qe = async () => {
        const e = window.location.pathname.split("/"),
            n = e[1];
        let t = Re[n];
        if (n === "customers" && e[2] === "account" && !window.location.search && (t = "Account"), t) {
            let c = {
                is_authenticated: !!C("is_authenticated"),
                page_url: window.location.href,
                page_title: document.title,
                referrer_url: document.referrer
            };
            const l = m.get("rinse-offer-bar-uid"),
                u = l ? l.split(",") : [];
            l && (c = { ...c,
                announcement_uids: u
            }), ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_keyword"].forEach(r => {
                c[r] = E(r)
            });
            const p = await v();
            window.analytics.page(t, c, p)
        }
    },
    Ve = e => {
        me(e, {
            app_type: b()
        })
    },
    L = async (e, n, t) => {
        const c = await v(t ? .customer);
        window.analytics.track(e, n, c)
    },
    Ge = async (e, n = {}, t) => {
        const c = {
                app_type: b(),
                ...n
            },
            l = await v(t ? .customer);
        window.analytics.track(e, c, l)
    },
    re = (e, n, t) => {
        L(e, {
            app_type: b(),
            page_url: window.location.href,
            page_pathname: window.location.pathname,
            ...n ? ? {}
        }, {
            customer: t ? .customer
        })
    },
    He = (e, n, t) => {
        const c = B();
        re(e, { ...c,
            ...n
        }, {
            customer: t ? .customer
        })
    },
    ie = (e, n, t = {}) => {
        H(M.EmailCapture, {
            page_type: n
        }), L(_.EmailCaptured, {
            email: e,
            page_type: n,
            ...t
        }, {
            customer: {
                email: e
            }
        }), $(_.EmailCaptured, {
            hashed_email: ne(e)
        }), z(_.EmailCaptured)
    },
    $e = e => {
        const n = B();
        ie(e, "landing", n)
    },
    ze = e => {
        ie(e, "signup")
    },
    Ke = e => {
        const n = m.get("irclickid");
        if (L("Website Registration", {
                irclickid: n
            }, {
                customer: e
            }), H(M.CompleteRegistration), C("sendGtagEventsToPrecise")) try {
            window.gtag("event", "conversion", {
                send_to: "AW-11378402053/NWvfCLb-5c8ZEIXG0rEq",
                value: 50,
                currency: "USD",
                transaction_id: ""
            })
        } catch {}
        $(_.WebsiteRegistration, {
            hashed_email: ne(e.email)
        }), z(_.WebsiteRegistration), X(K.CompleteRegistration, e.uid, {
            customerId: e.uid
        }), J(Z.Registration), Q(Y.WebsiteRegistration), N(j.WebsiteRegistration), te(ee.WebsiteRegistration)
    },
    Xe = e => {
        re(_.FirstScroll, {
            seconds_to_scroll: Math.round(e / 1e3 * 10) / 10
        })
    };
export {
    Z as A, Ke as B, Oe as C, j as F, _ as S, re as a, Ee as b, Ue as c, L as d, Xe as e, $e as f, ve as g, Ve as h, He as i, J as j, te as k, ee as l, qe as m, Ge as n, Ie as o, ge as p, Me as q, We as r, me as s, N as t, we as u, $ as v, z as w, De as x, Le as y, ze as z
};
//# sourceMappingURL=tracking.1.sha256-2062fe1796.js.map