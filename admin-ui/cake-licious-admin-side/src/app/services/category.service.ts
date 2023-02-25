import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   deleteAPI ="http://localhost:3000/category/deleteCategory";

  constructor(private _http:HttpClient) { }
  getCategoryList():Observable<any>{
    var api = "http://localhost:3000/category/viewCategory";
    return this._http.get(api);
  }
  public removeCategory(id:string):Observable<any>{
    return this._http.post<any>(this.deleteAPI,{id:id})
  }

  addcategory(formData:FormData){
    var category = "http://localhost:3000/category/addCategory";
    return this._http.post(category,formData);
  }

  updateCat(formData:FormData){
    var update = "http://localhost:3000/category/updateCategory";
    return this._http.post(update,formData);
  }
}
