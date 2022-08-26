import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-errors',
  templateUrl: './cb-errors.component.html',
  styleUrls: ['./cb-errors.component.scss'],
})
export class CbErrorsComponent implements OnInit {


  @Input() exist: boolean;
  @Input() icon: string  ;
  @Input() message: string  ;

  constructor() { }

  ngOnInit() {}

}
