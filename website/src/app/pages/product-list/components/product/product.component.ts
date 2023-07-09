import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from 'src/app/core/product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product?: ProductI;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
