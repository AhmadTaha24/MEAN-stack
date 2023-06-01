import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaregoriesService {

  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get('http://localhost:3000/category');
  }

  editCategory(id: string, body:Object){
    return this.http.put<any>('http://localhost:3000/category/'+id,body);
  }

  deleteCategory(id: string) {
    return this.http.delete('http://localhost:3000/category/' + id)
  }



}

