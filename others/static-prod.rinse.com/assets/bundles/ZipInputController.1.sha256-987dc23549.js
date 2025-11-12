import {
    j as s,
    R as u,
    r as g
} from "./index.1.sha256-9e28d71f9d.js";
import {
    C as x
} from "./index.esm.1.sha256-c7e83da665.js";
import {
    c as n
} from "./index.1.sha256-b28292217a.js";
import {
    d as b
} from "./tracking.1.sha256-2062fe1796.js";
import {
    T as h
} from "./TextInput.1.sha256-ad5e048318.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    i as m
} from "./validation.1.sha256-ec7e1bd3ee.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        i = new e.Error().stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "2d0d152f-4bff-4296-915c-6b0131a477e5", e._sentryDebugIdIdentifier = "sentry-dbid-2d0d152f-4bff-4296-915c-6b0131a477e5")
} catch {}
const y = ({
        city: e
    }) => s.jsxs("div", {
        className: n("validation-message", "validation-message--valid"),
        children: [s.jsx("span", {
            className: n("validation-message__icon", "rinse-icon--check"),
            "aria-hidden": "true"
        }), s.jsxs("span", {
            className: "validation-message__text",
            role: "alert",
            children: ["We serve ", e, "!"]
        })]
    }),
    _ = () => s.jsxs("div", {
        className: n("validation-message", "validation-message--invalid"),
        children: [s.jsx("span", {
            className: n("validation-message__icon", "rinse-icon--x"),
            "aria-hidden": "true"
        }), s.jsx("span", {
            className: "validation-message__text",
            role: "alert",
            children: "Unfortunately, we don’t serve your area yet"
        })]
    }),
    j = (e, i) => {
        const {
            invalid: o,
            onChangeServiceable: r,
            value: a,
            withServiceableMessage: t = !1,
            showDefaultMessage: l = !1,
            supportedZIPs: d
        } = e, v = t && !!a && !o && m(a), c = d[a], f = !!c;
        return g.useEffect(() => {
            let p = !0;
            m(a) && (p = !!d[a], t && b("Entered Zip Code", {
                zip_code: a,
                in_service: f
            })), r ? .(p)
        }, [a]), s.jsx(h, { ...e,
            autoComplete: "postal-code",
            maxLength: 5,
            ref: i,
            validationMessage: v ? f ? s.jsx(y, {
                city: c
            }) : s.jsx(_, {}) : l ? "Check if Rinse serves your neighborhood" : ""
        })
    },
    I = u.forwardRef(j),
    w = ({
        control: e,
        defaultValue: i,
        name: o,
        ...r
    }, a) => s.jsx(x, {
        control: e,
        defaultValue: i,
        name: o,
        render: ({
            field: t,
            fieldState: l
        }) => s.jsx(I, { ...t,
            ...l,
            ...r,
            ref: a
        })
    }),
    D = u.forwardRef(w);
export {
    D as Z
};
//# sourceMappingURL=ZipInputController.1.sha256-987dc23549.js.map