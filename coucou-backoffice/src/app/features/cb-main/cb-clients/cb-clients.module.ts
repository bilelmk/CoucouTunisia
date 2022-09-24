import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbClientsComponent } from './cb-clients.component';
import { RouterModule, Routes } from '@angular/router';

import { CbClientsModalComponent } from './cb-clients-modal/cb-clients-modal.component';
import { SharedModule } from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: CbClientsComponent
  },
];

@NgModule({
  declarations: [
    CbClientsComponent,
    CbClientsModalComponent,
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule,
  ],
  entryComponents: [
    CbClientsModalComponent,
  ]
})
export class CbClientsModule { }
