import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BookService } from './../../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  Books !: Book[]

constructor(private activatedRoute: ActivatedRoute ,private bookService:BookService ,private router:Router){}


id: any;
book: any

ngOnInit() {

  this.id = this.activatedRoute.snapshot.params['id'];
  this.bookService.getBook().subscribe((res:any)=>this.Books=res)

}
// getBooks(){
//   this.bookService.getBook("2").subscribe((res)=>console.log(res))
// }

// reciveFromChild(id:string){
//   this.emitFromChild.emit(id)

// }

reciveFromChild(id: string) {

  this.router.navigate(['book-details', id])
}
  
}
