
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // Redirigir a una ruta especifica cuando nuestro path coincide con la ruta
    // redirectTo: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then(m =>m.HomeModule),
    //Por defecto es prefix, solo si empieza para lo que empieza
    // El prefxi no se puede utilizar con el path vacio porque el path vacio siempre está
    //Todas las rutas coincidirán
    pathMatch: 'full'

  },
  // {
  //   path: 'home',
  //   // component: HomeComponent
  //   // Permite cargar un módulo bajo demanda (url)
  //   loadChildren: ()=> import('./pages/home/home.module').then(m =>m.HomeModule)
  // },
  {
    path: 'products-list',
    // component: ProductListComponent
    loadChildren: ()=> import('./pages/product-list/product-list.module').then(m =>m.ProductListModule)
  },
  {
    path: 'specialties',
    // component: SpecialtiesComponent
    loadChildren: ()=> import('./pages/specialties/specialties.module').then(m =>m.SpecialtiesModule)
  },
  {
    path: 'about',
    // component: AboutUsComponent
    loadChildren: ()=> import('./pages/about-us/about-us.module').then(m =>m.AboutUsModule)
  },
  {
    path: 'contact',
    // component: ContactComponent
    loadChildren: ()=> import('./pages/contact/contact.module').then(m =>m.ContactModule)
  },
  {
    path: 'product/:id',
    // component: ProductComponent
    // Para lazy load pero require de subrouting para indicar qué cargar de ese módulo.
    loadChildren: ()=> import('./pages/product/product.module').then(m =>m.ProductModule)

  },
  {
    path: 'shopping-cart',
    // component: ShoppingCartComponent
    loadChildren: ()=> import('./pages/shopping-cart/shopping-cart.module').then(m =>m.ShoppingCartModule)

  },
  //Esto tiene que ser la última
  {
    path: '**',
    // component: PageNotFoundComponent
    loadChildren: ()=> import('./pages/page-not-found/page-not-found.module').then(m =>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }