import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbResetPassowrdPageRoutingModule } from './cb-reset-passowrd-routing.module';
import { CbResetPassowrdPage } from './cb-reset-passowrd.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbResetPassowrdPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CbResetPassowrdPage]
})
export class CbResetPassowrdPageModule {}
