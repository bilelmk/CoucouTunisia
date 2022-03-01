import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainProfilAssistancePageRoutingModule } from './cb-main-profil-assistance-routing.module';

import { CbMainProfilAssistancePage } from './cb-main-profil-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainProfilAssistancePageRoutingModule
  ],
  declarations: [CbMainProfilAssistancePage]
})
export class CbMainProfilAssistancePageModule {}
