import {
    R as d,
    j as r
} from "./index.1.sha256-9e28d71f9d.js";
import {
    C as c
} from "./index.esm.1.sha256-c7e83da665.js";
import {
    T as f
} from "./TextInput.1.sha256-ad5e048318.js";
import {
    T as b
} from "./TextInputIcon.1.sha256-e290813f03.js";
import {
    d as m
} from "./phoneUtils.1.sha256-35a5b80deb.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9320ecbb-d939-46bd-ac34-fe6a86082f2b", e._sentryDebugIdIdentifier = "sentry-dbid-9320ecbb-d939-46bd-ac34-fe6a86082f2b")
} catch {}
const p = (e, n) => {
        const {
            openPhoneNumberModal: o
        } = e, a = t => {
            const {
                value: i
            } = t.target, u = i.replace(/\D/g, "");
            e.onChange(u), e.extraHandleChange ? .(t)
        }, s = !!o, l = m(e.value);
        return r.jsx(f, { ...e,
            autoComplete: "tel",
            customHandleChange: a,
            iconRight: s ? r.jsx(b, {
                iconName: "info-circle",
                iconClickableDescription: "Read why we need your phone number",
                onIconClick: o,
                useClickableColor: !0
            }) : void 0,
            inputType: "tel",
            ref: n,
            maxLength: 16,
            value: l
        })
    },
    h = d.forwardRef(p),
    g = ({
        control: e,
        defaultValue: n,
        name: o,
        ...a
    }, s) => r.jsx(c, {
        control: e,
        defaultValue: n,
        name: o,
        render: ({
            field: l,
            fieldState: t
        }) => r.jsx(h, { ...l,
            ...t,
            ...a,
            ref: s
        })
    }),
    P = d.forwardRef(g);
export {
    P
};
//# sourceMappingURL=PhoneNumberInputController.1.sha256-876dd3a1f8.js.map