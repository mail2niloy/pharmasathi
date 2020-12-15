import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardCustomerPageRoutingModule } from './dashboard-customer-routing.module';

import { DashboardCustomerPage } from './dashboard-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardCustomerPageRoutingModule
  ],
  declarations: [DashboardCustomerPage]
})
export class DashboardCustomerPageModule {}
