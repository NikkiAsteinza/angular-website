import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialtiesModule } from './specialties.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:SpecialtiesModule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialtiesRoutingModule { }