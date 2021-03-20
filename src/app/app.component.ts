import { Component } from '@angular/core';
import "firebase/analytics";
import firebase from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor(){
  var firebaseConfig = {
    apiKey: "AIzaSyDknPe_SobNMbTo8lFg4FGoJy7Qg9_QgrM",
    authDomain: "bookshelves-7a770.firebaseapp.com",
    projectId: "bookshelves-7a770",
    storageBucket: "bookshelves-7a770.appspot.com",
    messagingSenderId: "896835585826",
    appId: "1:896835585826:web:7007ee1fcfe646cf4e477b",
    measurementId: "G-ZHXPDR0DRT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
}
