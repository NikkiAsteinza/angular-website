import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() public cartProduct?: CartProductI;
  @Output() public onRemoveProductFromCart =  new EventEmitter<void>(); 
  @Output() public onAddProductFromCart =  new EventEmitter<void>(); 
  ngOnInit(): void {

  }
  public addProduct(){
    this.onAddProductFromCart.emit(); 
  }
  public removeProduct(){
    this.onRemoveProductFromCart.emit(); 
  }
}
