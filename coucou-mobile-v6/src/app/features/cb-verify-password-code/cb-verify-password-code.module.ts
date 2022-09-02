import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbVerifyPasswordCodePageRoutingModule } from './cb-verify-password-code-routing.module';
import { CbVerifyPasswordCodePage } from './cb-verify-password-code.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbVerifyPasswordCodePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CbVerifyPasswordCodePage]
})
export class CbVerifyPasswordCodePageModule {}
