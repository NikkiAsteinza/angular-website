import { Component } from '@angular/core';
import { productData } from 'src/app/core/product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products = productData;

  public addProduct(id:string){
    console.log("add product"+id)

    this.products[Number(id)].ammount += 1;
  }
  public removeProduct(id:string){
    console.log("remove product"+id)
    this.products[Number(id)].ammount -= 1;

  }
}