import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbRestaurantsAddComponent } from './cb-restaurants-add/cb-restaurants-add.component';
import { CbRestaurantsUpdateComponent } from './cb-restaurants-update/cb-restaurants-update.component';
import { CbRestaurantsComponent } from './cb-restaurants.component';
import { RouterModule, Routes } from '@angular/router';
import { CbRestaurantsPlanningComponent } from './cb-restaurants-planning/cb-restaurants-planning.component';
import { CbRestaurantsMainComponent } from './cb-restaurants-main/cb-restaurants-main.component';
import { CbRestaurantsImagesComponent } from './cb-restaurants-images/cb-restaurants-images.component';
import { CbRestaurantsMenuComponent } from './cb-restaurants-menu/cb-restaurants-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  {
    path: '',
    component: CbRestaurantsComponent
  },
];

@NgModule({
  declarations: [
    CbRestaurantsComponent,
    CbRestaurantsMainComponent,
    CbRestaurantsPlanningComponent,
    CbRestaurantsMenuComponent,
    CbRestaurantsImagesComponent,
    CbRestaurantsAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule.setLocale('en-US'),
    MatInputModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    CbRestaurantsAddComponent,
    CbRestaurantsUpdateComponent,
  ]
})
export class CbRestaurantsModule { }
