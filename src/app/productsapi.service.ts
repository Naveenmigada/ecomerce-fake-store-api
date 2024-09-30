import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map}from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsapiService {

  constructor(private http : HttpClient) { }

  getproduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
