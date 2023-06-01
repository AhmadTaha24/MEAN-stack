import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Author } from 'src/app/interfaces/authors';
import { AdminAuthorsService } from 'src/app/services/admin-authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorForm: FormGroup;
  authors: any;
  updateAuthor :any=0;
  display = "none";
  displayUpdate = "none";
  selectedFile !: File ;
  constructor(private authorService: AdminAuthorsService){
    this.authorForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
    }
    )
  }
  ngOnInit(){
    this.authorService.getData().subscribe((data)=>{
      this.authors = data;
      console.log(this.authors);
      
    });
    
  }

  del(index:number, id:string) {
    this.authorService.deleteData(id).subscribe((res)=>{
      console.log(res);
    })
    this.authors.splice(index, 1);
   }
   openModal() {
    this.display = "block";
  }
  openUpdateModal(id: string) {
    console.log(id);
    this.updateAuthor = this.authors.find((x:any)=> x._id === id)
    this.updateAuthor.dateOfBirth = this.updateAuthor.dateOfBirth.split('T')[0]
    this.displayUpdate = "block";
  }
  onCloseHandledUpdate() {
    this.displayUpdate = "none";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    //fd.append('image', this.selectedFile.name)
    console.log(fd);
  }
  onCreate(author:{firstName: string, lastName: string, dateOfBirth: Date, image:any, file:any}){
    //console.log(author.image);
    const fd = new FormData();
    fd.append('firstName', author.firstName)
    fd.append('lastName', author.lastName)
    fd.append('dateOfBirth', <any>author.dateOfBirth)
    fd.append('image', this.selectedFile, "it works")
    //console.log(fd);
    //console.log(author);

    this.authorService.postData(fd).subscribe((res)=>{
     console.log(res);
     this.authors.push(res);
    });
    
  }
  onUpdate(author:any){
     const fd = new FormData();
    (!author.firstName)? author.firstName = this.updateAuthor.firstName:this.updateAuthor.firstName=author.firstName;
    (!author.lastName)? author.lastName = this.updateAuthor.lastName:this.updateAuthor.lastName=author.lastName;
    (!author.dateOfBirth)? author.dateOfBirth = this.updateAuthor.dateOfBirth:this.updateAuthor.dateOfBirth=author.dateOfBirth;
    
    fd.append('firstName', author.firstName)
    fd.append('lastName', author.lastName)
    fd.append('dateOfBirth', <any>author.dateOfBirth)
    fd.append('image', this.selectedFile, "it works")

    console.log(author);
  
    this.authorService.updateData(this.updateAuthor._id,fd).subscribe((res)=>{
     console.log(res);
     console.log(this.updateAuthor);
     //updating real time
     let authorToReplace = this.authors.find((x:any)=> x._id ===this.updateAuthor._id)
     let indexToUpdate = this.authors.indexOf(authorToReplace)
     
      this.authors[indexToUpdate] = this.updateAuthor
    }
   )
  }

}
