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
import {AuthorsComponent} from './admin/authors/authors.component'

const routes: Routes = [
  { path:"",
  component:HomeComponent
  },
  { path:"categories",
  component:ListCategoryComponent
  },
  { path:"AddCategory",
  component:AddCategoryComponent
  },
  { path:"editCategory",
  component:EditCategoryComponent
 },

  {
    path:'books',
    component: BooksComponent,
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'authors',
    component: AuthorsComponent
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
