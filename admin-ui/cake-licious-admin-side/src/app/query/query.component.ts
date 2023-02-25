import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  queryList:any=[];

  queryid="";
  query='';
  email:any;
  comment:any;
  constructor(private api:CustomerService) { }


  ngOnInit(): void {
    this.api.getQueryList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
      console.log(data);
        this.queryList=data;
      }
    });
  }

  q(data:any){
    this.query=data.query;
    this.queryid=data._id;
    this.email = data.customer.email
    console.log(this.email)

  }
}

