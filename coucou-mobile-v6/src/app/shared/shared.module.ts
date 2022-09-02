import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbGalleryComponent } from './components/cb-gallery/cb-gallery.component';
import { CbPlaceGalleryComponent } from './components/cb-place-gallery/cb-place-gallery.component';
import { CbPackGalleryComponent } from './components/cb-pack-gallery/cb-pack-gallery.component';
import { CbErrorsComponent } from './components/cb-errors/cb-errors.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CbGalleryComponent,
    CbPlaceGalleryComponent,
    CbPackGalleryComponent,
    CbErrorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CbGalleryComponent,
    CbPlaceGalleryComponent,
    CbPackGalleryComponent,
    CbErrorsComponent
  ]
})
export class SharedModule { }
