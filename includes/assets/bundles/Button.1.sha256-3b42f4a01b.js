import {
    j as d
} from "./index.1.sha256-9e28d71f9d.js";
import {
    c as a
} from "./index.1.sha256-b28292217a.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "21f661dc-f819-4fdf-83df-b58df6b47ad6", e._sentryDebugIdIdentifier = "sentry-dbid-21f661dc-f819-4fdf-83df-b58df6b47ad6")
} catch {}
const y = ({
    as: e,
    children: n,
    className: o,
    disabled: t = !1,
    testId: i,
    ...f
}) => {
    if (e === "a") {
        const {
            href: l = null,
            onClick: s = null
        } = f;
        return d.jsx(e, { ...f,
            ...t ? {
                href: null,
                onClick: null
            } : {
                href: l,
                onClick: s
            },
            className: a(o, t && "disabled"),
            "data-testid": i,
            inert: t ? "" : void 0,
            "aria-live": "polite",
            tabIndex: t ? -1 : 0,
            children: n
        })
    }
    const {
        type: r = "button"
    } = f;
    return d.jsx(e, { ...f,
        disabled: t,
        "data-testid": i,
        className: o,
        inert: t ? "" : void 0,
        type: r,
        "aria-live": "polite",
        children: n
    })
};
export {
    y as B
};
//# sourceMappingURL=Button.1.sha256-3b42f4a01b.js.map