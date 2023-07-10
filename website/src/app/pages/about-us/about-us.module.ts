import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  // No needed because of lazy load
  // exports:[
  //   AboutUsComponent
  // ]
})
export class AboutUsModule { }
