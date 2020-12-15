import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSearchDoctorPage } from './customer-search-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSearchDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSearchDoctorPageRoutingModule {}
