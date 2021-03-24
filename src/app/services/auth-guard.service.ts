import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import "firebase/auth";
import "firebase/analytics";
import firebase from "firebase/app";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(private authService :AuthService,private router:Router) { }
  canActivate(): Observable<boolean> |   Promise<boolean>| boolean
  {
    return new Promise((resolve,reject)=>
    {
      firebase.auth().onAuthStateChanged((user)=>
      {
        if (user)
        {
          resolve(true);
        }
        else
        {
          reject(false);

          this.router.navigate(['/auth','sigin']);
        }
      });
    })
  }



}
