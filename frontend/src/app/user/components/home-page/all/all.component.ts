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

  constructor(private bookService:BookService,private authorData :AuthorService){}


  ngOnInit(){
    this.bookService.getBooks().subscribe(res =>this.BookData = res),
    this.authorData.getAuthor().subscribe(res =>this.AuthorData =res)
  }

 
}
