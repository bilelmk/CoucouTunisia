import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from '../../services/in-app/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
              private loadingService: LoadingService) {}
  ngOnInit() {
    this.loadingService.getData().subscribe(data => {
      if (data) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }

}
