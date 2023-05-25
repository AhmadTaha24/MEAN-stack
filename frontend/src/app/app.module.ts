import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
