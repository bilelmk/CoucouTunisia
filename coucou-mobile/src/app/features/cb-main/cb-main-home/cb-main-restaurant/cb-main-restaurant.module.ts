import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainRestaurantPageRoutingModule } from './cb-main-restaurant-routing.module';

import { CbMainRestaurantPage } from './cb-main-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainRestaurantPageRoutingModule
  ],
  declarations: [CbMainRestaurantPage]
})
export class CbMainRestaurantPageModule {}
