import { Component, Input } from '@angular/core';
import { AdminAuthorsService } from 'src/app/services/admin-authors.service';
import { AdminBooksService } from 'src/app/services/admin-books.service';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ShalveService } from 'src/app/services/shalve.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  // @Input() BookData!:any
  // @Input() AuthorData!:any
  userId ="64733c0196b38ebbd71ef24b"
  arrRev:any =[];
  BookData:any =0;
  AuthorData:any =0;
  ReviewData:any = 0;
  shelveData:any = 0;

  constructor(private bookService:BookService,private authorData :AdminAuthorsService, private reviewData: ReviewsService, private allBooks: AdminBooksService, private allShelve: ShalveService ){}


  ngOnInit(){
    this.allShelve.getShelve().subscribe(async res=>{
      this.shelveData = await res;
   //   console.log(res);
      this.shelveData = <Array<any>>this.shelveData.filter((x:any)=>{
       // console.log(x.userId._id == this.userId);
        if(x.userId._id == this.userId){
          return x;
        }
       
        
      })
    })
    this.allBooks.getData().subscribe(res =>{
      //console.log(res);
      this.BookData = res}),
    this.authorData.getData().subscribe(res =>{this.AuthorData =res})
    this.reviewData.getData().subscribe(async(res:any )=>{
     // console.log(res[1].user._id);
      this.ReviewData= await res;
      //console.log(res);
      this.ReviewData = <Array<any>>this.ReviewData.filter((x:any)=>{
        //console.log(x.user._id == this.userId);
        if(x.user._id == this.userId){
          return x;
        }
       
        
      })
    }) 
    //console.log(this.ReviewData);

  }
  getCover(id:string){
    
  return  this.BookData.find((book:any)=>{
      
      book._id == id
      return book
    }).imageUrl;
  }

  getAuthor(id: string){
    return this.BookData.find((book:any)=>{    
      if(book._id == id){
      //  console.log(book);
        return book}
      
    }).authorId .fullName;
  }
  
  getShelve(id:string){
  //   return this.shelveData.find((shelve: any)=>{
  //     if(shelve.userId == this.userId && shelve.bookId == id){
  //       return shelve
  //     }
  //   }).shelve
  // 
  return this.shelveData.find((shelve:any)=>{
 

    if(shelve.bookId._id == id){

      return shelve
    };
    
  }).shelve


  }

  getAuthorShelve(authId: string){

    return this.AuthorData.find((author:any)=>{
      if(author._id == authId){return author}
      
    }).fullName
  }

  getRating(bookId: string){
    
    return this.ReviewData.find((review:any)=>{

      if(review.book._id == bookId){
        return review
      }
      else{
        return -1
      }
    }).ratting
  }
  getAvgRating(bookId: string){
    
    let avgg =  this.ReviewData.find((review:any)=>{
      console.log(review.book._id == bookId);
      if(true){return review}
    
    }).avg;

    if(avgg){
      return "avgg";
    }
    else{
      return ""
    }
  }


}

