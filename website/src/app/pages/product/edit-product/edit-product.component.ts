import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public productId:string = "";
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((params)=>{
      this.productId = params['id'];
    })
  }
}
