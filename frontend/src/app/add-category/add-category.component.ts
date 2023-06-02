import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categories } from '../interfaces/categories';
import { CaregoriesService } from '../services/caregories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private http: HttpClient, private router: Router, private category: CaregoriesService,) { }
  postId: any;
  toDisplay = false;
  exsist=false;
  inputValue:string='';
  categories!: Categories[]

  @Output() setTasks = new EventEmitter();
    
   add() {
try{
      this.setTasks.emit(this.inputValue);
      this.http.post<any>('http://localhost:5000/category', { name: this.inputValue}).subscribe(data => {
        this.postId = data.id;
        this.category.getAllCategory().subscribe((res: any) => {
          this.categories = res;
          console.log(this.categories);
        })
        this.router.navigate(['editCategory'])      
    })
      this.inputValue='';
      
    }
    catch{
      alert("duplicate category")
    }
  }

}