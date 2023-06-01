import { Component } from '@angular/core';
import { AdminAuthorsService } from 'src/app/services/admin-authors.service';
import { AdminBooksService } from 'src/app/services/admin-books.service';
import { CaregoriesService } from 'src/app/services/caregories.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class adminBooksComponent {
  books: any;
  categories: any
  authors: any;
  updateBook: any=0;
  display = "none";
  displayUpdate = "none";
  selectedFile !: File;

  constructor(private bookService: AdminBooksService, private authorService: AdminAuthorsService, private categoryService: CaregoriesService) {

  }
  ngOnInit() {
    this.bookService.getData().subscribe((res) => {
      this.books = res
      //console.log(res);
    })
    this.authorService.getData().subscribe((res)=>{
      this.authors = res
    })
    this.categoryService.getAllCategory().subscribe((res)=>{
      this.categories = res
    })
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    //fd.append('image', this.selectedFile.name)
    console.log(this.selectedFile);
  }
  del(index:number, id:string) {
    this.bookService.deleteData(id).subscribe((res)=>{
      console.log(res);
    })
    this.books.splice(index, 1);
   }
  onCreate(book: { title: string, authorId: string, categoryId: string, image: any, file: any }) {
    console.log(book.authorId);
    const fd = new FormData();
    fd.append('title', book.title)
    fd.append('authorId', book.authorId)
    fd.append('categoryId',book.categoryId)
    fd.append('image', this.selectedFile, "it works")
    //console.log(fd);
    //console.log(author);

    this.bookService.postData(fd).subscribe((res) => {
      console.log( this.authors.find((x:any)=> x._id === book.authorId).fullName);
      let response:any;
      response = res
      response.authorId ={ fullName:this.authors.find((x:any)=> x._id === book.authorId).fullName}
      response.categoryId = { name:this.categories.find((x:any)=> x._id === book.categoryId).name}
      this.books.push(res);
    });
    

  }
  openUpdateModal(id: string) {
    //console.log(id);
    this.updateBook = this.books.find((x:any)=> x._id === id)
    this.displayUpdate = "block";
  }
  onCloseHandledUpdate() {
    this.displayUpdate = "none";
  }
  onUpdate(book:any){

    const fd = new FormData();
   (!book.title)? book.title = this.updateBook.title:this.updateBook.title=book.title;
   (!book.authorId)? book.authorId = this.updateBook.authorId._id:this.updateBook.authorId._id=book.authorId;
   (!book.categoryId)? book.categoryId = this.updateBook.categoryId._id:this.updateBook.categoryId._id=book.categoryId;
   

   fd.append('title', book.title)
   fd.append('authorId', book.authorId)
   fd.append('categoryId',book.categoryId);

   (this.selectedFile)?fd.append('image', this.selectedFile, "it works"):"";

   //console.log(fd.getAll);

   this.bookService.updateData(this.updateBook._id,fd).subscribe((res)=>{
    console.log(res);
    console.log(this.updateBook);
    ///////////////updating real time
    let authorToReplace = this.books.find((x:any)=> x._id ===this.updateBook._id)
    let indexToUpdate = this.books.indexOf(authorToReplace)
    let response:any;
    response = this.updateBook
    response.authorId ={ fullName:this.authors.find((x:any)=> x._id === book.authorId).fullName}
    response.categoryId = { name:this.categories.find((x:any)=> x._id === book.categoryId).name}
     this.authors[indexToUpdate] = response
   }
  )
 }
}
