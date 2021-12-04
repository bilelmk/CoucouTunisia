import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbAdminsComponent } from './cb-admins.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CbAdminsModalComponent } from './cb-admins-modal/cb-admins-modal.component';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CbAdminsComponent
  },
];

@NgModule({
  declarations: [
    CbAdminsComponent,
    CbAdminsModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    SharedModule
  ],
  entryComponents: [
    CbAdminsModalComponent
  ]
})
export class CbAdminsModule { }
