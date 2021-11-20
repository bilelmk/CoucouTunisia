import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbAdminsComponent } from './cb-admins.component';
import { CbAdminsAddComponent } from './cb-admins-add/cb-admins-add.component';
import { CbAdminsUpdateComponent } from './cb-admins-update/cb-admins-update.component';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    component: CbAdminsComponent
  },
];

@NgModule({
  declarations: [
    CbAdminsComponent,
    CbAdminsAddComponent,
    CbAdminsUpdateComponent
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
    MatPaginatorModule
  ],
  entryComponents: [
    CbAdminsAddComponent,
    CbAdminsUpdateComponent
  ]
})
export class CbAdminsModule { }
