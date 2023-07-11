import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
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
      email:new FormControl(
        '',[Validators.required,Validators.email]
      ),
      description:new FormControl(
        '',[Validators.required, Validators.maxLength(200)]
      )
    })
  }
  public handleProduct(){
    console.log(this.productFormGroup?.value);
    if(this.productFormGroup?.valid){
    
      this.productFormGroup.reset();
      this.hasFormError = false;
      this.hasSuccess = true;
    }else{
      console.log(this.productFormGroup?.errors);
      console.log(this.productFormGroup?.value);
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
