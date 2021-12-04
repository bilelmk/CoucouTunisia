import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ClientsService } from '../../../core/services/http/clients.service';
import { PushNotificationService } from '../../../core/services/http/push-notification.service';
import {MatTableDataSource} from '@angular/material/table';
import {Permission} from '../../../core/models/permission';

@Component({
  selector: 'app-cb-notifications',
  templateUrl: './cb-notifications.component.html',
  styleUrls: ['./cb-notifications.component.scss']
})
export class CbNotificationsComponent implements OnInit {

  clients = [] ;
  error = false ;
  loading = false ;

  constructor(private spinnerService: SpinnerService ,
              private clientService: ClientsService ,
              private notificationService: PushNotificationService) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.clientService.getAllLower().subscribe(
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

}
