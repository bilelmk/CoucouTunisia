import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cb-place-gallery',
  templateUrl: './cb-place-gallery.component.html',
  styleUrls: ['./cb-place-gallery.component.scss'],
})
export class CbPlaceGalleryComponent implements OnInit {

  @Input() rooms: any ;
  url = environment.url + 'images/' ;

  slidesOpts = {
    zoom: false ,
    centredSlides: true ,
    spaceBetween: 20
  };

  constructor() { }

  ngOnInit() {
    console.log(this.rooms)
  }

}
