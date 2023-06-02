import { Component, Input } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  @Input() BookData!:any
  @Input() AuthorData!:any
 userName ="x";
  constructor(private bookService:BookService,private authorData :AuthorService){

    let userData =JSON.parse( localStorage.getItem("userData")!);
//console.log(userData);

this.userName = userData.first_name;


  }


  ngOnInit(){
    this.bookService.getBooks().subscribe(res =>this.BookData = res),
    this.authorData.getAuthor().subscribe(res =>this.AuthorData =res),
    console.log(this.userName);
    
  }

 
}
