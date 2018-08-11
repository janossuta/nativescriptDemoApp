// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "~/app.module";

const firebase = require("nativescript-plugin-firebase");

setTimeout(()=>{  firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    persist:false,
  }).then(
    instance => {
      console.log("firebase.init done");
    },
    error => {
      console.log(`firebase.init error: ${error}`);
    }
  );  },1000);

platformNativeScriptDynamic().bootstrapModule(AppModule);
