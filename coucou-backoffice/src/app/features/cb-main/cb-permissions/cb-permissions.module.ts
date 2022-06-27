import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbPermissionsComponent } from './cb-permissions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CbPermissionsModalComponent } from './cb-permissions-modal/cb-permissions-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: CbPermissionsComponent
  },
];

@NgModule({
  declarations: [
    CbPermissionsComponent,
    CbPermissionsModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  entryComponents: [
    CbPermissionsModalComponent
  ]
})
export class CbPermissionsModule { }
