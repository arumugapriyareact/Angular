import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { CardComponent } from "./card.component"


@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,CardComponent], //can declare as many component as u want
    bootstrap:[AppComponent],//the component that needs to be loaded first is added here
})

export class AppModule{}