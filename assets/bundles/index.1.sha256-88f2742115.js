import {
    r,
    j as i
} from "./index.1.sha256-9e28d71f9d.js";
import {
    M as L
} from "./styles.1.sha256-4f6d594a4d.js";
import {
    c as s
} from "./index.1.sha256-b28292217a.js";
import {
    u as C
} from "./index.1.sha256-50ecb1a8e2.js";
import {
    a as D,
    S as M
} from "./tracking.1.sha256-2062fe1796.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "27deb780-daeb-4667-bd7b-5d5ee694c297", n._sentryDebugIdIdentifier = "sentry-dbid-27deb780-daeb-4667-bd7b-5d5ee694c297")
} catch {}
const R = "_previewContainer_1lw3f_6",
    F = "_previewVideo_1lw3f_11",
    K = "_inactive_1lw3f_17",
    A = "_previewOverlay_1lw3f_21",
    B = "_previewOverlayPlaying_1lw3f_29",
    W = "_modalVideo_1lw3f_40",
    $ = "_container_1lw3f_52",
    q = "_buttonClose_1lw3f_73",
    z = "_buttonCloseIcon_1lw3f_98",
    t = {
        previewContainer: R,
        previewVideo: F,
        inactive: K,
        previewOverlay: A,
        previewOverlayPlaying: B,
        modalVideo: W,
        container: $,
        buttonClose: q,
        buttonCloseIcon: z
    },
    G = window.matchMedia("(prefers-reduced-motion: reduce)"),
    Z = ({
        previewDuration: n = 0,
        ...e
    }) => {
        const c = e.previewLoop ? 0 : n,
            [d, y] = r.useState(c === 0),
            [j, f] = r.useState(!1),
            l = r.useRef(null),
            a = r.useRef(null),
            [v, b] = r.useState(!0),
            [p, E] = r.useState(0),
            m = C(),
            _ = C();
        let h;
        const S = () => {
                e.previewLoop || (h = setTimeout(() => {
                    y(!0), l.current.pause()
                }, c * 1e3))
            },
            w = () => {
                (e.previewLoop || c > 0 && !d) && (y(!0), l.current.pause(), l.current.currentTime = e.previewStopFrameSeconds ? ? n, clearTimeout(h))
            },
            g = () => {
                e.onOpen ? .(), f(!0), w(), setTimeout(() => {
                    a.current.currentTime = p
                }, 1);
                const o = document.activeElement,
                    u = o.focus;
                o.focus = O => {
                    u.call(o, { ...O,
                        preventScroll: !0
                    })
                }
            },
            P = () => {
                f(!1);
                const o = a.current.currentTime - p;
                D(M.VideoPlayed, {
                    video_title: e.videoTitle,
                    view_duration: o
                }), a.current.pause(), E(a.current.currentTime), e.onClose ? .()
            };
        r.useEffect(() => {
            Array.from(l.current.getElementsByTagName("track")).forEach(o => {
                o.remove()
            })
        }, [l, c]);
        const V = () => {
                v ? a.current.pause() : a.current.play()
            },
            T = e.previewVideoSources || e.videoSources,
            I = e.previewPoster || e.poster,
            x = G.matches,
            N = !x && (e.previewLoop || c > 0),
            k = !x && !!e.previewLoop;
        return i.jsxs("div", {
            className: s(t.previewContainer, e.classes ? .previewContainer),
            children: [i.jsx("video", {
                autoPlay: N ? !0 : void 0,
                loop: k,
                className: s(t.previewVideo, {
                    [t.inactive]: d,
                    [e.classes ? .inactive]: d
                }, e.classes ? .previewVideo),
                id: _,
                muted: !0,
                onPlay: S,
                playsInline: !0,
                poster: I,
                ref: l,
                "aria-label": "Video preview (hit any key to pause looping)",
                onKeyDown: o => {
                    w(), o.preventDefault()
                },
                children: T.map(({
                    src: o,
                    type: u
                }) => i.jsx("source", {
                    src: o,
                    type: u
                }, o))
            }), i.jsx("button", {
                className: "icon-circle icon-circle--transparent-over-dark video-control video-control--bottom-right",
                "aria-label": "Stop preview video",
                "aria-controls": _,
                hidden: d,
                onClick: w,
                type: "button",
                children: i.jsx("i", {
                    className: "rinse-icon rinse-icon--check-off-fill",
                    "aria-hidden": "true"
                })
            }), i.jsx("a", {
                "aria-label": "Play full video (opens modal)",
                "aria-describedby": e.ariaDescribedBy,
                className: s(t.previewOverlay, {
                    hidden: !d
                }),
                onClick: g,
                onKeyDown: o => {
                    o.key === "Enter" && g()
                },
                role: "button",
                tabIndex: 0,
                children: i.jsx("div", {
                    className: s("video-controls__play-circle", e.classes ? .playCircle),
                    children: i.jsx("i", {
                        className: "rinse-icon rinse-icon--play-filled",
                        "aria-hidden": "true"
                    })
                })
            }), i.jsxs(L, {
                classNames: {
                    modal: t.container
                },
                open: j,
                onClose: P,
                center: !0,
                ariaLabelledby: m,
                showCloseIcon: !1,
                children: [i.jsxs("video", {
                    className: s(t.modalVideo, {
                        [t.inactive]: !v
                    }),
                    ref: a,
                    id: m,
                    "aria-label": e.ariaLabel,
                    playsInline: !0,
                    poster: e.poster,
                    onPlay: () => b(!0),
                    onPause: () => b(!1),
                    autoPlay: !0,
                    children: [e.videoSources.map(({
                        src: o,
                        type: u
                    }) => i.jsx("source", {
                        src: o,
                        type: u
                    }, o)), e.videoSrcVtt && i.jsx("track", {
                        default: !0,
                        kind: "subtitles",
                        label: "English",
                        src: e.videoSrcVtt,
                        srcLang: "en"
                    })]
                }), i.jsx("a", {
                    "aria-controls": m,
                    "aria-label": `${v?"Pause":"Play"} video`,
                    className: s(t.previewOverlay, v && t.previewOverlayPlaying),
                    onClick: V,
                    onKeyDown: o => {
                        (o.key === " " || o.key === "Enter") && V()
                    },
                    role: "button",
                    tabIndex: 0,
                    children: i.jsx("div", {
                        className: "video-controls__play-circle",
                        children: i.jsx("i", {
                            className: "rinse-icon rinse-icon--play-filled"
                        })
                    })
                }), i.jsx("button", {
                    className: t.buttonClose,
                    onClick: P,
                    "aria-label": "Close video",
                    children: i.jsx("i", {
                        className: s("rinse-icon", "rinse-icon--x", t.buttonCloseIcon)
                    })
                })]
            })]
        })
    };
export {
    Z as V
};
//# sourceMappingURL=index.1.sha256-88f2742115.js.map