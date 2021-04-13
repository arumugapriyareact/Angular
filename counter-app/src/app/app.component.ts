import { Component } from '@angular/core';
/* this is the component in which all the variables are declared */
@Component({/* this is anoter decorator which has prcisely three values provided by angular */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'Counter App';
  count:number=0;

    handleIncrement=()=>{
      if(this.count<10){
        this.count=this.count+1
      }
      
    };

    handleDecrement=()=>{
      if(this.count>0){
        this.count=this.count-1
      }
      
    }

    handleReset=()=>{
      this.count=0;
    }
}


