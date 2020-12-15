import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDoctorPageRoutingModule } from './list-doctor-routing.module';

import { ListDoctorPage } from './list-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDoctorPageRoutingModule
  ],
  declarations: [ListDoctorPage]
})
export class ListDoctorPageModule {}
