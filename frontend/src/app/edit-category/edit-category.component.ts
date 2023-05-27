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
  edit_id !: any;

  constructor(private category: CaregoriesService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.listAll()
  }
  listAll() {
    this.category.getAllCategory().subscribe((res: any) => this.categories = res);

  }
  deleteTodo(i: number) {
    //  console.log(this.categories[i]._id);

    this.category.deleteCategory( this.categories[i]._id)
      .subscribe(() => this.status = 'Delete successful');
    alert("are you sure you want to delete the item")
    this.todos.splice(i, 1);

  }




  editTodo(i: number) {

    // console.log(this.categories[i]);
    this.edit_id = this.categories[i]._id
    // console.log("inside"+this.edit_id);

    this.inputValue = this.categories[i].name

  }

  toggleData(i: number) {
    // console.log(this.categories[i]._id);

    this.toDisplay = true;
  }
  addEdit() {
    //  this.setTasks.emit(this.inputValue);
    // this.inputValue=this.categories[this.edit_id].name    
    this.toDisplay = false
    console.log("outside" + this.edit_id);

    const body = { name: this.inputValue };
    this.category.editCategory( this.edit_id, body)
      .subscribe(data => this.postId = data.id);
    alert("are you sure you want to Edit the item")
    this.listAll()
  }
}
