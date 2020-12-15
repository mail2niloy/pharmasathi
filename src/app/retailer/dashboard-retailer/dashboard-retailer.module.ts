import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardRetailerPageRoutingModule } from './dashboard-retailer-routing.module';

import { DashboardRetailerPage } from './dashboard-retailer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRetailerPageRoutingModule
  ],
  declarations: [DashboardRetailerPage]
})
export class DashboardRetailerPageModule {}
