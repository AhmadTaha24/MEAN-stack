import { Component } from '@angular/core';
import { CategoryBookService } from '../services/category-book.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-books-of-category',
  templateUrl: './books-of-category.component.html',
  styleUrls: ['./books-of-category.component.css']
})
export class BooksOfCategoryComponent {
  books!: Book [] 

constructor(private book: CategoryBookService){}
ngOnInit(): void {
  this.book.getBook("3").subscribe((res: any) => console.log(res)
  
  
  );
  // this.book.getBook("2").subscribe((res: any) => this.books=res);
  this.book.getBook("3").subscribe((res: any) => this.books=res);

}


}
