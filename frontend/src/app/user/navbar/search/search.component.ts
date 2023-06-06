import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../../../interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  serchForm: FormGroup =new FormGroup({
    search:new FormControl('')
  })

  searchResult:undefined | Book[];
  public booksList : Array<any> = [];
  constructor(private searchService:SearchService , private activatedRoute:ActivatedRoute ,private bookService:BookService){

  }

  ngOnInit() {

    let query =this.activatedRoute.snapshot.paramMap.get('query');
    console.log(query);

    query && this.searchService.getBooksbySerach(query).subscribe((res)=>{
this.searchResult=res;
console.log(res)
    })

  }

}
