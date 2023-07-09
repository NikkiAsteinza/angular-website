import { Component, Input } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() public cartProduct?: CartProductI;
}
