import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerBookViewPageRoutingModule } from './customer-book-view-routing.module';

import { CustomerBookViewPage } from './customer-book-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerBookViewPageRoutingModule
  ],
  declarations: [CustomerBookViewPage]
})
export class CustomerBookViewPageModule {}
