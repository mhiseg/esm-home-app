"use strict";
(self.webpackChunk_mhiseg_esm_home_app =
  self.webpackChunk_mhiseg_esm_home_app || []).push([
  [742],
  {
    742: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var s = a(365),
        n = a.n(s),
        r = a(896),
        u = a(397);
      function i() {
        const { t: e } = (0, u.useTranslation)(),
          [t, a] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            (0, r.getCurrentUser)({ includeAuthStatus: !0 }).subscribe((e) =>
              a(e?.user?.systemId.split("-")[0])
            );
          }, [t]),
          ((t) => {
            switch (t) {
              case "doctor":
                return n().createElement(
                  r.ConfigurableLink,
                  { to: "${openmrsBase}/spa/death/list-unvalidate" },
                  e("Death Management")
                );
              case "nurse":
                return n().createElement(
                  r.ConfigurableLink,
                  { to: "${openmrsBase}/spa/death/search" },
                  e("Death Management")
                );
              default:
                return n().createElement(
                  r.ConfigurableLink,
                  { to: "${openmrsBase}/spa/death" },
                  e("Death Management")
                );
            }
          })(t)
        );
      }
    },
  },
]);
//# sourceMappingURL=742.js.map
