import { productData } from 'src/app/core/mock-data/product-data';
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Directive({
  selector: '[appProductHover]'
})
export class ProductHoverDirective {
  @Input() public initialColor:string = "white";
  @HostBinding('style.border') public bgColor:string = '1px solid black';
  @HostListener('mouseenter') public onMouseEnter(){

    this.bgColor='4px solid black';
  }
  @HostListener('mouseleave') public onMouseLeave(){
    
      this.bgColor='1px solid black';
  }
  
  constructor() {
    
  }
    
}
