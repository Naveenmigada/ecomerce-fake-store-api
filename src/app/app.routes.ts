import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:'products', component:ProductComponent},
    {path:'cart',component:CartComponent},
    {path:'' ,redirectTo:'products',pathMatch:'full'}
];
