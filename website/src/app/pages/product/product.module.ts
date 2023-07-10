import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  // exports:[
  //   ProductComponent
  // ]
})
export class ProductModule { }
