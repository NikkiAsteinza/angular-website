import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';


@NgModule({
  declarations: [
    SpecialtiesComponent
  ],
  imports: [
    CommonModule,
    SpecialtiesRoutingModule
  ],
  // exports:[
  //   SpecialtiesComponent
  // ]
})
export class SpecialtiesModule { }
