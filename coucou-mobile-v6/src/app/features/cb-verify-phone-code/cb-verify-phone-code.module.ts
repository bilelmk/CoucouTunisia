import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbVerifyPhoneCodePageRoutingModule } from './cb-verify-phone-code-routing.module';
import { CbVerifyPhoneCodePage } from './cb-verify-phone-code.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbVerifyPhoneCodePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CbVerifyPhoneCodePage]
})
export class CbVerifyPhoneCodePageModule {}
