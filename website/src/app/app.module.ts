import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './pages/product-list/product-list.module';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer/footer.component';
import { HomeModule } from './pages/home/home.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SpecialtiesModule } from './pages/specialties/specialties.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { ProductModule } from './pages/product/product.module';
import { ShoppingCartModule } from './pages/shopping-cart/shopping-cart.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductListModule,
    SpecialtiesModule,
    AboutUsModule,
    ProductModule,
    ShoppingCartModule,
    PageNotFoundModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }