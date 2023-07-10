import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartModule } from './shopping-cart.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:ShoppingCartModule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
