import {
    R as f,
    j as i
} from "./index.1.sha256-9e28d71f9d.js";
import {
    c as l
} from "./index.1.sha256-b28292217a.js";
import {
    B as b
} from "./Button.1.sha256-3b42f4a01b.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "0b01d257-b3f7-4ce4-9101-aaf8242d0dde", e._sentryDebugIdIdentifier = "sentry-dbid-0b01d257-b3f7-4ce4-9101-aaf8242d0dde")
} catch {}
var u = (e => (e.Primary = "primary", e.Secondary = "secondary", e.Danger = "danger", e))(u || {});
const y = ({
        as: e,
        className: r,
        disabled: d = !1,
        variation: n = "primary",
        isOutline: s,
        ...t
    }, o) => {
        const a = `rinse-button--${n}-new--${s?"outline":"filled"}`;
        return i.jsx(b, {
            ref: o,
            as: e,
            className: l(`rinse-button--${n}-new`, s !== void 0 && a, r),
            disabled: d,
            ...t
        })
    },
    w = f.forwardRef(y);
export {
    u as B, w as R
};
//# sourceMappingURL=RinseButton.1.sha256-86e976130e.js.map