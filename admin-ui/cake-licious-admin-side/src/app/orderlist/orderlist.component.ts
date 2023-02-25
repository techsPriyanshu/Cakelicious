import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
orderList:any=[];
orederid="";
List:any=[];

  constructor(private api:CustomerService) { }

  ngOnInit(): void {


    this.api.getorderList().subscribe(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{

        this.orderList=data;
        console.log(data);
      }
    });

  }




}
