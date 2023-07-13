import { Pipe, PipeTransform } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Pipe({
  name: 'orderbyPrice'
})
export class OrderbyPricePipe implements PipeTransform {

  transform(products: CartProductI[], priceFilter: number): CartProductI[] {
    if(!priceFilter || priceFilter === -1) return products;
    return products.filter(product=>product.product.id<=priceFilter);
  }

}
