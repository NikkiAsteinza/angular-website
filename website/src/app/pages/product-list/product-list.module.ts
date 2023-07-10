import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductAmmountComponent } from './components/shopping-cart/components/cart-item/components/product-ammount/product-ammount.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/shopping-cart/components/cart-item/cart-item.component';
import { ProductHoverDirective } from './components/product/directives/product-hover.directive';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductAmmountComponent,
    ShoppingCartComponent,
    CartItemComponent,
    ProductHoverDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  // exports:[
  //   ProductListComponent
  // ]
})
export class ProductListModule { }
