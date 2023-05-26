import { Component } from '@angular/core';
import { Categories } from '../interfaces/categories';
import { CaregoriesService } from '../services/caregories.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  categories!: Categories [] 
  constructor(private category: CaregoriesService) { }
  
  ngOnInit(): void {
  
    this.category.getAllProducts().subscribe((res: any) => this.categories = res);

  }
  
}
