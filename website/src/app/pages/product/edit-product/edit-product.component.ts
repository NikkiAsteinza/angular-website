import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';
import { ProductI } from 'src/app/core/interfaces/product-interface';
import { ProductsFirestoreService } from 'src/app/core/services/firestore-products/products-firestore.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public productId:string = "";
  public product?:ProductI;
  constructor(
    private activatedRoute: ActivatedRoute,
    private firestoreService: ProductsFirestoreService ){
    this.activatedRoute.params.subscribe((params)=>{
      this.productId = params['id'];
    })
    this.firestoreService.get(this.productId).subscribe((product)=>{
      this.product = product;
    })
  }
}
