import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      MenuComponent,
      ToolbarComponent,
  ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
  exports : [
      MenuComponent,
      ToolbarComponent,
  ]
})
export class SharedModule { }
