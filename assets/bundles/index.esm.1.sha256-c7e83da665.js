import {
    R as m
} from "./index.1.sha256-9e28d71f9d.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        i = new e.Error().stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "6793906e-5256-447d-949b-51ecb7be68f6", e._sentryDebugIdIdentifier = "sentry-dbid-6793906e-5256-447d-949b-51ecb7be68f6")
} catch {}
var ge = e => e.type === "checkbox",
    ae = e => e instanceof Date,
    B = e => e == null;
const at = e => typeof e == "object";
var L = e => !B(e) && !Array.isArray(e) && at(e) && !ae(e),
    nt = e => L(e) && e.target ? ge(e.target) ? e.target.checked : e.target.value : e,
    Et = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
    lt = (e, i) => e.has(Et(i)),
    Ct = e => {
        const i = e.constructor && e.constructor.prototype;
        return L(i) && i.hasOwnProperty("isPrototypeOf")
    },
    We = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function P(e) {
    let i;
    const t = Array.isArray(e);
    if (e instanceof Date) i = new Date(e);
    else if (e instanceof Set) i = new Set(e);
    else if (!(We && (e instanceof Blob || e instanceof FileList)) && (t || L(e)))
        if (i = t ? [] : {}, !Array.isArray(e) && !Ct(e)) i = e;
        else
            for (const r in e) i[r] = P(e[r]);
    else return e;
    return i
}
var le = e => Array.isArray(e) ? e.filter(Boolean) : [],
    k = e => e === void 0,
    c = (e, i, t) => {
        if (!i || !L(e)) return t;
        const r = le(i.split(/[,[\].]+?/)).reduce((u, l) => B(u) ? u : u[l], e);
        return k(r) || r === e ? k(e[i]) ? t : e[i] : r
    };
const he = {
        BLUR: "blur",
        FOCUS_OUT: "focusout",
        CHANGE: "change"
    },
    K = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    Y = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    },
    Ot = m.createContext(null),
    Fe = () => m.useContext(Ot);
var ot = (e, i, t, r = !0) => {
        const u = {
            defaultValues: i._defaultValues
        };
        for (const l in e) Object.defineProperty(u, l, {
            get: () => {
                const f = l;
                return i._proxyFormState[f] !== K.all && (i._proxyFormState[f] = !r || K.all), t && (t[f] = !0), e[f]
            }
        });
        return u
    },
    W = e => L(e) && !Object.keys(e).length,
    ct = (e, i, t, r) => {
        t(e);
        const {
            name: u,
            ...l
        } = e;
        return W(l) || Object.keys(l).length >= Object.keys(i).length || Object.keys(l).find(f => i[f] === (!r || K.all))
    },
    $ = e => Array.isArray(e) ? e : [e],
    ft = (e, i, t) => t && i ? e === i : !e || !i || e === i || $(e).some(r => r && (r.startsWith(i) || i.startsWith(r)));

function pe(e) {
    const i = m.useRef(e);
    i.current = e, m.useEffect(() => {
        const t = !e.disabled && i.current.subject && i.current.subject.subscribe({
            next: i.current.next
        });
        return () => {
            t && t.unsubscribe()
        }
    }, [e.disabled])
}

function Rt(e) {
    const i = Fe(),
        {
            control: t = i.control,
            disabled: r,
            name: u,
            exact: l
        } = e || {},
        [f, A] = m.useState(t._formState),
        _ = m.useRef(!0),
        w = m.useRef({
            isDirty: !1,
            isLoading: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        }),
        E = m.useRef(u);
    return E.current = u, pe({
        disabled: r,
        next: x => _.current && ft(E.current, x.name, l) && ct(x, w.current, t._updateFormState) && A({ ...t._formState,
            ...x
        }),
        subject: t._subjects.state
    }), m.useEffect(() => (_.current = !0, w.current.isValid && t._updateValid(!0), () => {
        _.current = !1
    }), [t]), ot(f, t, w.current, !1)
}
var Q = e => typeof e == "string",
    dt = (e, i, t, r, u) => Q(e) ? (r && i.watch.add(e), c(t, e, u)) : Array.isArray(e) ? e.map(l => (r && i.watch.add(l), c(t, l))) : (r && (i.watchAll = !0), t);

function Tt(e) {
    const i = Fe(),
        {
            control: t = i.control,
            name: r,
            defaultValue: u,
            disabled: l,
            exact: f
        } = e || {},
        A = m.useRef(r);
    A.current = r, pe({
        disabled: l,
        subject: t._subjects.values,
        next: E => {
            ft(A.current, E.name, f) && w(P(dt(A.current, t._names, E.values || t._formValues, !1, u)))
        }
    });
    const [_, w] = m.useState(t._getWatch(r, u));
    return m.useEffect(() => t._removeUnmounted()), _
}
var $e = e => /^\w*$/.test(e),
    yt = e => le(e.replace(/["|']|\]/g, "").split(/\.|\[/));

function D(e, i, t) {
    let r = -1;
    const u = $e(i) ? [i] : yt(i),
        l = u.length,
        f = l - 1;
    for (; ++r < l;) {
        const A = u[r];
        let _ = t;
        if (r !== f) {
            const w = e[A];
            _ = L(w) || Array.isArray(w) ? w : isNaN(+u[r + 1]) ? {} : []
        }
        e[A] = _, e = e[A]
    }
    return e
}

function Lt(e) {
    const i = Fe(),
        {
            name: t,
            control: r = i.control,
            shouldUnregister: u
        } = e,
        l = lt(r._names.array, t),
        f = Tt({
            control: r,
            name: t,
            defaultValue: c(r._formValues, t, c(r._defaultValues, t, e.defaultValue)),
            exact: !0
        }),
        A = Rt({
            control: r,
            name: t
        }),
        _ = m.useRef(r.register(t, { ...e.rules,
            value: f
        }));
    return m.useEffect(() => {
        const w = r._options.shouldUnregister || u,
            E = (x, v) => {
                const j = c(r._fields, x);
                j && (j._f.mount = v)
            };
        if (E(t, !0), w) {
            const x = P(c(r._options.defaultValues, t));
            D(r._defaultValues, t, x), k(c(r._formValues, t)) && D(r._formValues, t, x)
        }
        return () => {
            (l ? w && !r._state.action : w) ? r.unregister(t): E(t, !1)
        }
    }, [t, r, l, u]), {
        field: {
            name: t,
            value: f,
            onChange: m.useCallback(w => _.current.onChange({
                target: {
                    value: nt(w),
                    name: t
                },
                type: he.CHANGE
            }), [t]),
            onBlur: m.useCallback(() => _.current.onBlur({
                target: {
                    value: c(r._formValues, t),
                    name: t
                },
                type: he.BLUR
            }), [t, r]),
            ref: w => {
                const E = c(r._fields, t);
                E && w && (E._f.ref = {
                    focus: () => w.focus(),
                    select: () => w.select(),
                    setCustomValidity: x => w.setCustomValidity(x),
                    reportValidity: () => w.reportValidity()
                })
            }
        },
        formState: A,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: () => !!c(A.errors, t)
            },
            isDirty: {
                enumerable: !0,
                get: () => !!c(A.dirtyFields, t)
            },
            isTouched: {
                enumerable: !0,
                get: () => !!c(A.touchedFields, t)
            },
            error: {
                enumerable: !0,
                get: () => c(A.errors, t)
            }
        })
    }
}
const Qt = e => e.render(Lt(e));
var Ut = (e, i, t, r, u) => i ? { ...t[e],
    types: { ...t[e] && t[e].types ? t[e].types : {},
        [r]: u || !0
    }
} : {};
const ve = (e, i, t) => {
    for (const r of t || Object.keys(e)) {
        const u = c(e, r);
        if (u) {
            const {
                _f: l,
                ...f
            } = u;
            if (l && i(l.name)) {
                if (l.ref.focus) {
                    l.ref.focus();
                    break
                } else if (l.refs && l.refs[0].focus) {
                    l.refs[0].focus();
                    break
                }
            } else L(f) && ve(f, i)
        }
    }
};
var Z = () => {
        const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, i => {
            const t = (Math.random() * 16 + e) % 16 | 0;
            return (i == "x" ? t : t & 3 | 8).toString(16)
        })
    },
    ke = (e, i, t = {}) => t.shouldFocus || k(t.shouldFocus) ? t.focusName || `${e}.${k(t.focusIndex)?i:t.focusIndex}.` : "",
    Pe = e => ({
        isOnSubmit: !e || e === K.onSubmit,
        isOnBlur: e === K.onBlur,
        isOnChange: e === K.onChange,
        isOnAll: e === K.all,
        isOnTouch: e === K.onTouched
    }),
    je = (e, i, t) => !t && (i.watchAll || i.watch.has(e) || [...i.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))),
    gt = (e, i, t) => {
        const r = le(c(e, t));
        return D(r, "root", i[t]), D(e, t, r), e
    },
    ne = e => typeof e == "boolean",
    He = e => e.type === "file",
    ee = e => typeof e == "function",
    Ae = e => {
        if (!We) return !1;
        const i = e ? e.ownerDocument : 0;
        return e instanceof(i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    },
    _e = e => Q(e),
    Ke = e => e.type === "radio",
    be = e => e instanceof RegExp;
const et = {
        value: !1,
        isValid: !1
    },
    tt = {
        value: !0,
        isValid: !0
    };
var _t = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const i = e.filter(t => t && t.checked && !t.disabled).map(t => t.value);
            return {
                value: i,
                isValid: !!i.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !k(e[0].attributes.value) ? k(e[0].value) || e[0].value === "" ? tt : {
            value: e[0].value,
            isValid: !0
        } : tt : et
    }
    return et
};
const rt = {
    isValid: !1,
    value: null
};
var ht = e => Array.isArray(e) ? e.reduce((i, t) => t && t.checked && !t.disabled ? {
    isValid: !0,
    value: t.value
} : i, rt) : rt;

function st(e, i, t = "validate") {
    if (_e(e) || Array.isArray(e) && e.every(_e) || ne(e) && !e) return {
        type: t,
        message: _e(e) ? e : "",
        ref: i
    }
}
var ue = e => L(e) && !be(e) ? e : {
        value: e,
        message: ""
    },
    qe = async (e, i, t, r, u) => {
        const {
            ref: l,
            refs: f,
            required: A,
            maxLength: _,
            minLength: w,
            min: E,
            max: x,
            pattern: v,
            validate: j,
            name: I,
            valueAsNumber: oe,
            mount: se,
            disabled: ce
        } = e._f, V = c(i, I);
        if (!se || ce) return {};
        const q = f ? f[0] : l,
            G = S => {
                r && q.reportValidity && (q.setCustomValidity(ne(S) ? "" : S || ""), q.reportValidity())
            },
            y = {},
            b = Ke(l),
            F = ge(l),
            T = b || F,
            M = (oe || He(l)) && k(l.value) && k(V) || Ae(l) && l.value === "" || V === "" || Array.isArray(V) && !V.length,
            z = Ut.bind(null, I, t, y),
            X = (S, p, O, N = Y.maxLength, H = Y.minLength) => {
                const J = S ? p : O;
                y[I] = {
                    type: S ? N : H,
                    message: J,
                    ref: l,
                    ...z(S ? N : H, J)
                }
            };
        if (u ? !Array.isArray(V) || !V.length : A && (!T && (M || B(V)) || ne(V) && !V || F && !_t(f).isValid || b && !ht(f).isValid)) {
            const {
                value: S,
                message: p
            } = _e(A) ? {
                value: !!A,
                message: A
            } : ue(A);
            if (S && (y[I] = {
                    type: Y.required,
                    message: p,
                    ref: q,
                    ...z(Y.required, p)
                }, !t)) return G(p), y
        }
        if (!M && (!B(E) || !B(x))) {
            let S, p;
            const O = ue(x),
                N = ue(E);
            if (!B(V) && !isNaN(V)) {
                const H = l.valueAsNumber || V && +V;
                B(O.value) || (S = H > O.value), B(N.value) || (p = H < N.value)
            } else {
                const H = l.valueAsDate || new Date(V),
                    J = de => new Date(new Date().toDateString() + " " + de),
                    te = l.type == "time",
                    fe = l.type == "week";
                Q(O.value) && V && (S = te ? J(V) > J(O.value) : fe ? V > O.value : H > new Date(O.value)), Q(N.value) && V && (p = te ? J(V) < J(N.value) : fe ? V < N.value : H < new Date(N.value))
            }
            if ((S || p) && (X(!!S, O.message, N.message, Y.max, Y.min), !t)) return G(y[I].message), y
        }
        if ((_ || w) && !M && (Q(V) || u && Array.isArray(V))) {
            const S = ue(_),
                p = ue(w),
                O = !B(S.value) && V.length > +S.value,
                N = !B(p.value) && V.length < +p.value;
            if ((O || N) && (X(O, S.message, p.message), !t)) return G(y[I].message), y
        }
        if (v && !M && Q(V)) {
            const {
                value: S,
                message: p
            } = ue(v);
            if (be(S) && !V.match(S) && (y[I] = {
                    type: Y.pattern,
                    message: p,
                    ref: l,
                    ...z(Y.pattern, p)
                }, !t)) return G(p), y
        }
        if (j) {
            if (ee(j)) {
                const S = await j(V, i),
                    p = st(S, q);
                if (p && (y[I] = { ...p,
                        ...z(Y.validate, p.message)
                    }, !t)) return G(p.message), y
            } else if (L(j)) {
                let S = {};
                for (const p in j) {
                    if (!W(S) && !t) break;
                    const O = st(await j[p](V, i), q, p);
                    O && (S = { ...O,
                        ...z(p, O.message)
                    }, G(O.message), t && (y[I] = S))
                }
                if (!W(S) && (y[I] = {
                        ref: q,
                        ...S
                    }, !t)) return y
            }
        }
        return G(!0), y
    };

function Ee(e, i) {
    return [...e, ...$(i)]
}
var Ce = e => Array.isArray(e) ? e.map(() => {}) : void 0;

function Oe(e, i, t) {
    return [...e.slice(0, i), ...$(t), ...e.slice(i)]
}
var Re = (e, i, t) => Array.isArray(e) ? (k(e[t]) && (e[t] = void 0), e.splice(t, 0, e.splice(i, 1)[0]), e) : [];

function Te(e, i) {
    return [...$(i), ...$(e)]
}

function Mt(e, i) {
    let t = 0;
    const r = [...e];
    for (const u of i) r.splice(u - t, 1), t++;
    return le(r).length ? r : []
}
var Le = (e, i) => k(i) ? [] : Mt(e, $(i).sort((t, r) => t - r)),
    Ue = (e, i, t) => {
        e[i] = [e[t], e[t] = e[i]][0]
    };

function Bt(e, i) {
    const t = i.slice(0, -1).length;
    let r = 0;
    for (; r < t;) e = k(e) ? r++ : e[i[r++]];
    return e
}

function It(e) {
    for (const i in e)
        if (!k(e[i])) return !1;
    return !0
}

function U(e, i) {
    const t = Array.isArray(i) ? i : $e(i) ? [i] : yt(i),
        r = t.length === 1 ? e : Bt(e, t),
        u = t.length - 1,
        l = t[u];
    return r && delete r[l], u !== 0 && (L(r) && W(r) || Array.isArray(r) && It(r)) && U(e, t.slice(0, -1)), e
}
var it = (e, i, t) => (e[i] = t, e);

function Xt(e) {
    const i = Fe(),
        {
            control: t = i.control,
            name: r,
            keyName: u = "id",
            shouldUnregister: l
        } = e,
        [f, A] = m.useState(t._getFieldArray(r)),
        _ = m.useRef(t._getFieldArray(r).map(Z)),
        w = m.useRef(f),
        E = m.useRef(r),
        x = m.useRef(!1);
    E.current = r, w.current = f, t._names.array.add(r), e.rules && t.register(r, e.rules), pe({
        next: ({
            values: y,
            name: b
        }) => {
            if (b === E.current || !b) {
                const F = c(y, E.current);
                Array.isArray(F) && (A(F), _.current = F.map(Z))
            }
        },
        subject: t._subjects.array
    });
    const v = m.useCallback(y => {
            x.current = !0, t._updateFieldArray(r, y)
        }, [t, r]),
        j = (y, b) => {
            const F = $(P(y)),
                T = Ee(t._getFieldArray(r), F);
            t._names.focus = ke(r, T.length - 1, b), _.current = Ee(_.current, F.map(Z)), v(T), A(T), t._updateFieldArray(r, T, Ee, {
                argA: Ce(y)
            })
        },
        I = (y, b) => {
            const F = $(P(y)),
                T = Te(t._getFieldArray(r), F);
            t._names.focus = ke(r, 0, b), _.current = Te(_.current, F.map(Z)), v(T), A(T), t._updateFieldArray(r, T, Te, {
                argA: Ce(y)
            })
        },
        oe = y => {
            const b = Le(t._getFieldArray(r), y);
            _.current = Le(_.current, y), v(b), A(b), t._updateFieldArray(r, b, Le, {
                argA: y
            })
        },
        se = (y, b, F) => {
            const T = $(P(b)),
                M = Oe(t._getFieldArray(r), y, T);
            t._names.focus = ke(r, y, F), _.current = Oe(_.current, y, T.map(Z)), v(M), A(M), t._updateFieldArray(r, M, Oe, {
                argA: y,
                argB: Ce(b)
            })
        },
        ce = (y, b) => {
            const F = t._getFieldArray(r);
            Ue(F, y, b), Ue(_.current, y, b), v(F), A(F), t._updateFieldArray(r, F, Ue, {
                argA: y,
                argB: b
            }, !1)
        },
        V = (y, b) => {
            const F = t._getFieldArray(r);
            Re(F, y, b), Re(_.current, y, b), v(F), A(F), t._updateFieldArray(r, F, Re, {
                argA: y,
                argB: b
            }, !1)
        },
        q = (y, b) => {
            const F = P(b),
                T = it(t._getFieldArray(r), y, F);
            _.current = [...T].map((M, z) => !M || z === y ? Z() : _.current[z]), v(T), A([...T]), t._updateFieldArray(r, T, it, {
                argA: y,
                argB: F
            }, !0, !1)
        },
        G = y => {
            const b = $(P(y));
            _.current = b.map(Z), v([...b]), A([...b]), t._updateFieldArray(r, [...b], F => F, {}, !0, !1)
        };
    return m.useEffect(() => {
        if (t._state.action = !1, je(r, t._names) && t._subjects.state.next({ ...t._formState
            }), x.current && (!Pe(t._options.mode).isOnSubmit || t._formState.isSubmitted))
            if (t._options.resolver) t._executeSchema([r]).then(y => {
                const b = c(y.errors, r),
                    F = c(t._formState.errors, r);
                (F ? !b && F.type : b && b.type) && (b ? D(t._formState.errors, r, b) : U(t._formState.errors, r), t._subjects.state.next({
                    errors: t._formState.errors
                }))
            });
            else {
                const y = c(t._fields, r);
                y && y._f && qe(y, t._formValues, t._options.criteriaMode === K.all, t._options.shouldUseNativeValidation, !0).then(b => !W(b) && t._subjects.state.next({
                    errors: gt(t._formState.errors, b, r)
                }))
            }
        t._subjects.values.next({
            name: r,
            values: { ...t._formValues
            }
        }), t._names.focus && ve(t._fields, y => !!y && y.startsWith(t._names.focus || "")), t._names.focus = "", t._updateValid()
    }, [f, r, t]), m.useEffect(() => (!c(t._formValues, r) && t._updateFieldArray(r), () => {
        (t._options.shouldUnregister || l) && t.unregister(r)
    }), [r, t, u, l]), {
        swap: m.useCallback(ce, [v, r, t]),
        move: m.useCallback(V, [v, r, t]),
        prepend: m.useCallback(I, [v, r, t]),
        append: m.useCallback(j, [v, r, t]),
        remove: m.useCallback(oe, [v, r, t]),
        insert: m.useCallback(se, [v, r, t]),
        update: m.useCallback(q, [v, r, t]),
        replace: m.useCallback(G, [v, r, t]),
        fields: m.useMemo(() => f.map((y, b) => ({ ...y,
            [u]: _.current[b] || Z()
        })), [f, u])
    }
}

function Me() {
    let e = [];
    return {
        get observers() {
            return e
        },
        next: u => {
            for (const l of e) l.next && l.next(u)
        },
        subscribe: u => (e.push(u), {
            unsubscribe: () => {
                e = e.filter(l => l !== u)
            }
        }),
        unsubscribe: () => {
            e = []
        }
    }
}
var Ve = e => B(e) || !at(e);

function re(e, i) {
    if (Ve(e) || Ve(i)) return e === i;
    if (ae(e) && ae(i)) return e.getTime() === i.getTime();
    const t = Object.keys(e),
        r = Object.keys(i);
    if (t.length !== r.length) return !1;
    for (const u of t) {
        const l = e[u];
        if (!r.includes(u)) return !1;
        if (u !== "ref") {
            const f = i[u];
            if (ae(l) && ae(f) || L(l) && L(f) || Array.isArray(l) && Array.isArray(f) ? !re(l, f) : l !== f) return !1
        }
    }
    return !0
}
var vt = e => e.type === "select-multiple",
    Nt = e => Ke(e) || ge(e),
    Be = e => Ae(e) && e.isConnected,
    At = e => {
        for (const i in e)
            if (ee(e[i])) return !0;
        return !1
    };

function me(e, i = {}) {
    const t = Array.isArray(e);
    if (L(e) || t)
        for (const r in e) Array.isArray(e[r]) || L(e[r]) && !At(e[r]) ? (i[r] = Array.isArray(e[r]) ? [] : {}, me(e[r], i[r])) : B(e[r]) || (i[r] = !0);
    return i
}

function bt(e, i, t) {
    const r = Array.isArray(e);
    if (L(e) || r)
        for (const u in e) Array.isArray(e[u]) || L(e[u]) && !At(e[u]) ? k(i) || Ve(t[u]) ? t[u] = Array.isArray(e[u]) ? me(e[u], []) : { ...me(e[u])
        } : bt(e[u], B(i) ? {} : i[u], t[u]) : t[u] = !re(e[u], i[u]);
    return t
}
var Ie = (e, i) => bt(e, i, me(i)),
    Vt = (e, {
        valueAsNumber: i,
        valueAsDate: t,
        setValueAs: r
    }) => k(e) ? e : i ? e === "" ? NaN : e && +e : t && Q(e) ? new Date(e) : r ? r(e) : e;

function Ne(e) {
    const i = e.ref;
    if (!(e.refs ? e.refs.every(t => t.disabled) : i.disabled)) return He(i) ? i.files : Ke(i) ? ht(e.refs).value : vt(i) ? [...i.selectedOptions].map(({
        value: t
    }) => t) : ge(i) ? _t(e.refs).value : Vt(k(i.value) ? e.ref.value : i.value, e)
}
var Pt = (e, i, t, r) => {
        const u = {};
        for (const l of e) {
            const f = c(i, l);
            f && D(u, l, f._f)
        }
        return {
            criteriaMode: t,
            names: [...e],
            fields: u,
            shouldUseNativeValidation: r
        }
    },
    ye = e => k(e) ? e : be(e) ? e.source : L(e) ? be(e.value) ? e.value.source : e.value : e,
    jt = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function ut(e, i, t) {
    const r = c(e, t);
    if (r || $e(t)) return {
        error: r,
        name: t
    };
    const u = t.split(".");
    for (; u.length;) {
        const l = u.join("."),
            f = c(i, l),
            A = c(e, l);
        if (f && !Array.isArray(f) && t !== l) return {
            name: t
        };
        if (A && A.type) return {
            name: l,
            error: A
        };
        u.pop()
    }
    return {
        name: t
    }
}
var qt = (e, i, t, r, u) => u.isOnAll ? !1 : !t && u.isOnTouch ? !(i || e) : (t ? r.isOnBlur : u.isOnBlur) ? !e : (t ? r.isOnChange : u.isOnChange) ? e : !0,
    Wt = (e, i) => !le(c(e, i)).length && U(e, i);
const $t = {
    mode: K.onSubmit,
    reValidateMode: K.onChange,
    shouldFocusError: !0
};

function Ht(e = {}, i) {
    let t = { ...$t,
            ...e
        },
        r = {
            submitCount: 0,
            isDirty: !1,
            isLoading: ee(t.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {}
        },
        u = {},
        l = L(t.defaultValues) || L(t.values) ? P(t.defaultValues || t.values) || {} : {},
        f = t.shouldUnregister ? {} : P(l),
        A = {
            action: !1,
            mount: !1,
            watch: !1
        },
        _ = {
            mount: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        w, E = 0;
    const x = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        },
        v = {
            values: Me(),
            array: Me(),
            state: Me()
        },
        j = e.resetOptions && e.resetOptions.keepDirtyValues,
        I = Pe(t.mode),
        oe = Pe(t.reValidateMode),
        se = t.criteriaMode === K.all,
        ce = s => a => {
            clearTimeout(E), E = setTimeout(s, a)
        },
        V = async s => {
            if (x.isValid || s) {
                const a = t.resolver ? W((await M()).errors) : await X(u, !0);
                a !== r.isValid && v.state.next({
                    isValid: a
                })
            }
        },
        q = s => x.isValidating && v.state.next({
            isValidating: s
        }),
        G = (s, a = [], n, g, d = !0, o = !0) => {
            if (g && n) {
                if (A.action = !0, o && Array.isArray(c(u, s))) {
                    const h = n(c(u, s), g.argA, g.argB);
                    d && D(u, s, h)
                }
                if (o && Array.isArray(c(r.errors, s))) {
                    const h = n(c(r.errors, s), g.argA, g.argB);
                    d && D(r.errors, s, h), Wt(r.errors, s)
                }
                if (x.touchedFields && o && Array.isArray(c(r.touchedFields, s))) {
                    const h = n(c(r.touchedFields, s), g.argA, g.argB);
                    d && D(r.touchedFields, s, h)
                }
                x.dirtyFields && (r.dirtyFields = Ie(l, f)), v.state.next({
                    name: s,
                    isDirty: p(s, a),
                    dirtyFields: r.dirtyFields,
                    errors: r.errors,
                    isValid: r.isValid
                })
            } else D(f, s, a)
        },
        y = (s, a) => {
            D(r.errors, s, a), v.state.next({
                errors: r.errors
            })
        },
        b = (s, a, n, g) => {
            const d = c(u, s);
            if (d) {
                const o = c(f, s, k(n) ? c(l, s) : n);
                k(o) || g && g.defaultChecked || a ? D(f, s, a ? o : Ne(d._f)) : H(s, o), A.mount && V()
            }
        },
        F = (s, a, n, g, d) => {
            let o = !1,
                h = !1;
            const C = {
                name: s
            };
            if (!n || g) {
                x.isDirty && (h = r.isDirty, r.isDirty = C.isDirty = p(), o = h !== C.isDirty);
                const R = re(c(l, s), a);
                h = c(r.dirtyFields, s), R ? U(r.dirtyFields, s) : D(r.dirtyFields, s, !0), C.dirtyFields = r.dirtyFields, o = o || x.dirtyFields && h !== !R
            }
            if (n) {
                const R = c(r.touchedFields, s);
                R || (D(r.touchedFields, s, n), C.touchedFields = r.touchedFields, o = o || x.touchedFields && R !== n)
            }
            return o && d && v.state.next(C), o ? C : {}
        },
        T = (s, a, n, g) => {
            const d = c(r.errors, s),
                o = x.isValid && ne(a) && r.isValid !== a;
            if (e.delayError && n ? (w = ce(() => y(s, n)), w(e.delayError)) : (clearTimeout(E), w = null, n ? D(r.errors, s, n) : U(r.errors, s)), (n ? !re(d, n) : d) || !W(g) || o) {
                const h = { ...g,
                    ...o && ne(a) ? {
                        isValid: a
                    } : {},
                    errors: r.errors,
                    name: s
                };
                r = { ...r,
                    ...h
                }, v.state.next(h)
            }
            q(!1)
        },
        M = async s => t.resolver(f, t.context, Pt(s || _.mount, u, t.criteriaMode, t.shouldUseNativeValidation)),
        z = async s => {
            const {
                errors: a
            } = await M();
            if (s)
                for (const n of s) {
                    const g = c(a, n);
                    g ? D(r.errors, n, g) : U(r.errors, n)
                } else r.errors = a;
            return a
        },
        X = async (s, a, n = {
            valid: !0
        }) => {
            for (const g in s) {
                const d = s[g];
                if (d) {
                    const {
                        _f: o,
                        ...h
                    } = d;
                    if (o) {
                        const C = _.array.has(o.name),
                            R = await qe(d, f, se, t.shouldUseNativeValidation && !a, C);
                        if (R[o.name] && (n.valid = !1, a)) break;
                        !a && (c(R, o.name) ? C ? gt(r.errors, R, o.name) : D(r.errors, o.name, R[o.name]) : U(r.errors, o.name))
                    }
                    h && await X(h, a, n)
                }
            }
            return n.valid
        },
        S = () => {
            for (const s of _.unMount) {
                const a = c(u, s);
                a && (a._f.refs ? a._f.refs.every(n => !Be(n)) : !Be(a._f.ref)) && xe(s)
            }
            _.unMount = new Set
        },
        p = (s, a) => (s && a && D(f, s, a), !re(Ge(), l)),
        O = (s, a, n) => dt(s, _, { ...A.mount ? f : k(a) ? l : Q(s) ? {
                [s]: a
            } : a
        }, n, a),
        N = s => le(c(A.mount ? f : l, s, e.shouldUnregister ? c(l, s, []) : [])),
        H = (s, a, n = {}) => {
            const g = c(u, s);
            let d = a;
            if (g) {
                const o = g._f;
                o && (!o.disabled && D(f, s, Vt(a, o)), d = Ae(o.ref) && B(a) ? "" : a, vt(o.ref) ? [...o.ref.options].forEach(h => h.selected = d.includes(h.value)) : o.refs ? ge(o.ref) ? o.refs.length > 1 ? o.refs.forEach(h => (!h.defaultChecked || !h.disabled) && (h.checked = Array.isArray(d) ? !!d.find(C => C === h.value) : d === h.value)) : o.refs[0] && (o.refs[0].checked = !!d) : o.refs.forEach(h => h.checked = h.value === d) : He(o.ref) ? o.ref.value = "" : (o.ref.value = d, o.ref.type || v.values.next({
                    name: s,
                    values: { ...f
                    }
                })))
            }(n.shouldDirty || n.shouldTouch) && F(s, d, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && de(s)
        },
        J = (s, a, n) => {
            for (const g in a) {
                const d = a[g],
                    o = `${s}.${g}`,
                    h = c(u, o);
                (_.array.has(s) || !Ve(d) || h && !h._f) && !ae(d) ? J(o, d, n) : H(o, d, n)
            }
        },
        te = (s, a, n = {}) => {
            const g = c(u, s),
                d = _.array.has(s),
                o = P(a);
            D(f, s, o), d ? (v.array.next({
                name: s,
                values: { ...f
                }
            }), (x.isDirty || x.dirtyFields) && n.shouldDirty && v.state.next({
                name: s,
                dirtyFields: Ie(l, f),
                isDirty: p(s, o)
            })) : g && !g._f && !B(o) ? J(s, o, n) : H(s, o, n), je(s, _) && v.state.next({ ...r
            }), v.values.next({
                name: s,
                values: { ...f
                }
            }), !A.mount && i()
        },
        fe = async s => {
            const a = s.target;
            let n = a.name,
                g = !0;
            const d = c(u, n),
                o = () => a.type ? Ne(d._f) : nt(s);
            if (d) {
                let h, C;
                const R = o(),
                    ie = s.type === he.BLUR || s.type === he.FOCUS_OUT,
                    St = !jt(d._f) && !t.resolver && !c(r.errors, n) && !d._f.deps || qt(ie, c(r.touchedFields, n), r.isSubmitted, oe, I),
                    Se = je(n, _, ie);
                D(f, n, R), ie ? (d._f.onBlur && d._f.onBlur(s), w && w(0)) : d._f.onChange && d._f.onChange(s);
                const De = F(n, R, ie, !1),
                    Dt = !W(De) || Se;
                if (!ie && v.values.next({
                        name: n,
                        type: s.type,
                        values: { ...f
                        }
                    }), St) return x.isValid && V(), Dt && v.state.next({
                    name: n,
                    ...Se ? {} : De
                });
                if (!ie && Se && v.state.next({ ...r
                    }), q(!0), t.resolver) {
                    const {
                        errors: Ye
                    } = await M([n]), kt = ut(r.errors, u, n), Ze = ut(Ye, u, kt.name || n);
                    h = Ze.error, n = Ze.name, C = W(Ye)
                } else h = (await qe(d, f, se, t.shouldUseNativeValidation))[n], g = isNaN(R) || R === c(f, n, R), g && (h ? C = !1 : x.isValid && (C = await X(u, !0)));
                g && (d._f.deps && de(d._f.deps), T(n, C, h, De))
            }
        },
        de = async (s, a = {}) => {
            let n, g;
            const d = $(s);
            if (q(!0), t.resolver) {
                const o = await z(k(s) ? s : d);
                n = W(o), g = s ? !d.some(h => c(o, h)) : n
            } else s ? (g = (await Promise.all(d.map(async o => {
                const h = c(u, o);
                return await X(h && h._f ? {
                    [o]: h
                } : h)
            }))).every(Boolean), !(!g && !r.isValid) && V()) : g = n = await X(u);
            return v.state.next({ ...!Q(s) || x.isValid && n !== r.isValid ? {} : {
                    name: s
                },
                ...t.resolver || !s ? {
                    isValid: n
                } : {},
                errors: r.errors,
                isValidating: !1
            }), a.shouldFocus && !g && ve(u, o => o && c(r.errors, o), s ? d : _.mount), g
        },
        Ge = s => {
            const a = { ...l,
                ...A.mount ? f : {}
            };
            return k(s) ? a : Q(s) ? c(a, s) : s.map(n => c(a, n))
        },
        ze = (s, a) => ({
            invalid: !!c((a || r).errors, s),
            isDirty: !!c((a || r).dirtyFields, s),
            isTouched: !!c((a || r).touchedFields, s),
            error: c((a || r).errors, s)
        }),
        mt = s => {
            s && $(s).forEach(a => U(r.errors, a)), v.state.next({
                errors: s ? r.errors : {}
            })
        },
        Ft = (s, a, n) => {
            const g = (c(u, s, {
                _f: {}
            })._f || {}).ref;
            D(r.errors, s, { ...a,
                ref: g
            }), v.state.next({
                name: s,
                errors: r.errors,
                isValid: !1
            }), n && n.shouldFocus && g && g.focus && g.focus()
        },
        pt = (s, a) => ee(s) ? v.values.subscribe({
            next: n => s(O(void 0, a), n)
        }) : O(s, a, !0),
        xe = (s, a = {}) => {
            for (const n of s ? $(s) : _.mount) _.mount.delete(n), _.array.delete(n), a.keepValue || (U(u, n), U(f, n)), !a.keepError && U(r.errors, n), !a.keepDirty && U(r.dirtyFields, n), !a.keepTouched && U(r.touchedFields, n), !t.shouldUnregister && !a.keepDefaultValue && U(l, n);
            v.values.next({
                values: { ...f
                }
            }), v.state.next({ ...r,
                ...a.keepDirty ? {
                    isDirty: p()
                } : {}
            }), !a.keepIsValid && V()
        },
        we = (s, a = {}) => {
            let n = c(u, s);
            const g = ne(a.disabled);
            return D(u, s, { ...n || {},
                _f: { ...n && n._f ? n._f : {
                        ref: {
                            name: s
                        }
                    },
                    name: s,
                    mount: !0,
                    ...a
                }
            }), _.mount.add(s), n ? g && D(f, s, a.disabled ? void 0 : c(f, s, Ne(n._f))) : b(s, !0, a.value), { ...g ? {
                    disabled: a.disabled
                } : {},
                ...t.shouldUseNativeValidation ? {
                    required: !!a.required,
                    min: ye(a.min),
                    max: ye(a.max),
                    minLength: ye(a.minLength),
                    maxLength: ye(a.maxLength),
                    pattern: ye(a.pattern)
                } : {},
                name: s,
                onChange: fe,
                onBlur: fe,
                ref: d => {
                    if (d) {
                        we(s, a), n = c(u, s);
                        const o = k(d.value) && d.querySelectorAll && d.querySelectorAll("input,select,textarea")[0] || d,
                            h = Nt(o),
                            C = n._f.refs || [];
                        if (h ? C.find(R => R === o) : o === n._f.ref) return;
                        D(u, s, {
                            _f: { ...n._f,
                                ...h ? {
                                    refs: [...C.filter(Be), o, ...Array.isArray(c(l, s)) ? [{}] : []],
                                    ref: {
                                        type: o.type,
                                        name: s
                                    }
                                } : {
                                    ref: o
                                }
                            }
                        }), b(s, !1, void 0, o)
                    } else n = c(u, s, {}), n._f && (n._f.mount = !1), (t.shouldUnregister || a.shouldUnregister) && !(lt(_.array, s) && A.action) && _.unMount.add(s)
                }
            }
        },
        Je = () => t.shouldFocusError && ve(u, s => s && c(r.errors, s), _.mount),
        xt = (s, a) => async n => {
            n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
            let g = P(f);
            if (v.state.next({
                    isSubmitting: !0
                }), t.resolver) {
                const {
                    errors: d,
                    values: o
                } = await M();
                r.errors = d, g = o
            } else await X(u);
            U(r.errors, "root"), W(r.errors) ? (v.state.next({
                errors: {}
            }), await s(g, n)) : (a && await a({ ...r.errors
            }, n), Je(), setTimeout(Je)), v.state.next({
                isSubmitted: !0,
                isSubmitting: !1,
                isSubmitSuccessful: W(r.errors),
                submitCount: r.submitCount + 1,
                errors: r.errors
            })
        },
        wt = (s, a = {}) => {
            c(u, s) && (k(a.defaultValue) ? te(s, c(l, s)) : (te(s, a.defaultValue), D(l, s, a.defaultValue)), a.keepTouched || U(r.touchedFields, s), a.keepDirty || (U(r.dirtyFields, s), r.isDirty = a.defaultValue ? p(s, c(l, s)) : p()), a.keepError || (U(r.errors, s), x.isValid && V()), v.state.next({ ...r
            }))
        },
        Qe = (s, a = {}) => {
            const n = s || l,
                g = P(n),
                d = s && !W(s) ? g : l;
            if (a.keepDefaultValues || (l = n), !a.keepValues) {
                if (a.keepDirtyValues || j)
                    for (const o of _.mount) c(r.dirtyFields, o) ? D(d, o, c(f, o)) : te(o, c(d, o));
                else {
                    if (We && k(s))
                        for (const o of _.mount) {
                            const h = c(u, o);
                            if (h && h._f) {
                                const C = Array.isArray(h._f.refs) ? h._f.refs[0] : h._f.ref;
                                if (Ae(C)) {
                                    const R = C.closest("form");
                                    if (R) {
                                        R.reset();
                                        break
                                    }
                                }
                            }
                        }
                    u = {}
                }
                f = e.shouldUnregister ? a.keepDefaultValues ? P(l) : {} : g, v.array.next({
                    values: { ...d
                    }
                }), v.values.next({
                    values: { ...d
                    }
                })
            }
            _ = {
                mount: new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, !A.mount && i(), A.mount = !x.isValid || !!a.keepIsValid, A.watch = !!e.shouldUnregister, v.state.next({
                submitCount: a.keepSubmitCount ? r.submitCount : 0,
                isDirty: a.keepDirty ? r.isDirty : !!(a.keepDefaultValues && !re(s, l)),
                isSubmitted: a.keepIsSubmitted ? r.isSubmitted : !1,
                dirtyFields: a.keepDirtyValues ? r.dirtyFields : a.keepDefaultValues && s ? Ie(l, s) : {},
                touchedFields: a.keepTouched ? r.touchedFields : {},
                errors: a.keepErrors ? r.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1
            })
        },
        Xe = (s, a) => Qe(ee(s) ? s(f) : s, a);
    return {
        control: {
            register: we,
            unregister: xe,
            getFieldState: ze,
            _executeSchema: M,
            _getWatch: O,
            _getDirty: p,
            _updateValid: V,
            _removeUnmounted: S,
            _updateFieldArray: G,
            _getFieldArray: N,
            _reset: Qe,
            _resetDefaultValues: () => ee(t.defaultValues) && t.defaultValues().then(s => {
                Xe(s, t.resetOptions), v.state.next({
                    isLoading: !1
                })
            }),
            _updateFormState: s => {
                r = { ...r,
                    ...s
                }
            },
            _subjects: v,
            _proxyFormState: x,
            get _fields() {
                return u
            },
            get _formValues() {
                return f
            },
            get _state() {
                return A
            },
            set _state(s) {
                A = s
            },
            get _defaultValues() {
                return l
            },
            get _names() {
                return _
            },
            set _names(s) {
                _ = s
            },
            get _formState() {
                return r
            },
            set _formState(s) {
                r = s
            },
            get _options() {
                return t
            },
            set _options(s) {
                t = { ...t,
                    ...s
                }
            }
        },
        trigger: de,
        register: we,
        handleSubmit: xt,
        watch: pt,
        setValue: te,
        getValues: Ge,
        reset: Xe,
        resetField: wt,
        clearErrors: mt,
        unregister: xe,
        setError: Ft,
        setFocus: (s, a = {}) => {
            const n = c(u, s),
                g = n && n._f;
            if (g) {
                const d = g.refs ? g.refs[0] : g.ref;
                d.focus && (d.focus(), a.shouldSelect && d.select())
            }
        },
        getFieldState: ze
    }
}

function Yt(e = {}) {
    const i = m.useRef(),
        [t, r] = m.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: ee(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: ee(e.defaultValues) ? void 0 : e.defaultValues
        });
    i.current || (i.current = { ...Ht(e, () => r(l => ({ ...l
        }))),
        formState: t
    });
    const u = i.current.control;
    return u._options = e, pe({
        subject: u._subjects.state,
        next: l => {
            ct(l, u._proxyFormState, u._updateFormState, !0) && r({ ...u._formState
            })
        }
    }), m.useEffect(() => {
        e.values && !re(e.values, u._defaultValues) ? u._reset(e.values, u._options.resetOptions) : u._resetDefaultValues()
    }, [e.values, u]), m.useEffect(() => {
        u._state.mount || (u._updateValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState
        })), u._removeUnmounted()
    }), i.current.formState = ot(t, u), i.current
}
export {
    Qt as C, Ut as a, Xt as b, Fe as c, Tt as d, c as g, D as s, Yt as u
};
//# sourceMappingURL=index.esm.1.sha256-c7e83da665.js.map