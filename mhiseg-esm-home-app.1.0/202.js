(self.webpackChunk_mhiseg_esm_home_app =
  self.webpackChunk_mhiseg_esm_home_app || []).push([
  [202],
  {
    202: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          backendDependencies: () => s,
          importTranslation: () => o,
          setupOpenMRS: () => r,
        });
      var i = n(896);
      const a = {
          buttons: {
            enabled: {
              _type: i.Type.Boolean,
              _default: !0,
              _description:
                "Whether to show big buttons on the home page (including extensions)",
            },
            list: {
              _type: i.Type.Array,
              _elements: {
                label: { _type: i.Type.String },
                link: {
                  _type: i.Type.String,
                  _validators: [i.validators.isUrl],
                },
                requiredPrivilege: { _type: i.Type.String },
                spa: { _type: i.Type.Boolean, _default: !1 },
              },
              _default: [],
              _description:
                "Custom buttons to add, which will come after the button extensions",
            },
          },
          search: {
            patientResultUrl: {
              _default: "${openmrsSpaBase}/patient/${patientUuid}/chart",
              _description:
                "Where clicking a patient result takes the user. Accepts template parameter ${patientUuid}",
              _validators: [
                i.validators.isUrlWithTemplateParameters(["patientUuid"]),
              ],
            },
          },
          widgets: {
            enabled: {
              _type: i.Type.Boolean,
              _default: !0,
              _description:
                "Whether to show widgets on the home page (including extensions)",
            },
          },
        },
        s = { "webservices.rest": "^2.24.0", fhir2: "^1.2.0" },
        o = n(979);
      function r() {
        const e = "@mhiseg/esm-home-app",
          t = "home",
          s = { featureName: t, moduleName: e };
        return (
          (0, i.defineConfigSchema)(e, a),
          (0, i.registerBreadcrumbs)([
            { path: `${window.spaBase}/home`, title: "Home" },
          ]),
          {
            pages: [
              {
                load: (0, i.getAsyncLifecycle)(
                  () =>
                    Promise.all([n.e(365), n.e(397), n.e(804)]).then(
                      n.bind(n, 804)
                    ),
                  s
                ),
                route: t,
                online: { canSearch: !0 },
                offline: { canSearch: !1 },
              },
            ],
            extensions: [
              {
                id: "death-management-link",
                slot: "app-menu-slot",
                load: (0, i.getAsyncLifecycle)(
                  () =>
                    Promise.all([n.e(365), n.e(397), n.e(742)]).then(
                      n.bind(n, 742)
                    ),
                  s
                ),
                privilege: "App: death.management",
              },
              {
                id: "system-administration-link",
                slot: "app-menu-slot",
                load: (0, i.getAsyncLifecycle)(
                  () =>
                    Promise.all([n.e(365), n.e(397), n.e(806)]).then(
                      n.bind(n, 806)
                    ),
                  s
                ),
                privilege: "App: system.administration",
              },
            ],
          }
        );
      }
    },
    979: (e, t, n) => {
      var i = {
        "./en.json": [574, 574],
        "./fr.json": [757, 757],
        "./kr.json": [520, 520],
      };
      function a(e) {
        if (!n.o(i, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = i[e],
          a = t[0];
        return n.e(t[1]).then(() => n(a));
      }
      (a.keys = () => Object.keys(i)), (a.id = 979), (e.exports = a);
    },
  },
]);
//# sourceMappingURL=202.js.map
