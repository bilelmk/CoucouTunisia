import { Component, OnInit } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(private menu : MenuController) { }

  ngOnInit() {}

  onToggleMenu(name : string) {
    this.menu.open(name);
  }
}
