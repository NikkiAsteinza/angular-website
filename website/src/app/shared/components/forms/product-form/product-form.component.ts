import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productData } from 'src/app/core/mock-data/product-data';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  public hasFormError:boolean = false;
  public hasSuccess:boolean = false;
  public productFormGroup?:FormGroup;
  public productId:string ="";
  constructor(
    private router:Router,
    private formBuilder:FormBuilder
  ){
    this.productFormGroup= this.formBuilder.group({
      name:new FormControl(
        '',[Validators.required],
      ),
      price:new FormControl(
        '',[Validators.required,Validators.min(0)]
      ),
      description:new FormControl(
        '',[Validators.required, Validators.maxLength(200)]
      ),
      image:new FormControl(
        '',[Validators.required],
      ),
      stock:new FormControl(
        '',[Validators.required, Validators.min(0)],
      )
    })
  }
  public handleProduct(){
    console.log(this.productFormGroup?.value);
    if(this.productFormGroup?.valid){
      const productCopy = [...productData];
      const greaterId = productCopy.sort((a,b)=>{
        return parseInt(b.id,10)-parseInt(a.id,10);
      })[0]?.id;
      const newId = parseInt(greaterId,10+1).toString();
      this.productId = newId;
      productData.push({...this.productFormGroup?.value, id:newId});

      this.hasFormError = false;
      this.hasSuccess = true;
      this.productFormGroup?.reset();
    }else{
      console.log(this.productFormGroup?.errors);
      console.log(this.productFormGroup?.value);
      this.hasFormError = true;
    }

  }
  public onCreateOtherClicked(){
      this.hasFormError = false;
      this.hasSuccess = true;
      this.productId = "";
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
