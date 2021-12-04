import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../in-app/spinner.service';
import { ClientsService } from './clients.service';
import { MailingService } from './mailing.service';

@Component({
  selector: 'app-cb-emails',
  templateUrl: '../../../features/cb-main/cb-emails/cb-emails.component.html',
  styleUrls: ['../../../features/cb-main/cb-emails/cb-emails.component.scss']
})
export class CbEmailsComponent implements OnInit {

  clients = [] ;
  error = false ;
  loading = false ;

  constructor(private spinnerService: SpinnerService ,
              private clientService: ClientsService ,
              private mailingService: MailingService) { }

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
