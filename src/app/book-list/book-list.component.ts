import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Book } from './../models/Book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit,  OnDestroy{

  constructor(private booksService:BooksService,private router:Router ) { }
  errorMessage:string=this.booksService.errorMessage;
  books:Book[]=[];
  booksSubscription=new Subscription();
  ngOnInit(): void
  {
    this.booksSubscription=this.booksService.bookSubject.subscribe(
      (books:Book[])=>
      {
        this.books=books;
      },
      (error:any)=>
      {
        console.log('error:'+error);
      },
      ()=>
      {
        console.log('observable complete ');
      }

      )

      this.booksService.emitBook();

  }


deleteBook(id:number)
{
  this.booksService.deleteSpeceficBook(id);
}

createNeweBook()
{
  this.router.navigate(['/books,new']);
}
onViewBook(id :number)
{
  this.router.navigate(['/books,view',id]);
}

  ngOnDestroy(): void
  {
    this.booksSubscription.unsubscribe();
  }

}
