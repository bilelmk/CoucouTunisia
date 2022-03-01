import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainHomePageRoutingModule } from './cb-main-home-routing.module';

import { CbMainHomePage } from './cb-main-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainHomePageRoutingModule
  ],
  declarations: [CbMainHomePage]
})
export class CbMainHomePageModule {}
