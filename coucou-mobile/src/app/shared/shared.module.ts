import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CbGalleryComponent } from './components/cb-gallery/cb-gallery.component';
import { CbPlaceGalleryComponent } from './components/cb-place-gallery/cb-place-gallery.component';
import { CbPackGalleryComponent } from './components/cb-pack-gallery/cb-pack-gallery.component';


@NgModule({
  declarations: [
    CbGalleryComponent,
    CbPlaceGalleryComponent,
    CbPackGalleryComponent
  ],
  exports: [
    CbGalleryComponent,
    CbPlaceGalleryComponent,
    CbPackGalleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
