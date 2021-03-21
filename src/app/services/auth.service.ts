import { Injectable } from '@angular/core';
import "firebase/analytics";
import firebase from "firebase/app";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createNewUser(email:string,password:string)
  {
   var promiseCreat=new Promise((resolve,reject)=>
   {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      ()=>
      {
        resolve('success');
      },
      (error)=>
      {
        reject(error);
      })
   })
   return promiseCreat;

  }
  signInUser(email:string,password:string)
  {
    var promiseSignin = new Promise((reslove,reject)=>
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
    return promiseSignin
  }
  sigOut(email:string,password:string)
  {
    firebase.auth().signOut()

  }




}
