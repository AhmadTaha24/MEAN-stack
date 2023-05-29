import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { BooksOfCategoryComponent } from './books-of-category/books-of-category.component';

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"categories",component:ListCategoryComponent},
  { path:"AddCategory",component:AddCategoryComponent},
  { path:"editCategory",component:EditCategoryComponent},
  { path:"BooksOfCategory",component:BooksOfCategoryComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
