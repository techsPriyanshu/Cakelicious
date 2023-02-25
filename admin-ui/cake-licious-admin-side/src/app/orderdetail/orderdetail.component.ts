import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css'],
})
export class OrderdetailComponent implements OnInit {
  orderList: any = {};
  constructor(private api: CustomerService, private router: ActivatedRoute) {}
  id: any;
  s?: any;
  orderStatus: any;

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this.api.getSingleOrder(this.id).subscribe(
        (data) => {
          console.log(data);
          this.orderList = data;
          this.s = this.orderList.orderStatus;
          console.log(this.s);
          this.orderStatus = this.s;
          console.log(this.orderStatus);
        },
        (err) => {
          console.log(err);
          alert('Something went wrong');
        }
      );
    });
  }

  name = 'Status';

  public counts = ['Confirmed', 'Preparing', 'Out For Delivery', 'Delivered'];

  arr: any = [];
  getVal(v: any) {
    if (this.arr.indexOf(v.target.value) == -1) {
      this.arr.push(v.target.value);
      this.orderStatus = v.target.value;
      console.log(this.orderStatus);
    }
  }

  updateSta() {
    this.api.updatStatus( this.id,this.orderStatus).subscribe((data) => {
      console.log(this.id)
      console.log(data)
    });
  }
}
