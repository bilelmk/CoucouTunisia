import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from '../../../core/models/admin';
import { AdminsService } from '../../../core/services/http/admins.service';
import { CbAdminsModalComponent } from './cb-admins-modal/cb-admins-modal.component';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { Helpers } from '../../../shared/helpers/helpers';

@Component({
  selector: 'app-cb-admins',
  templateUrl: './cb-admins.component.html',
  styleUrls: ['./cb-admins.component.scss']
})
export class CbAdminsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Admin>();
  displayedColumns = ['firstname', 'lastname' , 'username' , 'role' , 'active' , 'buttons' ];
  admins : Admin[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private adminsService: AdminsService ,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loading = true ;
    this.spinnerService.activate()
    this.adminsService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.admins = res ;
        this.dataSource = new MatTableDataSource<Admin>(res);
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal(isEditMode , item) {
    const dialogRef = this.dialog.open( CbAdminsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item , array : this.admins , edit: isEditMode}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<Admin>(this.admins);
      }
    );
  }

  delete(admin: Admin) {
    this.alertService.showAlert(
      () => {
        Helpers.deleteFromArray(admin , this.admins)
      }, "voulez-vous vraiment supprimer"
    )
  }

  toggleActiveStatus(admin: Admin) {
    if(admin.active == true) {
      this.spinnerService.activate()
      this.adminsService.block(admin.id).subscribe(
        res => {
          admin.active = false ;
          this.spinnerService.deactivate()
        },
        error => {
          this.spinnerService.deactivate()
          console.log(error)
        }
      )
    } else if(admin.active == false) {
      this.spinnerService.activate()
      this.adminsService.deblock(admin.id).subscribe(
        res => {
          admin.active = true ;
          this.spinnerService.deactivate()
        },
        error => {
          this.spinnerService.deactivate()
          console.log(error)
        }
      )
    }
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.admins]
    toFilterList = toFilterList.filter(
      admin => {
        return admin.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }

}
