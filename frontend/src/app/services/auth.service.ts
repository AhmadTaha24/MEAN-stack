import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { userData } from '../userData';
import { json } from 'express';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:any = new BehaviorSubject(null);



  constructor(private _httpclient:HttpClient) { 

    if(localStorage.getItem("userData")!= null){
      this.currentUser.next(JSON.parse(localStorage.getItem("userData")!));
    }

  }

  register(registerFormValue:any):Observable<any>
  {
  return  this._httpclient.post("http://localhost:5000/register",registerFormValue)
  }
  login(loginFormValue:any):Observable<any>
  {
  return  this._httpclient.post("http://localhost:5000/login",loginFormValue)
  }

  saveUserData(first_name:any,last_name:any,email:any,token:any,role:any){
    let user = new userData(first_name,last_name,email,token,role);
   
    localStorage.setItem("userData",JSON.stringify(user))
    
  this.currentUser.next(user);
   // console.log(this.currentUser);
  }
  
}
