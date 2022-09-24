import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ClientsService } from '../../../core/services/http/clients.service';
import { MessagingService } from '../../../core/services/http/messaging.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-cb-messaging',
  templateUrl: './cb-messaging.component.html',
  styleUrls: ['./cb-messaging.component.scss']
})
export class CbMessagingComponent implements OnInit {

  error = false ;
  loading = false ;

  smsForm: FormGroup;
  numbersForm: FormGroup;

  stats ;
  clients ;
  mode: string = 'list';

  constructor(private spinnerService: SpinnerService ,
              private messagingService: MessagingService,
              private clientService: ClientsService ,
              private formBuilder: FormBuilder) {
    this.smsForm = new FormGroup({
      content: new FormControl(''),
      sender: new FormControl(''),
    });

    this.numbersForm = new FormGroup({
      numbers: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    forkJoin(this.clientService.getAllLower(),this.messagingService.getUsage()).subscribe(
      (res: any) => {
        this.loading = false ;
        this.spinnerService.deactivate() ;
        this.clients = res[0];
        this.stats = res[1]?.partnerContracts?.contracts[0]?.serviceContracts[0]?.availableUnits
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  getUsage() {
    this.loading = true ;
    this.spinnerService.activate()
    this.messagingService.getUsage().subscribe(
      res => {
        this.loading = false ;
        this.spinnerService.deactivate()
        this.stats = res?.partnerContracts?.contracts[0]?.serviceContracts[0]?.availableUnits
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  get numbers() {
    return this.numbersForm.controls["numbers"] as FormArray;
  }

  deleteNumber(lessonIndex: number) {
    this.numbers.removeAt(lessonIndex);
  }

  addNumber() {
    const numbers = this.formBuilder.group({
      number: ['', Validators.required],
    });
    this.numbers.push(numbers);
  }

  sendMulti(){
    let numbers = [];
    if(this.mode == 'list') {
      numbers = this.clients.filter(client => { return client.selected == true}).map(client => { return client.phone})
    } else if(this.mode == 'typing') {
      numbers = this.numbersForm.value.numbers
    }
    // this.spinnerService.activate();
    let smss = {
      senderName: this.smsForm.value.sender,
      senderNumber: 50109769,
      numbers: numbers,
      content: this.smsForm.value.content
    }
    this.messagingService.sendMulti(smss).subscribe(
      res => {
        this.spinnerService.deactivate();
        this.getUsage()
      },
      err => {
        this.spinnerService.deactivate();
        console.log(err)
      }
    )
  }
}
