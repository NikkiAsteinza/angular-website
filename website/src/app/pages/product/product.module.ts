import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    DeleteProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  // exports:[
  //   ProductComponent
  // ]
})
export class ProductModule {

 }
