System.register("@mhiseg/esm-home-app", [], function (e, r) {
  return {
    execute: function () {
      e(
        (() => {
          var e,
            t,
            n,
            o,
            a,
            i,
            u,
            s,
            l,
            f,
            p,
            h,
            d,
            c,
            m = {
              858: (e, r, t) => {
                (0, t(722).s)(1);
              },
              722: (e, r, t) => {
                const n = t(905).R;
                r.s = function (e) {
                  if ((e || (e = 1), !t.y.meta || !t.y.meta.url))
                    throw (
                      (console.error("__system_context__", t.y),
                      Error(
                        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                      ))
                    );
                  t.p = n(t.y.meta.url, e);
                };
              },
              356: (e, r, t) => {
                t(858);
              },
              905: (e, r, t) => {
                r.R = function (e, r) {
                  var t = document.createElement("a");
                  t.href = e;
                  for (
                    var n =
                        "/" === t.pathname[0] ? t.pathname : "/" + t.pathname,
                      o = 0,
                      a = n.length;
                    o !== r && a >= 0;

                  )
                    "/" === n[--a] && o++;
                  if (o !== r)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        r +
                        ") is greater than the number of directories (" +
                        o +
                        ") in the URL path " +
                        e
                    );
                  var i = n.slice(0, a + 1);
                  return t.protocol + "//" + t.host + i;
                };
                Number.isInteger;
              },
              546: (e, r, t) => {
                "use strict";
                var n = { app: () => t.e(202).then(() => () => t(202)) },
                  o = (e, r) => (
                    (t.R = r),
                    (r = t.o(n, e)
                      ? n[e]()
                      : Promise.resolve().then(() => {
                          throw new Error(
                            'Module "' + e + '" does not exist in container.'
                          );
                        })),
                    (t.R = void 0),
                    r
                  ),
                  a = (e, r) => {
                    if (t.S) {
                      var n = "default",
                        o = t.S[n];
                      if (o && o !== e)
                        throw new Error(
                          "Container initialization failed as it has already been initialized with a different share scope"
                        );
                      return (t.S[n] = e), t.I(n, r);
                    }
                  };
                t.d(r, { get: () => o, init: () => a });
              },
            },
            v = {};
          function g(e) {
            var r = v[e];
            if (void 0 !== r) return r.exports;
            var t = (v[e] = { exports: {} });
            return m[e](t, t.exports, g), t.exports;
          }
          return (
            (g.m = m),
            (g.c = v),
            (g.y = r),
            (g.n = (e) => {
              var r = e && e.__esModule ? () => e.default : () => e;
              return g.d(r, { a: r }), r;
            }),
            (g.d = (e, r) => {
              for (var t in r)
                g.o(r, t) &&
                  !g.o(e, t) &&
                  Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
            }),
            (g.f = {}),
            (g.e = (e) =>
              Promise.all(
                Object.keys(g.f).reduce((r, t) => (g.f[t](e, r), r), [])
              )),
            (g.u = (e) => e + ".js"),
            (g.g = (function () {
              if ("object" == typeof globalThis) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e) {
                if ("object" == typeof window) return window;
              }
            })()),
            (g.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
            (e = {}),
            (t = "@mhiseg/esm-home-app:"),
            (g.l = (r, n, o, a) => {
              if (e[r]) e[r].push(n);
              else {
                var i, u;
                if (void 0 !== o)
                  for (
                    var s = document.getElementsByTagName("script"), l = 0;
                    l < s.length;
                    l++
                  ) {
                    var f = s[l];
                    if (
                      f.getAttribute("src") == r ||
                      f.getAttribute("data-webpack") == t + o
                    ) {
                      i = f;
                      break;
                    }
                  }
                i ||
                  ((u = !0),
                  ((i = document.createElement("script")).charset = "utf-8"),
                  (i.timeout = 120),
                  g.nc && i.setAttribute("nonce", g.nc),
                  i.setAttribute("data-webpack", t + o),
                  (i.src = r)),
                  (e[r] = [n]);
                var p = (t, n) => {
                    (i.onerror = i.onload = null), clearTimeout(h);
                    var o = e[r];
                    if (
                      (delete e[r],
                      i.parentNode && i.parentNode.removeChild(i),
                      o && o.forEach((e) => e(n)),
                      t)
                    )
                      return t(n);
                  },
                  h = setTimeout(
                    p.bind(null, void 0, { type: "timeout", target: i }),
                    12e4
                  );
                (i.onerror = p.bind(null, i.onerror)),
                  (i.onload = p.bind(null, i.onload)),
                  u && document.head.appendChild(i);
              }
            }),
            (g.r = (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (() => {
              g.S = {};
              var e = {},
                r = {};
              g.I = (t, n) => {
                n || (n = []);
                var o = r[t];
                if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
                  if ((n.push(o), e[t])) return e[t];
                  g.o(g.S, t) || (g.S[t] = {});
                  var a = g.S[t],
                    i = "@mhiseg/esm-home-app",
                    u = (e, r, t, n) => {
                      var o = (a[e] = a[e] || {}),
                        u = o[r];
                      (!u ||
                        (!u.loaded && (!n != !u.eager ? n : i > u.from))) &&
                        (o[r] = { get: t, from: i, eager: !!n });
                    },
                    s = [];
                  return (
                    "default" === t &&
                      (u("@openmrs/esm-framework", "3.1.15-pre.834", () =>
                        g.e(16).then(() => () => g(16))
                      ),
                      u("react-i18next", "11.15.3", () =>
                        Promise.all([g.e(418), g.e(365)]).then(
                          () => () => g(418)
                        )
                      ),
                      u("react-router-dom", "5.3.0", () =>
                        Promise.all([g.e(536), g.e(365)]).then(
                          () => () => g(536)
                        )
                      ),
                      u("react", "16.14.0", () =>
                        g.e(294).then(() => () => g(294))
                      )),
                    (e[t] = s.length
                      ? Promise.all(s).then(() => (e[t] = 1))
                      : 1)
                  );
                }
              };
            })(),
            (g.p = ""),
            (n = (e) => {
              var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = t[1] ? r(t[1]) : [];
              return (
                t[2] && (n.length++, n.push.apply(n, r(t[2]))),
                t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
                n
              );
            }),
            (o = (e, r) => {
              (e = n(e)), (r = n(r));
              for (var t = 0; ; ) {
                if (t >= e.length)
                  return t < r.length && "u" != (typeof r[t])[0];
                var o = e[t],
                  a = (typeof o)[0];
                if (t >= r.length) return "u" == a;
                var i = r[t],
                  u = (typeof i)[0];
                if (a != u)
                  return ("o" == a && "n" == u) || "s" == u || "u" == a;
                if ("o" != a && "u" != a && o != i) return o < i;
                t++;
              }
            }),
            (a = (e) => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + 0.5) {
                t +=
                  0 == r
                    ? ">="
                    : -1 == r
                    ? "<"
                    : 1 == r
                    ? "^"
                    : 2 == r
                    ? "~"
                    : r > 0
                    ? "="
                    : "!=";
                for (var n = 1, o = 1; o < e.length; o++)
                  n--,
                    (t +=
                      "u" == (typeof (u = e[o]))[0]
                        ? "-"
                        : (n > 0 ? "." : "") + ((n = 2), u));
                return t;
              }
              var i = [];
              for (o = 1; o < e.length; o++) {
                var u = e[o];
                i.push(
                  0 === u
                    ? "not(" + s() + ")"
                    : 1 === u
                    ? "(" + s() + " || " + s() + ")"
                    : 2 === u
                    ? i.pop() + " " + i.pop()
                    : a(u)
                );
              }
              return s();
              function s() {
                return i.pop().replace(/^\((.+)\)$/, "$1");
              }
            }),
            (i = (e, r) => {
              if (0 in e) {
                r = n(r);
                var t = e[0],
                  o = t < 0;
                o && (t = -t - 1);
                for (var a = 0, u = 1, s = !0; ; u++, a++) {
                  var l,
                    f,
                    p = u < e.length ? (typeof e[u])[0] : "";
                  if (a >= r.length || "o" == (f = (typeof (l = r[a]))[0]))
                    return !s || ("u" == p ? u > t && !o : ("" == p) != o);
                  if ("u" == f) {
                    if (!s || "u" != p) return !1;
                  } else if (s)
                    if (p == f)
                      if (u <= t) {
                        if (l != e[u]) return !1;
                      } else {
                        if (o ? l > e[u] : l < e[u]) return !1;
                        l != e[u] && (s = !1);
                      }
                    else if ("s" != p && "n" != p) {
                      if (o || u <= t) return !1;
                      (s = !1), u--;
                    } else {
                      if (u <= t || f < p != o) return !1;
                      s = !1;
                    }
                  else "s" != p && "n" != p && ((s = !1), u--);
                }
              }
              var h = [],
                d = h.pop.bind(h);
              for (a = 1; a < e.length; a++) {
                var c = e[a];
                h.push(
                  1 == c ? d() | d() : 2 == c ? d() & d() : c ? i(c, r) : !d()
                );
              }
              return !!d();
            }),
            (u = (e, r) => {
              var t = e[r];
              return Object.keys(t).reduce(
                (e, r) => (!e || (!t[e].loaded && o(e, r)) ? r : e),
                0
              );
            }),
            (s = (e, r, t, n) =>
              "Unsatisfied version " +
              t +
              " from " +
              (t && e[r][t].from) +
              " of shared singleton module " +
              r +
              " (required " +
              a(n) +
              ")"),
            (l = (e, r, t, n) => {
              var o = u(e, t);
              return (
                i(n, o) ||
                  ("undefined" != typeof console &&
                    console.warn &&
                    console.warn(s(e, t, o, n))),
                f(e[t][o])
              );
            }),
            (f = (e) => ((e.loaded = 1), e.get())),
            (p = ((e) =>
              function (r, t, n, o) {
                var a = g.I(r);
                return a && a.then
                  ? a.then(e.bind(e, r, g.S[r], t, n, o))
                  : e(0, g.S[r], t, n, o);
              })((e, r, t, n, o) => (r && g.o(r, t) ? l(r, 0, t, n) : o()))),
            (h = {}),
            (d = {
              896: () =>
                p(
                  "default",
                  "@openmrs/esm-framework",
                  [1, 3, 14, 0, , "pre"],
                  () => g.e(16).then(() => () => g(16))
                ),
              365: () =>
                p("default", "react", [1, 16], () =>
                  g.e(294).then(() => () => g(294))
                ),
              397: () =>
                p("default", "react-i18next", [1, 11], () =>
                  g.e(418).then(() => () => g(418))
                ),
              246: () =>
                p("default", "react-router-dom", [1, 5], () =>
                  g.e(536).then(() => () => g(536))
                ),
            }),
            (c = { 202: [896], 365: [365], 397: [397], 804: [246] }),
            (g.f.consumes = (e, r) => {
              g.o(c, e) &&
                c[e].forEach((e) => {
                  if (g.o(h, e)) return r.push(h[e]);
                  var t = (r) => {
                      (h[e] = 0),
                        (g.m[e] = (t) => {
                          delete g.c[e], (t.exports = r());
                        });
                    },
                    n = (r) => {
                      delete h[e],
                        (g.m[e] = (t) => {
                          throw (delete g.c[e], r);
                        });
                    };
                  try {
                    var o = d[e]();
                    o.then ? r.push((h[e] = o.then(t).catch(n))) : t(o);
                  } catch (e) {
                    n(e);
                  }
                });
            }),
            (() => {
              var e = { 858: 0 };
              g.f.j = (r, t) => {
                var n = g.o(e, r) ? e[r] : void 0;
                if (0 !== n)
                  if (n) t.push(n[2]);
                  else if (/^3(65|97)$/.test(r)) e[r] = 0;
                  else {
                    var o = new Promise((t, o) => (n = e[r] = [t, o]));
                    t.push((n[2] = o));
                    var a = g.p + g.u(r),
                      i = new Error();
                    g.l(
                      a,
                      (t) => {
                        if (
                          g.o(e, r) &&
                          (0 !== (n = e[r]) && (e[r] = void 0), n)
                        ) {
                          var o = t && ("load" === t.type ? "missing" : t.type),
                            a = t && t.target && t.target.src;
                          (i.message =
                            "Loading chunk " +
                            r +
                            " failed.\n(" +
                            o +
                            ": " +
                            a +
                            ")"),
                            (i.name = "ChunkLoadError"),
                            (i.type = o),
                            (i.request = a),
                            n[1](i);
                        }
                      },
                      "chunk-" + r,
                      r
                    );
                  }
              };
              var r = (r, t) => {
                  var n,
                    o,
                    [a, i, u] = t,
                    s = 0;
                  if (a.some((r) => 0 !== e[r])) {
                    for (n in i) g.o(i, n) && (g.m[n] = i[n]);
                    u && u(g);
                  }
                  for (r && r(t); s < a.length; s++)
                    (o = a[s]), g.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                },
                t = (self.webpackChunk_mhiseg_esm_home_app =
                  self.webpackChunk_mhiseg_esm_home_app || []);
              t.forEach(r.bind(null, 0)),
                (t.push = r.bind(null, t.push.bind(t)));
            })(),
            g(356),
            g(546)
          );
        })()
      );
    },
  };
});
//# sourceMappingURL=mhiseg-esm-home-app.js.map
