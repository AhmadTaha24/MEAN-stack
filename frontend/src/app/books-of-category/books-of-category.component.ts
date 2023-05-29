import { Component } from '@angular/core';
import { CategoryBookService } from '../services/category-book.service';

@Component({
  selector: 'app-books-of-category',
  templateUrl: './books-of-category.component.html',
  styleUrls: ['./books-of-category.component.css']
})
export class BooksOfCategoryComponent {
constructor(private book: CategoryBookService){}
getBooks(){
  this.book.getBook("1").subscribe((res: any) => console.log(res)
  );


}


}
