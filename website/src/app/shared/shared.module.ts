import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { PageHeaderComponent } from './page-header/page-header.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    PageHeaderComponent,
    ContactFormComponent
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
    PageHeaderComponent
  ]
})
export class SharedModule { }
