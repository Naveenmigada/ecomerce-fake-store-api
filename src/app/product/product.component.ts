import { Component,OnInit } from '@angular/core';
import { ProductsapiService } from '../productsapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductCrudService } from '../product-crud.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public productlist:any;
  constructor( private api:ProductsapiService ,private ProductCrudService: ProductCrudService){}
  ngOnInit():void{
    this.api.getproduct().subscribe(res=>{
      this.productlist=res;

      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.ProductCrudService.addtocart(item)
  }
}
