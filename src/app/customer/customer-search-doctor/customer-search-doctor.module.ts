import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSearchDoctorPageRoutingModule } from './customer-search-doctor-routing.module';

import { CustomerSearchDoctorPage } from './customer-search-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerSearchDoctorPageRoutingModule
  ],
  declarations: [CustomerSearchDoctorPage]
})
export class CustomerSearchDoctorPageModule {}
