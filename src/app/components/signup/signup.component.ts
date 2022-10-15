import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  text="Sign Up"
  constructor(private formBuilder:FormBuilder) { }
  signForm:FormGroup;

  ngOnInit(): void {
    this.signForm=this.formBuilder.group
    ({ 
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      number:['',[Validators.required,Validators.maxLength(8)]],
      adresse:['',Validators.required],
      password:['',Validators.required]
    }
    )

  
  }
  signup(form)
  {
    
  }
  get firstName()
  {
    return this.signForm.controls.firstName;
  }
  get lastName()
  {
    return this.signForm.controls.lastName;
  }

  get email()
  {
    return this.signForm.controls.email;
  }

  get number()
  {
    return this.signForm.controls.number;
  }
  get adresse()
  {
    return this.signForm.controls.adresse;
  }

  get password()
  {
    return this.signForm.controls.password;
  }



}
