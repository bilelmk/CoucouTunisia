import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cb-gallery',
  templateUrl: './cb-gallery.component.html',
  styleUrls: ['./cb-gallery.component.scss'],
})
export class CbGalleryComponent implements OnInit {

  @Input() images: any ;
  url = environment.url + 'images/' ;

  slidesOpts = {
    zoom: false ,
    slidesPerView: 1.7,
    centredSlides: true ,
    spaceBetween: 30
  };

  constructor() { }

  ngOnInit() {}

}
