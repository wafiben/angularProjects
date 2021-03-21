import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router}from '@angular/router';
import { Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
errorMessage:string='';
signUpForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
})
/*this.form.controls['your form control name'].value*/
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }


  onSubmit()
  {
    const email:string=this.signUpForm.controls['email'].value;
    const password:string =this.signUpForm.controls['password'].value;
    this.authService.createNewUser(email,password)
    .then(
    ()=>
    {
      this.router.navigate(['/books']);
     console.log('connecter bous sur les paths pas de probleme');
      alert('no problem');
    },
      (error:any)=>
      {
        this.errorMessage=error;
        console.log('there is a probleme check your code ');
        alert(this.errorMessage);
      });
  }

  ngOnInit(): void
  {
    this.initForm();
  }
  initForm()
  {
    this.signUpForm = this.formBuilder.group({
      email:['',[Validators.required]] ,
      password: ['' ,[Validators.required,Validators.minLength(6)]]
    });
  }



}
