import {Component} from "@angular/core"


@Component({
    selector:"my-app-main",
    templateUrl: "./app.component.html",//the templateUrl i sused to point to another file that needs to be loaded
    styleUrls:["./app.component.css"], //the styling component is applied here
    // the style from one or more component can be added using comma
})
export class AppComponent{}