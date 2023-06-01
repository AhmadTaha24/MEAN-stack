// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

constructor(){
  this.registerForm = new FormGroup(
    {
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      yourEmail: new FormControl(null, [Validators.required, Validators.email]),
      // userName: new FormControl(null, [Validators.required, Validators.pattern(/^\S*$/)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]),
    }
  )
}

submitRegisterForm(){
  console.log(this.registerForm)
}

}

