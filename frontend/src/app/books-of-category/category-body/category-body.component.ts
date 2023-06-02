import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';
import { Book } from 'src/app/interfaces/book';
import { AuthourService } from 'src/app/services/authour.service';
import { CategoryBookService } from 'src/app/services/category-book.service';

@Component({
  selector: 'app-category-body',
  templateUrl: './category-body.component.html',
  styleUrls: ['./category-body.component.css']
})
export class CategoryBodyComponent {
  books!: any;
  authours !: Authour[] 
  id!: any
authorData!:any
constructor(private book: CategoryBookService,private router:Router, private route: ActivatedRoute, private authourService:AuthourService  ){}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id') 

  this.book.getBook(this.id).subscribe((res: any) => {this.books=res;    
    console.log(this.book);

 } );

}

redirectToDetails(id: string){
  // console.log(id);
  this.router.navigate(['book-details',id])
}

redirectToAuthor(author_id: string){
  this.router.navigate(['authour-details',author_id])

}
}
