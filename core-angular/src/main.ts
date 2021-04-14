import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

/* platformBrowserDynamic is a functon and it has various methods and bootstrap Module method is used
to give the entry file that is the filw that need to appear when the file is called*/
platformBrowserDynamic().bootstrapModule(AppModule)// platformBrowserDynamic says that we are creating a browser module and it gonna bootstrap the app component in the start