import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CategoryComponent } from './category/category.component';
//import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
//import { ListCategoryComponent } from './list-category/list-category.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { BooksOfCategoryComponent } from './books-of-category/books-of-category.component';
import { BooksComponent } from './user/components/books/books.component';
import { AuthoursComponent } from './user/components/authours/authours.component';
import { AuthourCardComponent } from './user/components/authours/authour-card/authour-card.component';
import { AuthourDetailsComponent } from './user/components/authours/authour-details/authour-details.component';

import { FooterComponent } from './user/footer/footer.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookCardComponent } from './user/components/books/book-card/book-card.component';
import { BooksDetailsComponent } from './user/components/books/books-details/books-details.component';

import { AuthorsComponent } from './admin/authors/authors.component'
import { adminBooksComponent } from './admin/books/books.component'
import { AllComponent } from './user/components/home-page/all/all.component'
import { ReadComponent } from './user/components/home-page/read/read.component'
<<<<<<< HEAD
import { WantToReadComponent } from './user/components/home-page/want-to-read/want-to-read.component'
import { CategoryBodyComponent } from './books-of-category/category-body/category-body.component';
import { AuthorInforComponent } from './books-of-category/author-info/author-infor.component';
=======
import { WantToReadComponent } from './user/components/home-page/want-to-read/want-to-read.component';
import { AdminComponent } from './admin/admin.component'
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

>>>>>>> 174ef567cd35569e21bceeb621504d5d2b4b0591


@NgModule({
  declarations: [
    AppComponent,
    // CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    HomeComponent,
    EditCategoryComponent,
    BooksOfCategoryComponent,
    BooksComponent,
    AuthoursComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    BookCardComponent,
    AuthorsComponent,
    adminBooksComponent,
    AuthourCardComponent,
    AuthourDetailsComponent,
    BooksDetailsComponent,
    AllComponent,
    ReadComponent,
    WantToReadComponent,
<<<<<<< HEAD
    CategoryBodyComponent,
    AuthorInforComponent
=======
    AdminComponent
>>>>>>> 174ef567cd35569e21bceeb621504d5d2b4b0591
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
