import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRetailerPage } from './dashboard-retailer.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardRetailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRetailerPageRoutingModule {}
