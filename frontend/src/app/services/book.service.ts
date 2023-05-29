import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // create new behaviour subject
  // private Book_Service= new BehaviorSubject (0);
  // BookValue=this.Book_Service.asObservable()
  // constructor() { }


  // changeBook(newVal :number){
  //   this.Book_Service.next(newVal);
  // }

  constructor(private http:HttpClient){}

  getBook(){
    return this.http.get(`http://localhost:5000/books/1`)
  }
  // getBook(id:string){
  //   return this.http.get("http://localhost:5000/books/"+id)
  // }
  getBookDetails(id:string){
    return this.http.get(`http://localhost:5000/books/1/${id}`)

  }
}
