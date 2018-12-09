// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://restcountries.eu/rest/v2',
  apiKey: 'AIzaSyAqHR9KE3zTg621_Ee0DHfRzov18cVIFfc',
  firebase:{
    apiKey: "AIzaSyBoGn-SvRzniT6htOg8eW6EMfx9sy3g7kI",
    authDomain: "operantictestcountries.firebaseapp.com",
    databaseURL: "https://operantictestcountries.firebaseio.com",
    projectId: "operantictestcountries",
    storageBucket: "operantictestcountries.appspot.com",
    messagingSenderId: "415457338661"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
