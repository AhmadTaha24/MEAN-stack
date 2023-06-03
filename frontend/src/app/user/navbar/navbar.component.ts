import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input()  authors !:string
  islogin:boolean = false

  constructor(private _Authservice:AuthService){


   _Authservice.currentUser.subscribe((data:any)=>{

      if(data != null){
        this.islogin == true;
      }else{
        this.islogin == false;
      }
   })
}
}
