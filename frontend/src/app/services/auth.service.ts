import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient) { }

  register(registerFormValue:any):Observable<any>
  {
  return  this._httpclient.post("http://localhost:5000/register",registerFormValue)
  }
  login(loginFormValue:any):Observable<any>
  {
  return  this._httpclient.post("http://localhost:5000/login",loginFormValue)
  }
}
