import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})  
export class UsersComponent implements OnInit {


  logReg:string;

  constructor(private router: Router) {
    this.logReg = "Login";
    router.navigate(["/users/register"])
   }

   changeForm() {
    this.isLogReg()
  }

  isLogReg() {
      if (this.logReg == "Login") {
        this.logReg = "Registration";
        this.router.navigate(["/users/auth"])
      }
      else {
        this.logReg = "Login";
        this.router.navigate(["/users/register"])
      }
    }

  ngOnInit() {}

}
