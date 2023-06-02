import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;

  // errorMessage!:string;
  // flag:boolean =false;
   
  constructor(private _AuthService:AuthService , private _Router:Router){}
  ngOnInit():void{
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]),
    })
  }

  submitLoginForm(loginForm:any){

    return this._AuthService.login(loginForm.value).subscribe((data)=>{
     //  console.log(data);
      this._AuthService.saveUserData(data.data.first_name,data.data.last_name,data.data.email,data.data.token,data.data.role)
      this._Router.navigate(['/user'])
    })
  }

}
