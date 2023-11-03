import {n as b, s as m} from "./scheduler.69c11db5.js";
const u = [];
function y(e, t) {
    return {
        subscribe: d(e, t).subscribe
    }
}
function d(e, t=b) {
    let n;
    const o = new Set;
    function r(s) {
        if (m(e, s) && (e = s,
        n)) {
            const c = !u.length;
            for (const l of o)
                l[1](),
                u.push(l, e);
            if (c) {
                for (let l = 0; l < u.length; l += 2)
                    u[l][0](u[l + 1]);
                u.length = 0
            }
        }
    }
    function i(s) {
        r(s(e))
    }
    function a(s, c=b) {
        const l = [s, c];
        return o.add(l),
        o.size === 1 && (n = t(r, i) || b),
        s(e),
        ()=>{
            o.delete(l),
            o.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: r,
        update: i,
        subscribe: a
    }
}
var h;
const w = ((h = globalThis.__sveltekit_1g5t4fl) == null ? void 0 : h.base) ?? "";
var k;
const E = ((k = globalThis.__sveltekit_1g5t4fl) == null ? void 0 : k.assets) ?? w
  , A = "1696468918107"
  , I = "sveltekit:snapshot"
  , x = "sveltekit:scroll"
  , O = "sveltekit:index"
  , p = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1
};
function U(e) {
    let t = e.baseURI;
    if (!t) {
        const n = e.getElementsByTagName("base");
        t = n.length ? n[0].href : e.URL
    }
    return t
}
function L() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}
function f(e, t) {
    return e.getAttribute(`data-sveltekit-${t}`)
}
const _ = {
    ...p,
    "": p.hover
};
function v(e) {
    let t = e.assignedSlot ?? e.parentNode;
    return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host),
    t
}
function N(e, t) {
    for (; e && e !== t; ) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href"))
            return e;
        e = v(e)
    }
}
function P(e, t) {
    let n;
    try {
        n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href,document.baseURI)
    } catch {}
    const o = e instanceof SVGAElement ? e.target.baseVal : e.target
      , r = !n || !!o || S(n, t) || (e.getAttribute("rel") || "").split(/\s+/).includes("external")
      , i = (n == null ? void 0 : n.origin) === location.origin && e.hasAttribute("download");
    return {
        url: n,
        external: r,
        target: o,
        download: i
    }
}
function V(e) {
    let t = null
      , n = null
      , o = null
      , r = null
      , i = null
      , a = null
      , s = e;
    for (; s && s !== document.documentElement; )
        o === null && (o = f(s, "preload-code")),
        r === null && (r = f(s, "preload-data")),
        t === null && (t = f(s, "keepfocus")),
        n === null && (n = f(s, "noscroll")),
        i === null && (i = f(s, "reload")),
        a === null && (a = f(s, "replacestate")),
        s = v(s);
    function c(l) {
        switch (l) {
        case "":
        case "true":
            return !0;
        case "off":
        case "false":
            return !1;
        default:
            return null
        }
    }
    return {
        preload_code: _[o ?? "off"],
        preload_data: _[r ?? "off"],
        keep_focus: c(t),
        noscroll: c(n),
        reload: c(i),
        replace_state: c(a)
    }
}
function g(e) {
    const t = d(e);
    let n = !0;
    function o() {
        n = !0,
        t.update(a=>a)
    }
    function r(a) {
        n = !1,
        t.set(a)
    }
    function i(a) {
        let s;
        return t.subscribe(c=>{
            (s === void 0 || n && c !== s) && a(s = c)
        }
        )
    }
    return {
        notify: o,
        set: r,
        subscribe: i
    }
}
function R() {
    const {set: e, subscribe: t} = d(!1);
    let n;
    async function o() {
        clearTimeout(n);
        try {
            const r = await fetch(`${E}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!r.ok)
                return !1;
            const a = (await r.json()).version !== A;
            return a && (e(!0),
            clearTimeout(n)),
            a
        } catch {
            return !1
        }
    }
    return {
        subscribe: t,
        check: o
    }
}
function S(e, t) {
    return e.origin !== location.origin || !e.pathname.startsWith(t)
}
function Y(e) {
    e.client
}
const q = {
    url: g({}),
    page: g({}),
    navigating: d(null),
    updated: R()
};
export {O as I, p as P, x as S, I as a, P as b, V as c, L as d, w as e, N as f, U as g, Y as h, S as i, y as r, q as s, d as w};
