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
      name : "Général" ,
    },
    {
      route : "clients" ,
      name : "Clients" ,
    },
    {
      route : "images" ,
      name : "Mes Images" ,
    },
    {
      route : "planning" ,
      name : "planning" ,
    },
    {
      route : "avis" ,
      name : "Avis",
    },
    {
      route : "menus" ,
      name : "Menus" ,
    },
    {
      route : "rooms" ,
      name : "Rooms" ,
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
