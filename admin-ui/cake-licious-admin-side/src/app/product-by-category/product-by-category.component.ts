import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from '../modal/category';
import { Product } from '../modal/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  productList?:Product[];
  categoryList?:Category[];


  constructor(private router:Router,private activatedRouter:ActivatedRoute,private productService:ProductService,private _router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
       let categoryId = ''+this.activatedRouter.snapshot.paramMap.get('id');
       this.productService?.getProductOfCategory(categoryId)
       .subscribe(data=>{
         this.productList = data;
       },err=>{

       });
      }
   });
 }
 public deleteProduct(id:string){
  if(confirm('are you sure')){
  this.productService.removeProduct(id).subscribe(data=>{


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
public getProductOfCategory(id:string){
  this._router.navigate(['/product-by-category',id],{relativeTo:this.activatedRoute})
}
product(){
  this.ngOnInit();
}
}


