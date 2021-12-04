import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbStatistiquesComponent } from './cb-statistiques.component';

const routes: Routes = [
  {
    path: '',
    component: CbStatistiquesComponent
  },
];

@NgModule({
  declarations: [
    CbStatistiquesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CbStatistiquesModule { }
