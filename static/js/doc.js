! function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }
  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/js/", t(t.s = 5)
}([, ,
  function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, , ,
  function (e, t, n) {
    e.exports = n(6)
  },
  function (e, t, n) {
    "use strict";

    function r(e) {
      if (e.hasClass("has-child")) {
        e.addClass("open");
        var t = e.find("ul")[0];
        return r($(t).attr("style", "display: block;").find("li:first-child"))
      }
      return e.addClass("active"), !1
    }

    function o() {
      $(".st_tree").show(), $(".st_tree").SimpleTree({
        click: function (e) {
          "#" != $(e).attr("href") && ($(e).parent().parent().find(".active").removeClass("active"), $(e).parent().addClass("active"), window.location.href = $(e).attr("href"))
        }
      });
      var e = $("#list_page .st_tree > ul > li:first-child");
      !decodeURIComponent(location.hash) && e.length && r(e)
    }

    function i() {
      var e = decodeURIComponent(location.hash),
        t = $(".nav-tags").data("type");
      e || $(".tag.all").addClass("sel"), "list" === t && e && ($(".nav-tags .tag").removeClass("sel"), $('.nav-tags .tag[data-tag="' + e.slice(1) + '"]').addClass("sel"), $(".article-list .article").each(function () {
        var t = $(this);
        t.data("tag").includes(e.slice(1)) ? t.show() : t.hide()
      }))
    }
    n(7);
    var a = n(8);
    $(document).ready(function () {

      $(".st_tree").length && o(), $(".nav-tags").length && i(), $(".article-toc").length && (0, a.run)(), $(".lazy").lazyload({
        threshold: 200,
        effect: "fadeIn"
      }), $(".nav-tags .tag, .anchor-tag").click(function (e) {

        var t = $(this),
          n = t.hasClass("anchor-tag"),
          r = t.hasClass("all"),
          o = n ? t.text().trim() : t.data("tag");
        $(".nav-tags .tag").removeClass("sel"), $('.nav-tags .tag[data-tag="' + o + '"]').addClass("sel"), r && $(".tag.all").addClass("sel");
        var i = $(".nav-tags").data("type");

   //     alert(i+" " + window.location.href +"，r:"+ r +",o:"+o);
try{
        return (i && "single" === i ) ? ( window.location.href = r ? "../" : "../#" + encodeURIComponent(o) ) : ($(".article-list .article").each(function () {
          var e = $(this);
          r ? e.show() : e.data("tag").includes(o) ? e.show() : e.hide()
        }), window.location.href = r ? "./" : "./#" + encodeURIComponent(o)), e.preventDefault(), !1
}finally{
 // alert( window.location.href );
}

      })
    })
  },
  function (e, t, n) {
    "use strict";
    $(function () {
      $.fn.extend({
        SimpleTree: function (e) {
          var t = $.extend({
            click: function (e) {}
          }, e);
          t.tree = this, t._init = function () {
            this.tree.find(".has-child ul").hide(), this.tree.find("li").each(function () {
              var e = $(this).find("a").attr("href"),
                t = window.location.pathname,
                n = window.location.hash;
              if (decodeURIComponent(e.toLocaleLowerCase()) === decodeURIComponent((t + n).toLocaleLowerCase())) {
                for (var r, o = $(this); o.is("li");) r = o.parent(), r.is("ul") && r.show(), o = r.parent(), o.addClass("open");
                $(this).addClass("active")
              }
            }), this.tree.show()
          }, this.find("li").click(function (e) {
            var n = $(this);
            t.click(n.find("a")[0]), n.toggleClass("open");
            var r = n.children("ul");
            return r.is(":visible") ? r.hide() : r.show(), e.preventDefault(), !1
          }), this.find(".has-child").addClass("folder"), t._init()
        }
      })
    })
  },
  function (e, t, n) {
    "use strict";
    (function (e, n) {
      function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
        return Array.from(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function () {
          function e(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
              o = !0, i = e
            } finally {
              try {
                !r && l.return && l.return()
              } finally {
                if (o) throw i
              }
            }
            return n
          }
          return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }
        }(),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
      ! function () {
        function t() {}

        function a(e) {
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        }

        function l(e, t) {
          if (!e) throw new Error(t)
        }

        function u(e, t) {
          if (t) {
            var n = void 0;
            return function () {
              for (var r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
              clearTimeout(n), n = setTimeout(function () {
                e.apply(void 0, o)
              }, t)
            }
          }
          var r = void 0;
          return function () {
            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            cancelAnimationFrame(r), r = requestAnimationFrame(function () {
              e.apply(void 0, n)
            })
          }
        }

        function c(e) {
          return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
          })
        }

        function s(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && (e.style = ""), "string" == typeof t) e.style = t;
          else
            for (var n in t) "number" == typeof t[n] ? e.style.setProperty(c(n), p(t[n]), "important") : e.style.setProperty(c(n), t[n], "important")
        }

        function f() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return "translate3d(" + Math.round(e) + "px, " + Math.round(t) + "px, " + Math.round(n) + "px)"
        }

        function d(e) {
          var t = function e(t) {
            if (void 0 === t) return e.value;
            e.update(t), e.flush(t)
          };
          return t.value = e, t.changed = !1, t.listeners = [], t.dependents = [], Object.assign(t, $)
        }

        function h(e) {
          var n = e.article,
            r = e.$headings,
            o = e.userOffset,
            i = void 0 === o ? [0, 0] : o,
            a = r.map(O);
          C(E, "smarttoc__css");
          var l = R(n),
            u = B(n);
          t("theme", u);
          var c = d(!0),
            s = d(),
            f = d.combine(d.fromEvent(window, "resize"), d.fromEvent(document, "readystatechange"), d.fromEvent(document, "load"), d.fromEvent(document, "DOMContentLoaded"), function () {
              return null
            }).filter(function () {
              return c()
            }).throttle(),
            h = N(l, c),
            m = M(n, f, c),
            v = L(a, l, h, m, s),
            p = d(i);
          l.appendChild(I({
            $headings: a,
            scrollable: l,
            $isShow: c,
            $relayout: m
          }));
          var g = function (e) {
              null == s() && setTimeout(function () {
                s(P(e)), t("topBarHeight", s()), s() && j({
                  node: e
                }, l, null, s() + 10)
              }, 300)
            },
            y = function (e) {
              e.preventDefault(), e.stopPropagation();
              var t = e.target.getAttribute("href").substr(1),
                n = a().find(function (e) {
                  return e.anchor === t
                });
              j(n, l, g, (s() || 0) + 10)
            };
          return k.mount(F(), H({
            article: n,
            scrollable: l,
            $headings: a,
            theme: u,
            $activeHeading: v,
            $isShow: c,
            $userOffset: p,
            $relayout: m,
            $scroll: h,
            $topbarHeight: s,
            onClickHeading: y
          })), n.getBoundingClientRect().top > window.innerHeight - 50 && j(a()[0], l, g, (s() || 0) + 10), {
            isValid: function () {
              return document.body.contains(n) && n.contains(a()[0].node)
            }, isShow: function () {
              return c()
            }, toggle: function () {
              return c(!c())
            }, next: function () {
              if (c()) {
                var e = Math.min(a().length - 1, v() + 1);
                j(a()[e], l, g, (s() || 0) + 10)
              }
            }, prev: function () {
              if (c()) {
                var e = Math.max(0, v() - 1);
                j(a()[e], l, g, (s() || 0) + 10)
              }
            }, dispose: function () {
              return t("dispose"), c(!1), k.render(F(), k("")), {
                userOffset: p()
              }
            }
          }
        }

        function m() {
          var e = q(document),
            t = void 0;
          return e && (t = d(U(e))), [e, t]
        }
        var v = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0";
            return "number" == typeof e ? e : +e.replace(/px/, "")
          },
          p = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return v(e) + "px"
          },
          g = function (e) {
            return e.replace(/\s+/g, "-")
          },
          y = function () {
            var e = new Set;
            return function (t) {
              for (var n = 1; e.has(t);) t = t.replace(/(\$\d+)?$/, "") + "$" + n, n++;
              return e.add(t), t
            }
          }(),
          w = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top";
            return e === document.body ? "top" === t ? document.documentElement.scrollTop || document.body.scrollTop : document.documentElement.scrollLeft || document.body.scrollLeft : "top" === t ? e.scrollTop : e.scrollLeft
          },
          b = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "top";
            e === document.body ? "top" === n ? (document.documentElement.scrollTop = t, window.scrollTo(window.scrollX, t)) : (document.documentElement.scrollLeft = t, window.scrollTo(t, window.scrollY)) : "top" === n ? e.scrollTop = t : e.scrollLeft = t
          },
          x = function () {
            var e = function (e, t, n, r) {
              return e /= r, -n * e * (e - 2) + t
            };
            return function (t) {
              function n(e) {
                v || (v = e), (e - v) / y < 1 ? (b(o, p(e - v, h, m, y)), requestAnimationFrame(n)) : (b(o, d), s && s())
              }
              var r = t.targetElem,
                o = t.scrollElem,
                i = t.topMargin,
                a = void 0 === i ? 0 : i,
                l = t.maxDuration,
                u = void 0 === l ? 300 : l,
                c = t.easeFn,
                s = t.callback;
              cancelAnimationFrame(void 0);
              var f = r.getBoundingClientRect(),
                d = f.top - (o === document.body ? 0 : o.getBoundingClientRect().top) + w(o) - a,
                h = w(o),
                m = d - h,
                v = void 0,
                p = c || e,
                g = Math.min(Math.abs(m) / 1e4, 1),
                y = Math.max(u * g * (2 - g), 10);
              u ? requestAnimationFrame(n) : (b(o, d), s && s())
            }
          }(),
          C = function (e, t) {
            if (!document.getElementById(t)) {
              var n = document.createElement("STYLE");
              return n.type = "text/css", n.id = t, n.textContent = e, void document.head.appendChild(n)
            }
          },
          E = "/* EVERYTHING HERE WILL BE '!IMPORTANT'  */\n\n/* reset */\n\n#smarttoc {\n  all: initial;\n}\n\n#smarttoc * {\n  all: unset;\n}\n\n/* container */\n\n#smarttoc {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  position: fixed;\n  max-width: 22em;\n  min-width: 14em;\n  max-height: calc(100vh - 100px);\n  z-index: 10000;\n  box-sizing: border-box;\n  background-color: #fff;\n  color: gray;\n  font-size: calc(12px + 0.1vw);\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-weight: normal;\n  border: 1px solid rgba(158, 158, 158, 0.22);\n  -webkit-font-smoothing: subpixel-antialiased;\n  font-smoothing: subpixel-antialiased;\n  overflow: hidden;\n  will-change: transform, max-width;\n  transition: max-width 0.3s;\n  contain: content;\n}\n\n#smarttoc:hover {\n  max-width: 33vw;\n}\n\n#smarttoc.hidden {\n  display: none;\n}\n\n#smarttoc .handle {\n  -webkit-user-select: none;\n  user-select: none;\n\n  border-bottom: 1px solid rgba(158, 158, 158, 0.22);\n  padding: 0.1em 0.7em;\n  font-variant-caps: inherit;\n  font-variant: small-caps;\n  font-size: 0.9em;\n  color: #bbb;\n  cursor: pointer;\n  text-align: center;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.3s;\n}\n\n#smarttoc:hover .handle {\n  max-width: 33vw;\n  opacity: 1;\n}\n\n#smarttoc .handle:hover,\n#smarttoc .handle:active {\n  cursor: move;\n}\n\n#smarttoc .handle:active {\n  background: #f9f9f9;\n}\n\n#smarttoc > ul {\n  flex-grow: 1;\n  padding: 0 1.3em 1.3em 1em;\n  overflow-y: auto;\n}\n\n/* all headings  */\n\n#smarttoc ul,\n#smarttoc li {\n  list-style: none;\n  display: block;\n}\n\n#smarttoc a {\n  text-decoration: none;\n  color: gray;\n  display: block;\n  line-height: 1.3;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n\n#smarttoc a:hover,\n#smarttoc a:active {\n  border-left-color: rgba(58, 89, 240, 0.5);\n  color: #3a59f0;\n}\n\n#smarttoc li.active > a {\n  border-left-color: #3a59f0;\n  color: #3a59f0;\n}\n\n/* heading level: 1 */\n\n#smarttoc ul {\n  line-height: 2;\n}\n\n#smarttoc ul a {\n  font-size: 1em;\n  padding-left: 1.3em;\n}\n\n#smarttoc ul a:hover,\n#smarttoc ul a:active,\n#smarttoc ul li.active > a {\n  border-left-width: 3px;\n  border-left-style: solid;\n  padding-left: calc(1.3em - 3px);\n}\n\n#smarttoc ul li.active > a {\n  font-weight: 700;\n}\n\n/* heading level: 2 (hidden only when there are too many headings)  */\n\n#smarttoc ul ul {\n  line-height: 1.8;\n}\n\n#smarttoc.lengthy ul ul {\n  display: none;\n}\n\n#smarttoc.lengthy ul li.active > ul {\n  display: block;\n}\n\n#smarttoc ul ul a {\n  font-size: 1em;\n  padding-left: 2.7em;\n}\n\n#smarttoc ul ul a:hover,\n#smarttoc ul ul a:active,\n#smarttoc ul ul li.active > a {\n  border-left-width: 2px;\n  border-left-style: solid;\n  padding-left: calc(2.7em - 2px);\n  font-weight: normal;\n}\n\n/* heading level: 3 (hidden unless parent is active) */\n\n#smarttoc ul ul ul {\n  line-height: 1.7;\n  display: none;\n}\n\n#smarttoc ul ul li.active > ul {\n  display: block;\n}\n\n#smarttoc ul ul ul a {\n  font-size: 1em;\n  padding-left: 4em;\n}\n\n#smarttoc ul ul ul a:hover,\n#smarttoc ul ul ul a:active,\n#smarttoc ul ul ul li.active > a {\n  border-left-width: 1px;\n  border-left-style: solid;\n  padding-left: calc(4em - 1px);\n  font-weight: normal;\n}\n",
          $ = {
            subscribe: function (e) {
              (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && void 0 !== this.value && e(this.value), this.listeners.push(e)
            }, addDependent: function (e) {
              this.dependents.push(e)
            }, update: function (e) {
              this.value = e, this.changed = !0, this.dependents.forEach(function (t) {
                return t.update(e)
              })
            }, flush: function () {
              var e = this;
              this.changed && (this.changed = !1, this.listeners.forEach(function (t) {
                return t(e.value)
              }), this.dependents.forEach(function (e) {
                return e.flush()
              }))
            }, unique: function () {
              var e = this.value,
                t = d(e);
              return this.subscribe(function (n) {
                n !== e && (t(n), e = n)
              }), t
            }, map: function (e) {
              return d.combine(this, e)
            }, filter: function (e) {
              return this.map(function (t) {
                return e(t) ? t : void 0
              })
            }, throttle: function (e) {
              var t = d(this.value),
                n = u(t, e);
              return this.subscribe(n), t
            }, log: function (e) {
              return this.subscribe(function (t) {
                return console.log("[" + e + "]: ", t)
              }), this
            }
          };
        d.combine = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          var o = t.pop(),
            i = t.map(function (e) {
              return e()
            }),
            a = d(o.apply(void 0, r(i)));
          return t.forEach(function (e, t) {
            var n = {
              update: function (e) {
                i[t] = e, a.update(o.apply(void 0, r(i)))
              }, flush: function () {
                a.flush()
              }
            };
            e.addDependent(n)
          }), a
        }, d.interval = function (e) {
          var t = d();
          return setInterval(function () {
            return t(null)
          }, e), t
        }, d.fromEvent = function (e, t) {
          var n = d();
          return e.addEventListener(t, n), n
        };
        var T = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
          k = function (e, t) {
            return t = {
              exports: {}
            }, e(t, t.exports), t.exports
          }(function (e) {
            ! function () {
              function t(e, t, n, r, o, i) {
                return {
                  tag: e,
                  key: t,
                  attrs: n,
                  children: r,
                  text: o,
                  dom: i,
                  domSize: void 0,
                  state: void 0,
                  _state: void 0,
                  events: void 0,
                  instance: void 0,
                  skip: !1
                }
              }

              function r(e) {
                for (var t, n = "div", r = [], o = {}; t = u.exec(e);) {
                  var i = t[1],
                    a = t[2];
                  if ("" === i && "" !== a) n = a;
                  else if ("#" === i) o.id = a;
                  else if ("." === i) r.push(a);
                  else if ("[" === t[3][0]) {
                    var l = t[6];
                    l && (l = l.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), "class" === t[4] ? r.push(l) : o[t[4]] = "" === l ? l : l || !0
                  }
                }
                return r.length > 0 && (o.className = r.join(" ")), c[e] = {
                  tag: n,
                  attrs: o
                }
              }

              function o(e, n, r) {
                var o, i, a = !1,
                  l = n.className || n.class;
                for (var u in e.attrs) s.call(e.attrs, u) && (n[u] = e.attrs[u]);
                void 0 !== l && (void 0 !== n.class && (n.class = void 0, n.className = l), null != e.attrs.className && (n.className = e.attrs.className + " " + l));
                for (var u in n)
                  if (s.call(n, u) && "key" !== u) {
                    a = !0;
                    break
                  }
                return Array.isArray(r) && 1 === r.length && null != r[0] && "#" === r[0].tag ? i = r[0].children : o = r, t(e.tag, n.key, a ? n : void 0, o, i)
              }

              function a(e) {
                var n, a = arguments[1],
                  l = 2;
                if (null == e || "string" != typeof e && "function" != typeof e && "function" != typeof e.view) throw Error("The selector must be either a string or a component.");
                if ("string" == typeof e) var u = c[e] || r(e);
                if (null == a ? a = {} : ("object" !== (void 0 === a ? "undefined" : i(a)) || null != a.tag || Array.isArray(a)) && (a = {}, l = 1), arguments.length === l + 1) n = arguments[l], Array.isArray(n) || (n = [n]);
                else
                  for (n = []; l < arguments.length;) n.push(arguments[l++]);
                var s = t.normalizeChildren(n);
                return "string" == typeof e ? o(u, a, s) : t(e, a.key, a, s)
              }

              function l(e) {
                var t = 0,
                  n = null,
                  r = "function" == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;
                return function () {
                  var o = Date.now();
                  0 === t || o - t >= 16 ? (t = o, e()) : null === n && (n = r(function () {
                    n = null, e(), t = Date.now()
                  }, 16 - (o - t)))
                }
              }
              t.normalize = function (e) {
                return Array.isArray(e) ? t("[", void 0, void 0, t.normalizeChildren(e), void 0, void 0) : null != e && "object" !== (void 0 === e ? "undefined" : i(e)) ? t("#", void 0, void 0, !1 === e ? "" : e, void 0, void 0) : e
              }, t.normalizeChildren = function (e) {
                for (var n = 0; n < e.length; n++) e[n] = t.normalize(e[n]);
                return e
              };
              var u = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
                c = {},
                s = {}.hasOwnProperty;
              a.trust = function (e) {
                return null == e && (e = ""), t("<", void 0, void 0, e, void 0, void 0)
              }, a.fragment = function (e, n) {
                return t("[", e.key, e, t.normalizeChildren(n), void 0, void 0)
              };
              var f = a,
                d = function e(t) {
                  function r(e, t) {
                    return function n(r) {
                      var c;
                      try {
                        if (!t || null == r || "object" !== (void 0 === r ? "undefined" : i(r)) && "function" != typeof r || "function" != typeof (c = r.then)) d(function () {
                          t || 0 !== e.length || console.error("Possible unhandled promise rejection:", r);
                          for (var o = 0; o < e.length; o++) e[o](r);
                          l.length = 0, u.length = 0, f.state = t, f.retry = function () {
                            n(r)
                          }
                        });
                        else {
                          if (r === a) throw new TypeError("Promise can't be resolved w/ itself");
                          o(c.bind(r))
                        }
                      } catch (e) {
                        s(e)
                      }
                    }
                  }

                  function o(e) {
                    function t(e) {
                      return function (t) {
                        n++ > 0 || e(t)
                      }
                    }
                    var n = 0,
                      r = t(s);
                    try {
                      e(t(c), r)
                    } catch (e) {
                      r(e)
                    }
                  }
                  if (!(this instanceof e)) throw new Error("Promise must be called with `new`");
                  if ("function" != typeof t) throw new TypeError("executor must be a function");
                  var a = this,
                    l = [],
                    u = [],
                    c = r(l, !0),
                    s = r(u, !1),
                    f = a._instance = {
                      resolvers: l,
                      rejectors: u
                    },
                    d = "function" == typeof n ? n : setTimeout;
                  o(t)
                };
              if (d.prototype.then = function (e, t) {
                function n(e, t, n, i) {
                  t.push(function (t) {
                    if ("function" != typeof e) n(t);
                    else try {
                      r(e(t))
                    } catch (e) {
                      o && o(e)
                    }
                  }), "function" == typeof a.retry && i === a.state && a.retry()
                }
                var r, o, i = this,
                  a = i._instance,
                  l = new d(function (e, t) {
                    r = e, o = t
                  });
                return n(e, a.resolvers, r, !0), n(t, a.rejectors, o, !1), l
              }, d.prototype.catch = function (e) {
                return this.then(null, e)
              }, d.resolve = function (e) {
                return e instanceof d ? e : new d(function (t) {
                  t(e)
                })
              }, d.reject = function (e) {
                return new d(function (t, n) {
                  n(e)
                })
              }, d.all = function (e) {
                return new d(function (t, n) {
                  var r = e.length,
                    o = 0,
                    a = [];
                  if (0 === e.length) t([]);
                  else
                    for (var l = 0; l < e.length; l++)! function (l) {
                      function u(e) {
                        o++, a[l] = e, o === r && t(a)
                      }
                      null == e[l] || "object" !== i(e[l]) && "function" != typeof e[l] || "function" != typeof e[l].then ? u(e[l]) : e[l].then(u, n)
                    }(l)
                })
              }, d.race = function (e) {
                return new d(function (t, n) {
                  for (var r = 0; r < e.length; r++) e[r].then(t, n)
                })
              }, "undefined" != typeof window) {
                void 0 === window.Promise && (window.Promise = d);
                var d = window.Promise
              } else if (void 0 !== T) {
                void 0 === T.Promise && (T.Promise = d);
                var d = T.Promise
              }
              var h = function (e) {
                  function t(e, r) {
                    if (Array.isArray(r))
                      for (var o = 0; o < r.length; o++) t(e + "[" + o + "]", r[o]);
                    else if ("[object Object]" === Object.prototype.toString.call(r))
                      for (var o in r) t(e + "[" + o + "]", r[o]);
                    else n.push(encodeURIComponent(e) + (null != r && "" !== r ? "=" + encodeURIComponent(r) : ""))
                  }
                  if ("[object Object]" !== Object.prototype.toString.call(e)) return "";
                  var n = [];
                  for (var r in e) t(r, e[r]);
                  return n.join("&")
                },
                m = new RegExp("^file://", "i"),
                v = function (e, t) {
                  function n(e) {
                    d = e
                  }

                  function r() {
                    function e() {
                      0 == --t && "function" == typeof d && d()
                    }
                    var t = 0;
                    return function n(r) {
                      var o = r.then;
                      return r.then = function () {
                        t++;
                        var i = o.apply(r, arguments);
                        return i.then(e, function (n) {
                          if (e(), 0 === t) throw n
                        }), n(i)
                      }, r
                    }
                  }

                  function o(e, t) {
                    if ("string" == typeof e) {
                      var n = e;
                      e = t || {}, null == e.url && (e.url = n)
                    }
                    return e
                  }

                  function i(n, i) {
                    var a = r();
                    n = o(n, i);
                    var d = new t(function (t, r) {
                      null == n.method && (n.method = "GET"), n.method = n.method.toUpperCase();
                      var o = "GET" !== n.method && "TRACE" !== n.method && ("boolean" != typeof n.useBody || n.useBody);
                      "function" != typeof n.serialize && (n.serialize = "undefined" != typeof FormData && n.data instanceof FormData ? function (e) {
                        return e
                      } : JSON.stringify), "function" != typeof n.deserialize && (n.deserialize = c), "function" != typeof n.extract && (n.extract = s), n.url = l(n.url, n.data), o ? n.data = n.serialize(n.data) : n.url = u(n.url, n.data);
                      var i = new e.XMLHttpRequest,
                        a = !1,
                        d = i.abort;
                      i.abort = function () {
                        a = !0, d.call(i)
                      }, i.open(n.method, n.url, "boolean" != typeof n.async || n.async, "string" == typeof n.user ? n.user : void 0, "string" == typeof n.password ? n.password : void 0), n.serialize !== JSON.stringify || !o || n.headers && n.headers.hasOwnProperty("Content-Type") || i.setRequestHeader("Content-Type", "application/json; charset=utf-8"), n.deserialize !== c || n.headers && n.headers.hasOwnProperty("Accept") || i.setRequestHeader("Accept", "application/json, text/*"), n.withCredentials && (i.withCredentials = n.withCredentials);
                      for (var h in n.headers)({}).hasOwnProperty.call(n.headers, h) && i.setRequestHeader(h, n.headers[h]);
                      "function" == typeof n.config && (i = n.config(i, n) || i), i.onreadystatechange = function () {
                        if (!a && 4 === i.readyState) try {
                          var e = n.extract !== s ? n.extract(i, n) : n.deserialize(n.extract(i, n));
                          if (i.status >= 200 && i.status < 300 || 304 === i.status || m.test(n.url)) t(f(n.type, e));
                          else {
                            var o = new Error(i.responseText);
                            for (var l in e) o[l] = e[l];
                            r(o)
                          }
                        } catch (e) {
                          r(e)
                        }
                      }, o && null != n.data ? i.send(n.data) : i.send()
                    });
                    return !0 === n.background ? d : a(d)
                  }

                  function a(n, i) {
                    var a = r();
                    n = o(n, i);
                    var c = new t(function (t, r) {
                      var o = n.callbackName || "_mithril_" + Math.round(1e16 * Math.random()) + "_" + v++,
                        i = e.document.createElement("script");
                      e[o] = function (r) {
                        i.parentNode.removeChild(i), t(f(n.type, r)), delete e[o]
                      }, i.onerror = function () {
                        i.parentNode.removeChild(i), r(new Error("JSONP request failed")), delete e[o]
                      }, null == n.data && (n.data = {}), n.url = l(n.url, n.data), n.data[n.callbackKey || "callback"] = o, i.src = u(n.url, n.data), e.document.documentElement.appendChild(i)
                    });
                    return !0 === n.background ? c : a(c)
                  }

                  function l(e, t) {
                    if (null == t) return e;
                    for (var n = e.match(/:[^\/]+/gi) || [], r = 0; r < n.length; r++) {
                      var o = n[r].slice(1);
                      null != t[o] && (e = e.replace(n[r], t[o]))
                    }
                    return e
                  }

                  function u(e, t) {
                    var n = h(t);
                    if ("" !== n) {
                      e += (e.indexOf("?") < 0 ? "?" : "&") + n
                    }
                    return e
                  }

                  function c(e) {
                    try {
                      return "" !== e ? JSON.parse(e) : null
                    } catch (t) {
                      throw new Error(e)
                    }
                  }

                  function s(e) {
                    return e.responseText
                  }

                  function f(e, t) {
                    if ("function" == typeof e) {
                      if (!Array.isArray(t)) return new e(t);
                      for (var n = 0; n < t.length; n++) t[n] = new e(t[n])
                    }
                    return t
                  }
                  var d, v = 0;
                  return {
                    request: i,
                    jsonp: a,
                    setCompletionCallback: n
                  }
                }(window, d),
                p = function (e) {
                  function n(e) {
                    return W = e
                  }

                  function r(e) {
                    return e.attrs && e.attrs.xmlns || K[e.tag]
                  }

                  function o(e, t, n, r, o, i, l) {
                    for (var u = n; u < r; u++) {
                      var c = t[u];
                      null != c && a(e, c, o, l, i)
                    }
                  }

                  function a(e, t, n, r, o) {
                    var i = t.tag;
                    if ("string" != typeof i) return d(e, t, n, r, o);
                    switch (t.state = {}, null != t.attrs && F(t.attrs, t, n), i) {
                      case "#":
                        return l(e, t, o);
                      case "<":
                        return u(e, t, o);
                      case "[":
                        return c(e, t, n, r, o);
                      default:
                        return s(e, t, n, r, o)
                    }
                  }

                  function l(e, t, n) {
                    return t.dom = V.createTextNode(t.children), $(e, t.dom, n), t.dom
                  }

                  function u(e, t, n) {
                    var r = t.children.match(/^\s*?<(\w+)/im) || [],
                      o = {
                        caption: "table",
                        thead: "table",
                        tbody: "table",
                        tfoot: "table",
                        tr: "tbody",
                        th: "tr",
                        td: "tr",
                        colgroup: "table",
                        col: "colgroup"
                      }[r[1]] || "div",
                      i = V.createElement(o);
                    i.innerHTML = t.children, t.dom = i.firstChild, t.domSize = i.childNodes.length;
                    for (var a, l = V.createDocumentFragment(); a = i.firstChild;) l.appendChild(a);
                    return $(e, l, n), l
                  }

                  function c(e, t, n, r, i) {
                    var a = V.createDocumentFragment();
                    if (null != t.children) {
                      var l = t.children;
                      o(a, l, 0, l.length, n, null, r)
                    }
                    return t.dom = a.firstChild, t.domSize = a.childNodes.length, $(e, a, i), a
                  }

                  function s(e, n, i, a, l) {
                    var u = n.tag,
                      c = n.attrs,
                      s = c && c.is;
                    a = r(n) || a;
                    var f = a ? s ? V.createElementNS(a, u, {
                      is: s
                    }) : V.createElementNS(a, u) : s ? V.createElement(u, {
                      is: s
                    }) : V.createElement(u);
                    if (n.dom = f, null != c && z(n, c, a), $(e, f, l), null != n.attrs && null != n.attrs.contenteditable) T(n);
                    else if (null != n.text && ("" !== n.text ? f.textContent = n.text : n.children = [t("#", void 0, void 0, n.text, void 0, void 0)]), null != n.children) {
                      var d = n.children;
                      o(f, d, 0, d.length, i, null, a), I(n)
                    }
                    return f
                  }

                  function f(e, n) {
                    var r;
                    if ("function" == typeof e.tag.view) {
                      if (e.state = Object.create(e.tag), r = e.state.view, null != r.$$reentrantLock$$) return Y;
                      r.$$reentrantLock$$ = !0
                    } else {
                      if (e.state = void 0, r = e.tag, null != r.$$reentrantLock$$) return Y;
                      r.$$reentrantLock$$ = !0, e.state = null != e.tag.prototype && "function" == typeof e.tag.prototype.view ? new e.tag(e) : e.tag(e)
                    } if (e._state = e.state, null != e.attrs && F(e.attrs, e, n), F(e._state, e, n), e.instance = t.normalize(e._state.view.call(e.state, e)), e.instance === e) throw Error("A view cannot return the vnode it received as argument");
                    r.$$reentrantLock$$ = null
                  }

                  function d(e, t, n, r, o) {
                    if (f(t, n), null != t.instance) {
                      var i = a(e, t.instance, n, r, o);
                      return t.dom = t.instance.dom, t.domSize = null != t.dom ? t.instance.domSize : 0, $(e, i, o), i
                    }
                    return t.domSize = 0, Y
                  }

                  function h(e, t, n, r, i, l, u) {
                    if (t !== n && (null != t || null != n))
                      if (null == t) o(e, n, 0, n.length, i, l, u);
                      else if (null == n) k(t, 0, t.length, n);
                      else {
                        if (t.length === n.length) {
                          for (var c = !1, s = 0; s < n.length; s++)
                            if (null != n[s] && null != t[s]) {
                              c = null == n[s].key && null == t[s].key;
                              break
                            }
                          if (c) {
                            for (var s = 0; s < t.length; s++) t[s] !== n[s] && (null == t[s] && null != n[s] ? a(e, n[s], i, u, E(t, s + 1, l)) : null == n[s] ? k(t, s, s + 1, n) : m(e, t[s], n[s], i, E(t, s + 1, l), r, u));
                            return
                          }
                        }
                        if (r = r || b(t, n)) {
                          var f = t.pool;
                          t = t.concat(t.pool)
                        }
                        for (var d, h = 0, v = 0, p = t.length - 1, g = n.length - 1; p >= h && g >= v;) {
                          var y = t[h],
                            w = n[v];
                          if (y !== w || r)
                            if (null == y) h++;
                            else if (null == w) v++;
                            else if (y.key === w.key) {
                              var T = null != f && h >= t.length - f.length || null == f && r;
                              h++, v++, m(e, y, w, i, E(t, h, l), T, u), r && y.tag === w.tag && $(e, C(y), l)
                            } else {
                              var y = t[p];
                              if (y !== w || r)
                                if (null == y) p--;
                                else if (null == w) v++;
                                else {
                                  if (y.key !== w.key) break;
                                  var T = null != f && p >= t.length - f.length || null == f && r;
                                  m(e, y, w, i, E(t, p + 1, l), T, u), (r || v < g) && $(e, C(y), E(t, h, l)), p--, v++
                                } else p--, v++
                            } else h++, v++
                        }
                        for (; p >= h && g >= v;) {
                          var y = t[p],
                            w = n[g];
                          if (y !== w || r)
                            if (null == y) p--;
                            else if (null == w) g--;
                            else if (y.key === w.key) {
                              var T = null != f && p >= t.length - f.length || null == f && r;
                              m(e, y, w, i, E(t, p + 1, l), T, u), r && y.tag === w.tag && $(e, C(y), l), null != y.dom && (l = y.dom), p--, g--
                            } else {
                              if (d || (d = x(t, p)), null != w) {
                                var S = d[w.key];
                                if (null != S) {
                                  var A = t[S],
                                    T = null != f && S >= t.length - f.length || null == f && r;
                                  m(e, A, w, i, E(t, p + 1, l), r, u), $(e, C(A), l), t[S].skip = !0, null != A.dom && (l = A.dom)
                                } else {
                                  var _ = a(e, w, i, u, l);
                                  l = _
                                }
                              }
                              g--
                            } else p--, g--; if (g < v) break
                        }
                        o(e, n, v, g + 1, i, l, u), k(t, h, p + 1, n)
                      }
                  }

                  function m(e, t, n, r, o, i, l) {
                    var u = t.tag;
                    if (u === n.tag) {
                      if (n.state = t.state, n._state = t._state, n.events = t.events, !i && q(n, t)) return;
                      if ("string" == typeof u) switch (null != n.attrs && (i ? (n.state = {}, F(n.attrs, n, r)) : D(n.attrs, n, r)), u) {
                        case "#":
                          v(t, n);
                          break;
                        case "<":
                          p(e, t, n, o);
                          break;
                        case "[":
                          g(e, t, n, i, r, o, l);
                          break;
                        default:
                          y(t, n, i, r, l)
                      } else w(e, t, n, r, o, i, l)
                    } else S(t, null), a(e, n, r, l, o)
                  }

                  function v(e, t) {
                    e.children.toString() !== t.children.toString() && (e.dom.nodeValue = t.children), t.dom = e.dom
                  }

                  function p(e, t, n, r) {
                    t.children !== n.children ? (C(t), u(e, n, r)) : (n.dom = t.dom, n.domSize = t.domSize)
                  }

                  function g(e, t, n, r, o, i, a) {
                    h(e, t.children, n.children, r, o, i, a);
                    var l = 0,
                      u = n.children;
                    if (n.dom = null, null != u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        null != s && null != s.dom && (null == n.dom && (n.dom = s.dom), l += s.domSize || 1)
                      }
                      1 !== l && (n.domSize = l)
                    }
                  }

                  function y(e, n, o, i, a) {
                    var l = n.dom = e.dom;
                    a = r(n) || a, "textarea" === n.tag && (null == n.attrs && (n.attrs = {}), null != n.text && (n.attrs.value = n.text, n.text = void 0)), M(n, e.attrs, n.attrs, a), null != n.attrs && null != n.attrs.contenteditable ? T(n) : null != e.text && null != n.text && "" !== n.text ? e.text.toString() !== n.text.toString() && (e.dom.firstChild.nodeValue = n.text) : (null != e.text && (e.children = [t("#", void 0, void 0, e.text, void 0, e.dom.firstChild)]), null != n.text && (n.children = [t("#", void 0, void 0, n.text, void 0, void 0)]), h(l, e.children, n.children, o, i, null, a))
                  }

                  function w(e, n, r, o, i, l, u) {
                    if (l) f(r, o);
                    else {
                      if (r.instance = t.normalize(r._state.view.call(r.state, r)), r.instance === r) throw Error("A view cannot return the vnode it received as argument");
                      null != r.attrs && D(r.attrs, r, o), D(r._state, r, o)
                    }
                    null != r.instance ? (null == n.instance ? a(e, r.instance, o, u, i) : m(e, n.instance, r.instance, o, i, l, u), r.dom = r.instance.dom, r.domSize = r.instance.domSize) : null != n.instance ? (S(n.instance, null), r.dom = void 0, r.domSize = 0) : (r.dom = n.dom, r.domSize = n.domSize)
                  }

                  function b(e, t) {
                    if (null != e.pool && Math.abs(e.pool.length - t.length) <= Math.abs(e.length - t.length)) {
                      var n = e[0] && e[0].children && e[0].children.length || 0,
                        r = e.pool[0] && e.pool[0].children && e.pool[0].children.length || 0,
                        o = t[0] && t[0].children && t[0].children.length || 0;
                      if (Math.abs(r - o) <= Math.abs(n - o)) return !0
                    }
                    return !1
                  }

                  function x(e, t) {
                    for (var n = {}, r = 0, r = 0; r < t; r++) {
                      var o = e[r];
                      if (null != o) {
                        var i = o.key;
                        null != i && (n[i] = r)
                      }
                    }
                    return n
                  }

                  function C(e) {
                    var t = e.domSize;
                    if (null != t || null == e.dom) {
                      var n = V.createDocumentFragment();
                      if (t > 0) {
                        for (var r = e.dom; --t;) n.appendChild(r.nextSibling);
                        n.insertBefore(r, n.firstChild)
                      }
                      return n
                    }
                    return e.dom
                  }

                  function E(e, t, n) {
                    for (; t < e.length; t++)
                      if (null != e[t] && null != e[t].dom) return e[t].dom;
                    return n
                  }

                  function $(e, t, n) {
                    n && n.parentNode ? e.insertBefore(t, n) : e.appendChild(t)
                  }

                  function T(e) {
                    var t = e.children;
                    if (null != t && 1 === t.length && "<" === t[0].tag) {
                      var n = t[0].children;
                      e.dom.innerHTML !== n && (e.dom.innerHTML = n)
                    } else if (null != e.text || null != t && 0 !== t.length) throw new Error("Child node of a contenteditable must be trusted")
                  }

                  function k(e, t, n, r) {
                    for (var o = t; o < n; o++) {
                      var i = e[o];
                      null != i && (i.skip ? i.skip = !1 : S(i, r))
                    }
                  }

                  function S(e, t) {
                    function n() {
                      if (++o === r && (_(e), e.dom)) {
                        var n = e.domSize || 1;
                        if (n > 1)
                          for (var i = e.dom; --n;) A(i.nextSibling);
                        A(e.dom), null == t || null != e.domSize || j(e.attrs) || "string" != typeof e.tag || (t.pool ? t.pool.push(e) : t.pool = [e])
                      }
                    }
                    var r = 1,
                      o = 0;
                    if (e.attrs && "function" == typeof e.attrs.onbeforeremove) {
                      var i = e.attrs.onbeforeremove.call(e.state, e);
                      null != i && "function" == typeof i.then && (r++, i.then(n, n))
                    }
                    if ("string" != typeof e.tag && "function" == typeof e._state.onbeforeremove) {
                      var i = e._state.onbeforeremove.call(e.state, e);
                      null != i && "function" == typeof i.then && (r++, i.then(n, n))
                    }
                    n()
                  }

                  function A(e) {
                    var t = e.parentNode;
                    null != t && t.removeChild(e)
                  }

                  function _(e) {
                    if (e.attrs && "function" == typeof e.attrs.onremove && e.attrs.onremove.call(e.state, e), "string" != typeof e.tag && "function" == typeof e._state.onremove && e._state.onremove.call(e.state, e), null != e.instance) _(e.instance);
                    else {
                      var t = e.children;
                      if (Array.isArray(t))
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          null != r && _(r)
                        }
                    }
                  }

                  function z(e, t, n) {
                    for (var r in t) H(e, r, null, t[r], n)
                  }

                  function H(e, t, n, r, o) {
                    var a = e.dom;
                    if ("key" !== t && "is" !== t && (n !== r || O(e, t) || "object" === (void 0 === r ? "undefined" : i(r))) && void 0 !== r && !R(t)) {
                      var l = t.indexOf(":");
                      if (l > -1 && "xlink" === t.substr(0, l)) a.setAttributeNS("http://www.w3.org/1999/xlink", t.slice(l + 1), r);
                      else if ("o" === t[0] && "n" === t[1] && "function" == typeof r) B(e, t, r);
                      else if ("style" === t) P(a, n, r);
                      else if (t in a && !N(t) && void 0 === o && !L(e)) {
                        if ("value" === t) {
                          var u = "" + r;
                          if (("input" === e.tag || "textarea" === e.tag) && e.dom.value === u && e.dom === V.activeElement) return;
                          if ("select" === e.tag)
                            if (null === r) {
                              if (-1 === e.dom.selectedIndex && e.dom === V.activeElement) return
                            } else if (null !== n && e.dom.value === u && e.dom === V.activeElement) return;
                          if ("option" === e.tag && null != n && e.dom.value === u) return
                        }
                        if ("input" === e.tag && "type" === t) return void a.setAttribute(t, r);
                        a[t] = r
                      } else "boolean" == typeof r ? r ? a.setAttribute(t, "") : a.removeAttribute(t) : a.setAttribute("className" === t ? "class" : t, r)
                    }
                  }

                  function I(e) {
                    var t = e.attrs;
                    "select" === e.tag && null != t && ("value" in t && H(e, "value", null, t.value, void 0), "selectedIndex" in t && H(e, "selectedIndex", null, t.selectedIndex, void 0))
                  }

                  function M(e, t, n, r) {
                    if (null != n)
                      for (var o in n) H(e, o, t && t[o], n[o], r);
                    if (null != t)
                      for (var o in t) null != n && o in n || ("className" === o && (o = "class"), "o" !== o[0] || "n" !== o[1] || R(o) ? "key" !== o && e.dom.removeAttribute(o) : B(e, o, void 0))
                  }

                  function O(e, t) {
                    return "value" === t || "checked" === t || "selectedIndex" === t || "selected" === t && e.dom === V.activeElement
                  }

                  function R(e) {
                    return "oninit" === e || "oncreate" === e || "onupdate" === e || "onremove" === e || "onbeforeremove" === e || "onbeforeupdate" === e
                  }

                  function N(e) {
                    return "href" === e || "list" === e || "form" === e || "width" === e || "height" === e
                  }

                  function L(e) {
                    return e.attrs.is || e.tag.indexOf("-") > -1
                  }

                  function j(e) {
                    return null != e && (e.oncreate || e.onupdate || e.onbeforeremove || e.onremove)
                  }

                  function P(e, t, n) {
                    if (t === n && (e.style.cssText = "", t = null), null == n) e.style.cssText = "";
                    else if ("string" == typeof n) e.style.cssText = n;
                    else {
                      "string" == typeof t && (e.style.cssText = "");
                      for (var r in n) e.style[r] = n[r];
                      if (null != t && "string" != typeof t)
                        for (var r in t) r in n || (e.style[r] = "")
                    }
                  }

                  function B(e, t, n) {
                    var r = e.dom,
                      o = "function" != typeof W ? n : function (e) {
                        var t = n.call(r, e);
                        return W.call(r, e), t
                      };
                    if (t in r) r[t] = "function" == typeof n ? o : null;
                    else {
                      var i = t.slice(2);
                      if (void 0 === e.events && (e.events = {}), e.events[t] === o) return;
                      null != e.events[t] && r.removeEventListener(i, e.events[t], !1), "function" == typeof n && (e.events[t] = o, r.addEventListener(i, e.events[t], !1))
                    }
                  }

                  function F(e, t, n) {
                    "function" == typeof e.oninit && e.oninit.call(t.state, t), "function" == typeof e.oncreate && n.push(e.oncreate.bind(t.state, t))
                  }

                  function D(e, t, n) {
                    "function" == typeof e.onupdate && n.push(e.onupdate.bind(t.state, t))
                  }

                  function q(e, t) {
                    var n, r;
                    return null != e.attrs && "function" == typeof e.attrs.onbeforeupdate && (n = e.attrs.onbeforeupdate.call(e.state, e, t)), "string" != typeof e.tag && "function" == typeof e._state.onbeforeupdate && (r = e._state.onbeforeupdate.call(e.state, e, t)), !(void 0 === n && void 0 === r || n || r) && (e.dom = t.dom, e.domSize = t.domSize, e.instance = t.instance, !0)
                  }

                  function U(e, n) {
                    if (!e) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
                    var r = [],
                      o = V.activeElement,
                      i = e.namespaceURI;
                    null == e.vnodes && (e.textContent = ""), Array.isArray(n) || (n = [n]), h(e, e.vnodes, t.normalizeChildren(n), !1, r, null, "http://www.w3.org/1999/xhtml" === i ? void 0 : i), e.vnodes = n;
                    for (var a = 0; a < r.length; a++) r[a]();
                    null != o && V.activeElement !== o && o.focus()
                  }
                  var W, V = e.document,
                    Y = V.createDocumentFragment(),
                    K = {
                      svg: "http://www.w3.org/2000/svg",
                      math: "http://www.w3.org/1998/Math/MathML"
                    };
                  return {
                    render: U,
                    setEventCallback: n
                  }
                },
                g = function (e) {
                  function t(e, t) {
                    n(e), i.push(e, l(t))
                  }

                  function n(e) {
                    var t = i.indexOf(e);
                    t > -1 && i.splice(t, 2)
                  }

                  function r() {
                    for (var e = 1; e < i.length; e += 2) i[e]()
                  }
                  var o = p(e);
                  o.setEventCallback(function (e) {
                    !1 === e.redraw ? e.redraw = void 0 : r()
                  });
                  var i = [];
                  return {
                    subscribe: t,
                    unsubscribe: n,
                    redraw: r,
                    render: o.render
                  }
                }(window);
              v.setCompletionCallback(g.redraw);
              f.mount = function (e) {
                return function (n, r) {
                  if (null === r) return e.render(n, []), void e.unsubscribe(n);
                  if (null == r.view && "function" != typeof r) throw new Error("m.mount(element, component) expects a component, not a vnode");
                  var o = function () {
                    e.render(n, t(r))
                  };
                  e.subscribe(n, o), e.redraw()
                }
              }(g);
              var y = d,
                w = function (e) {
                  if ("" === e || null == e) return {};
                  "?" === e.charAt(0) && (e = e.slice(1));
                  for (var t = e.split("&"), n = {}, r = {}, o = 0; o < t.length; o++) {
                    var i = t[o].split("="),
                      a = decodeURIComponent(i[0]),
                      l = 2 === i.length ? decodeURIComponent(i[1]) : "";
                    "true" === l ? l = !0 : "false" === l && (l = !1);
                    var u = a.split(/\]\[?|\[/),
                      c = n;
                    a.indexOf("[") > -1 && u.pop();
                    for (var s = 0; s < u.length; s++) {
                      var f = u[s],
                        d = u[s + 1],
                        h = "" == d || !isNaN(parseInt(d, 10)),
                        m = s === u.length - 1;
                      if ("" === f) {
                        var a = u.slice(0, s).join();
                        null == r[a] && (r[a] = 0), f = r[a]++
                      }
                      null == c[f] && (c[f] = m ? l : h ? [] : {}), c = c[f]
                    }
                  }
                  return n
                },
                b = function (e) {
                  function t(t) {
                    var n = e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
                    return "pathname" === t && "/" !== n[0] && (n = "/" + n), n
                  }

                  function r(e) {
                    return function () {
                      null == i && (i = l(function () {
                        i = null, e()
                      }))
                    }
                  }

                  function o(e, t, n) {
                    var r = e.indexOf("?"),
                      o = e.indexOf("#"),
                      i = r > -1 ? r : o > -1 ? o : e.length;
                    if (r > -1) {
                      var a = o > -1 ? o : e.length,
                        l = w(e.slice(r + 1, a));
                      for (var u in l) t[u] = l[u]
                    }
                    if (o > -1) {
                      var c = w(e.slice(o + 1));
                      for (var u in c) n[u] = c[u]
                    }
                    return e.slice(0, i)
                  }
                  var i, a = "function" == typeof e.history.pushState,
                    l = "function" == typeof n ? n : setTimeout,
                    u = {
                      prefix: "#!"
                    };
                  return u.getPath = function () {
                    switch (u.prefix.charAt(0)) {
                      case "#":
                        return t("hash").slice(u.prefix.length);
                      case "?":
                        return t("search").slice(u.prefix.length) + t("hash");
                      default:
                        return t("pathname").slice(u.prefix.length) + t("search") + t("hash")
                    }
                  }, u.setPath = function (t, n, r) {
                    var i = {},
                      l = {};
                    if (t = o(t, i, l), null != n) {
                      for (var c in n) i[c] = n[c];
                      t = t.replace(/:([^\/]+)/g, function (e, t) {
                        return delete i[t], n[t]
                      })
                    }
                    var s = h(i);
                    s && (t += "?" + s);
                    var f = h(l);
                    if (f && (t += "#" + f), a) {
                      var d = r ? r.state : null,
                        m = r ? r.title : null;
                      e.onpopstate(), r && r.replace ? e.history.replaceState(d, m, u.prefix + t) : e.history.pushState(d, m, u.prefix + t)
                    } else e.location.href = u.prefix + t
                  }, u.defineRoutes = function (t, n, i) {
                    function l() {
                      var r = u.getPath(),
                        a = {},
                        l = o(r, a, a),
                        c = e.history.state;
                      if (null != c)
                        for (var s in c) a[s] = c[s];
                      for (var f in t) {
                        var d = new RegExp("^" + f.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "/?$");
                        if (d.test(l)) return void l.replace(d, function () {
                          for (var e = f.match(/:[^\/]+/g) || [], o = [].slice.call(arguments, 1, -2), i = 0; i < e.length; i++) a[e[i].replace(/:|\./g, "")] = decodeURIComponent(o[i]);
                          n(t[f], a, r, f)
                        })
                      }
                      i(r, a)
                    }
                    a ? e.onpopstate = r(l) : "#" === u.prefix.charAt(0) && (e.onhashchange = l), l()
                  }, u
                };
              f.route = function (e, n) {
                var r, o, i, a, l, u = b(e),
                  c = function (e) {
                    return e
                  },
                  s = function (e, s, f) {
                    if (null == e) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
                    var d = function () {
                        null != r && n.render(e, r(t(o, i.key, i)))
                      },
                      h = function (e) {
                        if (e === s) throw new Error("Could not resolve default route " + s);
                        u.setPath(s, null, {
                          replace: !0
                        })
                      };
                    u.defineRoutes(f, function (e, t, n) {
                      var u = l = function (e, s) {
                        u === l && (o = null == s || "function" != typeof s.view && "function" != typeof s ? "div" : s, i = t, a = n, l = null, r = (e.render || c).bind(e), d())
                      };
                      e.view || "function" == typeof e ? u({}, e) : e.onmatch ? y.resolve(e.onmatch(t, n)).then(function (t) {
                        u(e, t)
                      }, h) : u(e, "div")
                    }, h), n.subscribe(e, d)
                  };
                return s.set = function (e, t, n) {
                  null != l && (n = n || {}, n.replace = !0), l = null, u.setPath(e, t, n)
                }, s.get = function () {
                  return a
                }, s.prefix = function (e) {
                  u.prefix = e
                }, s.link = function (e) {
                  e.dom.setAttribute("href", u.prefix + e.attrs.href), e.dom.onclick = function (e) {
                    if (!(e.ctrlKey || e.metaKey || e.shiftKey || 2 === e.which)) {
                      e.preventDefault(), e.redraw = !1;
                      var t = this.getAttribute("href");
                      0 === t.indexOf(u.prefix) && (t = t.slice(u.prefix.length)), s.set(t, void 0, void 0)
                    }
                  }
                }, s.param = function (e) {
                  return void 0 !== i && void 0 !== e ? i[e] : i
                }, s
              }(window, g), f.withAttr = function (e, t, n) {
                return function (r) {
                  t.call(n || this, e in r.currentTarget ? r.currentTarget[e] : r.currentTarget.getAttribute(e))
                }
              };
              var x = p(window);
              f.render = x.render, f.redraw = g.redraw, f.request = v.request, f.jsonp = v.jsonp, f.parseQueryString = w, f.buildQueryString = h, f.version = "1.1.5", f.vnode = t, e.exports = f
            }()
          }),
          S = function (e) {
            var t = e.currentTarget,
              n = t.scrollHeight - t.offsetHeight;
            t.scrollTop + e.deltaY < 0 ? (t.scrollTop = 0, e.preventDefault()) : t.scrollTop + e.deltaY > n && (t.scrollTop = n, e.preventDefault()), e.redraw = !1
          },
          A = function (e) {
            var t = e.$headings,
              n = e.$activeHeading,
              r = e.onClickHeading,
              o = function (e) {
                for (var t = 0, n = {
                  level: 0,
                  children: []
                }, r = [n], o = function (e) {
                  return e.slice(-1)[0]
                }; t < e.length;) {
                  var i = e[t],
                    a = i.level,
                    l = i.isActive;
                  if (a === r.length) {
                    var u = {
                      heading: e[t],
                      children: []
                    };
                    o(r).children.push(u), r.push(u), l && r.forEach(function (e) {
                      e.heading && (e.heading.isActive = !0)
                    }), t++
                  } else if (a < r.length) r.pop();
                  else if (a > r.length) {
                    var c = {
                      heading: null,
                      children: []
                    };
                    o(r).children.push(c), r.push(c)
                  }
                }
                return n
              },
              i = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = t.isRoot,
                  o = void 0 !== n && n;
                return k("ul", {
                  onwheel: o && S,
                  onclick: o && r
                }, e.map(a))
              },
              a = function (e, t) {
                var n = e.heading,
                  r = e.children;
                return k("li", {
                  class: n && n.isActive ? "active" : "",
                  key: t
                }, [n && k("a", {
                  href: "#" + n.anchor
                }, n.node.textContent), r && r.length && i(r)].filter(Boolean))
              };
            return {
              oncreate: function (e) {
                var r = e.dom;
                n.subscribe(function (e) {
                  var t = [].slice.apply(r.querySelectorAll(".active")).pop();
                  if (t) {
                    var n = t.getBoundingClientRect(),
                      o = r.getBoundingClientRect();
                    (n.top > o.bottom || n.bottom < o.top) && x({
                      targetElem: t,
                      scrollElem: r,
                      maxDuration: 0,
                      topMargin: r.offsetHeight / 2 - t.offsetHeight / 2
                    })
                  }
                }), d.combine(t, n, function () {
                  return null
                }).subscribe(function (e) {
                  return k.redraw()
                })
              }, view: function () {
                t().forEach(function (e, t) {
                  return e.isActive = t === n()
                });
                var e = o(t());
                return i(e.children, {
                  isRoot: !0
                })
              }
            }
          },
          _ = function (e) {
            var t = e.ref,
              n = e.scrollable,
              r = e.popper,
              i = e.direction,
              a = e.gap,
              l = e.$refChange,
              u = e.$scroll,
              c = e.$offset,
              s = e.$topMargin,
              h = d.combine(l, function () {
                var e = t.getBoundingClientRect(),
                  r = window.getComputedStyle(t),
                  o = w(n, "top"),
                  i = w(n, "left"),
                  a = {
                    top: e.top - o,
                    right: e.right - i,
                    bottom: e.bottom - o,
                    left: e.left - i,
                    width: e.width,
                    height: e.height
                  };
                return "border-box" === r["box-sizing"] && (a.left += v(r["padding-left"]), a.right -= v(r["padding-right"]), a.width -= v(r["padding-left"]) + v(r["padding-right"])), a
              }),
              m = r.getBoundingClientRect(),
              p = n === document.body ? 0 : n.getBoundingClientRect().top;
            return d.combine(h, u, c, s, function (e, t, n, r) {
              var l = o(t, 2),
                u = (l[0], l[1]),
                c = o(n, 2),
                s = c[0],
                d = c[1],
                h = "right" === i ? e.right + a : e.left - a - m.width;
              return h = Math.min(Math.max(0, h), window.innerWidth - m.width), {
                position: "fixed",
                left: 0,
                top: 0,
                transform: f(h + s, Math.max(p + r, e.top - u) + d)
              }
            })
          },
          z = function (e) {
            var t = e.getBoundingClientRect(),
              n = t.top,
              r = t.left,
              i = t.right,
              a = (t.bottom, t.height, t.width, function (e) {
                for (var t = 0; e;) e = e.parentElement, t++;
                return t
              }),
              l = function (e) {
                var t = o(e, 2),
                  n = t[0],
                  r = t[1],
                  i = document.elementFromPoint(n, r);
                return i && a(i)
              },
              u = [r - 150 - 200, r - 150 - 100, r - 150].map(function (e) {
                return [n, n + 200, n + 400].map(function (t) {
                  return [e, t]
                })
              }).reduce(function (e, t) {
                return e.concat(t)
              }, []),
              c = [i + 150, i + 150 + 100, i + 150 + 200].map(function (e) {
                return [n, n + 200, n + 400].map(function (t) {
                  return [e, t]
                })
              }).reduce(function (e, t) {
                return e.concat(t)
              }, []),
              s = u.map(l).filter(Boolean),
              f = c.map(l).filter(Boolean),
              d = s.length ? s.reduce(function (e, t) {
                return e + t
              }, 0) / s.length : null,
              h = f.length ? f.reduce(function (e, t) {
                return e + t
              }, 0) / f.length : null;
            return d ? h && 1 * (document.documentElement.offsetWidth - i - r) + 9 * (h - d) * -10 + 20 > 0 ? {
              direction: "right"
            } : {
              direction: "left"
            } : {
              direction: "right"
            }
          },
          H = function (e) {
            var t = e.article,
              n = e.scrollable,
              r = e.$headings,
              o = e.theme,
              i = e.$activeHeading,
              a = e.$isShow,
              l = e.$userOffset,
              u = e.$relayout,
              c = e.$scroll,
              s = e.$topbarHeight,
              f = e.onClickHeading,
              d = A({
                $headings: r,
                $activeHeading: i,
                onClickHeading: f
              });
            return {
              oncreate: function (e) {
                var r = e.dom,
                  o = z(t),
                  i = o.direction;
                this.$style = _({
                  ref: t,
                  scrollable: n,
                  popper: r,
                  direction: i,
                  gap: 150,
                  $topMargin: s.map(function (e) {
                    return (e || 0) + 50
                  }),
                  $refChange: u,
                  $scroll: c,
                  $offset: l
                }), this.$style.subscribe(function (e) {
                  return k.redraw()
                })
              }, view: function () {
                return k("#smarttoc", {
                  class: [o || "light", r().filter(function (e) {
                    return e.level <= 2
                  }).length > 50 && "lengthy", a() ? "" : "hidden"].filter(Boolean).join(" "),
                  style: this.$style && this.$style()
                }, [k(d)])
              }
            }
          },
          I = function (e) {
            var t = e.$headings,
              n = e.scrollable,
              r = e.$isShow,
              o = e.$relayout,
              i = d(),
              a = document.createElement("DIV");
            return a.id = "smarttoc-extender", d.combine(r, o, t, function (e, t, r) {
              setTimeout(function () {
                var t = r.slice(-1)[0].node,
                  o = t.getBoundingClientRect(),
                  l = 0;
                if (n === document.body) {
                  var u = document.documentElement.scrollHeight - (o.bottom + document.documentElement.scrollTop) - v(a.style.height);
                  l = e ? Math.max(window.innerHeight - o.height - u, 0) : 0
                } else {
                  var c = n.getBoundingClientRect(),
                    s = c.top + n.scrollHeight - w(n) - o.bottom - v(a.style.height);
                  l = e ? Math.max(c.height - o.height - s, 0) : 0
                }
                i({
                  height: l
                })
              }, 300)
            }), i.subscribe(function (e) {
              return s(a, e)
            }), a
          },
          M = function (e, t, n) {
            var r = e.style.cssText,
              o = function (e) {
                var t = window.getComputedStyle(e),
                  n = v(t.fontSize),
                  r = 66 * Math.min(Math.max(n, 12), 16);
                return "border-box" === t["box-sizing"] && (r += v(t["padding-left"]) + v(t["padding-right"])), Object.assign(v(t.marginLeft) || v(t.marginRight) ? {} : {
                  marginLeft: "auto",
                  marginRight: "auto"
                }, v(t.maxWidth) ? {} : {
                  maxWidth: r
                })
              }(e),
              i = n.map(function (t) {
                if (t) return s(e, o), e;
                s(e, r)
              });
            return d.combine(i, t, function () {
              return null
            })
          },
          O = function (e) {
            return e.map(function (e) {
              var t = e.node,
                n = e.level,
                r = e.anchor;
              return r || (r = t.id || [].slice.apply(t.children).filter(function (e) {
                return "A" === e.tagName
              }).map(function (e) {
                var t = e.getAttribute("href") || "";
                return t.startsWith("#") ? t.substr(1) : e.id
              }).filter(Boolean)[0], r = r ? y(r) : t.id = y(g(t.textContent))), {
                node: t,
                level: n,
                anchor: r
              }
            })
          },
          R = function (e) {
            for (; e && e !== document.body && ! function (e) {
              return ["auto", "scroll"].includes(window.getComputedStyle(e).overflowY) && e.clientHeight + 1 < e.scrollHeight
            }(e);) e = e.parentElement;
            return t("scrollable", e), a(e, "purple"), e
          },
          N = function (e, t) {
            var n = d([w(e, "left"), w(e)]),
              r = e === document.body ? window : e;
            return d.fromEvent(r, "scroll").filter(function () {
              return t()
            }).throttle().subscribe(function () {
              n([w(e, "left"), w(e)])
            }), n
          },
          L = function (e, t, n, r, i) {
            var a = d.combine(r, e, function (e, n) {
              var r = (t === document.body ? 0 : t.getBoundingClientRect().top) - w(t, "top");
              return n.map(function (e) {
                return e.node.getBoundingClientRect().top - r
              })
            });
            return d.combine(a, n, i, function (e, t) {
              for (var n = o(t, 2), r = (n[0], n[1]), i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = 0, l = e.length; a < l && !(e[a] > r + i + 20); a++);
              return Math.max(0, a - 1)
            }).unique()
          },
          j = function (e, t, n) {
            var r = e.node,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            x({
              targetElem: r,
              scrollElem: t,
              topMargin: o,
              maxDuration: 300,
              callback: n && n.bind(null, r)
            })
          },
          P = function (e) {
            var t = function (e) {
                for (; e !== document.body && ! function (e) {
                  var t = window.getComputedStyle(e),
                    n = t.position,
                    r = t.zIndex;
                  return "fixed" === n && r
                }(e);) e = e.parentElement;
                return e === document.body ? null : e
              },
              n = e.getBoundingClientRect(),
              r = n.left,
              o = n.right,
              i = n.top,
              a = document.elementFromPoint(r + 1, i + 1),
              l = document.elementFromPoint(o - 1, i + 1);
            if (a && l && a !== e && l !== e) {
              var u = t(a),
                c = t(l);
              return u && u === c ? u.offsetHeight : 0
            }
            return 0
          },
          B = function (e) {
            var t = e;
            try {
              for (var n = function (e) {
                return e.replace(/rgba?\(/, "").replace(/\).*/, "").split(/, ?/)
              }; t && t.parentElement;) {
                var r = function (e) {
                  return n(window.getComputedStyle(e)["background-color"])
                }(t);
                if (! function (e) {
                  var t = o(e, 4);
                  t[0], t[1], t[2];
                  return 0 === t[3]
                }(r)) return function (e) {
                  var t = o(e, 4),
                    n = t[0],
                    r = t[1],
                    i = t[2];
                  t[3];
                  return n + r + i > 382.5
                }(r) ? "light" : "dark";
                t = t.parentElement
              }
              return "light"
            } catch (e) {
              return "light"
            }
          },
          F = function () {
            var e = document.getElementById("smart_toc_wrapper");
            return e || (e = document.body.appendChild(document.createElement("DIV")), e.id = "smart_toc_wrapper"), e
          },
          D = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            l(e, "no element given");
            for (var n = []; e && t--;) n.push(e), e = e.parentElement;
            return n
          },
          q = function () {
            function e(e, t) {
              a.set(e, (a.get(e) || 0) + t)
            }

            function n(t, n) {
              D(t, n.length).forEach(function (t, r) {
                return e(t, n[r])
              })
            }
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
            t("extracting article");
            var a = new Map,
              l = {
                h1: [0, 100, 60, 40, 30, 25, 22].map(function (e) {
                  return .4 * e
                }),
                h2: [0, 100, 60, 40, 30, 25, 22],
                h3: [0, 100, 60, 40, 30, 25, 22].map(function (e) {
                  return .5 * e
                }),
                h4: [0, 100, 60, 40, 30, 25, 22].map(function (e) {
                  return .5 * e * .5
                }),
                h5: [0, 100, 60, 40, 30, 25, 22].map(function (e) {
                  return .5 * e * .5 * .5
                }),
                h6: [0, 100, 60, 40, 30, 25, 22].map(function (e) {
                  return .5 * e * .5 * .5 * .5
                }),
                article: [500],
                ".article": [500],
                ".content": [101],
                sidebar: [-500],
                ".sidebar": [-500],
                aside: [-500],
                ".aside": [-500],
                nav: [-500],
                ".nav": [-500],
                ".navigation": [-500],
                ".toc": [-500],
                ".table-of-contents": [-500]
              };
            Object.keys(l).map(function (e) {
              return {
                selector: e,
                elems: [].slice.apply(i.querySelectorAll(e))
              }
            }).forEach(function (e) {
              var t = e.selector;
              return e.elems.forEach(function (e) {
                return n(e, l[t])
              })
            });
            var u = [].concat(r(a)).sort(function (e, t) {
                return t[1] - e[1]
              }),
              c = u.slice(0, 5).filter(Boolean).map(function (e) {
                var t = o(e, 2);
                return {
                  elem: t[0],
                  score: t[1]
                }
              }),
              s = function (e) {
                return e.scrollWidth < 320
              };
            c.forEach(function (e) {
              s(e.elem) && (e.isNarrow = !0, c.forEach(function (t) {
                t.elem.contains(e.elem) && (t.score *= .7)
              }))
            }), c = c.filter(function (e) {
              return !e.isNarrow
            });
            var f = c.map(function (e) {
              var t = e.elem;
              return [t, e.score * Math.log(t.scrollHeight * t.scrollHeight / (t.querySelectorAll("a").length || 1)), t.scrollHeight, t.querySelectorAll("a").length]
            }).sort(function (e, t) {
              return t[1] - e[1]
            });
            return f.length ? f[0][0] : null
          },
          U = function (e) {
            t("extracting heading");
            for (var n = ["H1", "H2", "H3", "H4", "H5", "H6"].concat([]), r = function (e) {
              return {
                H1: 4,
                H2: 9,
                H3: 9,
                H4: 10,
                H5: 10,
                H6: 10,
                STRONG: 10
              }[e]
            }, o = function (e) {
              return 0 !== e.offsetHeight
            }, i = function (e) {
              return e.filter(o).length >= .5 * e.length
            }, a = n.map(function (t) {
              return [].slice.apply(e.getElementsByTagName(t))
            }).map(function (e, t) {
              return {
                elems: e,
                tag: n[t],
                score: e.length * r(n[t])
              }
            }).filter(function (e) {
              return e.score >= 10
            }).filter(function (e) {
              return i(e.elems)
            }).slice(0, 3), l = a.map(function (e) {
              return e.tag
            }), u = function (e) {
              return l.includes(e.tagName) && o(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, c = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
              acceptNode: u
            }), s = []; c.nextNode();) {
              var f = c.currentNode;
              s.push({
                node: f,
                level: l.indexOf(f.tagName) + 1
              })
            }
            return s
          },
          W = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = m(),
              n = o(t, 2),
              r = n[0],
              i = n[1];
            return r && i && i().length ? h(Object.assign({
              article: r,
              $headings: i
            }, e)) : null
          };
        window.generate = W
      }();
      t.run = window.generate
    }).call(t, n(2), n(9).setImmediate)
  },
  function (e, t, n) {
    function r(e, t) {
      this._id = e, this._clearFn = t
    }
    var o = Function.prototype.apply;
    t.setTimeout = function () {
      return new r(o.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function () {
      return new r(o.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close()
    }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
      this._clearFn.call(window, this._id)
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout()
      }, t))
    }, n(10), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
  },
  function (e, t, n) {
    (function (e, t) {
      ! function (e, n) {
        "use strict";

        function r(e) {
          "function" != typeof e && (e = new Function("" + e));
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
          var r = {
            callback: e,
            args: t
          };
          return c[u] = r, l(u), u++
        }

        function o(e) {
          delete c[e]
        }

        function i(e) {
          var t = e.callback,
            r = e.args;
          switch (r.length) {
            case 0:
              t();
              break;
            case 1:
              t(r[0]);
              break;
            case 2:
              t(r[0], r[1]);
              break;
            case 3:
              t(r[0], r[1], r[2]);
              break;
            default:
              t.apply(n, r)
          }
        }

        function a(e) {
          if (s) setTimeout(a, 0, e);
          else {
            var t = c[e];
            if (t) {
              s = !0;
              try {
                i(t)
              } finally {
                o(e), s = !1
              }
            }
          }
        }
        if (!e.setImmediate) {
          var l, u = 1,
            c = {},
            s = !1,
            f = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function () {
            l = function (e) {
              t.nextTick(function () {
                a(e)
              })
            }
          }() : function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                n = e.onmessage;
              return e.onmessage = function () {
                t = !1
              }, e.postMessage("", "*"), e.onmessage = n, t
            }
          }() ? function () {
            var t = "setImmediate$" + Math.random() + "$",
              n = function (n) {
                n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
              };
            e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), l = function (n) {
              e.postMessage(t + n, "*")
            }
          }() : e.MessageChannel ? function () {
            var e = new MessageChannel;
            e.port1.onmessage = function (e) {
              a(e.data)
            }, l = function (t) {
              e.port2.postMessage(t)
            }
          }() : f && "onreadystatechange" in f.createElement("script") ? function () {
            var e = f.documentElement;
            l = function (t) {
              var n = f.createElement("script");
              n.onreadystatechange = function () {
                a(t), n.onreadystatechange = null, e.removeChild(n), n = null
              }, e.appendChild(n)
            }
          }() : function () {
            l = function (e) {
              setTimeout(a, 0, e)
            }
          }(), d.setImmediate = r, d.clearImmediate = o
        }
      }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, n(2), n(11))
  },
  function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
      if (s === setTimeout) return setTimeout(e, 0);
      if ((s === n || !s) && setTimeout) return s = setTimeout, setTimeout(e, 0);
      try {
        return s(e, 0)
      } catch (t) {
        try {
          return s.call(null, e, 0)
        } catch (t) {
          return s.call(this, e, 0)
        }
      }
    }

    function i(e) {
      if (f === clearTimeout) return clearTimeout(e);
      if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
      try {
        return f(e)
      } catch (t) {
        try {
          return f.call(null, e)
        } catch (t) {
          return f.call(this, e)
        }
      }
    }

    function a() {
      v && h && (v = !1, h.length ? m = h.concat(m) : p = -1, m.length && l())
    }

    function l() {
      if (!v) {
        var e = o(a);
        v = !0;
        for (var t = m.length; t;) {
          for (h = m, m = []; ++p < t;) h && h[p].run();
          p = -1, t = m.length
        }
        h = null, v = !1, i(e)
      }
    }

    function u(e, t) {
      this.fun = e, this.array = t
    }

    function c() {}
    var s, f, d = e.exports = {};
    ! function () {
      try {
        s = "function" == typeof setTimeout ? setTimeout : n
      } catch (e) {
        s = n
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (e) {
        f = r
      }
    }();
    var h, m = [],
      v = !1,
      p = -1;
    d.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      m.push(new u(e, t)), 1 !== m.length || v || o(l)
    }, u.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function (e) {
      return []
    }, d.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, d.cwd = function () {
      return "/"
    }, d.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, d.umask = function () {
      return 0
    }
  }
]);
