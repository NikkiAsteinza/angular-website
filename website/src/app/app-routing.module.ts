import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    // Redirigir a una ruta especifica cuando nuestro path coincide con la ruta
    redirectTo: 'home',
    //Por defecto es prefix, solo si empieza para lo que empieza
    // El prefxi no se puede utilizar con el path vacio porque el path vacio siempre está
    //Todas las rutas coincidirán
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products-list',
    component: ProductListComponent
  },
  {
    path: 'specialties',
    component: SpecialtiesComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  //Esto tiene que ser la última
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }