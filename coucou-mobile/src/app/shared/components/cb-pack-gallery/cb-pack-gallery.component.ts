import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cb-pack-gallery',
  templateUrl: './cb-pack-gallery.component.html',
  styleUrls: ['./cb-pack-gallery.component.scss'],
})
export class CbPackGalleryComponent implements OnInit {

  @Input() menus: any ;
  url = environment.url + 'images/' ;

  slidesOpts = {
    zoom: false ,
    centredSlides: true ,
    spaceBetween: 20
  };

  constructor() { }

  ngOnInit() {}
}
