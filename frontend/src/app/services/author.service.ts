import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  getAuthor(){
    return this.http.get("http://localhost:5000/authors/1")
  }
}
