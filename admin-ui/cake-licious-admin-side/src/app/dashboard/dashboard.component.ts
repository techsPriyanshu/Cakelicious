import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productList:any=[];
  customerList:any=[];
  orderList:any=[];
  queryList:any=[];
  constructor(private api:ProductService,private aapi:CustomerService) { }

  ngOnInit(): void {
    this.api.getProductList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.productList=data;


      }
    });
    this.aapi.getCustomerList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.customerList=data;


      }
    })
    this.aapi.getorderList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.orderList=data;


      }
    })
    this.aapi.getQueryList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.queryList=data;


      }
    })
  }

}
