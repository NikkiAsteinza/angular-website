import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ButtonComponent
  ]
})
export class CoreModule { }