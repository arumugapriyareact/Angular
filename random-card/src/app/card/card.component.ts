import { Component, OnInit,Input } from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase

} from '@fortawesome/free-solid-svg-icons';
import {UserService} from "../services/user.service";
import {ToastrService} from "ngx-toastr"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  user;

  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;

  constructor(
    private userService:UserService,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
  }

  onReload(){
   
    this.userService.getUser().subscribe(
      (user:any)=>{
        console.log(user)
        this.user=user.results[0];//this data is obtained from api
      },
      (err)=>{
        this.toastr.error(err.status,"oops")
      }
    )
  }

}
