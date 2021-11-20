import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbNotificationsComponent } from './cb-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: CbNotificationsComponent
  },
];

@NgModule({
  declarations: [
    CbNotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbNotificationsModule { }
