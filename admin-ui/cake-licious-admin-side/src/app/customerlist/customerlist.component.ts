import { Component, OnInit } from '@angular/core';
import {CustomerService } from 'src/app/services/customer.service'

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
customerList:any=[];
  constructor(private customer:CustomerService) { }

  ngOnInit(): void {
    this.customer.getCustomerList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.customerList=data;
        console.log(data);
      }
    });
  }

}
