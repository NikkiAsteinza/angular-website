import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { CartProductI } from '../../interfaces/cart-product-interface';
import { ProductI } from '../../interfaces/product-interface';
import { ProductsFirestoreService } from '../firestore-products/products-firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private productFirestoreService : ProductsFirestoreService
  ) {
  }
  public getProducts(): Observable<CartProductI[]> {
    return this.productFirestoreService.getAll().pipe(
      map((apiProducts: ProductI[]) => {
        return apiProducts.map(apiProduct => {
          const cartProduct: CartProductI = { ...apiProduct, product:apiProduct, ammount: 0};
          return cartProduct;
        });
      })
    );
  }
}
