import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private http: HttpClient, private router: Router) { }
  postId: any;
  inputValue:string='';
  @Output() setTasks = new EventEmitter();
    
   add() {

      this.setTasks.emit(this.inputValue);
      this.http.post<any>('http://localhost:5000/category', { name: this.inputValue}).subscribe(data => {
        this.postId = data.id;
        
    })
      this.inputValue='';
      
    }
  
    redirectOnDetails(){
      // console.log(id);
      this.router.navigate(['editCategory'])
    
    }
    
}
