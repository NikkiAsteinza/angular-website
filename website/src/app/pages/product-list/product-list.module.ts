import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
