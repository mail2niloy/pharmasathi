import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardCustomerPage } from './dashboard-customer.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCustomerPageRoutingModule {}
