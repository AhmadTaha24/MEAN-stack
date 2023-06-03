import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryBookService } from '../services/category-book.service';
import { Book } from '../interfaces/book';


@Component({
  selector: 'app-books-of-category',
  templateUrl: './books-of-category.component.html',
  styleUrls: ['./books-of-category.component.css']
})
export class BooksOfCategoryComponent {
  books!: Book[]
  id!: any

  constructor(private book: CategoryBookService, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this.book.getBook(this.id).subscribe((res: any) => console.log(res)

    );
    // this.book.getBook("2").subscribe((res: any) => this.books=res);
    this.book.getBook(this.id).subscribe((res: any) => this.books = res);
    console.log(this.id);


  }


}
