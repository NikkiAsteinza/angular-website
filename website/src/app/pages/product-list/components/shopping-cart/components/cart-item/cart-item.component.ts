import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() public cartProduct?: CartProductI;
  @Output() public onRemoveProductFromCartItem =  new EventEmitter<CartProductI>(); 
  @Output() public onAddProductFromCartItem =  new EventEmitter<CartProductI>(); 
  ngOnInit(): void {

  }
  public addProduct(){
    if(this.cartProduct){
      console.log("add from cart: "+this.cartProduct.product.name);
      this.onAddProductFromCartItem.emit(this.cartProduct); 
    }
  }
  public removeProduct(){
    if(this.cartProduct){
      console.log("remove from cart: "+this.cartProduct.product.name);
      this.onRemoveProductFromCartItem.emit(this.cartProduct); 
    }
  }
}
