import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { CbRestaurantsAddComponent } from './cb-restaurants-add/cb-restaurants-add.component';
import { RestaurantService } from '../../../core/services/http/restaurant.service';
import { Restaurant } from '../../../core/models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantShareService } from "../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants',
  templateUrl: './cb-restaurants.component.html',
  styleUrls: ['./cb-restaurants.component.scss']
})
export class CbRestaurantsComponent implements OnInit {

  error = false ;
  loading = false ;
  restaurants: Restaurant[] = [] ;

  constructor( private spinnerService: SpinnerService ,
               private dialog: MatDialog ,
               private restaurantService: RestaurantService ,
               private router: Router ,
               private route: ActivatedRoute,
               private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate() ;
    this.restaurantService.getAllLite().subscribe(
      res => {
        this.loading = false ;
        this.restaurants = res ;
        this.spinnerService.deactivate() ;
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate() ;
      }
    )
  }

  openAddModal() {
    const dialogRef = this.dialog.open( CbRestaurantsAddComponent, {
      panelClass: 'custom-dialog-container' , width: '1000px' , height : '700px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        // console.log(this.admins)
        // this.dataSource = new MatTableDataSource<Admin>(this.admins);
      }
    );
  }

  getRestaurantDetails(id: number) {
    this.spinnerService.activate() ;
    this.restaurantService.getOne(id).subscribe(
      res => {
        this.restaurantShareService.setRestaurant(res) ;
        this.spinnerService.deactivate()
        this.router.navigate([id] , {relativeTo : this.route})
      },
      error => {
        this.spinnerService.deactivate()
        console.log(error)
      }
    )
  }
}
