import { Book } from './../models/Book.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import firebase from "firebase/app";
import { promise } from 'selenium-webdriver';


@Injectable()
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor()
  {
    this.getBooks();
   }
books:Book[]=[];
bookSubject=new Subject<Book[]>();
errorMessage:string='';
emitBook()
{
this.bookSubject.next(this.books);
}
saveBook()
{
  firebase.database().ref('/books').set(this.books);
}
getBooks()
{
  firebase.database().ref('/books').on('value',
  (snapshot)=>
  {
    this.books=snapshot.val();
    console.log(snapshot.val());
    this.emitBook();
  })
}
getSingleBook(id:number):Promise<Book>
  {
    return new Promise((resolve,reject)=>
    {
      firebase.database().ref('/books').once('value').then(
        (snapshot)=>
        {
          resolve(snapshot.val());
        },
        (error)=>
        {
          reject(error);
          this.errorMessage=error;
        }
        )
    })
  }
  creatNewBook(newBook:Book)
  {
   this.books.push(newBook);
   this.saveBook();
   this.emitBook();
  }
  deleteSpeceficBook(id:number)
  {
    firebase.database().ref('/books'+id).remove();
    this.saveBook();
    this.emitBook();
  }



}
