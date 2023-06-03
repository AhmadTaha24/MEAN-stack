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

  page : number =1

constructor(private activatedRoute: ActivatedRoute ,private bookService:BookService ,private router:Router){}


id: any;
book: any

ngOnInit() {

  this.id = this.activatedRoute.snapshot.params['id'];
  console.log(this.id);
  this.bookService.getBook(1).subscribe((res:any)=>{
    this.Books=res

    console.log(this.Books)
  

  }
  )
  
  


}
// getBooks(){
//   this.bookService.getBook("2").subscribe((res)=>console.log(res))
// }

// reciveFromChild(id:string){
//   this.emitFromChild.emit(id)

// }



pageNumber(number:number){
  this.page = number
  this.bookService.getBook(number).subscribe((res:any)=>this.Books=res)

}

nextPage(){
  this.page ++
  this.bookService.getBook(this.page).subscribe((res:any)=>{
      if((res.length==0)){
        this.page --               
      } else {
        this.Books = res
      }           
  })
  
  
}

prevPage(){
  this.page --
  this.bookService.getBook(this.page).subscribe((res:any)=>{
      if((this.page==0)){
        this.page ++               
      } else {
        this.Books = res
      }           
  })
  
  
}


reciveFromChild(id: string) {

  this.router.navigate(['book-details', id])
}
  
}
