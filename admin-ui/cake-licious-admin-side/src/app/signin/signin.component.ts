import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
password="";
email="";
  constructor(private _admin:AdminService,private _router:Router,private toastr:ToastrService) { }
  public signin(){

    this._admin.signinuser(this.email,this.password).subscribe(data=>{
        console.log(data)
      if(data.status=="login success"){
        this.toastr.success('Login Success', 'WELCOME TO Dashboard');
        sessionStorage.setItem('jwt-token',data.token)
        this._router.navigate(['']);
      }
      else{
        alert("invalid")
      }
    });
  }

  ngOnInit(): void {
  }

}
