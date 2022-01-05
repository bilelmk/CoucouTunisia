import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { CbCouponsModalComponent } from './cb-coupons-modal/cb-coupons-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { Coupon } from '../../../core/models/coupon';
import { CouponsService } from '../../../core/services/http/coupons.service';

@Component({
  selector: 'app-cb-coupon',
  templateUrl: './cb-coupon.component.html',
  styleUrls: ['./cb-coupon.component.scss']
})
export class CbCouponComponent implements OnInit {

  public dataSource = new MatTableDataSource<Coupon>();
  displayedColumns = ['code', 'reduction' , 'expirationDate' , 'general' , 'restaurant' , 'buttons' ];
  coupons : Coupon[] = [] ;

  error = false ;
  loading = false ;

  constructor(private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private couponsService: CouponsService) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.couponsService.getAll().subscribe(
      res => {
        console.log(res)
        this.loading = false ;
        this.coupons = res ;
        this.dataSource.data = res;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal() {
    const dialogRef = this.dialog.open( CbCouponsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
    });
    dialogRef.afterClosed().subscribe(
      res => {
        // this.dataSource.data = this.admins;
      }
    );
  }
}
