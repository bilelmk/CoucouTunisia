import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbSendPasswordCodePageRoutingModule } from './cb-send-password-code-routing.module';
import { CbSendPasswordCodePage } from './cb-send-password-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbSendPasswordCodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CbSendPasswordCodePage]
})
export class CbSendPasswordCodePageModule {}
