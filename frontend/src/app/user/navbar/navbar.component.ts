import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input()  authors !:string
  islogin:boolean = false 
  // admin:boolean =false
  menuType:string = 'default'

  constructor(private _Authservice:AuthService , private route:Router){



   _Authservice.currentUser.subscribe((data:any)=>{

      if(data != null){
        this.islogin == true;
      }else{
        this.islogin == false;
      }
   })
}




ngOnInit():void{
  this.route.events.subscribe((val:any)=>{
   
    if(val.url){
      if(localStorage.getItem('userData') && ( val.url.includes('login') || val.url.includes('register')|| val.url==('/') )){
      //  console.warn(val.url);
      // console.warn("this is login area");
       this.menuType="login";
      } 
      else{
        // console.warn(val.url);
       // console.warn("this is out login area");
        this.menuType="default";
      }
      

    }
  })

}

submitSearch(val:string){
  console.warn(val)
  this.route.navigate([`search/${val}`]);

}


}
