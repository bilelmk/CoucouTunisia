import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cb-second-sidebar',
  templateUrl: './cb-second-sidebar.component.html',
  styleUrls: ['./cb-second-sidebar.component.scss']
})
export class CbSecondSidebarComponent implements OnInit {

  @Input() routes: any;

  opened: boolean;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggleMenu();
  }

  constructor() {}

  ngOnInit() {
    this.toggleMenu();
  }

  toggleMenu() {
    this.opened = window.innerWidth > 990;
  }

}
