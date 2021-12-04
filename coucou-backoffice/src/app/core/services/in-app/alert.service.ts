import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  showAlert(handler , text){
    Swal.fire({
      text: text,
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm !'
    }).then((result) => {
      if (result.value) {
        handler() ;
      }
    })
  }
}
