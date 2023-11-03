import {s as q, f as Q, r as ce, h as H, n as de, e as he, o as pe, b as me, i as _e} from "../chunks/scheduler.69c11db5.js";
import {S as K, i as Y, e as R, a as D, z as S, d as k, p as j, t as V, b as O, f as g, g as E, s as x, h as I, j as T, c as M, A as J, k as _, y as $, B as A, l as G, r as B, u as F, v as L, w as N, C as fe, D as ge} from "../chunks/index.62b820ca.js";
import {R as P, f as W, s as X, a as ve, e as U, T as be} from "../chunks/TitleBar.b237fcea.js";
function Z(n) {
    let l, t, s, e, r, i = "×", o, a = n[0].url, v, b, u, C, m, y = ee(n), d = n[0].left && n[0].right && te(n);
    return {
        c() {
            l = E("div"),
            s = x(),
            e = E("div"),
            r = E("button"),
            r.textContent = i,
            o = x(),
            y.c(),
            v = x(),
            d && d.c(),
            this.h()
        },
        l(f) {
            l = I(f, "DIV", {
                class: !0
            }),
            T(l).forEach(g),
            s = M(f),
            e = I(f, "DIV", {
                class: !0
            });
            var c = T(e);
            r = I(c, "BUTTON", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            J(r) !== "svelte-mlwzfu" && (r.textContent = i),
            o = M(c),
            y.l(c),
            v = M(c),
            d && d.l(c),
            c.forEach(g),
            this.h()
        },
        h() {
            _(l, "class", "fixed inset-0 z-40 bg-white/10"),
            _(r, "class", "absolute right-0 top-0 z-20 h-8 w-8 text-3xl text-gray-300 hover:text-white"),
            _(e, "class", "fixed z-50 w-11/12 rounded-lg bg-black/90 p-4")
        },
        m(f, c) {
            D(f, l, c),
            D(f, s, c),
            D(f, e, c),
            $(e, r),
            $(e, o),
            y.m(e, null),
            $(e, v),
            d && d.m(e, null),
            u = !0,
            C || (m = [S(l, "click", n[1]), S(r, "click", n[1])],
            C = !0)
        },
        p(f, c) {
            c & 1 && q(a, a = f[0].url) ? (y.d(1),
            y = ee(f),
            y.c(),
            y.m(e, v)) : y.p(f, c),
            f[0].left && f[0].right ? d ? (d.p(f, c),
            c & 1 && k(d, 1)) : (d = te(f),
            d.c(),
            k(d, 1),
            d.m(e, null)) : d && (j(),
            V(d, 1, 1, ()=>{
                d = null
            }
            ),
            O())
        },
        i(f) {
            u || (f && Q(()=>{
                u && (t || (t = A(l, W, {
                    duration: 500
                }, !0)),
                t.run(1))
            }
            ),
            k(d),
            f && Q(()=>{
                u && (b || (b = A(e, X, {
                    start: .95,
                    opacity: 0,
                    duration: 500
                }, !0)),
                b.run(1))
            }
            ),
            u = !0)
        },
        o(f) {
            f && (t || (t = A(l, W, {
                duration: 500
            }, !1)),
            t.run(0)),
            V(d),
            f && (b || (b = A(e, X, {
                start: .95,
                opacity: 0,
                duration: 500
            }, !1)),
            b.run(0)),
            u = !1
        },
        d(f) {
            f && (g(l),
            g(s),
            g(e)),
            f && t && t.end(),
            y.d(f),
            d && d.d(),
            f && b && b.end(),
            C = !1,
            ce(m)
        }
    }
}
function ee(n) {
    let l, t, s, e;
    return {
        c() {
            l = E("div"),
            t = E("iframe"),
            this.h()
        },
        l(r) {
            l = I(r, "DIV", {
                class: !0
            });
            var i = T(l);
            t = I(i, "IFRAME", {
                class: !0,
                src: !0,
                title: !0,
                allow: !0
            }),
            T(t).forEach(g),
            i.forEach(g),
            this.h()
        },
        h() {
            _(t, "class", "relative h-full w-full"),
            H(t.src, s = n[0].url) || _(t, "src", s),
            _(t, "title", e = n[0].name),
            _(t, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),
            t.allowFullscreen = !0,
            _(l, "class", "pointer-events-auto relative max-h-[40vh] w-full lg:max-h-[calc(100vh-250px)] short:max-h-[20vh]"),
            G(l, "aspect-ratio", n[0].aspectRatio ?? "16 / 9")
        },
        m(r, i) {
            D(r, l, i),
            $(l, t)
        },
        p(r, i) {
            i & 1 && !H(t.src, s = r[0].url) && _(t, "src", s),
            i & 1 && e !== (e = r[0].name) && _(t, "title", e),
            i & 1 && G(l, "aspect-ratio", r[0].aspectRatio ?? "16 / 9")
        },
        d(r) {
            r && g(l)
        }
    }
}
function te(n) {
    let l, t, s, e, r, i, o;
    return s = new P({
        props: {
            value: n[0].left
        }
    }),
    i = new P({
        props: {
            value: n[0].right
        }
    }),
    {
        c() {
            l = E("div"),
            t = E("div"),
            B(s.$$.fragment),
            e = x(),
            r = E("div"),
            B(i.$$.fragment),
            this.h()
        },
        l(a) {
            l = I(a, "DIV", {
                class: !0
            });
            var v = T(l);
            t = I(v, "DIV", {
                class: !0
            });
            var b = T(t);
            F(s.$$.fragment, b),
            b.forEach(g),
            e = M(v),
            r = I(v, "DIV", {
                class: !0
            });
            var u = T(r);
            F(i.$$.fragment, u),
            u.forEach(g),
            v.forEach(g),
            this.h()
        },
        h() {
            _(t, "class", "text-left"),
            _(r, "class", "text-right"),
            _(l, "class", "mt-2 flex w-full justify-between text-xs uppercase sm:hidden")
        },
        m(a, v) {
            D(a, l, v),
            $(l, t),
            L(s, t, null),
            $(l, e),
            $(l, r),
            L(i, r, null),
            o = !0
        },
        p(a, v) {
            const b = {};
            v & 1 && (b.value = a[0].left),
            s.$set(b);
            const u = {};
            v & 1 && (u.value = a[0].right),
            i.$set(u)
        },
        i(a) {
            o || (k(s.$$.fragment, a),
            k(i.$$.fragment, a),
            o = !0)
        },
        o(a) {
            V(s.$$.fragment, a),
            V(i.$$.fragment, a),
            o = !1
        },
        d(a) {
            a && g(l),
            N(s),
            N(i)
        }
    }
}
function ke(n) {
    let l, t, s, e, r = n[0] && Z(n);
    return {
        c() {
            r && r.c(),
            l = R()
        },
        l(i) {
            r && r.l(i),
            l = R()
        },
        m(i, o) {
            r && r.m(i, o),
            D(i, l, o),
            t = !0,
            s || (e = S(window, "keydown", n[2]),
            s = !0)
        },
        p(i, [o]) {
            i[0] ? r ? (r.p(i, o),
            o & 1 && k(r, 1)) : (r = Z(i),
            r.c(),
            k(r, 1),
            r.m(l.parentNode, l)) : r && (j(),
            V(r, 1, 1, ()=>{
                r = null
            }
            ),
            O())
        },
        i(i) {
            t || (k(r),
            t = !0)
        },
        o(i) {
            V(r),
            t = !1
        },
        d(i) {
            i && g(l),
            r && r.d(i),
            s = !1,
            e()
        }
    }
}
function we(n, l, t) {
    let {video: s} = l;
    const e = ()=>t(0, s = null)
      , r = i=>{
        i.key === "Escape" && e()
    }
    ;
    return n.$$set = i=>{
        "video"in i && t(0, s = i.video)
    }
    ,
    [s, e, r]
}
class $e extends K {
    constructor(l) {
        super(),
        Y(this, l, we, ke, q, {
            video: 0
        })
    }
}
function le(n, l, t) {
    const s = n.slice();
    return s[8] = l[t],
    s[10] = t,
    s
}
function re(n, l, t) {
    const s = n.slice();
    return s[11] = l[t],
    s
}
function ie(n) {
    let l, t, s;
    return t = new P({
        props: {
            value: n[8].left
        }
    }),
    {
        c() {
            l = E("div"),
            B(t.$$.fragment),
            this.h()
        },
        l(e) {
            l = I(e, "DIV", {
                class: !0
            });
            var r = T(l);
            F(t.$$.fragment, r),
            r.forEach(g),
            this.h()
        },
        h() {
            _(l, "class", "absolute right-full top-1/2 hidden -translate-y-1/2 translate-x-8 whitespace-nowrap pr-2 text-right uppercase opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block")
        },
        m(e, r) {
            D(e, l, r),
            L(t, l, null),
            s = !0
        },
        p(e, r) {
            const i = {};
            r & 1 && (i.value = e[8].left),
            t.$set(i)
        },
        i(e) {
            s || (k(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            V(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            e && g(l),
            N(t)
        }
    }
}
function ne(n) {
    let l, t, s, e, r;
    return {
        c() {
            l = E("div"),
            t = E("img"),
            e = x(),
            r = E("div"),
            this.h()
        },
        l(i) {
            l = I(i, "DIV", {
                class: !0
            });
            var o = T(l);
            t = I(o, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }),
            e = M(o),
            r = I(o, "DIV", {
                class: !0
            }),
            T(r).forEach(g),
            o.forEach(g),
            this.h()
        },
        h() {
            _(t, "class", "pointer-events-none h-full w-full object-cover grayscale filter transition-all ease-in sm:group-hover:brightness-100 sm:group-hover:grayscale-0 mobile:group-focus:brightness-100 mobile:group-focus:grayscale-0"),
            H(t.src, s = n[11]) || _(t, "src", s),
            _(t, "alt", ""),
            _(r, "class", "absolute inset-x-0 bottom-0 h-0.5 w-full bg-[#FFC226] opacity-0 transition-opacity sm:group-hover/img:opacity-100 mobile:group-focus:opacity-100"),
            _(l, "class", "group/img relative z-10 w-full")
        },
        m(i, o) {
            D(i, l, o),
            $(l, t),
            $(l, e),
            $(l, r)
        },
        p(i, o) {
            o & 1 && !H(t.src, s = i[11]) && _(t, "src", s)
        },
        d(i) {
            i && g(l)
        }
    }
}
function se(n) {
    let l, t, s;
    return t = new P({
        props: {
            value: n[8].right
        }
    }),
    {
        c() {
            l = E("div"),
            B(t.$$.fragment),
            this.h()
        },
        l(e) {
            l = I(e, "DIV", {
                class: !0
            });
            var r = T(l);
            F(t.$$.fragment, r),
            r.forEach(g),
            this.h()
        },
        h() {
            _(l, "class", "absolute left-full top-1/2 hidden -translate-x-8 -translate-y-1/2 whitespace-nowrap pl-2 text-left uppercase opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block")
        },
        m(e, r) {
            D(e, l, r),
            L(t, l, null),
            s = !0
        },
        p(e, r) {
            const i = {};
            r & 1 && (i.value = e[8].right),
            t.$set(i)
        },
        i(e) {
            s || (k(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            V(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            e && g(l),
            N(t)
        }
    }
}
function ae(n) {
    let l, t, s, e, r, i, o = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>', a, v = `${(n[10] > n[0].length / 2 ? n[0].length - n[10] : n[10]) * 150}ms`, b, u, C, m = n[8].left && ie(n), y = U(n[8].frames), d = [];
    for (let h = 0; h < y.length; h += 1)
        d[h] = ne(re(n, y, h));
    let f = n[8].right && se(n);
    function c() {
        return n[5](n[8])
    }
    return {
        c() {
            l = E("div"),
            t = E("div"),
            m && m.c(),
            s = x();
            for (let h = 0; h < d.length; h += 1)
                d[h].c();
            e = x(),
            f && f.c(),
            r = x(),
            i = E("div"),
            i.innerHTML = o,
            a = x(),
            this.h()
        },
        l(h) {
            l = I(h, "DIV", {
                class: !0
            });
            var w = T(l);
            t = I(w, "DIV", {
                role: !0,
                tabindex: !0,
                class: !0
            });
            var p = T(t);
            m && m.l(p),
            s = M(p);
            for (let z = 0; z < d.length; z += 1)
                d[z].l(p);
            e = M(p),
            f && f.l(p),
            r = M(p),
            i = I(p, "DIV", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            J(i) !== "svelte-8qxzb3" && (i.innerHTML = o),
            p.forEach(g),
            a = M(w),
            w.forEach(g),
            this.h()
        },
        h() {
            _(i, "class", "absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/20 px-4 py-2 opacity-0 backdrop-blur-sm transition-opacity group-focus:opacity-100 sm:hidden"),
            _(t, "role", "button"),
            _(t, "tabindex", "0"),
            _(t, "class", "group relative flex h-32 w-full cursor-pointer select-none transition-transform duration-1000 ease-out hover:z-50 sm:h-40 sm:hover:scale-x-[1.05] mobile:focus:scale-x-110"),
            _(l, "class", "fade-in svelte-8zx9c8"),
            G(l, "animation-delay", v)
        },
        m(h, w) {
            D(h, l, w),
            $(l, t),
            m && m.m(t, null),
            $(t, s);
            for (let p = 0; p < d.length; p += 1)
                d[p] && d[p].m(t, null);
            $(t, e),
            f && f.m(t, null),
            $(t, r),
            $(t, i),
            $(l, a),
            b = !0,
            u || (C = S(t, "click", c),
            u = !0)
        },
        p(h, w) {
            if (n = h,
            n[8].left ? m ? (m.p(n, w),
            w & 1 && k(m, 1)) : (m = ie(n),
            m.c(),
            k(m, 1),
            m.m(t, s)) : m && (j(),
            V(m, 1, 1, ()=>{
                m = null
            }
            ),
            O()),
            w & 1) {
                y = U(n[8].frames);
                let p;
                for (p = 0; p < y.length; p += 1) {
                    const z = re(n, y, p);
                    d[p] ? d[p].p(z, w) : (d[p] = ne(z),
                    d[p].c(),
                    d[p].m(t, e))
                }
                for (; p < d.length; p += 1)
                    d[p].d(1);
                d.length = y.length
            }
            n[8].right ? f ? (f.p(n, w),
            w & 1 && k(f, 1)) : (f = se(n),
            f.c(),
            k(f, 1),
            f.m(t, r)) : f && (j(),
            V(f, 1, 1, ()=>{
                f = null
            }
            ),
            O()),
            w & 1 && v !== (v = `${(n[10] > n[0].length / 2 ? n[0].length - n[10] : n[10]) * 150}ms`) && G(l, "animation-delay", v)
        },
        i(h) {
            b || (k(m),
            k(f),
            b = !0)
        },
        o(h) {
            V(m),
            V(f),
            b = !1
        },
        d(h) {
            h && g(l),
            m && m.d(),
            fe(d, h),
            f && f.d(),
            u = !1,
            C()
        }
    }
}
function oe(n) {
    let l, t, s = U(n[0]), e = [];
    for (let i = 0; i < s.length; i += 1)
        e[i] = ae(le(n, s, i));
    const r = i=>V(e[i], 1, 1, ()=>{
        e[i] = null
    }
    );
    return {
        c() {
            for (let i = 0; i < e.length; i += 1)
                e[i].c();
            l = R()
        },
        l(i) {
            for (let o = 0; o < e.length; o += 1)
                e[o].l(i);
            l = R()
        },
        m(i, o) {
            for (let a = 0; a < e.length; a += 1)
                e[a] && e[a].m(i, o);
            D(i, l, o),
            t = !0
        },
        p(i, o) {
            if (o & 3) {
                s = U(i[0]);
                let a;
                for (a = 0; a < s.length; a += 1) {
                    const v = le(i, s, a);
                    e[a] ? (e[a].p(v, o),
                    k(e[a], 1)) : (e[a] = ae(v),
                    e[a].c(),
                    k(e[a], 1),
                    e[a].m(l.parentNode, l))
                }
                for (j(),
                a = s.length; a < e.length; a += 1)
                    r(a);
                O()
            }
        },
        i(i) {
            if (!t) {
                for (let o = 0; o < s.length; o += 1)
                    k(e[o]);
                t = !0
            }
        },
        o(i) {
            e = e.filter(Boolean);
            for (let o = 0; o < e.length; o += 1)
                V(e[o]);
            t = !1
        },
        d(i) {
            i && g(l),
            fe(e, i)
        }
    }
}
function ye(n) {
    let l = n[0], t, s, e = oe(n);
    return {
        c() {
            e.c(),
            t = R()
        },
        l(r) {
            e.l(r),
            t = R()
        },
        m(r, i) {
            e.m(r, i),
            D(r, t, i),
            s = !0
        },
        p(r, [i]) {
            i & 1 && q(l, l = r[0]) ? (j(),
            V(e, 1, 1, de),
            O(),
            e = oe(r),
            e.c(),
            k(e, 1),
            e.m(t.parentNode, t)) : e.p(r, i)
        },
        i(r) {
            s || (k(e),
            s = !0)
        },
        o(r) {
            V(e),
            s = !1
        },
        d(r) {
            r && g(t),
            e.d(r)
        }
    }
}
function Ve(n, l, t) {
    let s, e;
    he(n, ve, u=>t(4, e = u));
    let {videos: r} = l, {featuredVideo: i} = l, o = null, a;
    pe(()=>{
        a = window.matchMedia("(min-width: 640px)");
        const u = C=>{
            C.matches ? o = null : t(2, i = null)
        }
        ;
        return a.addEventListener("change", u),
        ()=>a.removeEventListener("change", u)
    }
    );
    function v(u) {
        a != null && a.matches || o === u ? t(2, i = u) : o = u
    }
    const b = u=>v(u);
    return n.$$set = u=>{
        "videos"in u && t(3, r = u.videos),
        "featuredVideo"in u && t(2, i = u.featuredVideo)
    }
    ,
    n.$$.update = ()=>{
        n.$$.dirty & 24 && t(0, s = e === null ? r : r.filter(u=>{
            var C;
            return (C = u.tags) == null ? void 0 : C.some(m=>e === m._id)
        }
        ))
    }
    ,
    [s, v, i, r, e, b]
}
class Ee extends K {
    constructor(l) {
        super(),
        Y(this, l, Ve, ye, q, {
            videos: 3,
            featuredVideo: 2
        })
    }
}
function Ie(n) {
    let l, t, s, e, r, i, o, a, v = '<svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto"><path d="m18 15-6-6-6 6"></path></svg> <p class="opacity-0 transition-opacity duration-700 group-hover:opacity-100">BACK TO TOP</p>', b, u, C, m, y;
    l = new be({
        props: {
            icons: n[0].page.icons
        }
    });
    function d(c) {
        n[2](c)
    }
    let f = {
        videos: n[0].page.videos
    };
    return n[1] !== void 0 && (f.featuredVideo = n[1]),
    r = new Ee({
        props: f
    }),
    me.push(()=>ge(r, "featuredVideo", d)),
    u = new $e({
        props: {
            video: n[1]
        }
    }),
    {
        c() {
            B(l.$$.fragment),
            t = x(),
            s = E("div"),
            e = E("section"),
            B(r.$$.fragment),
            o = x(),
            a = E("button"),
            a.innerHTML = v,
            b = x(),
            B(u.$$.fragment),
            this.h()
        },
        l(c) {
            F(l.$$.fragment, c),
            t = M(c),
            s = I(c, "DIV", {
                class: !0
            });
            var h = T(s);
            e = I(h, "SECTION", {
                class: !0
            });
            var w = T(e);
            F(r.$$.fragment, w),
            o = M(w),
            a = I(w, "BUTTON", {
                class: !0,
                ["data-svelte-h"]: !0
            }),
            J(a) !== "svelte-12lh6dd" && (a.innerHTML = v),
            w.forEach(g),
            b = M(h),
            F(u.$$.fragment, h),
            h.forEach(g),
            this.h()
        },
        h() {
            _(a, "class", "group mx-auto mt-8 block p-1 text-center text-gray-300 transition-transform duration-700 hover:-translate-y-1 hover:text-yellow-300"),
            _(e, "class", "relative mx-auto h-full w-full pb-32 md:max-w-[min(900px,_calc(100vw_-_300px))]"),
            _(s, "class", "flex h-full flex-1 flex-col items-center gap-10 px-10 xl:gap-20 xl:px-20")
        },
        m(c, h) {
            L(l, c, h),
            D(c, t, h),
            D(c, s, h),
            $(s, e),
            L(r, e, null),
            $(e, o),
            $(e, a),
            $(s, b),
            L(u, s, null),
            C = !0,
            m || (y = S(a, "click", n[3]),
            m = !0)
        },
        p(c, [h]) {
            const w = {};
            h & 1 && (w.icons = c[0].page.icons),
            l.$set(w);
            const p = {};
            h & 1 && (p.videos = c[0].page.videos),
            !i && h & 2 && (i = !0,
            p.featuredVideo = c[1],
            _e(()=>i = !1)),
            r.$set(p);
            const z = {};
            h & 2 && (z.video = c[1]),
            u.$set(z)
        },
        i(c) {
            C || (k(l.$$.fragment, c),
            k(r.$$.fragment, c),
            k(u.$$.fragment, c),
            C = !0)
        },
        o(c) {
            V(l.$$.fragment, c),
            V(r.$$.fragment, c),
            V(u.$$.fragment, c),
            C = !1
        },
        d(c) {
            c && (g(t),
            g(s)),
            N(l, c),
            N(r),
            N(u),
            m = !1,
            y()
        }
    }
}
function ue(n, l) {
    const t = performance.now()
      , s = .5 * (1 - Math.cos(Math.PI * Math.min((t - l) / 500, 1)))
      , e = n * (1 - s);
    window.scrollTo(0, e),
    e > 0 && requestAnimationFrame(()=>ue(n, l))
}
function Ce(n, l, t) {
    let {data: s} = l
      , e = null;
    function r(o) {
        e = o,
        t(1, e)
    }
    const i = ()=>{
        const o = window.scrollY
          , a = performance.now();
        ue(o, a)
    }
    ;
    return n.$$set = o=>{
        "data"in o && t(0, s = o.data)
    }
    ,
    [s, e, r, i]
}
class Me extends K {
    constructor(l) {
        super(),
        Y(this, l, Ce, Ie, q, {
            data: 0
        })
    }
}
export {Me as component};
