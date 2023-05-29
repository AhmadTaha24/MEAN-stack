import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  // Books !: Book[]

  Books : Book[]=[
     {
      "id": 1,
      "title": "BOOK1",
      "description": "BOOK DESCRAPTION",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "category": "smartphones",
      "image": "https://i.dummyjson.com/data/products/1/1.jpg", 
      "createdAt":"2022-09-30T16:41:31.124Z",
      "authour":"Ahmed"
    },
    {
      "id": 2,
      "title": "BOOK1",
      "description": "BOOK DESCRAPTION",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "category": "smartphones",
      "image": "https://i.dummyjson.com/data/products/1/1.jpg", 
      "createdAt":"2022-09-30T16:41:31.124Z",
      "authour":"Ahmed"
    },
    {
      "id": 3,
      "title": "BOOK1",
      "description": "BOOK DESCRAPTION",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "category": "smartphones",
      "image": "https://i.dummyjson.com/data/products/1/1.jpg", 
      "createdAt":"2022-09-30T16:41:31.124Z",
      "authour":"Ahmed"
    },
  ]
  
}
