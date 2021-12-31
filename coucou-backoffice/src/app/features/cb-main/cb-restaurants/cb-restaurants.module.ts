import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbRestaurantsAddComponent } from './cb-restaurants-add/cb-restaurants-add.component';
import { CbRestaurantsComponent } from './cb-restaurants.component';
import { RouterModule, Routes } from '@angular/router';
import { CbRestaurantsPlanningComponent } from './cb-restaurants-main/cb-restaurants-planning/cb-restaurants-planning.component';
import { CbRestaurantsMainComponent } from './cb-restaurants-main/cb-restaurants-main.component';
import { CbRestaurantsImagesComponent } from './cb-restaurants-main/cb-restaurants-images/cb-restaurants-images.component';
import { CbRestaurantsMenuComponent } from './cb-restaurants-main/cb-restaurants-menu/cb-restaurants-menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ImageCropperModule} from 'ngx-image-cropper';
import { CbRestaurantsAddMenuComponent } from './cb-restaurants-add/cb-restaurants-add-menu/cb-restaurants-add-menu.component';
import { CbRestaurantsAddRoomComponent } from './cb-restaurants-add/cb-restaurants-add-room/cb-restaurants-add-room.component';
import { CbRestaurantsAddImageComponent } from './cb-restaurants-add/cb-restaurants-add-image/cb-restaurants-add-image.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SharedModule } from '../../../shared/shared.module';
import { CbRestaurantsAvisComponent } from './cb-restaurants-main/cb-restaurants-avis/cb-restaurants-avis.component';
import { CbRestaurantsInformationsComponent } from './cb-restaurants-main/cb-restaurants-informations/cb-restaurants-informations.component';
import { CbRestaurantsRoomsComponent } from './cb-restaurants-main/cb-restaurants-rooms/cb-restaurants-rooms.component';
import { CbRestaurantsClientsComponent } from './cb-restaurants-main/cb-restaurants-clients/cb-restaurants-clients.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: CbRestaurantsComponent
  },
  {
    path: ':id',
    component: CbRestaurantsMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'informations',
      },
      {
        path: 'informations',
        component: CbRestaurantsInformationsComponent,
      },
      {
        path: 'menus',
        component: CbRestaurantsMenuComponent,
      },
      {
        path: 'images',
        component: CbRestaurantsImagesComponent,
      },
      {
        path: 'planning',
        component: CbRestaurantsPlanningComponent,
      },
      {
        path: 'avis',
        component: CbRestaurantsAvisComponent,
      },
      {
        path: 'rooms',
        component: CbRestaurantsRoomsComponent,
      },
      {
        path: 'clients',
        component: CbRestaurantsClientsComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    CbRestaurantsComponent,
    CbRestaurantsMainComponent,
    CbRestaurantsPlanningComponent,
    CbRestaurantsMenuComponent,
    CbRestaurantsImagesComponent,
    CbRestaurantsAddComponent,
    CbRestaurantsAddMenuComponent,
    CbRestaurantsAddRoomComponent,
    CbRestaurantsAddImageComponent,
    CbRestaurantsAvisComponent,
    CbRestaurantsInformationsComponent,
    CbRestaurantsRoomsComponent,
    CbRestaurantsClientsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule.setLocale('en-US'),
    MatInputModule,
    MatSlideToggleModule,
    ImageCropperModule,
    CKEditorModule,
    SharedModule,
    MatCardModule
  ],
  entryComponents: [
    CbRestaurantsAddComponent,
    CbRestaurantsAddMenuComponent,
    CbRestaurantsAddRoomComponent,
    CbRestaurantsAddImageComponent,
  ]
})
export class CbRestaurantsModule { }
