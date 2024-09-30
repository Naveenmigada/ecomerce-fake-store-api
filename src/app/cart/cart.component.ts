import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { ProductCrudService } from '../product-crud.service';
import {  RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule,ProductComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public product:any=[];
  public grandtotal!:Number;
  constructor(private ProductCrudService:ProductCrudService){}
  ngOnInit():void{
    this.ProductCrudService.getproduct().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.ProductCrudService.gettotalprice();
    })
  }
  removeitem(item:any){
    this.ProductCrudService.removecartitem(item);

  }
  emptycart(){
    this.ProductCrudService.removeallcart();
  }
}
