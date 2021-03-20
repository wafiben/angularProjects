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



const routes: Routes = [{path: 'first-component', component:SignupComponent},
{},
{},
{}]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    BookFormComponent,
    SingleBookComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService,AuthService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
