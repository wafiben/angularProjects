import { Book } from './../../models/Book.model';
import { Router, ActivatedRoute  } from '@angular/router';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
Book:Book=new Book('','');

  constructor(private booksService:BooksService,private router:Router,private  activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void
  {
   this.Book=new Book('title','author');
   const id = this.activatedRoute .snapshot.params['id'];
   this.booksService.getSingleBook(+id).then(
     (Book:Book)=>
     {
      this.Book=Book;
     })
  }
  onBack()
  {
    this.router.navigate(['/books']);
  }

}
