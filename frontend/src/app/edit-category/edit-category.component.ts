import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Categories } from '../interfaces/categories';
import { CaregoriesService } from '../services/caregories.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  @Input() todos: any[] = [];
  @Output() setTasks = new EventEmitter();

  categories!: Categories[]
  status!: any;
  postId: any;
  inputValue: string = '';
  toDisplay = false;
  // body:string="none";
  constructor(private category: CaregoriesService, private http: HttpClient, private router: Router) { }

   ngOnInit(): void {

  //   this.category.getAllProducts().subscribe((res: any) => this.categories = res);
this.listAll()
   }
  listAll(){
    this.category.getAllProducts().subscribe((res: any) => this.categories = res);

  }
  deleteTodo(i: number) {
    //  console.log(this.categories[i]._id);

    this.http.delete('http://localhost:5000/category/' + this.categories[i]._id)
      .subscribe(() => this.status = 'Delete successful');

    this.todos.splice(i, 1);

  }




  editTodo(i: number) {
    const body = { name: this.addEdit() };
    this.http.put<any>('http://localhost:5000/category/' + this.categories[i]._id, body)
      .subscribe(data => this.postId = data.id);

  }

  toggleData(i: number) {
    // console.log(this.categories[i]._id);

    this.toDisplay = true;
  }
  addEdit() {
    this.setTasks.emit(this.inputValue);
    this.toDisplay = false

    return this.inputValue

  }
}
