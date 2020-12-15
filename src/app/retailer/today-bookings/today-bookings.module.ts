import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayBookingsPageRoutingModule } from './today-bookings-routing.module';

import { TodayBookingsPage } from './today-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayBookingsPageRoutingModule
  ],
  declarations: [TodayBookingsPage]
})
export class TodayBookingsPageModule {}
