import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthourService } from '../services/authour.service';
import { Book } from '../interfaces/book';
import { Authour } from '../interfaces/authour';
import { CaregoriesService } from '../services/caregories.service';
import { CategoryBookService } from '../services/category-book.service';

@Component({
  selector: 'app-books-of-category',
  templateUrl: './books-of-category.component.html',
  styleUrls: ['./books-of-category.component.css']
})
export class BooksOfCategoryComponent {
  page : number =1
  constructor(private book: CategoryBookService,private router:Router,private category: CaregoriesService, private route: ActivatedRoute, private authourService:AuthourService  ){}
  books!: Book [];
  authours !: Authour[] 

pageNumber(number:number){
  this.page = number
  this.category.getAllCategory().subscribe((res:any)=>this.books=res)

}

nextPage(){
  this.page ++
  this.category.getAllCategory().subscribe((res:any)=>{
      if((res.length==0)){
        this.page --               
      } else {
        this.books = res
      }           
  })
  
  
}

prevPage(){
  this.page --
  this.category.getAllCategory().subscribe((res:any)=>{
      if((this.page==0)){
        this.page ++               
      } else {
        this.books = res
      }           
  })
  
  
}


reciveFromChild(id: string) {

  this.router.navigate(['book-details', id])
}
  

}
