import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { CbRestaurantsAddComponent } from './cb-restaurants-add/cb-restaurants-add.component';

@Component({
  selector: 'app-cb-restaurants',
  templateUrl: './cb-restaurants.component.html',
  styleUrls: ['./cb-restaurants.component.scss']
})
export class CbRestaurantsComponent implements OnInit {

  constructor( private spinnerService: SpinnerService ,
               private dialog: MatDialog ) { }

  ngOnInit(): void {}

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
