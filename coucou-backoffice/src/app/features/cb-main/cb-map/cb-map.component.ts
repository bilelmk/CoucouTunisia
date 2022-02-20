import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { Socket } from 'ngx-socket-io';
import { Helpers } from "../../../shared/helpers/helpers";

@Component({
  selector: 'app-cb-map',
  templateUrl: './cb-map.component.html',
  styleUrls: ['./cb-map.component.scss']
})
export class CbMapComponent implements OnInit {

  constructor(private socket: Socket) { }

  users = [] ;

  // Location
  map ;
  marker ;
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  ngOnInit(): void {
    const coordinate = { lat: 36.786967, lng: 10.184326 };
    const zoomLevel = 10;
    this.map = L.map('map', {
      center: [coordinate.lat, coordinate.lng],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
    this.map.addEventListener('click' , (e) => this.setMarkerCoordinate(e));
    this.marker = L.marker([coordinate.lat, coordinate.lng], { icon: this.smallIcon });
    this.marker.addTo(this.map);

    // this.socket.connect() ;
    this.socket.on( "restaurant" + 1 , data => {
      for(let user of this.users) {
        if(data.id === user.id) {
          Helpers.updateFields(data, user)
        }
      }
      this.users.push(data)
    })

  }

  setMarkerCoordinate(event: any){
    this.marker.setLatLng([event.latlng.lat, event.latlng.lng]);
  }

  send(){
    this.socket.emit(
      "tracking",  { id : 1 , user : { id: 1 ,lat:353434, log:54564648, name: "bilel mekrazi"}}
    )
  }


}
