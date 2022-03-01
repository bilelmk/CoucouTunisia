import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainProfilEditPageRoutingModule } from './cb-main-profil-edit-routing.module';

import { CbMainProfilEditPage } from './cb-main-profil-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainProfilEditPageRoutingModule
  ],
  declarations: [CbMainProfilEditPage]
})
export class CbMainProfilEditPageModule {}
