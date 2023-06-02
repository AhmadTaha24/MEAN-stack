
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

constructor(private _AuthService:AuthService , private _Router:Router){
  this.registerForm = new FormGroup(
    {
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // userName: new FormControl(null, [Validators.required, Validators.pattern(/^\S*$/)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]),
      passwordConfirm: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]),

    }
  )
}



submitRegisterForm(registerForm:any){
  return this._AuthService.register(registerForm.value).subscribe((data)=>{
// console.log(data);
    if(data.status == "success"){
     
      this._Router.navigate(['/login'])

    }
  })
}
}

