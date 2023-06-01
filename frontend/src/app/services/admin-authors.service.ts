import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../interfaces/authors';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthorsService {
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:5000/authors/')
  }

  postData(author:any){
    return this.http.post('http://localhost:5000/authors/',author)
  }
}
