import { Component } from '@angular/core';
import { CategoryBookService } from '../services/category-book.service';
import { Book } from '../interfaces/book';
import { ActivatedRoute } from '@angular/router';
import { AuthourService } from '../services/authour.service';
import { Authour } from '../interfaces/authour';

@Component({
  selector: 'app-books-of-category',
  templateUrl: './books-of-category.component.html',
  styleUrls: ['./books-of-category.component.css']
})
export class BooksOfCategoryComponent {
  books!: Book [];
  authours !: Authour[] 
  id!: any
authorData!:any
constructor(private book: CategoryBookService, private route: ActivatedRoute, private authourService:AuthourService  ){}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id') 

  this.book.getBook(this.id).subscribe((res: any) => {this.books=res;
    
    // this.authorData=this.books[0].authorId;
    // this.authourService.getAuthourDetails(this.authorData).subscribe((res: any) => {   
    //   this.authours=res;
      
 //})
 } );

 

  // this.authourService.getAuthour(1).subscribe((res:any)=>this.authours=res)

}


}
