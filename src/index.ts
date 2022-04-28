import {getAsyncLifecycle, defineConfigSchema, registerBreadcrumbs} from '@openmrs/esm-framework';
import { configSchema } from "./config-schema";

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');


function setupOpenMRS(){
  const moduleName = '@mhiseg/esm-home-app';
  const pageName = 'home';

  const options = {
    featureName: pageName,
    moduleName
  };

  defineConfigSchema(moduleName, configSchema);


  registerBreadcrumbs([
    {
      path: `${window.spaBase}/${pageName}`,
      title: 'Home'
    }
  ]);

  return {
    pages: [
      {
        load: getAsyncLifecycle(() => import('./root.component'), options),
        route: pageName
      }
    ]
  }
}

export {importTranslation, setupOpenMRS};










//
//
// import { getAsyncLifecycle, defineConfigSchema } from "@openmrs/esm-framework";
// import { configSchema } from "./config-schema";
//
// const importTranslation = require.context('../translations', false, /.json$/, 'lazy');
//
// function setupOpenMRS() {
//   const moduleName = '@mhiseg/esm-home-app';
//   const pageName = 'home'
//
//   const options = {
//     featureName: pageName,
//     moduleName,
//   };
//
//   defineConfigSchema(moduleName, configSchema);
//
//   return {
//     pages: [
//       {
//         load: getAsyncLifecycle(() => import("./hello"), options),
//         route: "hellos",
//       },
//     ]
//   };
// }
//
// export {importTranslation, setupOpenMRS };
