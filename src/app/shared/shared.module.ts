import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { OrderbyPricePipe } from './pipes/orderby-price/orderby-price.pipe';
import { ShowbyCategoryPipe } from './pipes/showby-category/showby-category.pipe';
import { TwoColumnsSectionComponent } from './components/page-sections/two-columns-section/two-columns-section.component';
import { CoreModule } from '../core/core.module';
import { PageSubheaderComponent } from './components/page-subheader/page-subheader.component';
import { SectionComponent } from './components/page-sections/section/section.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    PageHeaderComponent,
    ContactFormComponent,
    ShowbyCategoryPipe,
    OrderbyPricePipe,
    ShowbyCategoryPipe,
    TwoColumnsSectionComponent,
    PageSubheaderComponent,
    SectionComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProductFormComponent,
    ContactFormComponent,
    PageHeaderComponent,
    PageSubheaderComponent,
    OrderbyPricePipe,
    ShowbyCategoryPipe,
    TwoColumnsSectionComponent,
    SectionComponent
  ]
})
export class SharedModule { }
