import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent {
  Books !: Book[]
 
  selectedBook !: any;
  book !: Book


  constructor(private activatedRoute:ActivatedRoute,private bookService:BookService){}

  // ngOnInit(){
  //   this.selectedBook=this.Books.find(book=>book._id === this.activatedRoute.snapshot.params['id'])
  //   this.bookService.getBook().subscribe((res:any)=>this.Books=res)

  // }

 


  ngOnInit() {
    let bookId =this.activatedRoute.snapshot.params['id'];
    // console.log(bookId)
    // console.log(this.activatedRoute)

    this.bookService.getBookDetails(bookId).subscribe((res: any) => {

      // console.log(res.data.book)
      
  
      this.book = res.data.book

      console.log(this.book)
    })

}
}
