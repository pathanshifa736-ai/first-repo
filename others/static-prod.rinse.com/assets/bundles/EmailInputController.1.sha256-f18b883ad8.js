import {
    R as n,
    j as o
} from "./index.1.sha256-9e28d71f9d.js";
import {
    C as i
} from "./index.esm.1.sha256-c7e83da665.js";
import {
    y as l
} from "./utils.1.sha256-3b1d7cc795.js";
import {
    T as p
} from "./TextInput.1.sha256-ad5e048318.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1a3f5e90-6a3f-47dc-bbe0-15d1f93573e4", e._sentryDebugIdIdentifier = "sentry-dbid-1a3f5e90-6a3f-47dc-bbe0-15d1f93573e4")
} catch {}
const m = (e, t) => o.jsx(p, { ...e,
        autoComplete: "email",
        inputType: l(),
        ref: t
    }),
    u = n.forwardRef(m),
    b = ({
        control: e,
        defaultValue: t,
        name: r,
        ...s
    }, a) => o.jsx(i, {
        control: e,
        defaultValue: t,
        name: r,
        render: ({
            field: d,
            fieldState: f
        }) => o.jsx(u, { ...d,
            ...f,
            ...s,
            ref: a
        })
    }),
    w = n.forwardRef(b);
export {
    w as E
};
//# sourceMappingURL=EmailInputController.1.sha256-f18b883ad8.js.map