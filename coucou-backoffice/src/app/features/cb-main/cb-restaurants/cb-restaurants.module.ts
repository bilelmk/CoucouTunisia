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
import { MatCardModule } from '@angular/material/card';
import { CbRestaurantsReservationsComponent } from './cb-restaurants-main/cb-restaurants-reservations/cb-restaurants-reservations.component';
import { RestaurantGuard } from "../../../core/guards/restaurant.guard";
import { MatIconModule } from "@angular/material/icon";
import { CbRestaurantsRatingComponent } from "./cb-restaurants-main/cb-restaurants-rating/cb-restaurants-rating.component";
import { CbRestaurantsRoomsAddComponent } from "./cb-restaurants-main/cb-restaurants-rooms/cb-restaurants-rooms-add/cb-restaurants-rooms-add.component";
import { CbRestaurantsMenusAddComponent } from "./cb-restaurants-main/cb-restaurants-menu/cb-restaurants-menus-add/cb-restaurants-menus-add.component";
import { CbRestaurantsImagesAddComponent } from "./cb-restaurants-main/cb-restaurants-images/cb-restaurants-images-add/cb-restaurants-images-add.component";

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
        canActivate: [RestaurantGuard],
      },
      {
        path: 'menus',
        component: CbRestaurantsMenuComponent,
        canActivate: [RestaurantGuard],
      },
      {
        path: 'images',
        component: CbRestaurantsImagesComponent,
        canActivate: [RestaurantGuard],
      },
      {
        path: 'planning',
        component: CbRestaurantsPlanningComponent,
        canActivate: [RestaurantGuard],
      },
      {
        path: 'avis',
        component: CbRestaurantsAvisComponent,
        canActivate: [RestaurantGuard],
      },
      {
        path: 'rooms',
        component: CbRestaurantsRoomsComponent,
        canActivate: [RestaurantGuard],
      },
      {
        path: 'clients',
        component: CbRestaurantsClientsComponent,
        canActivate: [RestaurantGuard],
      },
      {
        path: 'reservations',
        component: CbRestaurantsReservationsComponent,
        canActivate: [RestaurantGuard],
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
    CbRestaurantsReservationsComponent,
    CbRestaurantsRatingComponent,
    CbRestaurantsRoomsAddComponent,
    CbRestaurantsMenusAddComponent,
    CbRestaurantsImagesAddComponent
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
        MatCardModule,
        MatIconModule
    ],
  entryComponents: [
    CbRestaurantsAddComponent,
    CbRestaurantsAddMenuComponent,
    CbRestaurantsAddRoomComponent,
    CbRestaurantsAddImageComponent,
    CbRestaurantsRoomsAddComponent,
    CbRestaurantsMenusAddComponent,
    CbRestaurantsImagesAddComponent
  ]
})
export class CbRestaurantsModule { }
