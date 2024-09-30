import { Component ,OnInit} from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductCrudService } from '../product-crud.service';
import { CartComponent } from '../cart/cart.component';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductComponent,CartComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalitem:number=0
  constructor (private ProductCrudService:ProductCrudService){}
  ngOnInit():void{
    this.ProductCrudService.getproduct().subscribe(res=>{
      this.totalitem=res.length;
    })
  }
}
