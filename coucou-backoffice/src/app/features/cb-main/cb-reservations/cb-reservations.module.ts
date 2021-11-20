import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbReservationsComponent } from './cb-reservations.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CbReservationsComponent
  },
];

@NgModule({
  declarations: [
    CbReservationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbReservationsModule { }
