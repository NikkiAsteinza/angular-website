import { Component, OnInit, Output } from '@angular/core';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() products = new Array<CartProductI>;
  public priceFilter :number = -1;
  public categoryFilter :number = -1;
  constructor(
    private shoppingApiService :ShoppingCartService
  ){
    this.products = new Array<CartProductI>;
  }

  ngOnInit(): void {
    
    this.shoppingApiService.getProducts().subscribe((result)=>{
      result.forEach(data => {
        this.products.push(data)
      });
      console.log("Mapped products");
      console.log(this.products);
    })
    
  }

  public addProduct(cartProduct:CartProductI){
    console.log("add product"+cartProduct.product.title)
    if(this.products.includes(cartProduct))
    {
      const existingProduct = this.products.find(
        product=>product.product.id === cartProduct.product.id);
      if(existingProduct)
        existingProduct.ammount +=1;
    }
    else{
      this.products.push(cartProduct);
      const addedProduct = this.products.find(
        product=>product.product.id === cartProduct.product.id);
      if(addedProduct)
        addedProduct.ammount +=1;
    }
  }
  public removeProduct(cartProduct:CartProductI){
    console.log("remove product"+cartProduct.product.title)
    const productToRemove = this.products.find(product=>product === cartProduct);

    if (productToRemove && productToRemove.ammount == 1) {
      const productToRemoveIndex = this.products.findIndex(
        selectedProduct=> selectedProduct.product.id === productToRemove.product.id);
      this.products.splice(productToRemoveIndex, 1);
    }
    else if (productToRemove){
      productToRemove.ammount -= 1
    }
  }
}