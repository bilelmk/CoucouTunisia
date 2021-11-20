import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-main',
  templateUrl: './cb-main.component.html',
  styleUrls: ['./cb-main.component.scss']
})
export class CbMainComponent implements OnInit {

  routes = [
    {
      route : "admins" ,
      name : "Admin List" ,
      icon : "admin_panel_settings"
    },
    {
      route : "clients" ,
      name : "Clients" ,
      icon : "people"
    },
    {
      route : "restaurants" ,
      name : "Restaurants",
      icon : "restaurant"
    },
    {
      route : "messaging" ,
      name : "Messaging Service" ,
      icon : "chat"
    },
    {
      route : "reservations" ,
      name : "Reservation" ,
      icon : "edit_calendar"
    },
    {
      route : "emails" ,
      name : "Mailing Service" ,
      icon : "alternate_email"
    },
    {
      route : "notifications" ,
      name : "Notification Service" ,
      icon : "notifications"
    },
    {
      route : "notifications" ,
      name : "Dashboard" ,
      icon : "equalizer"
    },
    {
      route : "notifications" ,
      name : "Parking" ,
      icon : "commute"
    },
    {
      handler : this.logout.bind(this) ,
      name : "Se déconnecter" ,
      icon : "logout"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    // this.authenticationService.logout()
  }
}
