import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ClientsService } from '../../../core/services/http/clients.service';
import { MessagingService } from '../../../core/services/http/messaging.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cb-messaging',
  templateUrl: './cb-messaging.component.html',
  styleUrls: ['./cb-messaging.component.scss']
})
export class CbMessagingComponent implements OnInit {

  clients = [] ;
  error = false ;
  loading = false ;

  form: FormGroup;

  constructor(private spinnerService: SpinnerService ,
              private messagingService: MessagingService,
              private clientService: ClientsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl("", Validators.required),
      number:  new FormControl("", Validators.required),
      sender: new FormControl("", Validators.required),
    });


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

  sendOne(){
    let sms = {
      senderName: "CocoBeach",
      senderNumber: 50109769,
      receiver: this.form.value.number,
      content: this.form.value.content
    }
    this.messagingService.sendOne(sms).subscribe(
      res => {
        console.log()
      },
      err => {
        console.log(err)
      }
    )
  }
}
