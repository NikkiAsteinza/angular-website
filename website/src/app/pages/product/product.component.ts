import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CartProductI } from 'src/app/core/interfaces/cart-product-interface';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public product?:CartProductI;
  constructor(
    //To nagivate
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService :ShoppingCartService
  ){
    this.activatedRoute.params.subscribe((params)=>{
       this.shoppingCartService.getProductById(params['id']).subscribe((data)=>{
        this.product = data;
        console.log("PRODUCT TO SHOW");
        console.log(this.product?.product.name);
      });
    })
  }
  public navigateToProductList(){
    this.router.navigate(['products-list']);
  }
  public navigateToCreateProduct(){
    this.router.navigate(['product','create']);
  }
  public navigateToEditProduct(id:number){
    this.router.navigate(['product','edit',id]);
  }
  public navigateToDeleteProduct(id:number){
    this.router.navigate(['product','delete',id]);
  }
}
