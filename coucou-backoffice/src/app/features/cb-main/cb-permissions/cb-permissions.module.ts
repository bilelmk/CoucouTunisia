import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbPermissionsComponent } from './cb-permissions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: CbPermissionsComponent
  },
];

@NgModule({
  declarations: [
    CbPermissionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class CbPermissionsModule { }
