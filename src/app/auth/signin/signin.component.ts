import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 /* SigninForm:FormGroup="";
  errorMessage:string="";

  constructor(private authService:AuthService) { }


{
const email=this.SigninForm.get('email')?.value;
const password=this.SigninForm.get('password')?.value;
this.authService.signInUser(email,password)
}*/
ngOnInit(): void {
}

}
