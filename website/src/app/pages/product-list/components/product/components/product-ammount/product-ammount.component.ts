import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-ammount',
  templateUrl: './product-ammount.component.html',
  styleUrls: ['./product-ammount.component.scss']
})
export class ProductAmmountComponent {
 @Output() public onRemove = new EventEmitter();
 @Output() public onAdd = new EventEmitter();

 public removeProduct(){
  this.onRemove.emit();
}
public addProduct(){
  this.onAdd.emit(); 
}
}
