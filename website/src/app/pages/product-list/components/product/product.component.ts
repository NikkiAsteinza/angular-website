import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product?: CartProductI;
  @Output() public onAddProductFromList =  new EventEmitter<void>(); 
  ngOnInit(): void {

  }
  public addProduct(){
    console.log("add product")
    this.onAddProductFromList.emit(); 
  }
}