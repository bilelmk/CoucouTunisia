import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbRegisterPageRoutingModule } from './cb-register-routing.module';

import { CbRegisterPage } from './cb-register.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbRegisterPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CbRegisterPage]
})
export class CbRegisterPageModule {}
