import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-sidebar',
  templateUrl: './cb-sidebar.component.html',
  styleUrls: ['./cb-sidebar.component.scss']
})
export class CbSidebarComponent implements OnInit {

  opened: boolean;
  events: string[] = [];
  mode: string ;
  admin ;

  @Input() routes: any;

  @HostListener('window:resize', ['$event'])

  onResize() {
    this.toggleMenu() ;
    this.toggleMode() ;
  }

  constructor() {}

  ngOnInit() {
    this.admin = JSON.parse(sessionStorage.getItem('admin'))
    this.toggleMenu() ;
    this.toggleMode() ;
  }

  toggleMenu(){
    this.opened = window.innerWidth > 990 ;
  }

  toggleMode() {
    if(window.innerWidth > 990) this.mode = 'side' ;
    else this.mode = 'over'
  }

}



