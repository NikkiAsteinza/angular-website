import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './pages/product-list/product-list.module';
import { HomeModule } from './pages/home/home.module';
import { SpecialtiesModule } from './pages/specialties/specialties.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { ProductModule } from './pages/product/product.module';
import { ShoppingCartModule } from './pages/shopping-cart/shopping-cart.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, // Solo se importa aquí.
    // HomeModule,
    // ProductListModule,
    // SpecialtiesModule,
    // AboutUsModule,
    // ProductModule,
    // ShoppingCartModule,
    // PageNotFoundModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }