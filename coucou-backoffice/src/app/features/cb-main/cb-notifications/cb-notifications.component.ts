import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { PushNotificationService } from '../../../core/services/http/push-notification.service';
import { FormControl, FormGroup } from "@angular/forms";
import { ClientsService } from "../../../core/services/http/clients.service";

@Component({
  selector: 'app-cb-notifications',
  templateUrl: './cb-notifications.component.html',
  styleUrls: ['./cb-notifications.component.scss']
})
export class CbNotificationsComponent implements OnInit {

  clients = [] ;
  error = false ;
  loading = false ;

  form: FormGroup;

  constructor(private clientsService: ClientsService,
              private spinnerService: SpinnerService ,
              private pushNotificationService: PushNotificationService) {
    this.form = new FormGroup({
      content: new FormControl(''),
      title: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.clientsService.getAllLower().subscribe(
      res => {
        this.loading = false ;
        this.clients = res ;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }


  sendMulti() {
    const selectedIds = this.clients.filter(client => { return client.selected == true}).map(client => { return client.id})
    const request = {
      content: this.form.value.content ,
      title: this.form.value.title,
      ids: selectedIds
    }
    this.spinnerService.activate() ;
    this.pushNotificationService.sendMulti(request).subscribe(
      res => {
        this.spinnerService.activate()
        console.log(res)
      },
      error => {
        this.spinnerService.activate()
        console.log(error)
      }
    )
  }
}
