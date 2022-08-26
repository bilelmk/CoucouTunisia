import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbMainProfilePageRoutingModule } from './cb-main-profile-routing.module';
import { CbMainProfilePage } from './cb-main-profile.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbMainProfilePageRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
  declarations: [CbMainProfilePage]
})
export class CbMainProfilePageModule {}
