import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-ammount',
  templateUrl: './product-ammount.component.html',
  styleUrls: ['./product-ammount.component.scss'],
})
export class ProductAmmountComponent {
  @Input() public cartProduct?: CartProductI;
  @Output() public onRemoveFromAmmount = new EventEmitter<CartProductI>();
  @Output() public onAddFromAmmount = new EventEmitter<CartProductI>();

  public removeProduct() {
    if(this.cartProduct){
      console.log("remove from ammount: "+this.cartProduct.product.title)
      this.onRemoveFromAmmount.emit(this.cartProduct);
    }

  }
  public addProduct() {
    if(this.cartProduct){
      console.log("add from ammount: "+this.cartProduct.product.title)
      this.onAddFromAmmount.emit(this.cartProduct);
    }
  }
}