import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbLoginPageRoutingModule } from './cb-login-routing.module';

import { CbLoginPage } from './cb-login.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbLoginPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CbLoginPage]
})
export class CbLoginPageModule {}
