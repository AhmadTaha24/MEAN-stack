import { Component } from '@angular/core';
import { Categories } from '../interfaces/categories';
import { CaregoriesService } from '../services/caregories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  categories!: Categories [] 
  constructor(private category: CaregoriesService,  private router: Router) { }
  
  ngOnInit(): void {
  
    this.category.getAllCategory().subscribe((res: any) => this.categories = res);

  }
  go(){
    console.log("go");
    this.router.navigate(['BooksOfCategory'])

  }
}
