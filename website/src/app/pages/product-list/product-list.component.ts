import { Component, OnInit, Output } from '@angular/core';
import { productData } from 'src/app/core/mock-data/product-data';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() products = new Array<CartProductI>;

  private productsData;

  constructor(){
    this.products = new Array<CartProductI>;
    this.productsData = productData; 
  }

  ngOnInit(): void {
    this.productsData.forEach(data => {
      const cartProduct : CartProductI = {
        product:data,
        ammount:0
      };
      this.products.push(cartProduct)
    });
  }

  public addProduct(cartProduct:CartProductI){
    console.log("add product"+cartProduct.product.name)
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
    console.log("remove product"+cartProduct.product.name)
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