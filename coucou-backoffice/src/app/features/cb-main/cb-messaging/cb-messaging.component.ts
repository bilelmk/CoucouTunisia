import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ClientsService } from '../../../core/services/http/clients.service';
import { MessagingService } from '../../../core/services/http/messaging.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';

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
              private clientService: ClientsService ,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl("", Validators.required),
      // number:  new FormControl("", Validators.required),
      sender: new FormControl("", Validators.required),
      numbers: this.formBuilder.array([])
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

  get numbers() {
    return this.form.controls["numbers"] as FormArray;
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
    this.spinnerService.activate();
    let smss = {
      senderName: this.form.value.sender,
      senderNumber: 50109769,
      numbers: this.form.value.numbers,
      content: this.form.value.content
    }
    this.messagingService.sendMulti(smss).subscribe(
      res => {
        this.spinnerService.deactivate();
      },
      err => {
        this.spinnerService.deactivate();
        console.log(err)
      }
    )
  }
}
