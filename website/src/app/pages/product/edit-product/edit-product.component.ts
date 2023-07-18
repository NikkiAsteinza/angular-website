import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductI } from 'src/app/core/interfaces/product-interface';
import { ProductsFirestoreService } from 'src/app/core/services/firestore-products/products-firestore.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public loading = true;
  public product?: ProductI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestoreService: ProductsFirestoreService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id']; // Verifica que estás obteniendo el id correcto
      this.firestoreService.get(productId).subscribe((data) => {
        this.product = data;
        this.loading = false; // Marcar como cargados los datos del producto
        console.log("PRODUCT TO SHOW");
        console.log(this.product?.name);
      });
    });
  }
}
