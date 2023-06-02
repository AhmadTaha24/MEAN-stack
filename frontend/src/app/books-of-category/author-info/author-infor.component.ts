import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';
import { AdminAuthorsService } from 'src/app/services/admin-authors.service';
import { CategoryBookService } from 'src/app/services/category-book.service';

@Component({
  selector: 'app-author-infor',
  templateUrl: './author-infor.component.html',
  styleUrls: ['./author-infor.component.css']
})
export class AuthorInforComponent {
  constructor(private book: CategoryBookService,private router:Router, private route: ActivatedRoute, private adminAuthorsService:AdminAuthorsService  ){}
  authours !: Authour[] 
  id!: any

 birhdate !:any;
 image !:any;

  name !:any;
ngOnInit(){
  this.id = this.route.snapshot.paramMap.get('id') 
  this.showAuthour(this.id)
}

showAuthour(id:string){
  console.log(id);
this.adminAuthorsService.getData().subscribe((res:any)=>{
    this.authours=res
    const found = this.authours.find((obj) => {
      return obj._id === id;
      
    });

    console.log(found?.firstName);
    this.name=found?.firstName+" "+found?.lastName;
    this.birhdate=found?.dateOfBirth;
this.image=found?.imageUrl


  })

}



}
