(() => {
    var e = {
            4345: function(e, t, i) {
                "use strict";
                var r = i(3949),
                    a = i(5134);
                let n = {
                        ARROW_LEFT: 37,
                        ARROW_UP: 38,
                        ARROW_RIGHT: 39,
                        ARROW_DOWN: 40,
                        SPACE: 32,
                        ENTER: 13,
                        HOME: 36,
                        END: 35
                    },
                    o = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
                r.define("slider", e.exports = function(e, t) {
                    var i, s, d, l = {},
                        f = e.tram,
                        u = e(document),
                        c = r.env(),
                        h = ".w-slider",
                        v = "w-slider-force-show",
                        p = a.triggers,
                        m = !1;

                    function b() {
                        (i = u.find(h)).length && (i.each(w), d || (g(), r.resize.on(x), r.redraw.on(l.redraw)))
                    }

                    function g() {
                        r.resize.off(x), r.redraw.off(l.redraw)
                    }

                    function x() {
                        i.filter(":visible").each(I)
                    }

                    function w(t, i) {
                        var r = e(i),
                            a = e.data(i, h);
                        a || (a = e.data(i, h, {
                            index: 0,
                            depth: 1,
                            hasFocus: {
                                keyboard: !1,
                                mouse: !1
                            },
                            el: r,
                            config: {}
                        })), a.mask = r.children(".w-slider-mask"), a.left = r.children(".w-slider-arrow-left"), a.right = r.children(".w-slider-arrow-right"), a.nav = r.children(".w-slider-nav"), a.slides = a.mask.children(".w-slide"), a.slides.each(p.reset), m && (a.maskWidth = 0), void 0 === r.attr("role") && r.attr("role", "region"), void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
                        var n = a.mask.attr("id");
                        if (n || (n = "w-slider-mask-" + t, a.mask.attr("id", n)), s || a.ariaLiveLabel || (a.ariaLiveLabel = e('<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />').appendTo(a.mask)), a.left.attr("role", "button"), a.left.attr("tabindex", "0"), a.left.attr("aria-controls", n), void 0 === a.left.attr("aria-label") && a.left.attr("aria-label", "previous slide"), a.right.attr("role", "button"), a.right.attr("tabindex", "0"), a.right.attr("aria-controls", n), void 0 === a.right.attr("aria-label") && a.right.attr("aria-label", "next slide"), !f.support.transform) {
                            a.left.hide(), a.right.hide(), a.nav.hide(), d = !0;
                            return
                        }
                        a.el.off(h), a.left.off(h), a.right.off(h), a.nav.off(h), y(a), s ? (a.el.on("setting" + h, C(a)), A(a), a.hasTimer = !1) : (a.el.on("swipe" + h, C(a)), a.left.on("click" + h, R(a)), a.right.on("click" + h, E(a)), a.left.on("keydown" + h, T(a, R)), a.right.on("keydown" + h, T(a, E)), a.nav.on("keydown" + h, "> div", C(a)), a.config.autoplay && !a.hasTimer && (a.hasTimer = !0, a.timerCount = 1, W(a)), a.el.on("mouseenter" + h, O(a, !0, "mouse")), a.el.on("focusin" + h, O(a, !0, "keyboard")), a.el.on("mouseleave" + h, O(a, !1, "mouse")), a.el.on("focusout" + h, O(a, !1, "keyboard"))), a.nav.on("click" + h, "> div", C(a)), c || a.mask.contents().filter(function() {
                            return 3 === this.nodeType
                        }).remove();
                        var o = r.filter(":hidden");
                        o.addClass(v);
                        var l = r.parents(":hidden");
                        l.addClass(v), m || I(t, i), o.removeClass(v), l.removeClass(v)
                    }

                    function y(e) {
                        var t = {};
                        t.crossOver = 0, t.animation = e.el.attr("data-animation") || "slide", "outin" === t.animation && (t.animation = "cross", t.crossOver = .5), t.easing = e.el.attr("data-easing") || "ease";
                        var i = e.el.attr("data-duration");
                        if (t.duration = null != i ? parseInt(i, 10) : 500, k(e.el.attr("data-infinite")) && (t.infinite = !0), k(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0), k(e.el.attr("data-hide-arrows")) ? t.hideArrows = !0 : e.config.hideArrows && (e.left.show(), e.right.show()), k(e.el.attr("data-autoplay"))) {
                            t.autoplay = !0, t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3, t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10);
                            var r = "mousedown" + h + " touchstart" + h;
                            s || e.el.off(r).one(r, function() {
                                A(e)
                            })
                        }
                        var a = e.right.width();
                        t.edge = a ? a + 40 : 100, e.config = t
                    }

                    function k(e) {
                        return "1" === e || "true" === e
                    }

                    function O(t, i, r) {
                        return function(a) {
                            if (i) t.hasFocus[r] = i;
                            else if (e.contains(t.el.get(0), a.relatedTarget) || (t.hasFocus[r] = i, t.hasFocus.mouse && "keyboard" === r || t.hasFocus.keyboard && "mouse" === r)) return;
                            i ? (t.ariaLiveLabel.attr("aria-live", "polite"), t.hasTimer && A(t)) : (t.ariaLiveLabel.attr("aria-live", "off"), t.hasTimer && W(t))
                        }
                    }

                    function T(e, t) {
                        return function(i) {
                            switch (i.keyCode) {
                                case n.SPACE:
                                case n.ENTER:
                                    return t(e)(), i.preventDefault(), i.stopPropagation()
                            }
                        }
                    }

                    function R(e) {
                        return function() {
                            M(e, {
                                index: e.index - 1,
                                vector: -1
                            })
                        }
                    }

                    function E(e) {
                        return function() {
                            M(e, {
                                index: e.index + 1,
                                vector: 1
                            })
                        }
                    }

                    function W(e) {
                        A(e);
                        var t = e.config,
                            i = t.timerMax;
                        i && e.timerCount++ > i || (e.timerId = window.setTimeout(function() {
                            null == e.timerId || s || (E(e)(), W(e))
                        }, t.delay))
                    }

                    function A(e) {
                        window.clearTimeout(e.timerId), e.timerId = null
                    }

                    function C(i) {
                        return function(a, o) {
                            o = o || {};
                            var d, l, f = i.config;
                            if (s && "setting" === a.type) {
                                if ("prev" === o.select) return R(i)();
                                if ("next" === o.select) return E(i)();
                                if (y(i), L(i), null == o.select) return;
                                return d = o.select, l = null, d === i.slides.length && (b(), L(i)), t.each(i.anchors, function(t, i) {
                                    e(t.els).each(function(t, r) {
                                        e(r).index() === d && (l = i)
                                    })
                                }), void(null != l && M(i, {
                                    index: l,
                                    immediate: !0
                                }))
                            }
                            if ("swipe" === a.type) return f.disableSwipe || r.env("editor") ? void 0 : "left" === o.direction ? E(i)() : "right" === o.direction ? R(i)() : void 0;
                            if (i.nav.has(a.target).length) {
                                var u = e(a.target).index();
                                if ("click" === a.type && M(i, {
                                        index: u
                                    }), "keydown" === a.type) switch (a.keyCode) {
                                    case n.ENTER:
                                    case n.SPACE:
                                        M(i, {
                                            index: u
                                        }), a.preventDefault();
                                        break;
                                    case n.ARROW_LEFT:
                                    case n.ARROW_UP:
                                        S(i.nav, Math.max(u - 1, 0)), a.preventDefault();
                                        break;
                                    case n.ARROW_RIGHT:
                                    case n.ARROW_DOWN:
                                        S(i.nav, Math.min(u + 1, i.pages)), a.preventDefault();
                                        break;
                                    case n.HOME:
                                        S(i.nav, 0), a.preventDefault();
                                        break;
                                    case n.END:
                                        S(i.nav, i.pages), a.preventDefault();
                                        break;
                                    default:
                                        return
                                }
                            }
                        }
                    }

                    function S(e, t) {
                        var i = e.children().eq(t).focus();
                        e.children().not(i)
                    }

                    function M(t, i) {
                        i = i || {};
                        var r = t.config,
                            a = t.anchors;
                        t.previous = t.index;
                        var n = i.index,
                            d = {};
                        n < 0 ? (n = a.length - 1, r.infinite && (d.x = -t.endX, d.from = 0, d.to = a[0].width)) : n >= a.length && (n = 0, r.infinite && (d.x = a[a.length - 1].width, d.from = -a[a.length - 1].x, d.to = d.from - d.x)), t.index = n;
                        var l = t.nav.children().eq(n).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                        t.nav.children().not(l).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), r.hideArrows && (t.index === a.length - 1 ? t.right.hide() : t.right.show(), 0 === t.index ? t.left.hide() : t.left.show());
                        var u = t.offsetX || 0,
                            c = t.offsetX = -a[t.index].x,
                            h = {
                                x: c,
                                opacity: 1,
                                visibility: ""
                            },
                            v = e(a[t.index].els),
                            b = e(a[t.previous] && a[t.previous].els),
                            g = t.slides.not(v),
                            x = r.animation,
                            w = r.easing,
                            y = Math.round(r.duration),
                            k = i.vector || (t.index > t.previous ? 1 : -1),
                            O = "opacity " + y + "ms " + w,
                            T = "transform " + y + "ms " + w;
                        if (v.find(o).removeAttr("tabindex"), v.removeAttr("aria-hidden"), v.find("*").removeAttr("aria-hidden"), g.find(o).attr("tabindex", "-1"), g.attr("aria-hidden", "true"), g.find("*").attr("aria-hidden", "true"), s || (v.each(p.intro), g.each(p.outro)), i.immediate && !m) {
                            f(v).set(h), W();
                            return
                        }
                        if (t.index !== t.previous) {
                            if (s || t.ariaLiveLabel.text(`Slide ${n+1} of ${a.length}.`), "cross" === x) {
                                var R = Math.round(y - y * r.crossOver),
                                    E = Math.round(y - R);
                                O = "opacity " + R + "ms " + w, f(b).set({
                                    visibility: ""
                                }).add(O).start({
                                    opacity: 0
                                }), f(v).set({
                                    visibility: "",
                                    x: c,
                                    opacity: 0,
                                    zIndex: t.depth++
                                }).add(O).wait(E).then({
                                    opacity: 1
                                }).then(W);
                                return
                            }
                            if ("fade" === x) {
                                f(b).set({
                                    visibility: ""
                                }).stop(), f(v).set({
                                    visibility: "",
                                    x: c,
                                    opacity: 0,
                                    zIndex: t.depth++
                                }).add(O).start({
                                    opacity: 1
                                }).then(W);
                                return
                            }
                            if ("over" === x) {
                                h = {
                                    x: t.endX
                                }, f(b).set({
                                    visibility: ""
                                }).stop(), f(v).set({
                                    visibility: "",
                                    zIndex: t.depth++,
                                    x: c + a[t.index].width * k
                                }).add(T).start({
                                    x: c
                                }).then(W);
                                return
                            }
                            r.infinite && d.x ? (f(t.slides.not(b)).set({
                                visibility: "",
                                x: d.x
                            }).add(T).start({
                                x: c
                            }), f(b).set({
                                visibility: "",
                                x: d.from
                            }).add(T).start({
                                x: d.to
                            }), t.shifted = b) : (r.infinite && t.shifted && (f(t.shifted).set({
                                visibility: "",
                                x: u
                            }), t.shifted = null), f(t.slides).set({
                                visibility: ""
                            }).add(T).start({
                                x: c
                            }))
                        }

                        function W() {
                            v = e(a[t.index].els), g = t.slides.not(v), "slide" !== x && (h.visibility = "hidden"), f(g).set(h)
                        }
                    }

                    function I(t, i) {
                        var r, a, n, o, d = e.data(i, h);
                        if (d) {
                            if (a = (r = d).mask.width(), r.maskWidth !== a && (r.maskWidth = a, 1)) return L(d);
                            s && (o = 0, (n = d).slides.each(function(t, i) {
                                o += e(i).outerWidth(!0)
                            }), n.slidesWidth !== o && (n.slidesWidth = o, 1)) && L(d)
                        }
                    }

                    function L(t) {
                        var i = 1,
                            r = 0,
                            a = 0,
                            n = 0,
                            o = t.maskWidth,
                            d = o - t.config.edge;
                        d < 0 && (d = 0), t.anchors = [{
                            els: [],
                            x: 0,
                            width: 0
                        }], t.slides.each(function(s, l) {
                            a - r > d && (i++, r += o, t.anchors[i - 1] = {
                                els: [],
                                x: a,
                                width: 0
                            }), n = e(l).outerWidth(!0), a += n, t.anchors[i - 1].width += n, t.anchors[i - 1].els.push(l);
                            var f = s + 1 + " of " + t.slides.length;
                            e(l).attr("aria-label", f), e(l).attr("role", "group")
                        }), t.endX = a, s && (t.pages = null), t.nav.length && t.pages !== i && (t.pages = i, function(t) {
                            var i, r = [],
                                a = t.el.attr("data-nav-spacing");
                            a && (a = parseFloat(a) + "px");
                            for (var n = 0, o = t.pages; n < o; n++)(i = e('<div class="w-slider-dot" data-wf-ignore />')).attr("aria-label", "Show slide " + (n + 1) + " of " + o).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), t.nav.hasClass("w-num") && i.text(n + 1), null != a && i.css({
                                "margin-left": a,
                                "margin-right": a
                            }), r.push(i);
                            t.nav.empty().append(r)
                        }(t));
                        var l = t.index;
                        l >= i && (l = i - 1), M(t, {
                            immediate: !0,
                            index: l
                        })
                    }
                    return l.ready = function() {
                        s = r.env("design"), b()
                    }, l.design = function() {
                        s = !0, setTimeout(b, 1e3)
                    }, l.preview = function() {
                        s = !1, b()
                    }, l.redraw = function() {
                        m = !0, b(), m = !1
                    }, l.destroy = g, l
                })
            },
            870: function(e, t, i) {
                i(9461), i(7624), i(286), i(8334), i(2338), i(3695), i(322), i(941), i(5134), i(1655), i(9858), i(4345), i(7527), i(3256)
            }
        },
        t = {};

    function i(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var n = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](n, n.exports, i), n.loaded = !0, n.exports
    }
    i.m = e, i.d = (e, t) => {
        for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), i.g = (() => {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    })(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e = [];
        i.O = (t, r, a, n) => {
            if (r) {
                n = n || 0;
                for (var o = e.length; o > 0 && e[o - 1][2] > n; o--) e[o] = e[o - 1];
                e[o] = [r, a, n];
                return
            }
            for (var s = 1 / 0, o = 0; o < e.length; o++) {
                for (var [r, a, n] = e[o], d = !0, l = 0; l < r.length; l++)(!1 & n || s >= n) && Object.keys(i.O).every(e => i.O[e](r[l])) ? r.splice(l--, 1) : (d = !1, n < s && (s = n));
                if (d) {
                    e.splice(o--, 1);
                    var f = a();
                    void 0 !== f && (t = f)
                }
            }
            return t
        }
    })(), i.rv = () => "1.3.9", (() => {
        var e = {
            181: 0
        };
        i.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var a, n, [o, s, d] = r,
                    l = 0;
                if (o.some(t => 0 !== e[t])) {
                    for (a in s) i.o(s, a) && (i.m[a] = s[a]);
                    if (d) var f = d(i)
                }
                for (t && t(r); l < o.length; l++) n = o[l], i.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                return i.O(f)
            },
            r = self.webpackChunk = self.webpackChunk || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), i.ruid = "bundler=rspack@1.3.9";
    var r = i.O(void 0, ["87", "820", "729"], function() {
        return i(870)
    });
    r = i.O(r)
})();