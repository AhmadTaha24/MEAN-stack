import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // private url:string ="http://localhost:5000/books/1"

  constructor(private http:HttpClient) { }

  getBooksbySerach(title:string) : Observable<any>
  {
     return this.http.get(`http://localhost:5000/books/1/${title}`)
}
}
