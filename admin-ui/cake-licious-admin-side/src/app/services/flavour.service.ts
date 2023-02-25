import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  constructor(private http:HttpClient) { }
  getFlavourList():Observable<any>{
    var api = "http://localhost:3000/admin-flavour/findall";
    return this.http.get(api);
  }
}
