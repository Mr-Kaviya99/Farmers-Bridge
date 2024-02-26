// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,

  firebaseConfig : {
    apiKey: "AIzaSyDFKbWnKhcstFgy5qpb0KQDhZjg2ls61C4",
    authDomain: "farmers-bridge.firebaseapp.com",
    projectId: "farmers-bridge",
    storageBucket: "farmers-bridge.appspot.com",
    messagingSenderId: "258274142562",
    appId: "1:258274142562:web:f98375543d1c11e67e243b",
    measurementId: "G-TKG91EC9QT"
  },
  baseUrl:'http://localhost:8002/api/v1/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
