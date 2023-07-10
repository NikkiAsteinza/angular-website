import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product?: CartProductI;
  @Output() public onAddProductFromList =  new EventEmitter<void>();
  constructor(
    //To nagivate
    private router: Router
  ){}
  ngOnInit(): void {

  }
  public addProduct(){
    this.onAddProductFromList.emit(); 
  }
  public navigateToDetail(id:string){
    this.router.navigate(['product','show',id]);
  }
}