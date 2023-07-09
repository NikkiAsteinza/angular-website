import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product?: CartProductI;
  @Output() public onRemoveProduct =  new EventEmitter<void>(); // Podemos no pasarle nada, sabe de donde viene el uotput , el padre
  @Output() public onAddProduct =  new EventEmitter<void>(); 
  ngOnInit(): void {

  }
  public removeProduct(){
    this.onRemoveProduct.emit(); // Hay que emitir al padre
  }
  public addProduct(){
    this.onAddProduct.emit(); 
  }
}