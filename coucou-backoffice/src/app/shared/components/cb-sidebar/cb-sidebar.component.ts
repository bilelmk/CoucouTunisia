import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-sidebar',
  templateUrl: './cb-sidebar.component.html',
  styleUrls: ['./cb-sidebar.component.scss']
})
export class CbSidebarComponent implements OnInit {

  opened: boolean;
  events: string[] = [];

  @Input() routes: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggleMenu() ;
  }

  constructor() {}

  ngOnInit() {
    this.toggleMenu() ;
  }

  toggleMenu(){
    this.opened = window.innerWidth > 990;
  }

}



