import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EmailValidator, FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Routes, RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  errorMessage:string='';
  signInForm = new FormGroup({
    email: new FormControl('eamil'),
    password: new FormControl('password ')
  });
  /*this.form.controls['your form control name'].value*/
    constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }


    onSubmit()
    {/*email = mDisplayEmail.getEditText().getText().toString();*/
      const email:string=this.signInForm.controls.email.value;
      const password:string =this.signInForm.controls['password'].value;
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

          console.log(email);
          console.log('there is a probleme check your code ');
          alert(this.errorMessage);

        });
    }

    ngOnInit(): void
    {

    }
  }




