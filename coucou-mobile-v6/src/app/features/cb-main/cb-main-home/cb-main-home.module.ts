import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbMainHomePageRoutingModule } from './cb-main-home-routing.module';
import { CbMainHomePage } from './cb-main-home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbMainHomePageRoutingModule,
        NgCircleProgressModule,
        SharedModule,
    ],
  declarations: [CbMainHomePage]
})
export class CbMainHomePageModule {}
