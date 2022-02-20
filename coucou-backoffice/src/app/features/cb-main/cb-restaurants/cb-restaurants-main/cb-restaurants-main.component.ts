import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-restaurants-main',
  templateUrl: './cb-restaurants-main.component.html',
  styleUrls: ['./cb-restaurants-main.component.scss']
})
export class CbRestaurantsMainComponent implements OnInit {

  routes = [
    {
      route : "informations" ,
      name : "Informations Générales" ,
    },

    {
      route : "planning" ,
      name : "Planning" ,
    },
    {
      route : "menus" ,
      name : "Menus" ,
    },
    {
      route : "rooms" ,
      name : "Rooms" ,
    },
    {
      route : "images" ,
      name : "Galerie" ,
    },
    {
      route : "reservations" ,
      name : "Réservations" ,
    },
    {
      route : "clients" ,
      name : "Clients" ,
    },
    {
      route : "avis" ,
      name : "Avis",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
