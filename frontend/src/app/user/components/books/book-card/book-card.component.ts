import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() bookitem !: Book
  @Output() emitFromChild= new EventEmitter();

  constructor(private router:Router){}

  // emitToParent(id:string){
  //   this.emitFromChild.emit(id)
  // }

  // showDetails(id: string){
  //   console.log(id);
  //   this.router.navigate(['book-details',id])


  // }
  redirectToDetails(id: string){
    // console.log(id);
    this.router.navigate(['book-details',id])
  }

}
