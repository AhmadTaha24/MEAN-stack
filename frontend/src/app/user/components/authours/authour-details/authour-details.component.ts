import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';
import { Book } from 'src/app/interfaces/book';
import { AuthourService } from 'src/app/services/authour.service';
import { BookService } from 'src/app/services/book.service';


export interface AuthorResponse { status: string, data: Authour };
@Component({
  selector: 'app-authour-details',
  templateUrl: './authour-details.component.html',
  styleUrls: ['./authour-details.component.css']
})
export class AuthourDetailsComponent {

  authours !: Authour[]
  Books: Book[] = [];

  authour !: Authour
  // book !: Book

  id: any


  book: any

  // allBooks !: Book[]


  constructor(private activatedRoute: ActivatedRoute, private authourService: AuthourService, private bookService: BookService) {

    // this.bookService.getBook(1).subscribe((res:any)=>console.log(res))
    // console.log(this.Books)


  }






  ngOnInit() {
    // let authourId =this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.authourService.getAuthourDetails(param['id'])
          .subscribe((user) => {
            this.authour = user.data?.authour;
            console
              .log(this.authour)
          })


        this.bookService.getBook(1).subscribe(res =>{
          console.log(res);
                  })
      }
    })
    // console.log(authourId);


    // this.authourService.getAuthourDetails(authourId).subscribe((res: any) => {
    //   // console.log(res);

    //   console.log(res)
    //   this.authour = res.data.authour

    //   console.log(this.authour)

    //   // console.log(this.authour)


    //   // this.id = this.activatedRoute.snapshot.params['id'];
    //   // // console.log(this.id);
    //   // this.bookService.getBook(1).subscribe((res:any)=>{

    //   //   this.Books=res
    //   // const returnValue=  this.Books.filter(book=>book.authorId._id.toLowerCase().includes("647356636ca4714edb7c0fb7".toLowerCase) )


    //   //   console.log(returnValue)


    //   // }
    //   // )


    // })









    // this.selectProduct  =this.products.find(product=>product.id == this.activatedRoute.snapshot.params['id'])

    // let bookId =this.activatedRoute.snapshot.params['id'];
    // console.log("book id "+bookId);


    // this.bookService.getBookDetails(bookId).subscribe((res: any) => {

    //   this.book = res.data.book
    //   console.log(" book data" +res.data.book)
    // })

    // const returnApiBook = []

    //  while(1){

    //   let count=1


    // //  this.allBooks.push(...this.Books)

    //   this.bookService.getBook(1).subscribe((res:any)=>this.Books=res)

    //   if(this.Books==null){
    //     console.log("break")
    //     break;
    //   }


    //   console.log(count)
    //   count++;




    //  }

    //  console.log(this.allBooks)

    // this.id = this.activatedRoute.snapshot.params['id'];






  }

}
