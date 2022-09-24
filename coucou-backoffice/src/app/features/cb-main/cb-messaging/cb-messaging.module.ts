import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbMessagingComponent } from './cb-messaging.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {SharedModule} from "../../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: CbMessagingComponent

  },
];

@NgModule({
  declarations: [
    CbMessagingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgCircleProgressModule,
    MatButtonToggleModule,
    SharedModule,
    FormsModule,
  ]
})
export class CbMessagingModule { }
