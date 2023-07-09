import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductAmmountComponent } from './components/product/components/product-ammount/product-ammount.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/shopping-cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductAmmountComponent,
    ShoppingCartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
