import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryBookService } from '../services/category-book.service';
import { AuthourService } from '../services/authour.service';
import { Book } from '../interfaces/book';
import { Authour } from '../interfaces/authour';
import { CaregoriesService } from '../services/caregories.service';

@Component({
  selector: 'app-books-of-category',
  templateUrl: './books-of-category.component.html',
  styleUrls: ['./books-of-category.component.css']
})
export class BooksOfCategoryComponent {


}
