import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { PermissionService } from '../../../core/services/http/permission.service';
import { Permission } from '../../../core/models/permission';
import { CbPermissionsModalComponent } from './cb-permissions-modal/cb-permissions-modal.component';
import { Helpers } from '../../../shared/helpers/helpers';
import { SnackbarService } from '../../../core/services/in-app/snackbar.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cb-permissions',
  templateUrl: './cb-permissions.component.html',
  styleUrls: ['./cb-permissions.component.scss']
})
export class CbPermissionsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Permission>();
  displayedColumns = ['name', 'description' , 'buttons' ];
  permissions : Permission[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
    }
  }

  constructor(private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private permissionService: PermissionService,
              private snackbarService: SnackbarService ) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.permissionService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.permissions = res ;
        this.dataSource.data = res
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
    const dialogRef = this.dialog.open( CbPermissionsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item , array : this.permissions , isEditMode: isEditMode}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.permissions
      }
    );
  }

  delete(permission: Permission) {
    this.alertService.showAlert(
      () => {
        this.permissionService.delete(permission.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Permission supprimé avec succès','success') ;
            Helpers.deleteFromArray(permission , this.permissions)
            this.dataSource.data = this.permissions
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }
}
