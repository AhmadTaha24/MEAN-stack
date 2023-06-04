import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';
import { Book } from 'src/app/interfaces/book';
import { Categories } from 'src/app/interfaces/categories';
import { AdminAuthorsService } from 'src/app/services/admin-authors.service';
import { AuthourService } from 'src/app/services/authour.service';
import { CaregoriesService } from 'src/app/services/caregories.service';
import { CategoryBookService } from 'src/app/services/category-book.service';

@Component({
  selector: 'app-category-body',
  templateUrl: './category-body.component.html',
  styleUrls: ['./category-body.component.css']
})
export class CategoryBodyComponent {
  books!: any;
  // @Input() authoursItem !: Authour
  authours !: Authour[] 
  categories!: Categories [] 

  id!: any
authorData!:any
constructor(private book: CategoryBookService,private router:Router, private category: CaregoriesService, private route: ActivatedRoute, private adminAuthorsService:AdminAuthorsService  ){}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id') 

  this.book.getBook(this.id).subscribe((res: any) => {this.books=res;    
    // console.log(this.book);

 } );
this.category.getCategory(this.id).subscribe((res:any)=>{
this.categories=res  
})
}

redirectToBookDetails(id: string){
  this.router.navigate(['book-details',id])
}

redirectToDetails(id: string){

  
  this.router.navigate(['author-info',id])
  
}
}
