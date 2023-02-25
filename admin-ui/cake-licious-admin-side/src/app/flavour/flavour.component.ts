import { Component, OnInit } from '@angular/core';
import { FlavourService } from '../services/flavour.service';

@Component({
  selector: 'app-flavour',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.css']
})
export class FlavourComponent implements OnInit {
  flavourList:any=[];
  constructor(private api:FlavourService) { }

  ngOnInit(): void {
    this.api.getFlavourList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
      console.log(data);
        this.flavourList=data;
      }
    });
  }

}
