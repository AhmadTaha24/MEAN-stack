import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryBookService {

  constructor(private http: HttpClient) { }
  getBook(id: string) {
    return this.http.get('http://localhost:3000/books/cat/' + id);
  }}

