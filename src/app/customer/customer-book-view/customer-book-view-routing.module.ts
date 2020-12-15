import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerBookViewPage } from './customer-book-view.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerBookViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerBookViewPageRoutingModule {}
