import {
  getAsyncLifecycle,
  defineConfigSchema,
  registerBreadcrumbs,
} from "@openmrs/esm-framework";
import { esmHomeSchema } from "./openmrs-esm-home-schema";

const backendDependencies = {
  "webservices.rest": "^2.24.0",
  fhir2: "^1.2.0",
};

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@mhiseg/esm-home-app";
  const pageName = "home";

  const options = {
    featureName: pageName,
    moduleName,
  };

  defineConfigSchema(moduleName, esmHomeSchema);

  registerBreadcrumbs([
    {
      path: `${window.spaBase}/${pageName}`,
      title: "Home",
    },
  ]);

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import("./root.component"), options),
        route: pageName,
        online: { canSearch: true },
        offline: { canSearch: false },
      },
    ],
  };
}

export { importTranslation, setupOpenMRS, backendDependencies };
