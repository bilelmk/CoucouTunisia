import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-main',
  templateUrl: './cb-main.component.html',
  styleUrls: ['./cb-main.component.scss']
})
export class CbMainComponent implements OnInit {

  routes = [
    {
      type: "route",
      route : "admins" ,
      name : "Admin List" ,
      icon : "manage_accounts" ,
      permission: "ADMIN"
    },
    {
      type: "route",
      route : "permissions" ,
      name : "Permission List" ,
      icon : "lock",
      permission: "ADMIN"
    },
    {
      type: "route",
      route : "roles" ,
      name : "Roles List" ,
      icon : "admin_panel_settings",
      permission: "ADMIN"
    },
    {
      type: "route",
      route : "clients" ,
      name : "Clients" ,
      icon : "people",
      permission: "ADMIN"
    },
    {
      type: "route",
      route : "restaurants" ,
      name : "Restaurants",
      icon : "restaurant",
      permission: "RESTAURANT"
    },
    {
      type: "route",
      route : "reservations" ,
      name : "Reservation" ,
      icon : "edit_calendar",
      permission: "ADMIN"
    },
    {
      type: "route",
      route : "messaging" ,
      name : "Messaging Service" ,
      icon : "chat",
      permission: "MESSAGING"
    },
    {
      type: "route",
      route : "emails" ,
      name : "Mailing Service" ,
      icon : "alternate_email",
      permission: "MAILING"
    },
    {
      type: "route",
      route : "notifications" ,
      name : "Notification Service" ,
      icon : "notifications",
      permission: "NOTIFICATION"
    },
    {
      type: "route",
      route : "map" ,
      name : "Map" ,
      icon : "public",
      permission: "MAP"
    },
    {
      type: "route",
      route : "dashboard" ,
      name : "Statistiques" ,
      icon : "equalizer",
      permission: "DASHBOARD"
    },
    // {
    //   type: "route",
    //   route : "parking" ,
    //   name : "Parking" ,
    //   icon : "commute",
    //   permission: "PARKING"
    // },

    {
      type: "route",
      route : "coupons" ,
      name : "Coupons" ,
      icon : "percent",
      permission: "ADMIN"
    },
    {
      type: "button",
      handler : this.logout.bind(this) ,
      name : "Se déconnecter" ,
      icon : "logout"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    let permissions = JSON.parse(sessionStorage.getItem('permissions' ))
    this.routes = this.routes.filter(object => {
      return object.type == 'button' || this.isPermissionExist(object.permission , permissions )
    })
  }

  public isPermissionExist (routePermission , permissions) {
    for(let permission of permissions) {
      if(routePermission === permission.name) {
        return true
      }
    }
    return false ;
  }

  logout() {
    console.log("test")
    // this.authenticationService.logout()
  }
}
