import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbRolesComponent } from './cb-roles.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CbRolesPermissionsComponent } from './cb-roles-permissions/cb-roles-permissions.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CbRolesModalComponent } from './cb-roles-modal/cb-roles-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: CbRolesComponent
  },
];

@NgModule({
  declarations: [
    CbRolesComponent,
    CbRolesPermissionsComponent,
    CbRolesModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    CbRolesPermissionsComponent,
    CbRolesModalComponent
  ]
})
export class CbRolesModule { }
