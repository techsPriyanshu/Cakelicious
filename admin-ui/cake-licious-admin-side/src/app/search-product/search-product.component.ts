import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Category } from '../modal/category';
import { Product } from '../modal/product';
import { AdminService } from '../services/admin.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search-product',
  templateUrl: '../prodlist/prodlist.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  productList?:Product[];
  categoryList?:Category[];
  occassionList:any=[];
  constructor(private productService:ProductService,private router:Router ,private admin:AdminService, private activatedRouter:ActivatedRoute,private _router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let searchText = ''+this.activatedRouter.snapshot.paramMap.get('text');
        this.productService.searchProduct(searchText).
        subscribe(data=>{
           this.productList = data;
        },err=>{

        })
      }
    })
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
public getProductOfCategory(id:string){
  this._router.navigate(['product-by-category',id],{relativeTo:this.activatedRoute})
}
   product(){
  this.ngOnInit();
}
}
