import {r as Ye, j as ft, k as Be, s as K, c as R, u as j, g as V, d as H, n as x, l as ut, m as ct, e as de, f as Ze, p as Ce} from "./scheduler.69c11db5.js";
import {t as h, d, S as z, i as q, e as w, a as k, p as N, b as D, f as p, g as P, h as B, j as I, l as ve, k as g, q as F, r as C, u as U, v as E, w as O, m as le, n as re, o as xe, C as ue, F as se, s as Y, G as fe, c as Z, E as ne, y as S, z as ge, B as Ee, A as $e, H as at, I as _t} from "./index.62b820ca.js";
import {p as et} from "./stores.f1a6e82d.js";
import {w as mt, r as dt} from "./singletons.2572eeef.js";
function W(i) {
    return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i)
}
function pt(i, e) {
    h(i, 1, 1, ()=>{
        e.delete(i.key)
    }
    )
}
function ht(i, e, l, n, t, o, r, f, s, u, c, _) {
    let a = i.length
      , m = o.length
      , b = a;
    const $ = {};
    for (; b--; )
        $[i[b].key] = b;
    const v = []
      , M = new Map
      , Q = new Map
      , X = [];
    for (b = m; b--; ) {
        const y = _(t, o, b)
          , T = l(y);
        let G = r.get(T);
        G ? n && X.push(()=>G.p(y, e)) : (G = u(T, y),
        G.c()),
        M.set(T, v[b] = G),
        T in $ && Q.set(T, Math.abs(b - $[T]))
    }
    const ee = new Set
      , A = new Set;
    function L(y) {
        d(y, 1),
        y.m(f, c),
        r.set(y.key, y),
        c = y.first,
        m--
    }
    for (; a && m; ) {
        const y = v[m - 1]
          , T = i[a - 1]
          , G = y.key
          , J = T.key;
        y === T ? (c = y.first,
        a--,
        m--) : M.has(J) ? !r.has(G) || ee.has(G) ? L(y) : A.has(J) ? a-- : Q.get(G) > Q.get(J) ? (A.add(G),
        L(y)) : (ee.add(J),
        a--) : (s(T, r),
        a--)
    }
    for (; a--; ) {
        const y = i[a];
        M.has(y.key) || s(y, r)
    }
    for (; m; )
        L(v[m - 1]);
    return Ye(X),
    v
}
function Pe(i) {
    const e = i - 1;
    return e * e * e + 1
}
function dl(i, {delay: e=0, duration: l=400, easing: n=ft}={}) {
    const t = +getComputedStyle(i).opacity;
    return {
        delay: e,
        duration: l,
        easing: n,
        css: o=>`opacity: ${o * t}`
    }
}
function Oe(i, {delay: e=0, duration: l=400, easing: n=Pe, x: t=0, y: o=0, opacity: r=0}={}) {
    const f = getComputedStyle(i)
      , s = +f.opacity
      , u = f.transform === "none" ? "" : f.transform
      , c = s * (1 - r)
      , [_,a] = Be(t)
      , [m,b] = Be(o);
    return {
        delay: e,
        duration: l,
        easing: n,
        css: ($,v)=>`
			transform: ${u} translate(${(1 - $) * _}${a}, ${(1 - $) * m}${b});
			opacity: ${s - c * v}`
    }
}
function pl(i, {delay: e=0, duration: l=400, easing: n=Pe, start: t=0, opacity: o=0}={}) {
    const r = getComputedStyle(i)
      , f = +r.opacity
      , s = r.transform === "none" ? "" : r.transform
      , u = 1 - t
      , c = f * (1 - o);
    return {
        delay: e,
        duration: l,
        easing: n,
        css: (_,a)=>`
			transform: ${s} scale(${1 - u * a});
			opacity: ${f - c * a}
		`
    }
}
function Le(i, e) {
    var l = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(i);
        e && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
        })),
        l.push.apply(l, n)
    }
    return l
}
function Se(i) {
    for (var e = 1; e < arguments.length; e++) {
        var l = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Le(Object(l), !0).forEach(function(n) {
            gt(i, n, l[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : Le(Object(l)).forEach(function(n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(l, n))
        })
    }
    return i
}
function gt(i, e, l) {
    return e = bt(e),
    e in i ? Object.defineProperty(i, e, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[e] = l,
    i
}
function bt(i) {
    var e = kt(i, "string");
    return typeof e == "symbol" ? e : String(e)
}
function kt(i, e) {
    if (typeof i != "object" || i === null)
        return i;
    var l = i[Symbol.toPrimitive];
    if (l !== void 0) {
        var n = l.call(i, e || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(i)
}
function pe(i) {
    return i._type === "span" && "text"in i && typeof i.text == "string" && (typeof i.marks > "u" || Array.isArray(i.marks) && i.marks.every(e=>typeof e == "string"))
}
function tt(i) {
    return typeof i._type == "string" && i._type[0] !== "@" && (!("markDefs"in i) || Array.isArray(i.markDefs) && i.markDefs.every(e=>typeof e._key == "string")) && "children"in i && Array.isArray(i.children) && i.children.every(e=>typeof e == "object" && "_type"in e)
}
function nt(i) {
    return tt(i) && "listItem"in i && typeof i.listItem == "string" && (typeof i.level > "u" || typeof i.level == "number")
}
function lt(i) {
    return i._type === "@list"
}
function rt(i) {
    return i._type === "@span"
}
function ot(i) {
    return i._type === "@text"
}
const Ne = ["strong", "em", "code", "underline", "strike-through"];
function yt(i, e, l) {
    if (!pe(i) || !i.marks)
        return [];
    if (!i.marks.length)
        return [];
    const n = i.marks.slice()
      , t = {};
    return n.forEach(o=>{
        t[o] = 1;
        for (let r = e + 1; r < l.length; r++) {
            const f = l[r];
            if (f && pe(f) && Array.isArray(f.marks) && f.marks.indexOf(o) !== -1)
                t[o]++;
            else
                break
        }
    }
    ),
    n.sort((o,r)=>wt(t, o, r))
}
function wt(i, e, l) {
    const n = i[e]
      , t = i[l];
    if (n !== t)
        return t - n;
    const o = Ne.indexOf(e)
      , r = Ne.indexOf(l);
    return o !== r ? o - r : e.localeCompare(l)
}
function he(i) {
    var e;
    const {children: l, markDefs: n=[]} = i;
    if (!l || !l.length)
        return [];
    const t = l.map(yt)
      , o = {
        _type: "@span",
        children: [],
        markType: "<unknown>"
    };
    let r = [o];
    for (let f = 0; f < l.length; f++) {
        const s = l[f];
        if (!s)
            continue;
        const u = t[f] || [];
        let c = 1;
        if (r.length > 1)
            for (c; c < r.length; c++) {
                const a = ((e = r[c]) == null ? void 0 : e.markKey) || ""
                  , m = u.indexOf(a);
                if (m === -1)
                    break;
                u.splice(m, 1)
            }
        r = r.slice(0, c);
        let _ = r[r.length - 1];
        if (_) {
            for (const a of u) {
                const m = n.find(v=>v._key === a)
                  , b = m ? m._type : a
                  , $ = {
                    _type: "@span",
                    _key: s._key,
                    children: [],
                    markDef: m,
                    markType: b,
                    markKey: a
                };
                _.children.push($),
                r.push($),
                _ = $
            }
            if (pe(s)) {
                const a = s.text.split(`
`);
                for (let m = a.length; m-- > 1; )
                    a.splice(m, 0, `
`);
                _.children = _.children.concat(a.map(m=>({
                    _type: "@text",
                    text: m
                })))
            } else
                _.children = _.children.concat(s)
        }
    }
    return o.children
}
function vt(i, e) {
    const l = [];
    let n;
    for (let t = 0; t < i.length; t++) {
        const o = i[t];
        if (o) {
            if (!nt(o)) {
                l.push(o),
                n = void 0;
                continue
            }
            if (!n) {
                n = me(o, t, e),
                l.push(n);
                continue
            }
            if ($t(o, n)) {
                n.children.push(o);
                continue
            }
            if ((o.level || 1) > n.level) {
                const r = me(o, t, e);
                if (e === "html") {
                    const f = n.children[n.children.length - 1]
                      , s = Se(Se({}, f), {}, {
                        children: [...f.children, r]
                    });
                    n.children[n.children.length - 1] = s
                } else
                    n.children.push(r);
                n = r;
                continue
            }
            if ((o.level || 1) < n.level) {
                const r = l[l.length - 1]
                  , f = r && Ie(r, o);
                if (f) {
                    n = f,
                    n.children.push(o);
                    continue
                }
                n = me(o, t, e),
                l.push(n);
                continue
            }
            if (o.listItem !== n.listItem) {
                const r = l[l.length - 1]
                  , f = r && Ie(r, {
                    level: o.level || 1
                });
                if (f && f.listItem === o.listItem) {
                    n = f,
                    n.children.push(o);
                    continue
                } else {
                    n = me(o, t, e),
                    l.push(n);
                    continue
                }
            }
            console.warn("Unknown state encountered for block", o),
            l.push(o)
        }
    }
    return l
}
function $t(i, e) {
    return (i.level || 1) === e.level && i.listItem === e.listItem
}
function me(i, e, l) {
    return {
        _type: "@list",
        _key: "".concat(i._key || "".concat(e), "-parent"),
        mode: l,
        level: i.level || 1,
        listItem: i.listItem,
        children: [i]
    }
}
function Ie(i, e) {
    const l = e.level || 1
      , n = e.listItem || "normal"
      , t = typeof e.listItem == "string";
    if (lt(i) && (i.level || 1) === l && t && (i.listItem || "normal") === n)
        return i;
    if (!("children"in i))
        return;
    const o = i.children[i.children.length - 1];
    return o && !pe(o) ? Ie(o, e) : void 0
}
function it(i) {
    let e = "";
    return i.children.forEach(l=>{
        ot(l) ? e += l.text : rt(l) && (e += it(l))
    }
    ),
    e
}
const It = "html";
function st() {
    return Math.random().toFixed(5).split(".")[1]
}
function Tt(i) {
    return {
        _key: i._key || st(),
        ...i
    }
}
function Pt(i) {
    return {
        _key: i._key || st(),
        ...i,
        ...i._type === "block" && Array.isArray(i.children) ? {
            children: i.children.map(Tt)
        } : {}
    }
}
function Bt(i) {
    let e;
    const l = i[3].default
      , n = R(l, i, i[2], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 4) && j(n, l, t, t[2], e ? H(l, t[2], o, null) : V(t[2]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function Ct(i) {
    let e, l;
    const n = i[3].default
      , t = R(n, i, i[2], null);
    return {
        c() {
            e = P("del"),
            t && t.c()
        },
        l(o) {
            e = B(o, "DEL", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 4) && j(t, n, o, o[2], l ? H(n, o[2], r, null) : V(o[2]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Et(i) {
    let e, l;
    const n = i[3].default
      , t = R(n, i, i[2], null);
    return {
        c() {
            e = P("span"),
            t && t.c(),
            this.h()
        },
        l(o) {
            e = B(o, "SPAN", {
                style: !0
            });
            var r = I(e);
            t && t.l(r),
            r.forEach(p),
            this.h()
        },
        h() {
            ve(e, "text-decoration", "underline")
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 4) && j(t, n, o, o[2], l ? H(n, o[2], r, null) : V(o[2]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Ot(i) {
    let e, l;
    const n = i[3].default
      , t = R(n, i, i[2], null);
    return {
        c() {
            e = P("code"),
            t && t.c()
        },
        l(o) {
            e = B(o, "CODE", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 4) && j(t, n, o, o[2], l ? H(n, o[2], r, null) : V(o[2]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Lt(i) {
    let e, l;
    const n = i[3].default
      , t = R(n, i, i[2], null);
    return {
        c() {
            e = P("em"),
            t && t.c()
        },
        l(o) {
            e = B(o, "EM", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 4) && j(t, n, o, o[2], l ? H(n, o[2], r, null) : V(o[2]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function St(i) {
    let e, l;
    const n = i[3].default
      , t = R(n, i, i[2], null);
    return {
        c() {
            e = P("strong"),
            t && t.c()
        },
        l(o) {
            e = B(o, "STRONG", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 4) && j(t, n, o, o[2], l ? H(n, o[2], r, null) : V(o[2]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Nt(i) {
    let e, l, n, t;
    const o = [St, Lt, Ot, Et, Ct, Bt]
      , r = [];
    function f(s, u) {
        return s[0] === "strong" ? 0 : s[0] === "em" ? 1 : s[0] === "code" ? 2 : s[0] === "underline" ? 3 : s[0] === "strike-through" ? 4 : 5
    }
    return e = f(i),
    l = r[e] = o[e](i),
    {
        c() {
            l.c(),
            n = w()
        },
        l(s) {
            l.l(s),
            n = w()
        },
        m(s, u) {
            r[e].m(s, u),
            k(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let c = e;
            e = f(s),
            e === c ? r[e].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            l = r[e],
            l ? l.p(s, u) : (l = r[e] = o[e](s),
            l.c()),
            d(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (d(l),
            t = !0)
        },
        o(s) {
            h(l),
            t = !1
        },
        d(s) {
            s && p(n),
            r[e].d(s)
        }
    }
}
function Dt(i, e, l) {
    let n, {$$slots: t={}, $$scope: o} = e, {portableText: r} = e;
    return i.$$set = f=>{
        "portableText"in f && l(1, r = f.portableText),
        "$$scope"in f && l(2, o = f.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 2 && l(0, {markType: n} = r, n)
    }
    ,
    [n, r, o, t]
}
class oe extends z {
    constructor(e) {
        super(),
        q(this, e, Dt, Nt, K, {
            portableText: 1
        })
    }
}
function Mt(i) {
    let e;
    const l = i[4].default
      , n = R(l, i, i[3], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 8) && j(n, l, t, t[3], e ? H(l, t[3], o, null) : V(t[3]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function At(i) {
    let e, l;
    const n = i[4].default
      , t = R(n, i, i[3], null);
    return {
        c() {
            e = P("a"),
            t && t.c(),
            this.h()
        },
        l(o) {
            e = B(o, "A", {
                href: !0
            });
            var r = I(e);
            t && t.l(r),
            r.forEach(p),
            this.h()
        },
        h() {
            g(e, "href", i[0])
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 8) && j(t, n, o, o[3], l ? H(n, o[3], r, null) : V(o[3]), null),
            (!l || r & 1) && g(e, "href", o[0])
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Rt(i) {
    let e, l, n, t;
    const o = [At, Mt]
      , r = [];
    function f(s, u) {
        return typeof s[0] == "string" ? 0 : 1
    }
    return e = f(i),
    l = r[e] = o[e](i),
    {
        c() {
            l.c(),
            n = w()
        },
        l(s) {
            l.l(s),
            n = w()
        },
        m(s, u) {
            r[e].m(s, u),
            k(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let c = e;
            e = f(s),
            e === c ? r[e].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            l = r[e],
            l ? l.p(s, u) : (l = r[e] = o[e](s),
            l.c()),
            d(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (d(l),
            t = !0)
        },
        o(s) {
            h(l),
            t = !1
        },
        d(s) {
            s && p(n),
            r[e].d(s)
        }
    }
}
function jt(i, e, l) {
    let n, t, {$$slots: o={}, $$scope: r} = e, {portableText: f} = e;
    return i.$$set = s=>{
        "portableText"in s && l(1, f = s.portableText),
        "$$scope"in s && l(3, r = s.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 2 && l(2, {value: n} = f, n),
        i.$$.dirty & 4 && l(0, t = (n == null ? void 0 : n.href) || (n == null ? void 0 : n.url) || (n == null ? void 0 : n.link) || (n == null ? void 0 : n.value))
    }
    ,
    [t, f, n, r, o]
}
class Vt extends z {
    constructor(e) {
        super(),
        q(this, e, jt, Rt, K, {
            portableText: 1
        })
    }
}
function Ht(i) {
    let e;
    const l = i[4].default
      , n = R(l, i, i[3], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 8) && j(n, l, t, t[3], e ? H(l, t[3], o, null) : V(t[3]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function Kt(i) {
    let e, l;
    const n = i[4].default
      , t = R(n, i, i[3], null);
    return {
        c() {
            e = P("p"),
            t && t.c()
        },
        l(o) {
            e = B(o, "P", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 8) && j(t, n, o, o[3], l ? H(n, o[3], r, null) : V(o[3]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Ut(i) {
    let e = i[0], l, n, t = i[0] && be(i);
    return {
        c() {
            t && t.c(),
            l = w()
        },
        l(o) {
            t && t.l(o),
            l = w()
        },
        m(o, r) {
            t && t.m(o, r),
            k(o, l, r),
            n = !0
        },
        p(o, r) {
            o[0] ? e ? K(e, o[0]) ? (t.d(1),
            t = be(o),
            e = o[0],
            t.c(),
            t.m(l.parentNode, l)) : t.p(o, r) : (t = be(o),
            e = o[0],
            t.c(),
            t.m(l.parentNode, l)) : e && (t.d(1),
            t = null,
            e = o[0])
        },
        i(o) {
            n || (d(t, o),
            n = !0)
        },
        o(o) {
            h(t, o),
            n = !1
        },
        d(o) {
            o && p(l),
            t && t.d(o)
        }
    }
}
function be(i) {
    let e, l;
    const n = i[4].default
      , t = R(n, i, i[3], null);
    return {
        c() {
            e = P(i[0]),
            t && t.c()
        },
        l(o) {
            e = B(o, (i[0] || "null").toUpperCase(), {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 8) && j(t, n, o, o[3], l ? H(n, o[3], r, null) : V(o[3]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function zt(i) {
    let e, l, n, t, o;
    const r = [Ut, Kt, Ht]
      , f = [];
    function s(u, c) {
        return c & 1 && (e = null),
        e == null && (e = !!["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(u[0])),
        e ? 0 : u[0] === "normal" ? 1 : 2
    }
    return l = s(i, -1),
    n = f[l] = r[l](i),
    {
        c() {
            n.c(),
            t = w()
        },
        l(u) {
            n.l(u),
            t = w()
        },
        m(u, c) {
            f[l].m(u, c),
            k(u, t, c),
            o = !0
        },
        p(u, [c]) {
            let _ = l;
            l = s(u, c),
            l === _ ? f[l].p(u, c) : (N(),
            h(f[_], 1, 1, ()=>{
                f[_] = null
            }
            ),
            D(),
            n = f[l],
            n ? n.p(u, c) : (n = f[l] = r[l](u),
            n.c()),
            d(n, 1),
            n.m(t.parentNode, t))
        },
        i(u) {
            o || (d(n),
            o = !0)
        },
        o(u) {
            h(n),
            o = !1
        },
        d(u) {
            u && p(t),
            f[l].d(u)
        }
    }
}
function qt(i, e, l) {
    let n, t, {$$slots: o={}, $$scope: r} = e, {portableText: f} = e;
    return i.$$set = s=>{
        "portableText"in s && l(1, f = s.portableText),
        "$$scope"in s && l(3, r = s.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 2 && l(2, {value: n} = f, n),
        i.$$.dirty & 4 && l(0, t = n.style || "normal")
    }
    ,
    [t, f, n, r, o]
}
class te extends z {
    constructor(e) {
        super(),
        q(this, e, qt, zt, K, {
            portableText: 1
        })
    }
}
function Gt(i) {
    let e, l;
    const n = i[4].default
      , t = R(n, i, i[3], null);
    return {
        c() {
            e = P("ul"),
            t && t.c()
        },
        l(o) {
            e = B(o, "UL", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 8) && j(t, n, o, o[3], l ? H(n, o[3], r, null) : V(o[3]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Ft(i) {
    let e, l;
    const n = i[4].default
      , t = R(n, i, i[3], null);
    return {
        c() {
            e = P("ol"),
            t && t.c()
        },
        l(o) {
            e = B(o, "OL", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, r) {
            t && t.p && (!l || r & 8) && j(t, n, o, o[3], l ? H(n, o[3], r, null) : V(o[3]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Wt(i) {
    let e, l, n, t;
    const o = [Ft, Gt]
      , r = [];
    function f(s, u) {
        return s[0] === "number" ? 0 : 1
    }
    return e = f(i),
    l = r[e] = o[e](i),
    {
        c() {
            l.c(),
            n = w()
        },
        l(s) {
            l.l(s),
            n = w()
        },
        m(s, u) {
            r[e].m(s, u),
            k(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let c = e;
            e = f(s),
            e === c ? r[e].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            l = r[e],
            l ? l.p(s, u) : (l = r[e] = o[e](s),
            l.c()),
            d(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (d(l),
            t = !0)
        },
        o(s) {
            h(l),
            t = !1
        },
        d(s) {
            s && p(n),
            r[e].d(s)
        }
    }
}
function Qt(i, e, l) {
    let n, t, {$$slots: o={}, $$scope: r} = e, {portableText: f} = e;
    return i.$$set = s=>{
        "portableText"in s && l(1, f = s.portableText),
        "$$scope"in s && l(3, r = s.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 2 && l(2, {value: n} = f, n),
        i.$$.dirty & 4 && l(0, {listItem: t} = n, t)
    }
    ,
    [t, f, n, r, o]
}
class ke extends z {
    constructor(e) {
        super(),
        q(this, e, Qt, Wt, K, {
            portableText: 1
        })
    }
}
function Jt(i) {
    let e, l;
    const n = i[1].default
      , t = R(n, i, i[0], null);
    return {
        c() {
            e = P("li"),
            t && t.c()
        },
        l(o) {
            e = B(o, "LI", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, [r]) {
            t && t.p && (!l || r & 1) && j(t, n, o, o[0], l ? H(n, o[0], r, null) : V(o[0]), null)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Xt(i, e, l) {
    let {$$slots: n={}, $$scope: t} = e;
    return i.$$set = o=>{
        "$$scope"in o && l(0, t = o.$$scope)
    }
    ,
    [t, n]
}
class ye extends z {
    constructor(e) {
        super(),
        q(this, e, Xt, Jt, K, {})
    }
}
function Yt(i) {
    let e;
    return {
        c() {
            e = P("br")
        },
        l(l) {
            e = B(l, "BR", {})
        },
        m(l, n) {
            k(l, e, n)
        },
        p: x,
        i: x,
        o: x,
        d(l) {
            l && p(e)
        }
    }
}
class Zt extends z {
    constructor(e) {
        super(),
        q(this, e, null, Yt, K, {})
    }
}
function xt(i) {
    let e;
    const l = i[1].default
      , n = R(l, i, i[0], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, [o]) {
            n && n.p && (!e || o & 1) && j(n, l, t, t[0], e ? H(l, t[0], o, null) : V(t[0]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function en(i, e, l) {
    let {$$slots: n={}, $$scope: t} = e;
    return i.$$set = o=>{
        "$$scope"in o && l(0, t = o.$$scope)
    }
    ,
    [t, n]
}
class tn extends z {
    constructor(e) {
        super(),
        q(this, e, en, xt, K, {})
    }
}
const nn = {
    marks: {
        "strike-through": oe,
        code: oe,
        em: oe,
        strong: oe,
        underline: oe,
        link: Vt
    },
    block: {
        blockquote: te,
        h1: te,
        h2: te,
        h3: te,
        h4: te,
        h5: te,
        h6: te,
        normal: te
    },
    list: {
        bullet: ke,
        number: ke
    },
    listItem: {
        bullet: ye,
        number: ye
    },
    types: {},
    hardBreak: Zt,
    unknownBlockStyle: te,
    unknownList: ke,
    unknownListItem: ye,
    unknownMark: oe,
    unknownType: tn
};
function ln(i, e={}) {
    return {
        ...i,
        ...e,
        block: ce(i, e, "block"),
        list: ce(i, e, "list"),
        listItem: ce(i, e, "listItem"),
        marks: ce(i, e, "marks"),
        types: ce(i, e, "types")
    }
}
function ce(i, e, l) {
    const n = e[l]
      , t = i[l];
    return typeof n == "function" || n && typeof t == "function" ? n : n ? {
        ...t,
        ...n
    } : t
}
function rn(i) {
    let e;
    const l = i[7].default
      , n = R(l, i, i[8], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 256) && j(n, l, t, t[8], e ? H(l, t[8], o, null) : V(t[8]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function on(i) {
    let e, l, n;
    var t = i[0] || i[1].unknownBlockStyle;
    function o(r) {
        return {
            props: {
                portableText: r[2],
                $$slots: {
                    default: [rn]
                },
                $$scope: {
                    ctx: r
                }
            }
        }
    }
    return t && (e = F(t, o(i))),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, [f]) {
            const s = {};
            if (f & 4 && (s.portableText = r[2]),
            f & 256 && (s.$$scope = {
                dirty: f,
                ctx: r
            }),
            f & 3 && t !== (t = r[0] || r[1].unknownBlockStyle)) {
                if (e) {
                    N();
                    const u = e;
                    h(u.$$.fragment, 1, 0, ()=>{
                        O(u, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o(r)),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            } else
                t && e.$set(s)
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function sn(i, e, l) {
    let n, t, o, r, {$$slots: f={}, $$scope: s} = e, {global: u} = e, {node: c} = e, {indexInParent: _} = e;
    return i.$$set = a=>{
        "global"in a && l(3, u = a.global),
        "node"in a && l(4, c = a.node),
        "indexInParent"in a && l(5, _ = a.indexInParent),
        "$$scope"in a && l(8, s = a.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 8 && l(1, {components: n} = u, n),
        i.$$.dirty & 16 && l(6, {style: t="normal"} = c, t),
        i.$$.dirty & 66 && l(0, o = typeof n.block == "function" ? n.block : n.block[t]),
        i.$$.dirty & 73 && (o || u.missingComponentHandler(t, "blockStyle")),
        i.$$.dirty & 56 && l(2, r = (()=>({
            global: u,
            indexInParent: _,
            value: c
        }))())
    }
    ,
    [o, n, r, u, c, _, t, f, s]
}
class fn extends z {
    constructor(e) {
        super(),
        q(this, e, sn, on, K, {
            global: 3,
            node: 4,
            indexInParent: 5
        })
    }
}
function un(i) {
    let e, l, n;
    var t = i[0] || i[1].unknownType;
    function o(r) {
        return {
            props: {
                portableText: r[2]
            }
        }
    }
    return t && (e = F(t, o(i))),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, [f]) {
            const s = {};
            if (f & 4 && (s.portableText = r[2]),
            f & 3 && t !== (t = r[0] || r[1].unknownType)) {
                if (e) {
                    N();
                    const u = e;
                    h(u.$$.fragment, 1, 0, ()=>{
                        O(u, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o(r)),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            } else
                t && e.$set(s)
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function cn(i, e, l) {
    let n, t, o, r, {global: f} = e, {node: s} = e, {parentBlock: u} = e, {indexInParent: c} = e, {isInline: _=!1} = e;
    return i.$$set = a=>{
        "global"in a && l(3, f = a.global),
        "node"in a && l(4, s = a.node),
        "parentBlock"in a && l(5, u = a.parentBlock),
        "indexInParent"in a && l(6, c = a.indexInParent),
        "isInline"in a && l(7, _ = a.isInline)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 8 && l(1, {components: n} = f, n),
        i.$$.dirty & 16 && l(8, {_type: t} = s, t),
        i.$$.dirty & 258 && l(0, o = n.types[t]),
        i.$$.dirty & 265 && (o || f.missingComponentHandler(t, "block")),
        i.$$.dirty & 248 && l(2, r = (()=>({
            global: f,
            value: s,
            indexInParent: c,
            parentBlock: u,
            isInline: _
        }))())
    }
    ,
    [o, n, r, f, s, u, c, _, t]
}
class an extends z {
    constructor(e) {
        super(),
        q(this, e, cn, un, K, {
            global: 3,
            node: 4,
            parentBlock: 5,
            indexInParent: 6,
            isInline: 7
        })
    }
}
function _n(i) {
    let e;
    const l = i[8].default
      , n = R(l, i, i[9], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 512) && j(n, l, t, t[9], e ? H(l, t[9], o, null) : V(t[9]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function mn(i) {
    let e, l, n;
    var t = i[0] || i[1].unknownList;
    function o(r) {
        return {
            props: {
                portableText: r[2],
                $$slots: {
                    default: [_n]
                },
                $$scope: {
                    ctx: r
                }
            }
        }
    }
    return t && (e = F(t, o(i))),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, [f]) {
            const s = {};
            if (f & 4 && (s.portableText = r[2]),
            f & 512 && (s.$$scope = {
                dirty: f,
                ctx: r
            }),
            f & 3 && t !== (t = r[0] || r[1].unknownList)) {
                if (e) {
                    N();
                    const u = e;
                    h(u.$$.fragment, 1, 0, ()=>{
                        O(u, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o(r)),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            } else
                t && e.$set(s)
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function dn(i, e, l) {
    let n, t, o, r, f, {$$slots: s={}, $$scope: u} = e, {global: c} = e, {indexInParent: _} = e, {node: a} = e;
    return i.$$set = m=>{
        "global"in m && l(3, c = m.global),
        "indexInParent"in m && l(4, _ = m.indexInParent),
        "node"in m && l(5, a = m.node),
        "$$scope"in m && l(9, u = m.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 8 && l(1, {components: n} = c, n),
        i.$$.dirty & 32 && l(6, {listItem: t} = a, t),
        i.$$.dirty & 66 && l(7, o = typeof n.list == "function" ? n.list : n.list[t]),
        i.$$.dirty & 128 && l(0, r = o),
        i.$$.dirty & 73 && (r || c.missingComponentHandler(t, "listStyle")),
        i.$$.dirty & 56 && l(2, f = (()=>({
            global: c,
            value: a,
            indexInParent: _
        }))())
    }
    ,
    [r, n, f, c, _, a, t, o, s, u]
}
class pn extends z {
    constructor(e) {
        super(),
        q(this, e, dn, mn, K, {
            global: 3,
            indexInParent: 4,
            node: 5
        })
    }
}
function hn(i) {
    let e;
    const l = i[8].default
      , n = R(l, i, i[9], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 512) && j(n, l, t, t[9], e ? H(l, t[9], o, null) : V(t[9]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function gn(i) {
    let e, l, n;
    var t = i[4];
    function o(r) {
        return {
            props: {
                portableText: {
                    ...r[3],
                    value: {
                        ...r[0],
                        listItem: void 0
                    }
                },
                $$slots: {
                    default: [bn]
                },
                $$scope: {
                    ctx: r
                }
            }
        }
    }
    return t && (e = F(t, o(i))),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, f) {
            const s = {};
            if (f & 9 && (s.portableText = {
                ...r[3],
                value: {
                    ...r[0],
                    listItem: void 0
                }
            }),
            f & 512 && (s.$$scope = {
                dirty: f,
                ctx: r
            }),
            f & 16 && t !== (t = r[4])) {
                if (e) {
                    N();
                    const u = e;
                    h(u.$$.fragment, 1, 0, ()=>{
                        O(u, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o(r)),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            } else
                t && e.$set(s)
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function bn(i) {
    let e;
    const l = i[8].default
      , n = R(l, i, i[9], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 512) && j(n, l, t, t[9], e ? H(l, t[9], o, null) : V(t[9]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function kn(i) {
    let e, l, n, t;
    const o = [gn, hn]
      , r = [];
    function f(s, u) {
        return s[4] ? 0 : 1
    }
    return e = f(i),
    l = r[e] = o[e](i),
    {
        c() {
            l.c(),
            n = w()
        },
        l(s) {
            l.l(s),
            n = w()
        },
        m(s, u) {
            r[e].m(s, u),
            k(s, n, u),
            t = !0
        },
        p(s, u) {
            let c = e;
            e = f(s),
            e === c ? r[e].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            l = r[e],
            l ? l.p(s, u) : (l = r[e] = o[e](s),
            l.c()),
            d(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (d(l),
            t = !0)
        },
        o(s) {
            h(l),
            t = !1
        },
        d(s) {
            s && p(n),
            r[e].d(s)
        }
    }
}
function yn(i) {
    let e, l, n;
    var t = i[2] || i[1].unknownListItem;
    function o(r) {
        return {
            props: {
                portableText: r[3],
                $$slots: {
                    default: [kn]
                },
                $$scope: {
                    ctx: r
                }
            }
        }
    }
    return t && (e = F(t, o(i))),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, [f]) {
            const s = {};
            if (f & 8 && (s.portableText = r[3]),
            f & 537 && (s.$$scope = {
                dirty: f,
                ctx: r
            }),
            f & 6 && t !== (t = r[2] || r[1].unknownListItem)) {
                if (e) {
                    N();
                    const u = e;
                    h(u.$$.fragment, 1, 0, ()=>{
                        O(u, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o(r)),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            } else
                t && e.$set(s)
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function wn(i, e, l) {
    let n, t, o, r, f, {$$slots: s={}, $$scope: u} = e, {global: c} = e, {indexInParent: _} = e, {node: a} = e;
    return i.$$set = m=>{
        "global"in m && l(5, c = m.global),
        "indexInParent"in m && l(6, _ = m.indexInParent),
        "node"in m && l(0, a = m.node),
        "$$scope"in m && l(9, u = m.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 32 && l(1, {components: n} = c, n),
        i.$$.dirty & 1 && l(7, {style: t="normal"} = a, t),
        i.$$.dirty & 130 && l(2, o = typeof n.listItem == "function" ? n.listItem : n.listItem[t]),
        i.$$.dirty & 164 && (o || c.missingComponentHandler(t, "listItemStyle")),
        i.$$.dirty & 130 && l(4, r = t !== "normal" ? n.block[t] : void 0),
        i.$$.dirty & 97 && l(3, f = (()=>({
            global: c,
            value: a,
            indexInParent: _
        }))())
    }
    ,
    [a, n, o, f, r, c, _, t, s, u]
}
class vn extends z {
    constructor(e) {
        super(),
        q(this, e, wn, yn, K, {
            global: 5,
            indexInParent: 6,
            node: 0
        })
    }
}
function $n(i) {
    let e;
    const l = i[7].default
      , n = R(l, i, i[8], null);
    return {
        c() {
            n && n.c()
        },
        l(t) {
            n && n.l(t)
        },
        m(t, o) {
            n && n.m(t, o),
            e = !0
        },
        p(t, o) {
            n && n.p && (!e || o & 256) && j(n, l, t, t[8], e ? H(l, t[8], o, null) : V(t[8]), null)
        },
        i(t) {
            e || (d(n, t),
            e = !0)
        },
        o(t) {
            h(n, t),
            e = !1
        },
        d(t) {
            n && n.d(t)
        }
    }
}
function In(i) {
    let e, l, n;
    var t = i[0] || i[1].unknownMark;
    function o(r) {
        return {
            props: {
                portableText: r[2],
                $$slots: {
                    default: [$n]
                },
                $$scope: {
                    ctx: r
                }
            }
        }
    }
    return t && (e = F(t, o(i))),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, [f]) {
            const s = {};
            if (f & 4 && (s.portableText = r[2]),
            f & 256 && (s.$$scope = {
                dirty: f,
                ctx: r
            }),
            f & 3 && t !== (t = r[0] || r[1].unknownMark)) {
                if (e) {
                    N();
                    const u = e;
                    h(u.$$.fragment, 1, 0, ()=>{
                        O(u, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o(r)),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            } else
                t && e.$set(s)
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function Tn(i, e, l) {
    let n, t, o, r, {$$slots: f={}, $$scope: s} = e, {global: u} = e, {node: c} = e, {parentBlock: _} = e;
    return i.$$set = a=>{
        "global"in a && l(3, u = a.global),
        "node"in a && l(4, c = a.node),
        "parentBlock"in a && l(5, _ = a.parentBlock),
        "$$scope"in a && l(8, s = a.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 8 && l(1, {components: n} = u, n),
        i.$$.dirty & 16 && l(6, {markType: t} = c, t),
        i.$$.dirty & 66 && l(0, o = n.marks[t]),
        i.$$.dirty & 73 && (o || u.missingComponentHandler(t, "mark")),
        i.$$.dirty & 120 && l(2, r = (()=>({
            global: u,
            parentBlock: _,
            markType: t,
            value: c.markDef,
            markKey: c.markKey,
            plainTextContent: it(c)
        }))())
    }
    ,
    [o, n, r, u, c, _, t, f, s]
}
class Pn extends z {
    constructor(e) {
        super(),
        q(this, e, Tn, In, K, {
            global: 3,
            node: 4,
            parentBlock: 5
        })
    }
}
function Bn(i) {
    let e;
    return {
        c() {
            e = le(i[0])
        },
        l(l) {
            e = re(l, i[0])
        },
        m(l, n) {
            k(l, e, n)
        },
        p(l, n) {
            n & 1 && xe(e, l[0])
        },
        i: x,
        o: x,
        d(l) {
            l && p(e)
        }
    }
}
function Cn(i) {
    let e, l, n, t;
    const o = [On, En]
      , r = [];
    function f(s, u) {
        return typeof s[1].hardBreak == "function" ? 0 : 1
    }
    return e = f(i),
    l = r[e] = o[e](i),
    {
        c() {
            l.c(),
            n = w()
        },
        l(s) {
            l.l(s),
            n = w()
        },
        m(s, u) {
            r[e].m(s, u),
            k(s, n, u),
            t = !0
        },
        p(s, u) {
            let c = e;
            e = f(s),
            e === c ? r[e].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            l = r[e],
            l ? l.p(s, u) : (l = r[e] = o[e](s),
            l.c()),
            d(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (d(l),
            t = !0)
        },
        o(s) {
            h(l),
            t = !1
        },
        d(s) {
            s && p(n),
            r[e].d(s)
        }
    }
}
function En(i) {
    let e;
    return {
        c() {
            e = le(i[0])
        },
        l(l) {
            e = re(l, i[0])
        },
        m(l, n) {
            k(l, e, n)
        },
        p(l, n) {
            n & 1 && xe(e, l[0])
        },
        i: x,
        o: x,
        d(l) {
            l && p(e)
        }
    }
}
function On(i) {
    let e, l, n;
    var t = i[1].hardBreak;
    function o(r) {
        return {}
    }
    return t && (e = F(t, o())),
    {
        c() {
            e && C(e.$$.fragment),
            l = w()
        },
        l(r) {
            e && U(e.$$.fragment, r),
            l = w()
        },
        m(r, f) {
            e && E(e, r, f),
            k(r, l, f),
            n = !0
        },
        p(r, f) {
            if (f & 2 && t !== (t = r[1].hardBreak)) {
                if (e) {
                    N();
                    const s = e;
                    h(s.$$.fragment, 1, 0, ()=>{
                        O(s, 1)
                    }
                    ),
                    D()
                }
                t ? (e = F(t, o()),
                C(e.$$.fragment),
                d(e.$$.fragment, 1),
                E(e, l.parentNode, l)) : e = null
            }
        },
        i(r) {
            n || (e && d(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            e && h(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            r && p(l),
            e && O(e, r)
        }
    }
}
function Ln(i) {
    let e, l, n, t;
    const o = [Cn, Bn]
      , r = [];
    function f(s, u) {
        return s[0] === `
` ? 0 : 1
    }
    return e = f(i),
    l = r[e] = o[e](i),
    {
        c() {
            l.c(),
            n = w()
        },
        l(s) {
            l.l(s),
            n = w()
        },
        m(s, u) {
            r[e].m(s, u),
            k(s, n, u),
            t = !0
        },
        p(s, [u]) {
            let c = e;
            e = f(s),
            e === c ? r[e].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            l = r[e],
            l ? l.p(s, u) : (l = r[e] = o[e](s),
            l.c()),
            d(l, 1),
            l.m(n.parentNode, n))
        },
        i(s) {
            t || (d(l),
            t = !0)
        },
        o(s) {
            h(l),
            t = !1
        },
        d(s) {
            s && p(n),
            r[e].d(s)
        }
    }
}
function Sn(i, e, l) {
    let n, t, {global: o} = e, {node: r} = e;
    return i.$$set = f=>{
        "global"in f && l(2, o = f.global),
        "node"in f && l(3, r = f.node)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 4 && l(1, {components: n} = o, n),
        i.$$.dirty & 8 && l(0, {text: t} = r, t)
    }
    ,
    [t, n, o, r]
}
let Nn = class extends z {
    constructor(e) {
        super(),
        q(this, e, Sn, Ln, K, {
            global: 2,
            node: 3
        })
    }
}
;
function De(i, e, l) {
    const n = i.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function Me(i, e, l) {
    const n = i.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function Ae(i, e, l) {
    const n = i.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function Re(i, e, l) {
    const n = i.slice();
    return n[6] = e[l],
    n[8] = l,
    n
}
function Dn(i) {
    let e, l;
    return e = new an({
        props: {
            node: i[4],
            parentBlock: i[2],
            indexInParent: i[3],
            isInline: i[1],
            global: i[0]
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.node = n[4]),
            t & 4 && (o.parentBlock = n[2]),
            t & 8 && (o.indexInParent = n[3]),
            t & 2 && (o.isInline = n[1]),
            t & 1 && (o.global = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function Mn(i) {
    let e, l;
    return e = new Nn({
        props: {
            node: i[4],
            global: i[0]
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.node = n[4]),
            t & 1 && (o.global = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function An(i) {
    let e, l;
    return e = new fn({
        props: {
            node: i[4],
            indexInParent: i[3],
            global: i[0],
            $$slots: {
                default: [Hn]
            },
            $$scope: {
                ctx: i
            }
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.node = n[4]),
            t & 8 && (o.indexInParent = n[3]),
            t & 1 && (o.global = n[0]),
            t & 4113 && (o.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function Rn(i) {
    let e, l;
    return e = new Pn({
        props: {
            node: i[4],
            parentBlock: i[2],
            global: i[0],
            $$slots: {
                default: [Kn]
            },
            $$scope: {
                ctx: i
            }
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.node = n[4]),
            t & 4 && (o.parentBlock = n[2]),
            t & 1 && (o.global = n[0]),
            t & 4117 && (o.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function jn(i) {
    let e, l;
    return e = new vn({
        props: {
            node: i[4],
            indexInParent: i[3],
            global: i[0],
            $$slots: {
                default: [Un]
            },
            $$scope: {
                ctx: i
            }
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.node = n[4]),
            t & 8 && (o.indexInParent = n[3]),
            t & 1 && (o.global = n[0]),
            t & 4113 && (o.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function Vn(i) {
    let e, l;
    return e = new pn({
        props: {
            node: i[4],
            indexInParent: i[3],
            global: i[0],
            $$slots: {
                default: [zn]
            },
            $$scope: {
                ctx: i
            }
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.node = n[4]),
            t & 8 && (o.indexInParent = n[3]),
            t & 1 && (o.global = n[0]),
            t & 4113 && (o.$$scope = {
                dirty: t,
                ctx: n
            }),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function je(i) {
    let e, l;
    return e = new ae({
        props: {
            options: {
                parentBlock: i[4],
                node: i[6],
                isInline: !0,
                indexInParent: i[8]
            },
            global: i[0]
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.options = {
                parentBlock: n[4],
                node: n[6],
                isInline: !0,
                indexInParent: n[8]
            }),
            t & 1 && (o.global = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function Hn(i) {
    let e, l, n = W(he(i[4])), t = [];
    for (let r = 0; r < n.length; r += 1)
        t[r] = je(De(i, n, r));
    const o = r=>h(t[r], 1, 1, ()=>{
        t[r] = null
    }
    );
    return {
        c() {
            for (let r = 0; r < t.length; r += 1)
                t[r].c();
            e = w()
        },
        l(r) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(r);
            e = w()
        },
        m(r, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(r, f);
            k(r, e, f),
            l = !0
        },
        p(r, f) {
            if (f & 17) {
                n = W(he(r[4]));
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = De(r, n, s);
                    t[s] ? (t[s].p(u, f),
                    d(t[s], 1)) : (t[s] = je(u),
                    t[s].c(),
                    d(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (N(),
                s = n.length; s < t.length; s += 1)
                    o(s);
                D()
            }
        },
        i(r) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    d(t[f]);
                l = !0
            }
        },
        o(r) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                h(t[f]);
            l = !1
        },
        d(r) {
            r && p(e),
            ue(t, r)
        }
    }
}
function Ve(i) {
    let e, l;
    return e = new ae({
        props: {
            options: {
                parentBlock: i[2],
                node: i[6],
                isInline: !0,
                indexInParent: i[8]
            },
            global: i[0]
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 20 && (o.options = {
                parentBlock: n[2],
                node: n[6],
                isInline: !0,
                indexInParent: n[8]
            }),
            t & 1 && (o.global = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function Kn(i) {
    let e, l, n = W(i[4].children), t = [];
    for (let r = 0; r < n.length; r += 1)
        t[r] = Ve(Me(i, n, r));
    const o = r=>h(t[r], 1, 1, ()=>{
        t[r] = null
    }
    );
    return {
        c() {
            for (let r = 0; r < t.length; r += 1)
                t[r].c();
            e = w()
        },
        l(r) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(r);
            e = w()
        },
        m(r, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(r, f);
            k(r, e, f),
            l = !0
        },
        p(r, f) {
            if (f & 21) {
                n = W(r[4].children);
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = Me(r, n, s);
                    t[s] ? (t[s].p(u, f),
                    d(t[s], 1)) : (t[s] = Ve(u),
                    t[s].c(),
                    d(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (N(),
                s = n.length; s < t.length; s += 1)
                    o(s);
                D()
            }
        },
        i(r) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    d(t[f]);
                l = !0
            }
        },
        o(r) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                h(t[f]);
            l = !1
        },
        d(r) {
            r && p(e),
            ue(t, r)
        }
    }
}
function He(i) {
    let e, l;
    return e = new ae({
        props: {
            options: {
                parentBlock: i[4],
                node: i[6],
                isInline: !0,
                indexInParent: i[8]
            },
            global: i[0]
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.options = {
                parentBlock: n[4],
                node: n[6],
                isInline: !0,
                indexInParent: n[8]
            }),
            t & 1 && (o.global = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function Un(i) {
    let e, l, n = W(he(i[4])), t = [];
    for (let r = 0; r < n.length; r += 1)
        t[r] = He(Ae(i, n, r));
    const o = r=>h(t[r], 1, 1, ()=>{
        t[r] = null
    }
    );
    return {
        c() {
            for (let r = 0; r < t.length; r += 1)
                t[r].c();
            e = w()
        },
        l(r) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(r);
            e = w()
        },
        m(r, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(r, f);
            k(r, e, f),
            l = !0
        },
        p(r, f) {
            if (f & 17) {
                n = W(he(r[4]));
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = Ae(r, n, s);
                    t[s] ? (t[s].p(u, f),
                    d(t[s], 1)) : (t[s] = He(u),
                    t[s].c(),
                    d(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (N(),
                s = n.length; s < t.length; s += 1)
                    o(s);
                D()
            }
        },
        i(r) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    d(t[f]);
                l = !0
            }
        },
        o(r) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                h(t[f]);
            l = !1
        },
        d(r) {
            r && p(e),
            ue(t, r)
        }
    }
}
function Ke(i) {
    let e, l;
    return e = new ae({
        props: {
            options: {
                node: i[6],
                indexInParent: i[8],
                parentBlock: void 0,
                isInline: void 0
            },
            global: i[0]
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, t) {
            const o = {};
            t & 16 && (o.options = {
                node: n[6],
                indexInParent: n[8],
                parentBlock: void 0,
                isInline: void 0
            }),
            t & 1 && (o.global = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function zn(i) {
    let e, l, n = W(i[4].children), t = [];
    for (let r = 0; r < n.length; r += 1)
        t[r] = Ke(Re(i, n, r));
    const o = r=>h(t[r], 1, 1, ()=>{
        t[r] = null
    }
    );
    return {
        c() {
            for (let r = 0; r < t.length; r += 1)
                t[r].c();
            e = w()
        },
        l(r) {
            for (let f = 0; f < t.length; f += 1)
                t[f].l(r);
            e = w()
        },
        m(r, f) {
            for (let s = 0; s < t.length; s += 1)
                t[s] && t[s].m(r, f);
            k(r, e, f),
            l = !0
        },
        p(r, f) {
            if (f & 17) {
                n = W(r[4].children);
                let s;
                for (s = 0; s < n.length; s += 1) {
                    const u = Re(r, n, s);
                    t[s] ? (t[s].p(u, f),
                    d(t[s], 1)) : (t[s] = Ke(u),
                    t[s].c(),
                    d(t[s], 1),
                    t[s].m(e.parentNode, e))
                }
                for (N(),
                s = n.length; s < t.length; s += 1)
                    o(s);
                D()
            }
        },
        i(r) {
            if (!l) {
                for (let f = 0; f < n.length; f += 1)
                    d(t[f]);
                l = !0
            }
        },
        o(r) {
            t = t.filter(Boolean);
            for (let f = 0; f < t.length; f += 1)
                h(t[f]);
            l = !1
        },
        d(r) {
            r && p(e),
            ue(t, r)
        }
    }
}
function qn(i) {
    let e, l, n, t, o, r, f, s, u;
    const c = [Vn, jn, Rn, An, Mn, Dn]
      , _ = [];
    function a(m, b) {
        return b & 16 && (e = null),
        b & 16 && (l = null),
        b & 16 && (n = null),
        b & 16 && (t = null),
        b & 16 && (o = null),
        e == null && (e = !!lt(m[4])),
        e ? 0 : (l == null && (l = !!nt(m[4])),
        l ? 1 : (n == null && (n = !!rt(m[4])),
        n ? 2 : (t == null && (t = !!tt(m[4])),
        t ? 3 : (o == null && (o = !!ot(m[4])),
        o ? 4 : m[4] ? 5 : -1))))
    }
    return ~(r = a(i, -1)) && (f = _[r] = c[r](i)),
    {
        c() {
            f && f.c(),
            s = w()
        },
        l(m) {
            f && f.l(m),
            s = w()
        },
        m(m, b) {
            ~r && _[r].m(m, b),
            k(m, s, b),
            u = !0
        },
        p(m, [b]) {
            let $ = r;
            r = a(m, b),
            r === $ ? ~r && _[r].p(m, b) : (f && (N(),
            h(_[$], 1, 1, ()=>{
                _[$] = null
            }
            ),
            D()),
            ~r ? (f = _[r],
            f ? f.p(m, b) : (f = _[r] = c[r](m),
            f.c()),
            d(f, 1),
            f.m(s.parentNode, s)) : f = null)
        },
        i(m) {
            u || (d(f),
            u = !0)
        },
        o(m) {
            h(f),
            u = !1
        },
        d(m) {
            m && p(s),
            ~r && _[r].d(m)
        }
    }
}
function Gn(i, e, l) {
    let n, t, o, r, {global: f} = e, {options: s} = e;
    return i.$$set = u=>{
        "global"in u && l(0, f = u.global),
        "options"in u && l(5, s = u.options)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 32 && l(4, {node: n, indexInParent: t, parentBlock: o, isInline: r} = s, n, (l(3, t),
        l(5, s)), (l(2, o),
        l(5, s)), (l(1, r),
        l(5, s)))
    }
    ,
    [f, r, o, t, n, s]
}
class ae extends z {
    constructor(e) {
        super(),
        q(this, e, Gn, qn, K, {
            global: 0,
            options: 5
        })
    }
}
const ie = (i,e)=>`Unknown ${i}, specify a component for it in the \`components ${e ? "." : ""}${e}\` prop`
  , Fn = (i,e)=>{
    switch (e) {
    case "block":
        return ie(`block type "${i}"`, "types");
    case "blockStyle":
        return ie(`block style "${i}"`, "block");
    case "listItemStyle":
        return ie(`list item style "${i}"`, "listItem");
    case "listStyle":
        return ie(`list style "${i}"`, "list");
    case "mark":
        return ie(`mark type "${i}"`, "marks");
    default:
        return ie("type")
    }
}
;
function Wn(i) {
    console.warn(i)
}
function Ue(i, e, l) {
    const n = i.slice();
    return n[8] = e[l],
    n[10] = l,
    n
}
function ze(i, e) {
    let l, n, t;
    return n = new ae({
        props: {
            global: {
                components: e[4],
                missingComponentHandler: e[2],
                context: e[1],
                ptBlocks: e[3],
                ptRawValue: e[0]
            },
            options: {
                node: e[8],
                isInline: !1,
                indexInParent: e[10]
            }
        }
    }),
    {
        key: i,
        first: null,
        c() {
            l = w(),
            C(n.$$.fragment),
            this.h()
        },
        l(o) {
            l = w(),
            U(n.$$.fragment, o),
            this.h()
        },
        h() {
            this.first = l
        },
        m(o, r) {
            k(o, l, r),
            E(n, o, r),
            t = !0
        },
        p(o, r) {
            e = o;
            const f = {};
            r & 31 && (f.global = {
                components: e[4],
                missingComponentHandler: e[2],
                context: e[1],
                ptBlocks: e[3],
                ptRawValue: e[0]
            }),
            r & 8 && (f.options = {
                node: e[8],
                isInline: !1,
                indexInParent: e[10]
            }),
            n.$set(f)
        },
        i(o) {
            t || (d(n.$$.fragment, o),
            t = !0)
        },
        o(o) {
            h(n.$$.fragment, o),
            t = !1
        },
        d(o) {
            o && p(l),
            O(n, o)
        }
    }
}
function Qn(i) {
    let e = [], l = new Map, n, t, o = W(i[3]);
    const r = f=>f[8]._key;
    for (let f = 0; f < o.length; f += 1) {
        let s = Ue(i, o, f)
          , u = r(s);
        l.set(u, e[f] = ze(u, s))
    }
    return {
        c() {
            for (let f = 0; f < e.length; f += 1)
                e[f].c();
            n = w()
        },
        l(f) {
            for (let s = 0; s < e.length; s += 1)
                e[s].l(f);
            n = w()
        },
        m(f, s) {
            for (let u = 0; u < e.length; u += 1)
                e[u] && e[u].m(f, s);
            k(f, n, s),
            t = !0
        },
        p(f, [s]) {
            s & 31 && (o = W(f[3]),
            N(),
            e = ht(e, s, r, 1, f, o, l, n.parentNode, pt, ze, n, Ue),
            D())
        },
        i(f) {
            if (!t) {
                for (let s = 0; s < o.length; s += 1)
                    d(e[s]);
                t = !0
            }
        },
        o(f) {
            for (let s = 0; s < e.length; s += 1)
                h(e[s]);
            t = !1
        },
        d(f) {
            f && p(n);
            for (let s = 0; s < e.length; s += 1)
                e[s].d(f)
        }
    }
}
function Jn(i, e, l) {
    let n, t, o, r, {value: f=[]} = e, {components: s=void 0} = e, {context: u={}} = e, {onMissingComponent: c=!0} = e;
    return i.$$set = _=>{
        "value"in _ && l(0, f = _.value),
        "components"in _ && l(5, s = _.components),
        "context"in _ && l(1, u = _.context),
        "onMissingComponent"in _ && l(6, c = _.onMissingComponent)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 32 && l(4, n = ln(nn, s)),
        i.$$.dirty & 1 && l(7, t = (Array.isArray(f) ? f : [f]).map(Pt)),
        i.$$.dirty & 128 && l(3, o = vt(t, It)),
        i.$$.dirty & 64 && l(2, r = (_,a)=>{
            if (c === !1)
                return;
            const m = Fn(_, a);
            if (typeof c == "function") {
                c(m, {
                    type: _,
                    nodeType: a
                });
                return
            }
            Wn(m)
        }
        )
    }
    ,
    [f, u, r, o, n, s, c, t]
}
class Xn extends z {
    constructor(e) {
        super(),
        q(this, e, Jn, Qn, K, {
            value: 0,
            components: 5,
            context: 1,
            onMissingComponent: 6
        })
    }
}
function Yn(i) {
    let e, l;
    const n = i[3].default
      , t = R(n, i, i[2], null);
    return {
        c() {
            e = P("span"),
            t && t.c(),
            this.h()
        },
        l(o) {
            e = B(o, "SPAN", {});
            var r = I(e);
            t && t.l(r),
            r.forEach(p),
            this.h()
        },
        h() {
            var o;
            ve(e, "color", (o = i[0]) == null ? void 0 : o.hex)
        },
        m(o, r) {
            k(o, e, r),
            t && t.m(e, null),
            l = !0
        },
        p(o, [r]) {
            var f;
            t && t.p && (!l || r & 4) && j(t, n, o, o[2], l ? H(n, o[2], r, null) : V(o[2]), null),
            r & 1 && ve(e, "color", (f = o[0]) == null ? void 0 : f.hex)
        },
        i(o) {
            l || (d(t, o),
            l = !0)
        },
        o(o) {
            h(t, o),
            l = !1
        },
        d(o) {
            o && p(e),
            t && t.d(o)
        }
    }
}
function Zn(i, e, l) {
    let n, {$$slots: t={}, $$scope: o} = e, {portableText: r} = e;
    return i.$$set = f=>{
        "portableText"in f && l(1, r = f.portableText),
        "$$scope"in f && l(2, o = f.$$scope)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 2 && l(0, {value: n} = r, n)
    }
    ,
    [n, r, o, t]
}
class xn extends z {
    constructor(e) {
        super(),
        q(this, e, Zn, Yn, K, {
            portableText: 1
        })
    }
}
function el(i) {
    let e, l;
    return e = new Xn({
        props: {
            value: i[0],
            components: {
                marks: {
                    color: i[1]
                }
            }
        }
    }),
    {
        c() {
            C(e.$$.fragment)
        },
        l(n) {
            U(e.$$.fragment, n)
        },
        m(n, t) {
            E(e, n, t),
            l = !0
        },
        p(n, [t]) {
            const o = {};
            t & 1 && (o.value = n[0]),
            e.$set(o)
        },
        i(n) {
            l || (d(e.$$.fragment, n),
            l = !0)
        },
        o(n) {
            h(e.$$.fragment, n),
            l = !1
        },
        d(n) {
            O(e, n)
        }
    }
}
function tl(i, e, l) {
    let {value: n} = e;
    const t = xn;
    return i.$$set = o=>{
        "value"in o && l(0, n = o.value)
    }
    ,
    [n, t]
}
class gl extends z {
    constructor(e) {
        super(),
        q(this, e, tl, el, K, {
            value: 0
        })
    }
}
const we = mt(null);
function qe(i, e, l) {
    const n = i.slice();
    n[13] = e[l][0],
    n[14] = e[l][1];
    const t = n[2] === n[13];
    return n[15] = t,
    n
}
function Ge(i) {
    let e, l, n, t, o, r, f, s, u, c = W(i[3]), _ = [];
    for (let a = 0; a < c.length; a += 1)
        _[a] = Fe(qe(i, c, a));
    return {
        c() {
            e = P("div"),
            l = P("button"),
            n = le("ALL"),
            o = Y();
            for (let a = 0; a < _.length; a += 1)
                _[a].c();
            this.h()
        },
        l(a) {
            e = B(a, "DIV", {
                class: !0
            });
            var m = I(e);
            l = B(m, "BUTTON", {
                class: !0
            });
            var b = I(l);
            n = re(b, "ALL"),
            b.forEach(p),
            o = Z(m);
            for (let $ = 0; $ < _.length; $ += 1)
                _[$].l(m);
            m.forEach(p),
            this.h()
        },
        h() {
            g(l, "class", t = "rounded-sm px-2 py-1 text-xs uppercase text-gray-300 transition-colors hover:bg-white/10 sm:w-full " + (i[2] === null ? "!bg-yellow-300/20 !text-yellow-300" : "")),
            g(e, "class", "left-[calc(100%+0.5rem)] top-0 flex w-[75vw] flex-wrap justify-center overflow-hidden shadow-lg sm:absolute sm:w-[auto] sm:flex-col sm:rounded-md sm:bg-neutral-900 sm:py-1")
        },
        m(a, m) {
            k(a, e, m),
            S(e, l),
            S(l, n),
            S(e, o);
            for (let b = 0; b < _.length; b += 1)
                _[b] && _[b].m(e, null);
            f = !0,
            s || (u = ge(l, "click", i[7]),
            s = !0)
        },
        p(a, m) {
            if ((!f || m & 4 && t !== (t = "rounded-sm px-2 py-1 text-xs uppercase text-gray-300 transition-colors hover:bg-white/10 sm:w-full " + (a[2] === null ? "!bg-yellow-300/20 !text-yellow-300" : ""))) && g(l, "class", t),
            m & 15) {
                c = W(a[3]);
                let b;
                for (b = 0; b < c.length; b += 1) {
                    const $ = qe(a, c, b);
                    _[b] ? _[b].p($, m) : (_[b] = Fe($),
                    _[b].c(),
                    _[b].m(e, null))
                }
                for (; b < _.length; b += 1)
                    _[b].d(1);
                _.length = c.length
            }
        },
        i(a) {
            f || (a && Ze(()=>{
                f && (r || (r = Ee(e, i[5], {
                    duration: 700,
                    opacity: 0
                }, !0)),
                r.run(1))
            }
            ),
            f = !0)
        },
        o(a) {
            a && (r || (r = Ee(e, i[5], {
                duration: 700,
                opacity: 0
            }, !1)),
            r.run(0)),
            f = !1
        },
        d(a) {
            a && p(e),
            ue(_, a),
            a && r && r.end(),
            s = !1,
            u()
        }
    }
}
function Fe(i) {
    let e, l = i[14] + "", n, t, o, r, f;
    function s() {
        return i[8](i[13])
    }
    return {
        c() {
            e = P("button"),
            n = le(l),
            t = Y(),
            this.h()
        },
        l(u) {
            e = B(u, "BUTTON", {
                class: !0
            });
            var c = I(e);
            n = re(c, l),
            t = Z(c),
            c.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", o = "rounded-sm px-2 py-1 text-xs uppercase text-gray-300 transition-colors hover:bg-white/10 sm:w-full " + (i[15] ? "!bg-yellow-300/20 !text-yellow-300" : ""))
        },
        m(u, c) {
            k(u, e, c),
            S(e, n),
            S(e, t),
            r || (f = ge(e, "click", s),
            r = !0)
        },
        p(u, c) {
            i = u,
            c & 4 && o !== (o = "rounded-sm px-2 py-1 text-xs uppercase text-gray-300 transition-colors hover:bg-white/10 sm:w-full " + (i[15] ? "!bg-yellow-300/20 !text-yellow-300" : "")) && g(e, "class", o)
        },
        d(u) {
            u && p(e),
            r = !1,
            f()
        }
    }
}
function nl(i) {
    let e, l, n, t, o, r, f, s, u, c, _ = i[0] && Ge(i);
    return {
        c() {
            e = P("div"),
            l = P("button"),
            n = se("svg"),
            t = se("line"),
            o = se("line"),
            r = se("line"),
            f = Y(),
            _ && _.c(),
            this.h()
        },
        l(a) {
            e = B(a, "DIV", {
                class: !0
            });
            var m = I(e);
            l = B(m, "BUTTON", {
                class: !0
            });
            var b = I(l);
            n = fe(b, "svg", {
                viewBox: !0,
                class: !0,
                fill: !0,
                stroke: !0,
                "stroke-width": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0
            });
            var $ = I(n);
            t = fe($, "line", {
                x1: !0,
                x2: !0,
                y1: !0,
                y2: !0,
                class: !0
            }),
            I(t).forEach(p),
            o = fe($, "line", {
                x1: !0,
                x2: !0,
                y1: !0,
                y2: !0,
                class: !0
            }),
            I(o).forEach(p),
            r = fe($, "line", {
                x1: !0,
                x2: !0,
                y1: !0,
                y2: !0,
                class: !0
            }),
            I(r).forEach(p),
            $.forEach(p),
            b.forEach(p),
            f = Z(m),
            _ && _.l(m),
            m.forEach(p),
            this.h()
        },
        h() {
            g(t, "x1", "4"),
            g(t, "x2", "20"),
            g(t, "y1", "12"),
            g(t, "y2", "12"),
            g(t, "class", "origin-center transition-transform duration-700"),
            ne(t, "scale-x-0", i[0]),
            g(o, "x1", "4"),
            g(o, "x2", "20"),
            g(o, "y1", "6"),
            g(o, "y2", "6"),
            g(o, "class", "origin-[12px_6px] transition-transform duration-700 svelte-1x6h0mb"),
            ne(o, "top-line", i[0]),
            g(r, "x1", "4"),
            g(r, "x2", "20"),
            g(r, "y1", "18"),
            g(r, "y2", "18"),
            g(r, "class", "origin-[12px_18px] transition-transform duration-700 svelte-1x6h0mb"),
            ne(r, "bottom-line", i[0]),
            g(n, "viewBox", "0 0 24 24"),
            g(n, "class", "w-[var(--icon-size)]"),
            g(n, "fill", "none"),
            g(n, "stroke", "currentColor"),
            g(n, "stroke-width", "2"),
            g(n, "stroke-linecap", "round"),
            g(n, "stroke-linejoin", "round"),
            g(l, "class", "mb-2 translate-y-0.5 cursor-pointer p-1 text-gray-300 transition-colors hover:text-yellow-300 sm:mb-0"),
            ne(l, "text-yellow-300", i[0]),
            g(e, "class", "group relative mb-4 flex flex-col items-center sm:mb-0")
        },
        m(a, m) {
            k(a, e, m),
            S(e, l),
            S(l, n),
            S(n, t),
            S(n, o),
            S(n, r),
            S(e, f),
            _ && _.m(e, null),
            u || (c = [ge(l, "click", i[6]), ut(s = ll.call(null, e, i[9]))],
            u = !0)
        },
        p(a, [m]) {
            m & 1 && ne(t, "scale-x-0", a[0]),
            m & 1 && ne(o, "top-line", a[0]),
            m & 1 && ne(r, "bottom-line", a[0]),
            m & 1 && ne(l, "text-yellow-300", a[0]),
            a[0] ? _ ? (_.p(a, m),
            m & 1 && d(_, 1)) : (_ = Ge(a),
            _.c(),
            d(_, 1),
            _.m(e, null)) : _ && (N(),
            h(_, 1, 1, ()=>{
                _ = null
            }
            ),
            D()),
            s && ct(s.update) && m & 1 && s.update.call(null, a[9])
        },
        i(a) {
            d(_)
        },
        o(a) {
            h(_)
        },
        d(a) {
            a && p(e),
            _ && _.d(),
            u = !1,
            Ye(c)
        }
    }
}
function ll(i, e) {
    const l = n=>{
        n.composedPath().includes(i) || e()
    }
    ;
    return document.addEventListener("click", l),
    {
        destroy() {
            document.removeEventListener("click", l)
        }
    }
}
function rl(i, e, l) {
    let n, t, o;
    de(i, et, v=>l(10, t = v)),
    de(i, we, v=>l(2, o = v));
    const r = t.data.page.videos
      , f = new Map;
    for (const v of r)
        if (v.tags)
            for (const M of v.tags)
                f.set(M._id, M.name);
    const s = [...f].sort((v,M)=>v[1].length - M[1].length);
    let u = !1;
    const c = dt(!1, v=>{
        const M = window.matchMedia("(max-width: 640px)");
        v(M.matches);
        const Q = X=>{
            v(X.matches)
        }
        ;
        return M.addEventListener("change", Q),
        ()=>M.removeEventListener("change", Q)
    }
    );
    de(i, c, v=>l(1, n = v));
    function _(v, {duration: M=400, easing: Q=Pe, opacity: X=0}={}) {
        const ee = getComputedStyle(v)
          , A = v.getBoundingClientRect().height
          , L = +ee.opacity
          , y = ee.transform === "none" ? "" : ee.transform
          , T = L * (1 - X)
          , G = -4;
        return {
            duration: M,
            easing: Q,
            css: (J,_e)=>n ? `height: ${A * J}px;` : `transform: ${y} translate(0, ${(1 - J) * G}px);
			opacity: ${L - T * _e}`
        }
    }
    return [u, n, o, s, c, _, ()=>l(0, u = !u), ()=>{
        n || l(0, u = !1),
        Ce(we, o = null, o)
    }
    , v=>{
        n || l(0, u = !1),
        Ce(we, o = v, o)
    }
    , ()=>l(0, u = !1)]
}
class ol extends z {
    constructor(e) {
        super(),
        q(this, e, rl, nl, K, {})
    }
}
function We(i, e, l) {
    const n = i.slice();
    return n[5] = e[l],
    n
}
function il(i) {
    let e, l;
    return {
        c() {
            e = P("a"),
            l = le("HOME"),
            this.h()
        },
        l(n) {
            e = B(n, "A", {
                href: !0,
                class: !0
            });
            var t = I(e);
            l = re(t, "HOME"),
            t.forEach(p),
            this.h()
        },
        h() {
            g(e, "href", "/"),
            g(e, "class", Te)
        },
        m(n, t) {
            k(n, e, t),
            S(e, l)
        },
        p: x,
        i: x,
        o: x,
        d(n) {
            n && p(e)
        }
    }
}
function sl(i) {
    let e, l = "NICK VERCILLO", n, t, o = "DIRECTOR", r, f, s, u, c, _, a, m, b, $, v, M, Q, X, ee, A = i[0].length && Qe(i), L = i[1] && Xe();
    return M = new ol({}),
    {
        c() {
            e = P("div"),
            e.textContent = l,
            n = Y(),
            t = P("div"),
            t.textContent = o,
            r = Y(),
            f = P("div"),
            A && A.c(),
            s = Y(),
            u = P("a"),
            c = le("BLOG"),
            _ = Y(),
            a = P("div"),
            m = P("button"),
            b = le("CONTACT"),
            $ = Y(),
            L && L.c(),
            v = Y(),
            C(M.$$.fragment),
            this.h()
        },
        l(y) {
            e = B(y, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            $e(e) !== "svelte-1uhgvw0" && (e.textContent = l),
            n = Z(y),
            t = B(y, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            $e(t) !== "svelte-urvim2" && (t.textContent = o),
            r = Z(y),
            f = B(y, "DIV", {
                class: !0
            });
            var T = I(f);
            A && A.l(T),
            s = Z(T),
            u = B(T, "A", {
                href: !0,
                class: !0
            });
            var G = I(u);
            c = re(G, "BLOG"),
            G.forEach(p),
            _ = Z(T),
            a = B(T, "DIV", {
                class: !0
            });
            var J = I(a);
            m = B(J, "BUTTON", {
                class: !0
            });
            var _e = I(m);
            b = re(_e, "CONTACT"),
            _e.forEach(p),
            $ = Z(J),
            L && L.l(J),
            J.forEach(p),
            T.forEach(p),
            v = Z(y),
            U(M.$$.fragment, y),
            this.h()
        },
        h() {
            g(e, "class", "whitespace-nowrap text-center text-4xl font-extrabold md:text-3xl lg:text-4xl"),
            g(t, "class", "-mt-2 text-center text-sm font-light text-gray-300 md:mr-auto md:text-base"),
            g(u, "href", "/blog"),
            g(u, "class", Te),
            g(m, "class", Te),
            g(a, "class", "relative"),
            g(f, "class", "flex items-center gap-2 self-center md:self-end")
        },
        m(y, T) {
            k(y, e, T),
            k(y, n, T),
            k(y, t, T),
            k(y, r, T),
            k(y, f, T),
            A && A.m(f, null),
            S(f, s),
            S(f, u),
            S(u, c),
            S(f, _),
            S(f, a),
            S(a, m),
            S(m, b),
            S(a, $),
            L && L.m(a, null),
            k(y, v, T),
            E(M, y, T),
            Q = !0,
            X || (ee = ge(m, "click", i[4]),
            X = !0)
        },
        p(y, T) {
            y[0].length ? A ? A.p(y, T) : (A = Qe(y),
            A.c(),
            A.m(f, s)) : A && (A.d(1),
            A = null),
            y[1] ? L ? T & 2 && d(L, 1) : (L = Xe(),
            L.c(),
            d(L, 1),
            L.m(a, null)) : L && (N(),
            h(L, 1, 1, ()=>{
                L = null
            }
            ),
            D())
        },
        i(y) {
            Q || (d(L),
            d(M.$$.fragment, y),
            Q = !0)
        },
        o(y) {
            h(L),
            h(M.$$.fragment, y),
            Q = !1
        },
        d(y) {
            y && (p(e),
            p(n),
            p(t),
            p(r),
            p(f),
            p(v)),
            A && A.d(),
            L && L.d(),
            O(M, y),
            X = !1,
            ee()
        }
    }
}
function Qe(i) {
    let e, l = W(i[0]), n = [];
    for (let t = 0; t < l.length; t += 1)
        n[t] = Je(We(i, l, t));
    return {
        c() {
            e = P("div");
            for (let t = 0; t < n.length; t += 1)
                n[t].c();
            this.h()
        },
        l(t) {
            e = B(t, "DIV", {
                class: !0
            });
            var o = I(e);
            for (let r = 0; r < n.length; r += 1)
                n[r].l(o);
            o.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "my-px flex items-baseline self-end")
        },
        m(t, o) {
            k(t, e, o);
            for (let r = 0; r < n.length; r += 1)
                n[r] && n[r].m(e, null)
        },
        p(t, o) {
            if (o & 1) {
                l = W(t[0]);
                let r;
                for (r = 0; r < l.length; r += 1) {
                    const f = We(t, l, r);
                    n[r] ? n[r].p(f, o) : (n[r] = Je(f),
                    n[r].c(),
                    n[r].m(e, null))
                }
                for (; r < n.length; r += 1)
                    n[r].d(1);
                n.length = l.length
            }
        },
        d(t) {
            t && p(e),
            ue(n, t)
        }
    }
}
function Je(i) {
    let e, l, n, t, o, r, f, s;
    return {
        c() {
            e = P("a"),
            l = se("svg"),
            n = se("path"),
            r = Y(),
            this.h()
        },
        l(u) {
            e = B(u, "A", {
                title: !0,
                target: !0,
                class: !0,
                href: !0
            });
            var c = I(e);
            l = fe(c, "svg", {
                viewBox: !0,
                class: !0
            });
            var _ = I(l);
            n = fe(_, "path", {
                d: !0,
                "fill-rule": !0
            }),
            I(n).forEach(p),
            _.forEach(p),
            r = Z(c),
            c.forEach(p),
            this.h()
        },
        h() {
            g(n, "d", t = i[5].svg),
            g(n, "fill-rule", "evenodd"),
            g(l, "viewBox", o = i[5].viewBox),
            g(l, "class", "w-[var(--icon-size)]"),
            g(e, "title", f = i[5].name),
            g(e, "target", "_blank"),
            g(e, "class", "cursor-pointer fill-gray-400 p-1 transition-colors hover:fill-yellow-300"),
            g(e, "href", s = i[5].url)
        },
        m(u, c) {
            k(u, e, c),
            S(e, l),
            S(l, n),
            S(e, r)
        },
        p(u, c) {
            c & 1 && t !== (t = u[5].svg) && g(n, "d", t),
            c & 1 && o !== (o = u[5].viewBox) && g(l, "viewBox", o),
            c & 1 && f !== (f = u[5].name) && g(e, "title", f),
            c & 1 && s !== (s = u[5].url) && g(e, "href", s)
        },
        d(u) {
            u && p(e)
        }
    }
}
function Xe(i) {
    let e, l = "EMAIL COPIED", n, t, o;
    return {
        c() {
            e = P("div"),
            e.textContent = l,
            this.h()
        },
        l(r) {
            e = B(r, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            $e(e) !== "svelte-1o5k2so" && (e.textContent = l),
            this.h()
        },
        h() {
            g(e, "class", "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-xs font-light text-yellow-300")
        },
        m(r, f) {
            k(r, e, f),
            o = !0
        },
        i(r) {
            o || (r && Ze(()=>{
                o && (t && t.end(1),
                n = at(e, Oe, {
                    y: 10,
                    duration: 400,
                    opacity: 0
                }),
                n.start())
            }
            ),
            o = !0)
        },
        o(r) {
            n && n.invalidate(),
            r && (t = _t(e, Oe, {
                y: -5,
                duration: 100,
                opacity: 0
            })),
            o = !1
        },
        d(r) {
            r && p(e),
            r && t && t.end()
        }
    }
}
function fl(i) {
    let e, l, n, t;
    const o = [sl, il]
      , r = [];
    function f(s, u) {
        return s[2] === "/" ? 0 : 1
    }
    return l = f(i),
    n = r[l] = o[l](i),
    {
        c() {
            e = P("div"),
            n.c(),
            this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var u = I(e);
            n.l(u),
            u.forEach(p),
            this.h()
        },
        h() {
            g(e, "class", "relative z-10 mx-auto mt-16 flex w-full max-w-[min(900px,_calc(100vw_-_200px))] select-none flex-col items-center justify-center gap-2 pb-1 [--icon-size:18px] md:flex-row md:items-baseline")
        },
        m(s, u) {
            k(s, e, u),
            r[l].m(e, null),
            t = !0
        },
        p(s, [u]) {
            let c = l;
            l = f(s),
            l === c ? r[l].p(s, u) : (N(),
            h(r[c], 1, 1, ()=>{
                r[c] = null
            }
            ),
            D(),
            n = r[l],
            n ? n.p(s, u) : (n = r[l] = o[l](s),
            n.c()),
            d(n, 1),
            n.m(e, null))
        },
        i(s) {
            t || (d(n),
            t = !0)
        },
        o(s) {
            h(n),
            t = !1
        },
        d(s) {
            s && p(e),
            r[l].d()
        }
    }
}
const Te = "origin-center cursor-pointer font-light text-gray-300 transition-colors hover:text-yellow-300";
function ul(i, e, l) {
    let n, t;
    de(i, et, s=>l(3, t = s));
    let {icons: o=[]} = e
      , r = !1;
    const f = async()=>{
        await navigator.clipboard.writeText("envy@makeshit.co"),
        l(1, r = !0),
        setTimeout(()=>{
            l(1, r = !1)
        }
        , 3e3)
    }
    ;
    return i.$$set = s=>{
        "icons"in s && l(0, o = s.icons)
    }
    ,
    i.$$.update = ()=>{
        i.$$.dirty & 8 && l(2, n = t.route.id)
    }
    ,
    [o, r, n, t, f]
}
class bl extends z {
    constructor(e) {
        super(),
        q(this, e, ul, fl, K, {
            icons: 0
        })
    }
}
export {gl as R, bl as T, we as a, W as e, dl as f, pl as s};
