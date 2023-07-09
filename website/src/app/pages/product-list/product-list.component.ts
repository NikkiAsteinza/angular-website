import { Component } from '@angular/core';
import { productData } from 'src/app/core/product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products = productData;
}
