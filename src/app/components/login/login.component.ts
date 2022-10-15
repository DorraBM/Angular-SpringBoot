import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text="login"
  constructor( private formBuilder:FormBuilder) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',Validators.required]
      }
    )
  }
  login(form)
  {

  }
  get email()
  {
    return this.loginForm.controls.email;
  }
  get password()
  {
    return this.loginForm.controls.password;
  }


}
