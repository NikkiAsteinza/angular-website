import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SpecialtiesComponent
  ],
  imports: [
    CommonModule,
    SpecialtiesRoutingModule,
    SharedModule
  ],
  // exports:[
  //   SpecialtiesComponent
  // ]
})
export class SpecialtiesModule { }
