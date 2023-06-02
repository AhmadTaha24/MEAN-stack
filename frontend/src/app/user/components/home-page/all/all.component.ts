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


  userId ="64733c0196b38ebbd71ef24b" /**this part to simulate login playload */


  arrRev:any =[];
  BookData:any =0;
  AuthorData:any =0;
  ReviewData:any = 0;
  shelveData:any = 0;
  constructor(private bookService:BookService,private authorData :AdminAuthorsService, private reviewData: ReviewsService, private allBooks: AdminBooksService, private allShelve: ShalveService ){}

////////getting data from db
  ngOnInit(){
    ////// filtering the shelve data to specific userId
    this.allShelve.getShelve().subscribe(async res=>{
      this.shelveData = await res;

      this.shelveData = <Array<any>>this.shelveData.filter((x:any)=>{

        if(x.userId._id == this.userId){
          return x;
        }
       
        
      })
    })
    ////////
    this.allBooks.getData().subscribe(res =>{
      //console.log(res);
      this.BookData = res}),
    this.authorData.getData().subscribe(res =>{this.AuthorData =res})


    ////// filtering the review data to specific userId

    this.reviewData.getData().subscribe(async(res:any )=>{
      this.ReviewData= await res;
      this.ReviewData = <Array<any>>this.ReviewData.filter((x:any)=>{
        if(x.user._id == this.userId){
          return x;
        }
       
        
      })
    }) 
    ///////////

  }
  //////get cover image
  getCover(bookId:string){

  return  this.BookData.find((book:any)=>{
      
      book._id == bookId
      return book
    }).imageUrl;
  }
  ////////

  getAuthor(id: string){

    return this.BookData.find((book:any)=>{    
      if(book._id == id){
      //  console.log(book);
        return book}
      
    }).authorId .fullName;
  }

    

  ///////getting shelve data
  getShelve(bookId:string){

  return this.shelveData.find((shelve:any)=>{
 

    if(shelve.bookId._id == bookId){

      return shelve
    };
    
  }).shelve

  }
  ///////
 

  //////get author for shelve table
  getAuthorShelve(authId: string){
    console.log(this.ReviewData[0].book._id);
    console.log(this.ReviewData.find((rev:any)=>{
      if(rev.book._id == "647356636ca4714edb7c0fb7"){return rev}
    }));
    return this.AuthorData.find((author:any)=>{
      if(author._id == authId){return author}
      
    }).fullName
  }
  ///////


  ////////get ratting for shelve table
  getRating(bookId: string){
    console.log(this.ReviewData[0]);
    let rating;
    try{ /////throw error if cannot find ratting for a book
      let result= this.ReviewData.find((rev:any)=>{
        if(rev.book._id == bookId){return rev}
      }).ratting
      rating = result
    }
    catch(err){

    }
    
    if(rating){ //////display  ratting if found
      return rating
    }
    else{
      return "not ratted"
    }
  }
  ////////////





  ///////get  average ratting for shelve table

  getAvgRating(bookId: string){
    console.log(this.ReviewData[0]);
    let avgRating;
    try{ /////throw error if cannot find average ratting for a book
      let result= this.ReviewData.find((rev:any)=>{
        if(rev.book._id == bookId){return rev}
      }).avg
      avgRating = result
    }
    catch(err){

    }
    
    if(avgRating){ //////display average ratting if found
      return avgRating
    }
    else{
      return "not ratted"
    }
  /////////////


}

}