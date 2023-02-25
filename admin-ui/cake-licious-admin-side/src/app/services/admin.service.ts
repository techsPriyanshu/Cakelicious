import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../modal/product';

// import { HttpClientJsonpModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private productOfOccassionApi = "http://localhost:3000/admin-product/occassion-product";

  signinAPI = "http://localhost:3000/admin/signin";

  constructor(private _http:HttpClient) { }




  public signinuser(email:string,password:string){
    console.log(email + " " + password);
    return this._http.post<any>(this.signinAPI,{email:email,password:password})
   }

   public checkToken():boolean{
     return !!localStorage.getItem('jwt-token');
   }

   addOccassion(formData:FormData){
    var api = "http://localhost:3000/occassion/addOccassion";
    return this._http.post(api,formData);
  }


  public getOccasionList():Observable<any>{
    var api = "http://localhost:3000/occassion/viewOccassion";
    return this._http.get(api);
  }

  public getProductOfOccassion(oid:string):Observable<Product[]>{
    return this._http.get<Product[]>(this.productOfOccassionApi+"/"+oid);
  }



  }
