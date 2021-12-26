import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from '../../../core/models/role';
import { MatPaginator } from '@angular/material/paginator';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/in-app/alert.service';
import { SnackbarService } from '../../../core/services/in-app/snackbar.service';
import { CbRolesModalComponent } from './cb-roles-modal/cb-roles-modal.component';
import { RoleService } from '../../../core/services/http/role.service';
import { Helpers } from '../../../shared/helpers/helpers';
import {CbRolesPermissionsComponent} from './cb-roles-permissions/cb-roles-permissions.component';

@Component({
  selector: 'app-cb-roles',
  templateUrl: './cb-roles.component.html',
  styleUrls: ['./cb-roles.component.scss']
})
export class CbRolesComponent implements OnInit {

  public dataSource = new MatTableDataSource<Role>();
  displayedColumns = ['name' , 'description' , 'permissions' , 'buttons' ];
  roles : Role[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.roleService.getAll().subscribe(
      res => {
        console.log(res)
        this.loading = false ;
        this.roles = res ;
        this.dataSource = new MatTableDataSource<Role>(res);
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
    const dialogRef = this.dialog.open( CbRolesModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item: item , array : this.roles , isEditMode: isEditMode}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<Role>(this.roles);
      }
    );
  }

  openPermissionModal(item) {
    const dialogRef = this.dialog.open( CbRolesPermissionsComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      height: '450px' ,
      data : { item: item }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        // this.dataSource = new MatTableDataSource<Role>(this.roles);
      }
    );
  }

  delete(role: any) {
    this.alertService.showAlert(
      () => {
        this.roleService.delete(role.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Role supprimé avec succès','success') ;
            Helpers.deleteFromArray(role , this.roles)
            this.dataSource = new MatTableDataSource<Role>(this.roles);
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }
}
