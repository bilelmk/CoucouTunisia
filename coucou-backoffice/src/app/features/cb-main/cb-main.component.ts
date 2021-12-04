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
      icon : "manage_accounts" ,
      role: "SUPER" ,
      authorities : ['RESTAURANT']
    },
    {
      route : "permissions" ,
      name : "Permission List" ,
      icon : "lock"
    },
    {
      route : "roles" ,
      name : "Roles List" ,
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
      route : "reservations" ,
      name : "Reservation" ,
      icon : "edit_calendar"
    },
    {
      route : "messaging" ,
      name : "Messaging Service" ,
      icon : "chat"
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
      route : "dashboard" ,
      name : "Statistiques" ,
      icon : "equalizer"
    },
    {
      route : "parking" ,
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
