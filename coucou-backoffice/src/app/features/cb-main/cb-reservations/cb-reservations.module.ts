import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbReservationsComponent } from './cb-reservations.component';
import { RouterModule, Routes } from '@angular/router';
import { CbReservationsDetailsComponent } from './cb-reservations-details/cb-reservations-details.component';

const routes: Routes = [
  {
    path: '',
    component: CbReservationsComponent
  },
];

@NgModule({
  declarations: [
    CbReservationsComponent,
    CbReservationsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    CbReservationsDetailsComponent
  ]
})
export class CbReservationsModule { }
