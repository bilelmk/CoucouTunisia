import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbParkingComponent } from './cb-parking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CbParkingComponent
  },
];

@NgModule({
  declarations: [
    CbParkingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbParkingModule { }
