"use strict";
(self.webpackChunk_mhiseg_esm_home_app =
  self.webpackChunk_mhiseg_esm_home_app || []).push([
  [804],
  {
    804: (e, t, n) => {
      n.r(t), n.d(t, { default: () => u });
      var a = n(365),
        r = n.n(a),
        c = n(246),
        s = n(896),
        o = n(397);
      function m(e) {
        let { match: t, canSearch: n } = e;
        (0, s.useConfig)();
        const { t: a } = (0, o.useTranslation)();
        return r().createElement("section", null);
      }
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      const u = (e) => {
        let { canSearch: t = !0 } = e;
        return r().createElement(
          c.BrowserRouter,
          { basename: window.spaBase },
          r().createElement(
            "main",
            { className: "omrs-main-content" },
            r().createElement(c.Route, {
              path: "/home",
              exact: !0,
              component: (e) => r().createElement(m, l({ canSearch: t }, e)),
            })
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=804.js.map
