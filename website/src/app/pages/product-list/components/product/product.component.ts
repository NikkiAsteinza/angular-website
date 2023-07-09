import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductI } from 'src/app/core/product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product?: ProductI;
  @Output() public onRemoveProduct =  new EventEmitter<void>() // Podemos no pasarle nada, sabe de donde viene el uotput , el padre
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  public removeProduct(){
    this.onRemoveProduct.emit(); // Hay que emitir al padre
  }
}
