function y() {}
const A = t=>t;
function w(t, n) {
    for (const e in n)
        t[e] = n[e];
    return t
}
function j(t) {
    return t()
}
function B() {
    return Object.create(null)
}
function E(t) {
    t.forEach(j)
}
function q(t) {
    return typeof t == "function"
}
function C(t, n) {
    return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function"
}
let l;
function P(t, n) {
    return t === n ? !0 : (l || (l = document.createElement("a")),
    l.href = n,
    t === l.href)
}
function S(t) {
    return Object.keys(t).length === 0
}
function v(t, ...n) {
    if (t == null) {
        for (const r of n)
            r(void 0);
        return y
    }
    const e = t.subscribe(...n);
    return e.unsubscribe ? ()=>e.unsubscribe() : e
}
function U(t, n, e) {
    t.$$.on_destroy.push(v(n, e))
}
function D(t, n, e, r) {
    if (t) {
        const o = m(t, n, e, r);
        return t[0](o)
    }
}
function m(t, n, e, r) {
    return t[1] && r ? w(e.ctx.slice(), t[1](r(n))) : e.ctx
}
function G(t, n, e, r) {
    if (t[2] && r) {
        const o = t[2](r(e));
        if (n.dirty === void 0)
            return o;
        if (typeof o == "object") {
            const i = []
              , _ = Math.max(n.dirty.length, o.length);
            for (let u = 0; u < _; u += 1)
                i[u] = n.dirty[u] | o[u];
            return i
        }
        return n.dirty | o
    }
    return n.dirty
}
function H(t, n, e, r, o, i) {
    if (o) {
        const _ = m(n, e, r, i);
        t.p(_, o)
    }
}
function I(t) {
    if (t.ctx.length > 32) {
        const n = []
          , e = t.ctx.length / 32;
        for (let r = 0; r < e; r++)
            n[r] = -1;
        return n
    }
    return -1
}
function J(t, n, e) {
    return t.set(e),
    n
}
function K(t) {
    return t && q(t.destroy) ? t.destroy : y
}
function L(t) {
    const n = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return n ? [parseFloat(n[1]), n[2] || "px"] : [t, "px"]
}
let f;
function d(t) {
    f = t
}
function x() {
    if (!f)
        throw new Error("Function called outside component initialization");
    return f
}
function N(t) {
    x().$$.on_mount.push(t)
}
function Q(t) {
    x().$$.after_update.push(t)
}
const a = []
  , g = [];
let c = [];
const p = []
  , k = Promise.resolve();
let b = !1;
function O() {
    b || (b = !0,
    k.then(F))
}
function R() {
    return O(),
    k
}
function z(t) {
    c.push(t)
}
function T(t) {
    p.push(t)
}
const h = new Set;
let s = 0;
function F() {
    if (s !== 0)
        return;
    const t = f;
    do {
        try {
            for (; s < a.length; ) {
                const n = a[s];
                s++,
                d(n),
                M(n.$$)
            }
        } catch (n) {
            throw a.length = 0,
            s = 0,
            n
        }
        for (d(null),
        a.length = 0,
        s = 0; g.length; )
            g.pop()();
        for (let n = 0; n < c.length; n += 1) {
            const e = c[n];
            h.has(e) || (h.add(e),
            e())
        }
        c.length = 0
    } while (a.length);
    for (; p.length; )
        p.pop()();
    b = !1,
    h.clear(),
    d(t)
}
function M(t) {
    if (t.fragment !== null) {
        t.update(),
        E(t.before_update);
        const n = t.dirty;
        t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, n),
        t.after_update.forEach(z)
    }
}
function V(t) {
    const n = []
      , e = [];
    c.forEach(r=>t.indexOf(r) === -1 ? n.push(r) : e.push(r)),
    e.forEach(r=>r()),
    c = n
}
export {j as A, a as B, O as C, Q as a, g as b, D as c, G as d, U as e, z as f, I as g, P as h, T as i, A as j, L as k, K as l, q as m, y as n, N as o, J as p, B as q, E as r, C as s, R as t, H as u, F as v, S as w, V as x, f as y, d as z};
