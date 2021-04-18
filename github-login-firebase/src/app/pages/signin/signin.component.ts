import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import {Router } from "@angular/router";
import {ToastrService } from 'ngx-toastr';
import {AuthService} from "./../../services/auth.service"


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private toastr:ToastrService,
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
   
  }

  onSubmit(f: NgForm){
    const {email,password}= f.form.value;//to get email and password from form
    this.auth.signIn(email,password)
    .then((res)=>{
      this.router.navigateByUrl("/");
      this.toastr.success("SignIn Success")
    })
    .catch((err)=>{
      console.log(err.message)
      this.toastr.error("SignIn failed")
    })
  }

}
