import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { RoleService } from '../../../../core/services/http/role.service';
import { PermissionService } from '../../../../core/services/http/permission.service';
import { Permission } from '../../../../core/models/permission';
import { Helpers } from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-cb-roles-permissions',
  templateUrl: './cb-roles-permissions.component.html',
  styleUrls: ['./cb-roles-permissions.component.scss']
})
export class CbRolesPermissionsComponent implements OnInit {

  permissions: Permission[] = [] ;
  rolePermissions: Permission[] = [] ;

  @ViewChild('permissionsRef') permissionsRef ;
  @ViewChild('rolePermissionsRef') rolePermissionsRef ;

  constructor(public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRolesPermissionsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ,
              private snackbarService: SnackbarService ,
              private roleService: RoleService,
              private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.permissionService.getAll().subscribe(
      res => {
        this.permissions = res
        for(let permission of this.data.item.permissions) {
          Helpers.addToArray(permission , this.rolePermissions)
          Helpers.deleteFromArray(permission , this.permissions)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  push() {
    for(let permission of this.permissionsRef.selectedOptions.selected) {
      Helpers.addToArray(permission.value , this.rolePermissions)
      Helpers.deleteFromArray(permission.value, this.permissions )
    }
  }

  pull() {
    for(let permission of this.rolePermissionsRef.selectedOptions.selected) {
      Helpers.addToArray(permission.value , this.permissions)
      Helpers.deleteFromArray(permission.value, this.rolePermissions  )
    }
  }

  save() {
    let ids = this.rolePermissions.map(permission => {
      return permission.id
    })
    this.roleService.updatePermissions(this.data.item.id , ids).subscribe(
      res => {
        this.data.item.permissions = this.rolePermissions
        this.matDialogRef.close();
      },error => {
        console.log(error)
      }
    )
  }
}
