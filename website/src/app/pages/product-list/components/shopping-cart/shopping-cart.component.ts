import { Component, Input } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  @Input() products = new Array<CartProductI>;
}