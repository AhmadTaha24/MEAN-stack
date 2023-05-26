import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaregoriesService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('http://localhost:5000/category');
  }}
