import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { CartProductI } from '../../interfaces/cart-product-interface';
import { ProductsApiService } from '../products-api/products-api.service';
import { ProductI } from '../../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private productApiService : ProductsApiService
  ) {
  }
  public getProducts(): Observable<CartProductI[]>{
    return this.productApiService.getProducts()
    .pipe(
      map((apiProducts: ProductI[]) => apiProducts.map(
        apiProduct => apiProduct as CartProductI
        ))
    )
  }

  public getProductById(id:number): Observable<CartProductI[]>{
    return this.productApiService.getProducts()
    .pipe(
      filter((apiProduct, index) => {
        return apiProduct[index].id == id
      }),
      map((apiProducts: ProductI[]) => apiProducts.map(
        apiProduct => apiProduct as CartProductI
        ))
    )
  }
}
