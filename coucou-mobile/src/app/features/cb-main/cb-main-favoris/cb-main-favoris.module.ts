import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainFavorisPageRoutingModule } from './cb-main-favoris-routing.module';

import { CbMainFavorisPage } from './cb-main-favoris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainFavorisPageRoutingModule
  ],
  declarations: [CbMainFavorisPage]
})
export class CbMainFavorisPageModule {}
