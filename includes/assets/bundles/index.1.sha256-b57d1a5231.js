import {
    j as t,
    R as W
} from "./index.1.sha256-9e28d71f9d.js";
import {
    c as l
} from "./index.1.sha256-b28292217a.js";
import {
    M as g
} from "./styles.1.sha256-4f6d594a4d.js";
import {
    u as z
} from "./index.1.sha256-50ecb1a8e2.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    B as j
} from "./Button.1.sha256-3b42f4a01b.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d3085c72-fc9d-4e98-b709-4d5d0ecf128b", e._sentryDebugIdIdentifier = "sentry-dbid-d3085c72-fc9d-4e98-b709-4d5d0ecf128b")
} catch {}
const O = "_icon_kdjab_6",
    A = "_container_kdjab_12",
    x = {
        icon: O,
        container: A
    },
    B = ({
        ariaLabel: e,
        classes: n,
        useInternalCloseIcon: a = !1,
        ...d
    }) => t.jsx(j, {
        as: "button",
        ...d,
        className: l(x.container, n ? .container),
        "aria-label": e || "Close",
        children: t.jsx("span", {
            className: l(a ? "fa fa-x" : "rinse-icon rinse-icon--x", x.icon, n ? .icon),
            "aria-hidden": "true"
        })
    }),
    C = () => {
        document.body.style.overflow = "", document.body.style.position = "", document.body.style.top = "", document.body.style.width = ""
    },
    c = e => {
        window.scrollTo({
            top: e,
            behavior: "instant"
        })
    },
    I = e => {
        const n = W.useRef(window.scrollY);
        W.useEffect(() => (e ? (n.current = window.scrollY, document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.top = `-${n.current}px`, document.body.style.width = "100%", requestAnimationFrame(() => {
            c(n.current)
        })) : (C(), c(n.current)), () => {
            e && (C(), c(n.current))
        }), [e])
    };
var m = (e => (e.Default = "default", e.Oversized = "oversized", e))(m || {});
const k = "_body_1qqly_6",
    R = "_content_1qqly_13",
    D = "_modalOversized_1qqly_24",
    E = "_headerWithCloseButton_1qqly_24",
    M = "_contentWithAboveTitle_1qqly_27",
    S = "_buttonBack_1qqly_31",
    Y = "_buttonCloseWrapper_1qqly_45",
    $ = "_modal_1qqly_24",
    F = "_headerWithMediaTop_1qqly_49",
    G = "_buttonClose_1qqly_45",
    H = "_header_1qqly_20",
    J = "_mediaTop_1qqly_81",
    K = "_mediaTopWrapper_1qqly_89",
    Q = "_modalRootOversized_1qqly_105",
    U = "_modalContainer_1qqly_110",
    V = "_overlay_1qqly_145",
    X = "_title_1qqly_156",
    Z = "_titleWrapper_1qqly_178",
    o = {
        body: k,
        content: R,
        modalOversized: D,
        headerWithCloseButton: E,
        contentWithAboveTitle: M,
        buttonBack: S,
        buttonCloseWrapper: Y,
        modal: $,
        headerWithMediaTop: F,
        buttonClose: G,
        header: H,
        mediaTop: J,
        mediaTopWrapper: K,
        modalRootOversized: Q,
        modalContainer: U,
        overlay: V,
        title: X,
        titleWrapper: Z
    },
    ae = ({
        aboveTitleContent: e,
        ariaLabel: n,
        classes: a,
        children: d,
        closeModal: u,
        hideCloseIcon: _ = !1,
        id: w,
        mediaTop: i,
        modalStyle: N = m.Default,
        onBackPress: p,
        showModal: y,
        title: r,
        useInternalCloseIcon: T = !1
    }) => {
        const b = z(),
            h = `${b}-label`,
            f = `${b}-title`,
            q = !!n,
            s = N === m.Oversized;
        I(y);
        const v = typeof i == "string" ? t.jsx("img", {
            className: o.mediaTop,
            src: i,
            alt: ""
        }) : i;
        return t.jsxs(g, {
            animationDuration: 500,
            ariaLabelledby: q ? h : f,
            blockScroll: !1,
            modalId: w,
            open: y,
            onClose: u,
            center: !0,
            classNames: {
                root: l(o.modalRoot, a ? .modalRoot, {
                    [o.modalRootOversized]: s
                }),
                modal: l("background--light", o.modal, {
                    [o.modalOversized]: s
                }, a ? .modal),
                modalAnimationIn: s ? "customEnterModalOversizedAnimation" : "customEnterModalAnimation",
                modalAnimationOut: s ? "customExitModalOversizedAnimation" : "customExitModalAnimation",
                modalContainer: l(o.modalContainer, a ? .modalContainer),
                overlay: o.overlay
            },
            showCloseIcon: !1,
            children: [t.jsxs("div", {
                className: l(o.header, {
                    [o.headerWithCloseButton]: !_,
                    [o.headerWithMediaTop]: !!i
                }, a ? .header),
                children: [!!v && t.jsx("div", {
                    className: l(o.mediaTopWrapper, a ? .mediaTopWrapper),
                    children: v
                }), !!p && t.jsx(j, {
                    as: "button",
                    className: o.buttonBack,
                    onClick: p,
                    "aria-label": "Back",
                    children: t.jsx("span", {
                        className: "rinse-icon rinse-icon--arrow-left-long",
                        "aria-hidden": "true"
                    })
                }), !_ && t.jsx("div", {
                    className: o.buttonCloseWrapper,
                    children: t.jsx(B, {
                        classes: {
                            container: o.buttonClose,
                            icon: o.buttonCloseIcon
                        },
                        onClick: u,
                        testId: "close-modal-button",
                        useInternalCloseIcon: T
                    })
                })]
            }), t.jsxs("div", {
                className: l(o.content, {
                    [o.contentWithAboveTitle]: !!e
                }, a ? .content),
                children: [q && t.jsx("div", {
                    id: h,
                    className: "sr-only",
                    children: n
                }), (e || r) && t.jsxs("div", {
                    className: l(o.titleWrapper, a ? .titleWrapper),
                    children: [e && t.jsx("div", {
                        className: "overline",
                        children: e
                    }), r && t.jsx("h3", {
                        id: f,
                        className: l(o.title, a ? .title),
                        "aria-hidden": n ? "true" : void 0,
                        children: r
                    })]
                }), t.jsx("div", {
                    className: l(o.body, a ? .body),
                    children: d
                })]
            })]
        })
    };
export {
    B as C, ae as D, m as a, o as m
};
//# sourceMappingURL=index.1.sha256-b57d1a5231.js.map