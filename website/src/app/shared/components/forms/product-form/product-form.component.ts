import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/core/interfaces/product-interface';
import { ProductsFirestoreService } from 'src/app/core/services/firestore-products/products-firestore.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() public productI?: ProductI;
  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public productFormGroup?: FormGroup;

  private isDataLoaded: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductsFirestoreService
  ) {}
  ngOnInit(): void {
    console.log('Build empty form', this.productI);
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('Input Changes', changes);
    if (changes['productI'] && this.productI && !this.isDataLoaded) {
      console.log('Product Received in Form:', this.productI);
      this.buildForm();
      this.isDataLoaded = true;
    }
  }

  public handleProduct() {
    if (this.productI) {
      this.editProduct();
    } else {
      console.log(this.productFormGroup?.value);
      if (this.productFormGroup?.valid) {
        this.productService.create(this.productFormGroup.value);
        this.handleFormSuccess(true);
      } else {
        this.handleFormSuccess(false);
      }
    }
  }
  public onCreateOtherClicked() {
    this.hasFormError = false;
    this.hasSuccess = true;

    this.productFormGroup?.reset();
  }
  public onBackToProductClicked() {
    this.router.navigate(['product-list']);
  }

  protected getErrorMessage(controlName: string) {
    if (this.productFormGroup?.controls[controlName].hasError('required')) {
      return 'Debes rellenar este campo para continuar';
    }
    if (this.productFormGroup?.controls[controlName].hasError('min')) {
      return 'El número debe ser positivo';
    }

    return this.productFormGroup?.controls[controlName].hasError('email')
      ? 'El email no es válido'
      : '';
  }

  private editProduct() {
    if (this.productFormGroup?.valid) {
      const productData:ProductI = this.productFormGroup.value;
      if(this.productI)
        productData.id = this.productI.id; 
      this.productService.update(productData);
      this.handleFormSuccess(true);
    } else {
      this.handleFormSuccess(false);
    }
  }

  private handleFormSuccess(hasSuccess: boolean) {
    if (this.hasFormError != !hasSuccess) this.hasFormError = !hasSuccess;
    if (this.hasSuccess != hasSuccess) this.hasSuccess = hasSuccess;
    if (hasSuccess) this.productFormGroup?.reset();
    else {
      console.log(this.productFormGroup?.errors);
      console.log(this.productFormGroup?.value);
    }
  }

  private buildForm() {
    console.log("hola");
    this.productFormGroup = this.formBuilder.group({
      name: new FormControl(this.productI?.name || '', [Validators.required]),
      category: new FormControl(this.productI?.category || '', [
        Validators.required,
      ]),
      description: new FormControl(this.productI?.description || '', [
        Validators.required,
        Validators.maxLength(200),
      ]),
      image: new FormControl(this.productI?.image || '', [Validators.required]),
      price: new FormControl(this.productI?.price || '', [Validators.required]),
    });
  }
}