import { getAsyncLifecycle, defineConfigSchema } from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
  const moduleName = '@mhiseg/esm-home-app';
  const pageName = 'home'

  const options = {
    featureName: pageName,
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import("./hello"), options),
        route: "hello",
      },
    ],
    extensions: [
      {
        id: "Red box",
        load: getAsyncLifecycle(
          () => import("./boxes/extensions/red-box"),
          options
        ),
        slot: "Boxes",
      },
      {
        id: "Blue box",
        load: getAsyncLifecycle(
          () => import("./boxes/extensions/blue-box"),
          options
        ),
        slot: "Boxes",
        // same as `slots: ["Boxes"],`
      },
      {
        id: "Brand box",
        load: getAsyncLifecycle(
          () => import("./boxes/extensions/brand-box"),
          options
        ),
        slot: "Boxes",
      },
    ],
  };
}

export {importTranslation, setupOpenMRS };
