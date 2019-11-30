import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regFormGroup: FormGroup;

  constructor() {
    this.regFormGroup = new FormGroup({
      "firstName": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      "lastName": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "conPassword": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "learning": new FormControl("Learning", this.learningValidation),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "phone": new FormControl("+7", [Validators.required,Validators.pattern("([0-9]{11})|\\+7([0-9]{10})")]),
      "profession": new FormControl("Profession", this.professionValidator),
      "language": new FormControl("Language",this.languageValidator)
    });
   }

  ngOnInit() {
  }
  
  languageValidator(form: FormControl): {[s:string]:boolean} {
    if (form.value== "Language"){
        return { "language": false};
    }
  }
  professionValidator(form: FormControl): {[s:string]: boolean} {
    if (form.value == "Profession") {
      return {"profession": false}
    }
  }
  learningValidation(form: FormControl) : {[s:string]: boolean} {
    if (form.value == "Learning") {
      return {"learning": false}
    } 
  }

}
