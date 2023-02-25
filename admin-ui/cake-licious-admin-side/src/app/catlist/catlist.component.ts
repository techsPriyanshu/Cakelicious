import { Component, OnInit } from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {
categoryList:any=[];
categoryid:any;
catImage="";
catName="";
cid="";


oldImage:any;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.categoryList=data;
        console.log(data);
      }
    });
  }
  public deleteCategory(cid:string){
    if(confirm('are you sure')){
    this.categoryService.removeCategory(cid).subscribe(data=>{


      console.log(data)
     if(data){
      this.ngOnInit();
      alert('category deleted.....')
        }else{
          alert('category not deleted')

        }

    }

    )
  }
}

edit(){
  alert(this.categoryid)
  const formData = new FormData();
  formData.append("categoryid",this.categoryid);
  formData.append("catName",this.catName);
  formData.append("newImage",this.catImage);
  formData.append("oldImage",this.catImage);
this.categoryService.updateCat(formData).subscribe(data=>{
  console.log(data);
 if(data){
   alert(' updated.....')
   this.ngOnInit();

     }else{
       alert('not updated')

     }
})
}
updateCategory(data:any){
  this.catName=data.catName;
  this.oldImage=data.catImage;
  this.categoryid=data._id;

}
selectImage(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.catImage = file;
  }
}
}
