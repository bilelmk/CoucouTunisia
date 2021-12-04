import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbMessagingComponent } from './cb-messaging.component';
import { RouterModule, Routes } from '@angular/router';
import {CbMessagingClientsComponent} from './cb-messaging-clients/cb-messaging-clients.component';


const routes: Routes = [
  {
    path: '',
    component: CbMessagingComponent

  },
];

@NgModule({
  declarations: [
    CbMessagingComponent,
    CbMessagingClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    CbMessagingClientsComponent
  ]
})
export class CbMessagingModule { }
