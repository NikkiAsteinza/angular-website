import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialtiesModule } from './specialties.module';
import { SpecialtiesComponent } from './specialties.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:SpecialtiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialtiesRoutingModule { }