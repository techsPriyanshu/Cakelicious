import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../modal/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productOfCategpryApi = "http://localhost:3000/admin-product/category-product";

  private searchProductApi = "http://localhost:3000/admin-product/textsearch-product";

  deleteAPI ="http://localhost:3000/admin-product/deleteProduct";

  constructor(private _http:HttpClient) { }
  getProductList():Observable<any>{
    var api = "http://localhost:3000/admin-product/viewProduct";
    return this._http.get(api);
  }
  public removeProduct(id:string):Observable<any>{
    return this._http.post<any>(this.deleteAPI,{id:id})
  }
  addProduct(formData:FormData){
    var api = "http://localhost:3000/admin-product/addProduct";
    return this._http.post(api,formData);
  }
   public searchProduct(text:string):Observable<Product[]>{
    return this._http.get<Product[]>(this.searchProductApi+"/"+text);
  }
  public getProductOfCategory(cid:string):Observable<Product[]>{
    return this._http.get<Product[]>(this.productOfCategpryApi+"/"+cid);
  }

}
