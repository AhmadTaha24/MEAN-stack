import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Authour } from 'src/app/interfaces/authour';

@Component({
  selector: 'app-authour-card',
  templateUrl: './authour-card.component.html',
  styleUrls: ['./authour-card.component.css']
})
export class AuthourCardComponent {

  @Input() authoursItem !: Authour
  @Output() emitFromChild= new EventEmitter();

  constructor(private router:Router){}


  redirectToDetails(id: string){
    console.log(id);
    this.router.navigate(['authour-details',id])
    
  }

}
