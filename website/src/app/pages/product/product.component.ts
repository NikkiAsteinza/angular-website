import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductI } from 'src/app/core/interfaces/product-interface';
import { productData } from 'src/app/core/mock-data/product-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public product?:ProductI;
  constructor(
    //To nagivate
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe((params)=>{
      this.product= productData.find(product=>product.id == params['id'])
    })
  }
  public navigateToProductList(){
    this.router.navigate(['products-list']);
  }
}
