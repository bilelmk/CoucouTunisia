import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { RoleService } from '../../../../core/services/http/role.service';
import { RestaurantService } from '../../../../core/services/http/restaurant.service';
import { Restaurant } from '../../../../core/models/restaurant';
import { Helpers } from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-cb-roles-restaurants',
  templateUrl: './cb-roles-restaurants.component.html',
  styleUrls: ['./cb-roles-restaurants.component.scss']
})
export class CbRolesRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [] ;
  roleRestaurants: Restaurant[] = [] ;

  @ViewChild('restaurantsRef') restaurantsRef ;
  @ViewChild('roleRestaurantsRef') roleRestaurantsRef ;

  constructor(public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRolesRestaurantsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ,
              private snackbarService: SnackbarService ,
              private roleService: RoleService,
              private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getAllLite().subscribe(
      res => {
        this.restaurants = res
        for(let restaurant of this.data.item.restaurants) {
          Helpers.addToArray(restaurant , this.roleRestaurants)
          Helpers.deleteFromArray(restaurant , this.restaurants)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  push() {
    for(let restaurant of this.restaurantsRef.selectedOptions.selected) {
      Helpers.addToArray(restaurant.value , this.roleRestaurants)
      Helpers.deleteFromArray(restaurant.value, this.restaurants )
    }
  }

  pull() {
    for(let restaurant of this.roleRestaurantsRef.selectedOptions.selected) {
      Helpers.addToArray(restaurant.value , this.restaurants)
      Helpers.deleteFromArray(restaurant.value, this.roleRestaurants  )
    }
  }

  save() {
    let ids = this.roleRestaurants.map(restaurant => {
      return restaurant.id
    })
    this.roleService.updateRestaurants(this.data.item.id , ids).subscribe(
      res => {
        this.data.item.restaurants = this.roleRestaurants
        this.matDialogRef.close();
      },error => {
        console.log(error)
      }
    )
  }

}
