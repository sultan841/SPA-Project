import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authFormGroup:FormGroup;

  constructor(private router:Router) {
    this.authFormGroup = new FormGroup(
      {
        "login": new FormControl("",[Validators.required, Validators.email]),
        "password": new FormControl("", Validators.required)
      });
  }
  login() {
    this.router.navigate(["/main/profile"])
  }

  ngOnInit() {

  }
}
