import { Pipe, PipeTransform } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Pipe({
  name: 'showbyCategory'
})
export class ShowbyCategoryPipe implements PipeTransform {

  transform(products: CartProductI[], priceFilter: number): CartProductI[] {
    if(!priceFilter || priceFilter === -1) return products;
    return products.filter(product=>product.product.category ===priceFilter);
  }
}
