import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'show/:id',
    pathMatch: 'full',
    component:ProductComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component:CreateProductComponent
  },
  {
    path: 'delete/:id',
    pathMatch: 'full',
    component:DeleteProductComponent
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component:EditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
