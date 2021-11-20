import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbEmailsComponent } from './cb-emails.component';

const routes: Routes = [
  {
    path: '',
    component: CbEmailsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbEmailsModule { }
