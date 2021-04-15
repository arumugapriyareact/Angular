import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import countries from "../utils/countries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words="";
  limit=10;

  country="";
  noofcountry=Math.floor((Math.random() * 10) + 1);
  

  handleSlideChange(newLimit:number){
      this.limit=newLimit
  }

  generate(){   
    this.words=arrayWords.slice(0, this.limit).join(' ')
  }

 
  generateCountry(){
    this.country=countries.slice(0,this.limit).join(" ")
  }
}
