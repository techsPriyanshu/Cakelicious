import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggetion',
  templateUrl: './suggetion.component.html',
  styleUrls: ['./suggetion.component.css']
})
export class SuggetionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public counts = ["Procesing","OutFood","Placed",
  "Delivered"];
  public orderStatus = "OutFood"

}
