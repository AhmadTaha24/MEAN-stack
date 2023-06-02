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
  // property1: string;

  go(i: number){
    console.log(i);
    
    console.log("go");
    console.log(this.categories[i]._id);

    this.router.navigate(['BooksOfCategory',this.categories[i]._id])

  }
}
