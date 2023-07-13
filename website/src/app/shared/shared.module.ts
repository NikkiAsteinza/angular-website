import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { OrderbyPricePipe } from './pipes/orderby-price/orderby-price.pipe';
import { ShowbyCategoryPipe } from './pipes/showby-category/showby-category.pipe';

@NgModule({
  declarations: [
    ProductFormComponent,
    PageHeaderComponent,
    ContactFormComponent,
    ShowbyCategoryPipe,
    OrderbyPricePipe,
    ShowbyCategoryPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProductFormComponent,
    ContactFormComponent,
    PageHeaderComponent,
    OrderbyPricePipe,
    ShowbyCategoryPipe
  ]
})
export class SharedModule { }
