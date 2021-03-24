import { BookListComponent } from './book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BooksService } from './services/books.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{  HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
{path: 'auth/signup', component: SignupComponent},
{path: 'auth/signin', component:SigninComponent},
{path: 'books', component:BookListComponent,canActivate: [ AuthGuardService ]},
{path: 'books/new', component:BookFormComponent,canActivate: [ AuthGuardService ]},
{path: 'books/view/:id', component:SingleBookComponent,canActivate: [ AuthGuardService ]},
{ path: '',   redirectTo: 'books', pathMatch: 'full',canActivate: [ AuthGuardService ]}

]


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    BookFormComponent,
    SingleBookComponent,
    HeaderComponent,
    BookListComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService,AuthService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
