import { Injectable } from '@angular/core';

import firebase from '../../../../node_modules/firebase' ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createNewUser(email:string,password:string)
  {
   return new Promise((resolve,reject)=>
   {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      ()=>
      {
        resolve('success');
      },
      (error)=>
      {
        reject(error);
      }
    )
   })


  }
  signInUser(email:string,password:string)
  {
   return new Promise((resolve,reject)=>
    {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        ()=>
        {
          resolve('success');
        },
        (error)=>
        {
          reject(error);
        })
    })

  }
  signOut()
  {
    firebase.auth().signOut();

  }




}
