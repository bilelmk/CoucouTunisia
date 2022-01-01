import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbCouponComponent } from './cb-coupon.component';

const routes: Routes = [
  {
    path: '',
    component: CbCouponComponent
  },
];

@NgModule({
  declarations: [
    CbCouponComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbCouponModule { }
