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
  display = "none";
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
      
    });
    
  }

  del(index:number) {
      
    this.authors.splice(index, 1);
   }
   openModal() {
    this.display = "block";
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
    console.log(fd);
    console.log(author);

    this.authorService.postData(fd).subscribe((res)=>{
     console.log(res);
    });
  }
  

}
