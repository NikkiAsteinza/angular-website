import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductAmmountComponent } from './components/shopping-cart/components/cart-item/components/product-ammount/product-ammount.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/shopping-cart/components/cart-item/cart-item.component';
import { ProductHoverDirective } from './components/product/directives/product-hover.directive';
import { ProductListRoutingModule } from './product-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

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
    MatIconModule,
    ProductListRoutingModule,
    FormsModule,
    SharedModule
  ],
  // exports:[
  //   ProductListComponent
  // ]
})
export class ProductListModule { }
