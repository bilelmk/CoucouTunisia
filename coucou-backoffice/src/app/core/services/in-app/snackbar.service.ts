import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar ) { }

  openSnackBar(message: string , status: string) {
    this.snackBar.open(message, null , {
      duration: 6000,
      panelClass : [status]
    });
  }
}
