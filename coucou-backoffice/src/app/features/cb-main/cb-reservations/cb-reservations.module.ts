import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbReservationsComponent } from './cb-reservations.component';
import { RouterModule, Routes } from '@angular/router';
import { CbReservationsDetailsComponent } from './cb-reservations-details/cb-reservations-details.component';
import { CbReservationsAddComponent } from "./cb-reservations-add/cb-reservations-add.component";
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CbReservationAddClientsComponent } from "./cb-reservations-add/cb-reservation-add-clients/cb-reservation-add-clients.component";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {
    path: '',
    component: CbReservationsComponent
  },
];

@NgModule({
  declarations: [
    CbReservationsComponent,
    CbReservationsDetailsComponent,
    CbReservationsAddComponent,
    CbReservationAddClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  entryComponents: [
    CbReservationsDetailsComponent,
    CbReservationsAddComponent,
    CbReservationAddClientsComponent
  ]
})
export class CbReservationsModule { }
