import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  @Input() products = new Array<CartProductI>();
  @Output() public onRemoveProductFromCart =  new EventEmitter<CartProductI>(); 
  @Output() public onAddProductFromCart =  new EventEmitter<CartProductI>(); 

  public addProductFromCart(product: CartProductI){
    console.log("add product from cart")
    this.onAddProductFromCart.emit(product);
  }

  public removeProductFromCart(product: CartProductI){
    console.log("add product from cart")
    this.onRemoveProductFromCart.emit(product);
  }
}