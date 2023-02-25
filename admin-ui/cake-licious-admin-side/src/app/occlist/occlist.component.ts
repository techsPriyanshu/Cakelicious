import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-occlist',
  templateUrl: './occlist.component.html',
  styleUrls: ['./occlist.component.css']
})
export class OcclistComponent implements OnInit {
occasionList:any=[];
  constructor(private api:AdminService) { }

  ngOnInit(): void {
    this.api.getOccasionList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.occasionList=data;
        console.log(data);
      }
    });
  }
  }


