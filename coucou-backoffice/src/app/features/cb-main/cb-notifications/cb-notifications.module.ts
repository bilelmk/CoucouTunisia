import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbNotificationsComponent } from './cb-notifications.component';
import { CbNotificationsClientsComponent } from './cb-notifications-clients/cb-notifications-clients.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: CbNotificationsComponent
  },
];

@NgModule({
  declarations: [
    CbNotificationsComponent,
    CbNotificationsClientsComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      SharedModule
  ],
  entryComponents: [
    CbNotificationsClientsComponent
  ]
})
export class CbNotificationsModule { }
