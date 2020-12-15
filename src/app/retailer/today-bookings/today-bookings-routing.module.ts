import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayBookingsPage } from './today-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: TodayBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayBookingsPageRoutingModule {}
