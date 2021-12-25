import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { CbRestaurantsAddComponent } from './cb-restaurants-add/cb-restaurants-add.component';
import { RestaurantService } from '../../../core/services/http/restaurant.service';

@Component({
  selector: 'app-cb-restaurants',
  templateUrl: './cb-restaurants.component.html',
  styleUrls: ['./cb-restaurants.component.scss']
})
export class CbRestaurantsComponent implements OnInit {

  constructor( private spinnerService: SpinnerService ,
               private dialog: MatDialog ,
               private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    // this.restaurantService.get
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
}
