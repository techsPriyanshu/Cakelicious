import { Component, ElementRef, OnInit , ViewChild} from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import {Product} from 'src/app/modal/product'
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../modal/category';
import { CategoryService } from '../services/category.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  categoryList:Category[]|any;
  productList:any=[];
  occassionList:any=[];
  constructor(private admin:AdminService, private api:ProductService,private toaster:ToastrService,private _router:Router,private activatedRoute:ActivatedRoute,private categoryService:CategoryService) { }





  public deleteProduct(id:string){
    if(confirm('are you sure')){
    this.api.removeProduct(id).subscribe(data=>{


      console.log(data)
     if(data){
      this.ngOnInit();
      alert('product deleted.....')
        }else{
          alert('product not deleted')

        }

    }

    )
  }
}


  test:any;
  ngOnInit(): void {
    this.api.getProductList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.productList=data;
        this.test=1;
        console.log(this.test)

      }
    });

    this.categoryService.getCategoryList()
    .subscribe(data=>{
      this.categoryList = data;
    },err=>{
       if(err instanceof HttpErrorResponse){
         if(err.status == 500)
           this.toaster.error("Intenal Server Error","Error");
       }
    });
    this.admin.getOccasionList()
    .subscribe(data=>{
      this.occassionList = data;
    },err=>{
       if(err instanceof HttpErrorResponse){
         if(err.status == 500)
           this.toaster.error("Intenal Server Error","Error");
       }
    });
 }
      public getProductOfCategory(id:string){
        console.log(id);
        this.api.getProductOfCategory(id)
        .subscribe(data=>{
          console.log(data);
          this.productList = data;
        },err=>{

            alert('Something went wrong');

        });

      }
      public getProductOfOccassion(id:string){
        console.log(id);
        this.admin.getProductOfOccassion(id)
        .subscribe(data=>{
          console.log(data);
          this.productList = data;
        },err=>{

            alert('Something went wrong');

        });

      }
    product(){
        this.ngOnInit();
      }

}

