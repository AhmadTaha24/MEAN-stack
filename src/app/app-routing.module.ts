import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginHomeComponent } from './login-home/login-home.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'authors',
    component: AuthorsComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginHomeComponent
  },
  
  {
    path:'Categories',
    component: CategoriesComponent,
    // canActivate: [authGuardGuard]
  },
  
  {
    path:'books',
    component: BooksComponent,
  },
  
  // {
  //   path:'register',
  //   component: RegisterComponent
  // },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
