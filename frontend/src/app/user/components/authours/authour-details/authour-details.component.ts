import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';
import { Book } from 'src/app/interfaces/book';
import { AuthourService } from 'src/app/services/authour.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-authour-details',
  templateUrl: './authour-details.component.html',
  styleUrls: ['./authour-details.component.css']
})
export class AuthourDetailsComponent {

  authours !: Authour[] 
  Books !: Book[]

  authour !: Authour
  book !: Book


  constructor(private activatedRoute:ActivatedRoute,private authourService:AuthourService,private bookService:BookService){}

 

 


  ngOnInit() {
    let authourId =this.activatedRoute.snapshot.params['id'];
    // console.log(authourId);
  

    this.authourService.getAuthourDetails(authourId).subscribe((res: any) => {
      // console.log(res);

      console.log(res)
      this.authour = res.data.authour

      console.log(this.authour)

      
     
    })

    // let bookId =this.activatedRoute.snapshot.params['id'];
    // console.log("book id "+bookId);
    

    // this.bookService.getBookDetails(bookId).subscribe((res: any) => {

    //   this.book = res.data.book
    //   console.log(" book data" +res.data.book)
    // })


  


    

}

}
