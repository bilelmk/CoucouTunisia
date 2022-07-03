import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbMainPageRoutingModule } from './cb-main-routing.module';
import { CbMainPage } from './cb-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainPageRoutingModule,
  ],
  declarations: [
    CbMainPage,
  ]
})
export class CbMainPageModule {}
