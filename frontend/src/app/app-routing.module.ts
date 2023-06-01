import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AuthoursComponent } from './user/components/authours/authours.component';
import { BooksComponent } from './user/components/books/books.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BooksDetailsComponent } from './user/components/books/books-details/books-details.component';
import { AuthourDetailsComponent } from './user/components/authours/authour-details/authour-details.component';
import { BooksOfCategoryComponent } from './books-of-category/books-of-category.component';
import { AllComponent } from './user/components/home-page/all/all.component';

const routes: Routes = [
  { path:"",
  component:HomeComponent
  },
  { path:"categories",
  component:ListCategoryComponent
  },
  { path:"BooksOfCategory/:id",
  component:BooksOfCategoryComponent
  },
  { path:"AddCategory",
  component:AddCategoryComponent
  },
  { path:"editCategory",
  component:EditCategoryComponent
 },
  {
    path:'authors',
    component: AuthoursComponent
  },
  {
    path:'books',
    component: BooksComponent,
  },


  // { path: 'books',
  // children: [
  //     { path: '/1', component: BooksComponent },
  //     { path: '/2', component: BooksComponent },
  // ] }


  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'user',
    component:AllComponent
  },
  {
    path:'book-details/:id',
    component: BooksDetailsComponent
  },
  {
    path:'authour-details/:id',
    component: AuthourDetailsComponent
  },
  
  // {
  //   path:'Categories',
  //   component: CategoriesComponent,
  //   // canActivate: [authGuardGuard]
  // },
  


  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
