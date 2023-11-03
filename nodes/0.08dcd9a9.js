import {s as u, c as _, u as m, g as d, d as h} from "../chunks/scheduler.69c11db5.js";
import {S as p, i as $, s as v, g, x as y, f as r, c as E, h as S, j as b, k as j, a as f, d as k, t as q} from "../chunks/index.62b820ca.js";
function w(n) {
    let a, t, l;
    const o = n[1].default
      , s = _(o, n, n[0], null);
    return {
        c() {
            a = v(),
            t = g("main"),
            s && s.c(),
            this.h()
        },
        l(e) {
            y("svelte-1svr5yv", document.head).forEach(r),
            a = E(e),
            t = S(e, "MAIN", {
                class: !0
            });
            var c = b(t);
            s && s.l(c),
            c.forEach(r),
            this.h()
        },
        h() {
            document.title = "envy!",
            j(t, "class", "flex min-h-screen w-full flex-col scroll-smooth")
        },
        m(e, i) {
            f(e, a, i),
            f(e, t, i),
            s && s.m(t, null),
            l = !0
        },
        p(e, [i]) {
            s && s.p && (!l || i & 1) && m(s, o, e, e[0], l ? h(o, e[0], i, null) : d(e[0]), null)
        },
        i(e) {
            l || (k(s, e),
            l = !0)
        },
        o(e) {
            q(s, e),
            l = !1
        },
        d(e) {
            e && (r(a),
            r(t)),
            s && s.d(e)
        }
    }
}
function A(n, a, t) {
    let {$$slots: l={}, $$scope: o} = a;
    return n.$$set = s=>{
        "$$scope"in s && t(0, o = s.$$scope)
    }
    ,
    [o, l]
}
class L extends p {
    constructor(a) {
        super(),
        $(this, a, A, w, u, {})
    }
}
export {L as component};
