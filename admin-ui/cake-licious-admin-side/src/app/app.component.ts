import { Component, ElementRef, ViewChild } from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {ProductService} from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import { OcclistComponent } from './occlist/occlist.component';
import { AdminService } from './services/admin.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FlavourService } from './services/flavour.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("catDiv")catId :ElementRef|undefined;
  @ViewChild("occDiv")ocId :ElementRef|undefined;

  @ViewChild("flavourDiv")favId :ElementRef|undefined;



  occName='';
  occDescription='';
  occImages:any;
  prodImages:any;
  category='';
  prodName='';
  prodImage1='';
  prodImage2='';
  prodImage3='';
  prodImage4='';
  discount='';
  prodDescription='';
  prodPrice='';
  flavour='';
  categoryList:any;
  catImage:any;
 catName:any;
 categoryId='';
 occasionList:any;
 flavourList:any;
 occBanner="";
  title = 'admindashboard';

constructor(private toastr:ToastrService,private api:CategoryService, private prodApi:ProductService, private apiflavour:FlavourService, private apiOcc:AdminService,private _router:Router,private activateRoute:ActivatedRoute){}

ngOnInit(): void {
  this.api.getCategoryList().subscribe(data=>{
    if(data.error){
      alert('Something went wrong');
    }
    else{
      // console.log(data);
      this.categoryList=data;
      console.log(data);
    }
  });

  this.apiOcc.getOccasionList().subscribe(data=>{
    if(data.error){
      alert('Something went wrong');
    }
    else{
      // console.log(data);
      this.occasionList=data;
      console.log(data);
    }
  });


  this.apiflavour.getFlavourList().subscribe(data=>{
    if(data.error){
      alert('Something went wrong');
    }
    else{
      // console.log(data);
      this.flavourList=data;
      console.log(data);
    }
  });



}


  public show(wrapper:any){
    wrapper.classList.toggle("toggled");
}


addCategory(){

  const formData = new FormData();

  formData.append("catImage",this.catImage);
  formData.append("catName",this.catName);
  this.api.addcategory(formData).subscribe(data=>{
    if(data){
     this.toastr.success("Category Added")
        }else{
          this.toastr.error("not Added")

        }

  })
}
selectCatImage(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.catImage = file;
  }
}

formData = new FormData();



addProd(){
  // alert(this.myDiv?.nativeElement.value)
  this.formData.append("categoryId",this.catId?.nativeElement.value);
  this.formData.append("occassionId",this.ocId?.nativeElement.value);
  this.formData.append("flavourId",this.favId?.nativeElement.value)
  this.formData.append("prodName",this.prodName);
  this.formData.append("prodPrice",this.prodPrice);
  this.formData.append("flavour",this.flavour);
  this.formData.append("discount",this.discount);
  this.formData.append("prodDescription",this.prodDescription);


  console.log(this.formData)
  this.prodApi.addProduct(this.formData).subscribe(data=>{
  // console.log(data);
    if(data){
console.log(data);
      alert('product added.....')
        }else{
          alert('not added')

        }

  })

}

addOcc(){
  this.formData.append("occassionId",this.ocId?.nativeElement.value)
  this.formData.append("occName",this.occName);
  this.formData.append("occDescription",this.occDescription);
  this.formData.append("occBanner",this.occBanner);
  console.log(this.formData)
  this.apiOcc.addOccassion(this.formData).subscribe(data=>{
    if(data){

      alert('Occassion added.....')
        }else{
          alert('not added')

        }

  })

}
selectOccImage(event:any){
  if(event.target.files.length > 0){
    const files:FileList = event.target.files;
    for(let index=0;index<files.length;index++){
      let element = files[index];
      this.formData.append("occImages",element);


    }
  }
}

selectProdImage(event:any){
  if(event.target.files.length > 0){
    const files:FileList = event.target.files;
    for(let index=0;index<files.length;index++){
      let element = files[index];
      this.formData.append("prodImages",element);


    }

  }
}
public searchProduct(event:any){
  let searchText = event.target.value;
  this._router.navigate(['/search-product',searchText],{relativeTo: this.activateRoute});
}

public signout(){
  localStorage.removeItem('jwt-token');
  this.toastr.success("Sign out")
  this._router.navigate(['signin']);
}

}
