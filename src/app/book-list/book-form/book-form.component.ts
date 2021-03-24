import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Book } from 'src/app/models/Book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  constructor(private booksService:BooksService,private formBuilder:FormBuilder,private router:Router) { }
   BookForm:FormGroup=this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required]
   });
  ngOnInit(): void
  {

  }
  initForm()
  {
   this.BookForm=this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required]
   });
  }
   onSaveBooks()
   {
     const title=this.BookForm.get('title');
     const author=this.BookForm.get('author');
     const newBook=new Book(title,author);
     this.booksService.creatNewBook(newBook);
     this.router.navigate(['/books']);

   }

  }

}
