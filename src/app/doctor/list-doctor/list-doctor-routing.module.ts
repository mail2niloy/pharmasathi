import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDoctorPage } from './list-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ListDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDoctorPageRoutingModule {}
