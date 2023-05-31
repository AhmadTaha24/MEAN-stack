import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthourService {

 

  constructor(private http:HttpClient){}

  getAuthour(id:number){
    return this.http.get(`http://localhost:5000/authors/${id}`)
  }

  getAuthourDetails(id:string){
    return this.http.get(`http://localhost:5000/authors/1/${id}`)

  }
}
