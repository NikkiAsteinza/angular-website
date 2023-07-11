import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(
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
      ),
      id:new FormControl(
        '',[Validators.required]
      ),
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
      productData.push({...this.productFormGroup.value, id:newId});
      this.productFormGroup.reset();
      this.hasFormError = false;
      this.hasSuccess = true;
    }else{
      this.hasFormError = true;
    }

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
