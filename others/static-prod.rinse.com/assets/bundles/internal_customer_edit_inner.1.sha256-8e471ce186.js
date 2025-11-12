try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1f9333fc-07a5-461f-9f5f-08376c7aac2a", e._sentryDebugIdIdentifier = "sentry-dbid-1f9333fc-07a5-461f-9f5f-08376c7aac2a")
} catch {} {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
        id: "9565d6dab6485d5f04e8c24899e568b115d82b3c"
    }
}
//# sourceMappingURL=internal_customer_edit_inner.1.sha256-8e471ce186.js.map