import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbQrPageRoutingModule } from './cb-qr-routing.module';

import { CbQrPage } from './cb-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbQrPageRoutingModule
  ],
  declarations: [CbQrPage]
})
export class CbQrPageModule {}
