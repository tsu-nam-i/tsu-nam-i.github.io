var tt = Object.defineProperty;
var et = (t,e,n)=>e in t ? tt(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var L = (t,e,n)=>(et(t, typeof e != "symbol" ? e + "" : e, n),
n);
import {n as w, r as E, m as S, f as C, j as M, q as G, v as nt, w as it, x as rt, y as st, z as V, A as at, B as lt, C as ot} from "./scheduler.69c11db5.js";
const W = typeof window < "u";
let P = W ? ()=>window.performance.now() : ()=>Date.now()
  , z = W ? t=>requestAnimationFrame(t) : w;
const N = new Set;
function J(t) {
    N.forEach(e=>{
        e.c(t) || (N.delete(e),
        e.f())
    }
    ),
    N.size !== 0 && z(J)
}
function O(t) {
    let e;
    return N.size === 0 && z(J),
    {
        promise: new Promise(n=>{
            N.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            N.delete(e)
        }
    }
}
let H = !1;
function ft() {
    H = !0
}
function ct() {
    H = !1
}
function ut(t, e, n, i) {
    for (; t < e; ) {
        const r = t + (e - t >> 1);
        n(r) <= i ? t = r + 1 : e = r
    }
    return t
}
function _t(t) {
    if (t.hydrate_init)
        return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const l = [];
        for (let o = 0; o < e.length; o++) {
            const _ = e[o];
            _.claim_order !== void 0 && l.push(_)
        }
        e = l
    }
    const n = new Int32Array(e.length + 1)
      , i = new Int32Array(e.length);
    n[0] = -1;
    let r = 0;
    for (let l = 0; l < e.length; l++) {
        const o = e[l].claim_order
          , _ = (r > 0 && e[n[r]].claim_order <= o ? r + 1 : ut(1, r, m=>e[n[m]].claim_order, o)) - 1;
        i[l] = n[_] + 1;
        const c = _ + 1;
        n[c] = l,
        r = Math.max(c, r)
    }
    const f = []
      , a = [];
    let s = e.length - 1;
    for (let l = n[r] + 1; l != 0; l = i[l - 1]) {
        for (f.push(e[l - 1]); s >= l; s--)
            a.push(e[s]);
        s--
    }
    for (; s >= 0; s--)
        a.push(e[s]);
    f.reverse(),
    a.sort((l,o)=>l.claim_order - o.claim_order);
    for (let l = 0, o = 0; l < a.length; l++) {
        for (; o < f.length && a[l].claim_order >= f[o].claim_order; )
            o++;
        const _ = o < f.length ? f[o] : null;
        t.insertBefore(a[l], _)
    }
}
function dt(t, e) {
    t.appendChild(e)
}
function K(t) {
    if (!t)
        return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}
function mt(t) {
    const e = U("style");
    return e.textContent = "/* empty */",
    ht(K(t), e),
    e.sheet
}
function ht(t, e) {
    return dt(t.head || t, e),
    e.sheet
}
function pt(t, e) {
    if (H) {
        for (_t(t),
        (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
            t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else
        (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function Rt(t, e, n) {
    H && !n ? pt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function Q(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function Tt(t, e) {
    for (let n = 0; n < t.length; n += 1)
        t[n] && t[n].d(e)
}
function U(t) {
    return document.createElement(t)
}
function $t(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function q(t) {
    return document.createTextNode(t)
}
function kt() {
    return q(" ")
}
function Ht() {
    return q("")
}
function Lt(t, e, n, i) {
    return t.addEventListener(e, n, i),
    ()=>t.removeEventListener(e, n, i)
}
function Mt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Pt(t) {
    return t.dataset.svelteH
}
function yt(t) {
    return Array.from(t.childNodes)
}
function gt(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}
function X(t, e, n, i, r=!1) {
    gt(t);
    const f = (()=>{
        for (let a = t.claim_info.last_index; a < t.length; a++) {
            const s = t[a];
            if (e(s)) {
                const l = n(s);
                return l === void 0 ? t.splice(a, 1) : t[a] = l,
                r || (t.claim_info.last_index = a),
                s
            }
        }
        for (let a = t.claim_info.last_index - 1; a >= 0; a--) {
            const s = t[a];
            if (e(s)) {
                const l = n(s);
                return l === void 0 ? t.splice(a, 1) : t[a] = l,
                r ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = a,
                s
            }
        }
        return i()
    }
    )();
    return f.claim_order = t.claim_info.total_claimed,
    t.claim_info.total_claimed += 1,
    f
}
function Y(t, e, n, i) {
    return X(t, r=>r.nodeName === e, r=>{
        const f = [];
        for (let a = 0; a < r.attributes.length; a++) {
            const s = r.attributes[a];
            n[s.name] || f.push(s.name)
        }
        f.forEach(a=>r.removeAttribute(a))
    }
    , ()=>i(e))
}
function zt(t, e, n) {
    return Y(t, e, n, U)
}
function Ot(t, e, n) {
    return Y(t, e, n, $t)
}
function xt(t, e) {
    return X(t, n=>n.nodeType === 3, n=>{
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length)
                return n.splitText(i.length)
        } else
            n.data = i
    }
    , ()=>q(e), !0)
}
function qt(t) {
    return xt(t, " ")
}
function It(t, e) {
    e = "" + e,
    t.data !== e && (t.data = e)
}
function Ft(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}
function Gt(t, e, n) {
    t.classList.toggle(e, !!n)
}
function vt(t, e, {bubbles: n=!1, cancelable: i=!1}={}) {
    return new CustomEvent(t,{
        detail: e,
        bubbles: n,
        cancelable: i
    })
}
function Vt(t, e) {
    const n = [];
    let i = 0;
    for (const r of e.childNodes)
        if (r.nodeType === 8) {
            const f = r.textContent.trim();
            f === `HEAD_ ${t}_END` ? (i -= 1,
            n.push(r)) : f === `HEAD_ ${t}_START` && (i += 1,
            n.push(r))
        } else
            i > 0 && n.push(r);
    return n
}
function Wt(t, e) {
    return new t(e)
}
const B = new Map;
let R = 0;
function wt(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function bt(t, e) {
    const n = {
        stylesheet: mt(e),
        rules: {}
    };
    return B.set(t, n),
    n
}
function T(t, e, n, i, r, f, a, s=0) {
    const l = 16.666 / i;
    let o = `{
`;
    for (let h = 0; h <= 1; h += l) {
        const $ = e + (n - e) * f(h);
        o += h * 100 + `%{${a($, 1 - $)}}
`
    }
    const _ = o + `100% {${a(n, 1 - n)}}
}`
      , c = `__svelte_ ${wt(_)}_ ${s}`
      , m = K(t)
      , {stylesheet: p, rules: u} = B.get(m) || bt(m, t);
    u[c] || (u[c] = !0,
    p.insertRule(`@keyframes ${c} ${_}`, p.cssRules.length));
    const d = t.style.animation || "";
    return t.style.animation = `${d ? `${d}, ` : ""}${c} ${i}ms linear ${r}ms 1 both`,
    R += 1,
    c
}
function k(t, e) {
    const n = (t.style.animation || "").split(", ")
      , i = n.filter(e ? f=>f.indexOf(e) < 0 : f=>f.indexOf("__svelte") === -1)
      , r = n.length - i.length;
    r && (t.style.animation = i.join(", "),
    R -= r,
    R || Nt())
}
function Nt() {
    z(()=>{
        R || (B.forEach(t=>{
            const {ownerNode: e} = t.stylesheet;
            e && Q(e)
        }
        ),
        B.clear())
    }
    )
}
let A;
function I() {
    return A || (A = Promise.resolve(),
    A.then(()=>{
        A = null
    }
    )),
    A
}
function v(t, e, n) {
    t.dispatchEvent(vt(`${e ? "intro" : "outro"}${n}`))
}
const j = new Set;
let y;
function Jt() {
    y = {
        r: 0,
        c: [],
        p: y
    }
}
function Kt() {
    y.r || E(y.c),
    y = y.p
}
function Et(t, e) {
    t && t.i && (j.delete(t),
    t.i(e))
}
function Qt(t, e, n, i) {
    if (t && t.o) {
        if (j.has(t))
            return;
        j.add(t),
        y.c.push(()=>{
            j.delete(t),
            i && (n && t.d(1),
            i())
        }
        ),
        t.o(e)
    } else
        i && i()
}
const F = {
    duration: 0
};
function Ut(t, e, n) {
    const i = {
        direction: "in"
    };
    let r = e(t, n, i), f = !1, a, s, l = 0;
    function o() {
        a && k(t, a)
    }
    function _() {
        const {delay: m=0, duration: p=300, easing: u=M, tick: d=w, css: h} = r || F;
        h && (a = T(t, 0, 1, p, m, u, h, l++)),
        d(0, 1);
        const $ = P() + m
          , g = $ + p;
        s && s.abort(),
        f = !0,
        C(()=>v(t, !0, "start")),
        s = O(x=>{
            if (f) {
                if (x >= g)
                    return d(1, 0),
                    v(t, !0, "end"),
                    o(),
                    f = !1;
                if (x >= $) {
                    const b = u((x - $) / p);
                    d(b, 1 - b)
                }
            }
            return f
        }
        )
    }
    let c = !1;
    return {
        start() {
            c || (c = !0,
            k(t),
            S(r) ? (r = r(i),
            I().then(_)) : _())
        },
        invalidate() {
            c = !1
        },
        end() {
            f && (o(),
            f = !1)
        }
    }
}
function Xt(t, e, n) {
    const i = {
        direction: "out"
    };
    let r = e(t, n, i), f = !0, a;
    const s = y;
    s.r += 1;
    let l;
    function o() {
        const {delay: _=0, duration: c=300, easing: m=M, tick: p=w, css: u} = r || F;
        u && (a = T(t, 1, 0, c, _, m, u));
        const d = P() + _
          , h = d + c;
        C(()=>v(t, !1, "start")),
        "inert"in t && (l = t.inert,
        t.inert = !0),
        O($=>{
            if (f) {
                if ($ >= h)
                    return p(0, 1),
                    v(t, !1, "end"),
                    --s.r || E(s.c),
                    !1;
                if ($ >= d) {
                    const g = m(($ - d) / c);
                    p(1 - g, g)
                }
            }
            return f
        }
        )
    }
    return S(r) ? I().then(()=>{
        r = r(i),
        o()
    }
    ) : o(),
    {
        end(_) {
            _ && "inert"in t && (t.inert = l),
            _ && r.tick && r.tick(1, 0),
            f && (a && k(t, a),
            f = !1)
        }
    }
}
function Yt(t, e, n, i) {
    let f = e(t, n, {
        direction: "both"
    }), a = i ? 0 : 1, s = null, l = null, o = null, _;
    function c() {
        o && k(t, o)
    }
    function m(u, d) {
        const h = u.b - a;
        return d *= Math.abs(h),
        {
            a,
            b: u.b,
            d: h,
            duration: d,
            start: u.start,
            end: u.start + d,
            group: u.group
        }
    }
    function p(u) {
        const {delay: d=0, duration: h=300, easing: $=M, tick: g=w, css: x} = f || F
          , b = {
            start: P() + d,
            b: u
        };
        u || (b.group = y,
        y.r += 1),
        "inert"in t && (u ? _ !== void 0 && (t.inert = _) : (_ = t.inert,
        t.inert = !0)),
        s || l ? l = b : (x && (c(),
        o = T(t, a, u, h, d, $, x)),
        u && g(0, 1),
        s = m(b, h),
        C(()=>v(t, u, "start")),
        O(D=>{
            if (l && D > l.start && (s = m(l, h),
            l = null,
            v(t, s.b, "start"),
            x && (c(),
            o = T(t, a, s.b, s.duration, 0, $, f.css))),
            s) {
                if (D >= s.end)
                    g(a = s.b, 1 - a),
                    v(t, s.b, "end"),
                    l || (s.b ? c() : --s.group.r || E(s.group.c)),
                    s = null;
                else if (D >= s.start) {
                    const Z = D - s.start;
                    a = s.a + s.d * $(Z / s.duration),
                    g(a, 1 - a)
                }
            }
            return !!(s || l)
        }
        ))
    }
    return {
        run(u) {
            S(f) ? I().then(()=>{
                f = f({
                    direction: u ? "in" : "out"
                }),
                p(u)
            }
            ) : p(u)
        },
        end() {
            c(),
            s = l = null
        }
    }
}
function Zt(t, e, n) {
    const i = t.$$.props[e];
    i !== void 0 && (t.$$.bound[i] = n,
    n(t.$$.ctx[i]))
}
function te(t) {
    t && t.c()
}
function ee(t, e) {
    t && t.l(e)
}
function At(t, e, n) {
    const {fragment: i, after_update: r} = t.$$;
    i && i.m(e, n),
    C(()=>{
        const f = t.$$.on_mount.map(at).filter(S);
        t.$$.on_destroy ? t.$$.on_destroy.push(...f) : E(f),
        t.$$.on_mount = []
    }
    ),
    r.forEach(C)
}
function Ct(t, e) {
    const n = t.$$;
    n.fragment !== null && (rt(n.after_update),
    E(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function St(t, e) {
    t.$$.dirty[0] === -1 && (lt.push(t),
    ot(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function ne(t, e, n, i, r, f, a, s=[-1]) {
    const l = st;
    V(t);
    const o = t.$$ = {
        fragment: null,
        ctx: [],
        props: f,
        update: w,
        not_equal: r,
        bound: G(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (l ? l.$$.context : [])),
        callbacks: G(),
        dirty: s,
        skip_bound: !1,
        root: e.target || l.$$.root
    };
    a && a(o.root);
    let _ = !1;
    if (o.ctx = n ? n(t, e.props || {}, (c,m,...p)=>{
        const u = p.length ? p[0] : m;
        return o.ctx && r(o.ctx[c], o.ctx[c] = u) && (!o.skip_bound && o.bound[c] && o.bound[c](u),
        _ && St(t, c)),
        m
    }
    ) : [],
    o.update(),
    _ = !0,
    E(o.before_update),
    o.fragment = i ? i(o.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            ft();
            const c = yt(e.target);
            o.fragment && o.fragment.l(c),
            c.forEach(Q)
        } else
            o.fragment && o.fragment.c();
        e.intro && Et(t.$$.fragment),
        At(t, e.target, e.anchor),
        ct(),
        nt()
    }
    V(l)
}
class ie {
    constructor() {
        L(this, "$$");
        L(this, "$$set")
    }
    $destroy() {
        Ct(this, 1),
        this.$destroy = w
    }
    $on(e, n) {
        if (!S(n))
            return w;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n),
        ()=>{
            const r = i.indexOf(n);
            r !== -1 && i.splice(r, 1)
        }
    }
    $set(e) {
        this.$$set && !it(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const Dt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Dt);
export {Pt as A, Yt as B, Tt as C, Zt as D, Gt as E, $t as F, Ot as G, Ut as H, Xt as I, ie as S, Rt as a, Kt as b, qt as c, Et as d, Ht as e, Q as f, U as g, zt as h, ne as i, yt as j, Mt as k, Ft as l, q as m, xt as n, It as o, Jt as p, Wt as q, te as r, kt as s, Qt as t, ee as u, At as v, Ct as w, Vt as x, pt as y, Lt as z};
