import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {
 
  public cartitemlist:any=[]
  // behaviour subject can act as both observable and also can emmit data
  public productlist=new BehaviorSubject<any>([]);
  constructor() { }
  // created agetter
  getproduct(){
    return this.productlist.asObservable();
  }
// setter created
  setproduct(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(product);
  }

  addtocart(product: any) {
    let productExists = false;

    this.cartitemlist.map((a: any) => {
      if (a.id === product.id) {
        a.quantity += 1;
        a.total = a.price * a.quantity;
        productExists = true;
      }
    });

    if (!productExists) {
      this.cartitemlist.push({ ...product, quantity: 1, total: product.price });
    }

    this.productlist.next(this.cartitemlist);
    this.gettotalprice();  // Update the total price
  }
  gettotalprice():Number{
    let grandtotal=0;
    this.cartitemlist.map((a:any)=>{
      grandtotal+=a.total;
    })
    return grandtotal;
  }
  removecartitem(product:any){
    this.cartitemlist.map((a:any,index:any)=>{
      if(product.id===a.id){
        // splice to remove an item from list with indexed item one item
        this.cartitemlist.splice(index,1);
      }
    })
    this.productlist.next(this.cartitemlist);
  }
  removeallcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist);
  }
}
