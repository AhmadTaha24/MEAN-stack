import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShalveService {

  constructor(private http:HttpClient) { }
  getShelve(){
    return this.http.get("http://localhost:5000/shelves/")
  }
}
