import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbMessagingComponent } from './cb-messaging.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CbMessagingComponent

  },
];

@NgModule({
  declarations: [
    CbMessagingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbMessagingModule { }
