import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminBooksService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:5000/books/')

  }
  postData(author:any){
    return this.http.post('http://localhost:5000/books/',author)
  }
  updateData(id:string,author:any){
    return this.http.patch(`http://localhost:5000/books/${id}`,author)
  }
  deleteData(id:string){
    return this.http.delete(`http://localhost:5000/books/${id}`)
  }
}
