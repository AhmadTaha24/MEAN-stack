import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';
import { AuthourService } from 'src/app/services/authour.service';



@Component({
  selector: 'app-authours',
  templateUrl: './authours.component.html',
  styleUrls: ['./authours.component.css']
})
export class AuthoursComponent {
  authours !: Authour[] 

  constructor(private activatedRoute: ActivatedRoute ,private authourService:AuthourService ,private router:Router){}
  
  
  id: any;
  authour: any
  page : number =1
  
  ngOnInit() {
  
    this.id = this.activatedRoute.snapshot.params['id'];
    this.authourService.getAuthour(1).subscribe((res:any)=>this.authours=res)
  
  }

  pageNumber(number:number){
    this.page = number
    this.authourService.getAuthour(number).subscribe((res:any)=>this.authours=res)
  
  }

  
nextPage(){
  this.page ++
  this.authourService.getAuthour(this.page).subscribe((res:any)=>{
      if((res.length==0)){
        this.page --               
      } else {
        this.authours = res
      }           
  })
  
  
}

prevPage(){
  this.page --
  this.authourService.getAuthour(this.page).subscribe((res:any)=>{
      if((this.page==0)){
        this.page ++               
      } else {
        this.authours = res
      }           
  })
  
  
}
  
  reciveFromChild(id: string) {
  
    this.router.navigate(['authour-details', id])
  }

}
