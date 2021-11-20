import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbClientsComponent } from './cb-clients.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CbClientsComponent
  },
];

@NgModule({
  declarations: [
    CbClientsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbClientsModule { }
