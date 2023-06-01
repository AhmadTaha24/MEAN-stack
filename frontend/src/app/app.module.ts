import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { BooksOfCategoryComponent } from './books-of-category/books-of-category.component';
import { BooksComponent } from './user/components/books/books.component';
import { AuthoursComponent } from './user/components/authours/authours.component';
import { FooterComponent } from './user/footer/footer.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookCardComponent } from './user/components/books/book-card/book-card.component';
import { BooksDetailsComponent } from './user/components/books/books-details/books-details.component';
import { AuthourCardComponent } from './user/components/authours/authour-card/authour-card.component';
import { AuthourDetailsComponent } from './user/components/authours/authour-details/authour-details.component';
// import { AuthourComponent } from './interfaces/authour/authour.component';
// import { HomePageComponent } from './user/components/home-page/home-page.component';
// import { AllComponent } from './user/components/homePage/all/all.component';
// import { ReadComponent } from './user/components/homePage/read/read.component';

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
    BooksDetailsComponent,
    AuthourCardComponent,
    AuthourDetailsComponent,
    // AuthourComponent,
    // HomePageComponent,
    // AllComponent,
    // ReadComponent
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
