import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './directives/parallax.directive';
import { CbGalleryComponent } from './components/cb-gallery/cb-gallery.component';
import { IonicModule } from '@ionic/angular';
import { CbGalleryModalComponent } from './components/cb-gallery/cb-gallery-modal/cb-gallery-modal.component';


@NgModule({
  declarations: [
    ParallaxDirective,
    CbGalleryComponent,
    CbGalleryModalComponent
  ],
  exports: [
    ParallaxDirective,
    CbGalleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [
      CbGalleryModalComponent
  ]
})
export class SharedModule { }
