import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from '../../services/in-app/spinner.service';

@Component({
  selector: 'app-cb-spinner',
  templateUrl: './cb-spinner.component.html',
  styleUrls: ['./cb-spinner.component.scss']
})
export class CbSpinnerComponent implements OnInit {

  @Input() show: boolean;

  constructor(private spinner: NgxSpinnerService,
              private spinnerService: SpinnerService) {}
  ngOnInit() {
    this.spinnerService.getData().subscribe(data => {
      if (data) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
