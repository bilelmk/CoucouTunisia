import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-errors',
  templateUrl: './cb-errors.component.html',
  styleUrls: ['./cb-errors.component.scss']
})
export class CbErrorsComponent implements OnInit {

  @Input("array") array: any[]  ;
  @Input("error") error: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
