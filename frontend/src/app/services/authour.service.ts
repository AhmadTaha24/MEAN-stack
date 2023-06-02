import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorResponse } from '../user/components/authours/authour-details/authour-details.component';

@Injectable({
  providedIn: 'root'
})
export class AuthourService {



  constructor(private http: HttpClient) { }

  getAuthour(id: number) {
    return this.http.get(`http://localhost:5000/authors/${id}`)
  }

  getAuthourDetails(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:5000/authors/1/${id}`)

  }
}
