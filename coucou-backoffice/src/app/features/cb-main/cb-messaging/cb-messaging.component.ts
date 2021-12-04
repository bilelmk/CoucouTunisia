import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ClientsService } from '../../../core/services/http/clients.service';
import { MessagingService } from '../../../core/services/http/messaging.service';

@Component({
  selector: 'app-cb-messaging',
  templateUrl: './cb-messaging.component.html',
  styleUrls: ['./cb-messaging.component.scss']
})
export class CbMessagingComponent implements OnInit {

  clients = [] ;
  error = false ;
  loading = false ;

  constructor(private spinnerService: SpinnerService ,
              private messagingService: MessagingService,
              private clientService: ClientsService) { }

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
