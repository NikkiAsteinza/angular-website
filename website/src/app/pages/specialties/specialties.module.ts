import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    SpecialtiesComponent,
    RecipeComponent
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
