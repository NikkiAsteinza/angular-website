import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ProductI } from 'src/app/core/interfaces/product-interface';
import { ProductsFirestoreService } from 'src/app/core/services/firestore-products/products-firestore.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit,OnChanges {
  @Input() public productI?: ProductI;
  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public productFormGroup?: FormGroup;
  public productId: number = 0;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductsFirestoreService
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Input Changes", changes);
    if (changes["productI"] && this.productI) {
      console.log("Product Received in Form:", this.productI);
      this.buildForm();
    }
  }

  private buildForm() {
    console.log("Building Form with Product:", this.productI);
    this.productFormGroup = this.formBuilder.group({
      name: new FormControl(this.productI?.name || '', [Validators.required]),
      category: new FormControl(this.productI?.category || '', [Validators.required]),
      description: new FormControl(
        this.productI?.description || '',
        [Validators.required, Validators.maxLength(200)]
      ),
      image: new FormControl(this.productI?.image || '', [Validators.required]),
      price: new FormControl(this.productI?.price || '', [Validators.required]),
    });
  }
  public handleProduct(){
    if(this.productI){
      if(this.productFormGroup?.valid){
        this.productService.update(this.productFormGroup.value as ProductI)
  
        this.hasFormError = false;
        this.hasSuccess = true;
        this.productFormGroup?.reset();
      }else{
        console.log(this.productFormGroup?.errors);
        console.log(this.productFormGroup?.value);
        this.hasFormError = true;
      }
    }
    else{
      console.log(this.productFormGroup?.value);
      if(this.productFormGroup?.valid){
        this.productService.create(this.productFormGroup.value)
  
        this.hasFormError = false;
        this.hasSuccess = true;
        this.productFormGroup?.reset();
      }else{
        console.log(this.productFormGroup?.errors);
        console.log(this.productFormGroup?.value);
        this.hasFormError = true;
      }
    }
  }
  public onCreateOtherClicked(){
      this.hasFormError = false;
      this.hasSuccess = true;
      this.productId = 0;
      this.productFormGroup?.reset();
  }
  public onBackToProductClicked(){
    this.router.navigate(['product',this.productId]);
  }
  getErrorMessage(controlName:string) {
    if (this.productFormGroup?.controls[controlName].hasError('required')) {
      return 'Debes rellenar este campo para continuar';
    }
    if (this.productFormGroup?.controls[controlName].hasError('min')) {
      return 'El número debe ser positivo';
    }

    return this.productFormGroup?.controls[controlName].hasError('email') ? 'El email no es válido' : '';
  }
}
