import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbMapComponent } from "./cb-map.component";
import { RouterModule, Routes } from "@angular/router";
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3006', options: {} };

const routes: Routes = [
  {
    path: '',
    component: CbMapComponent
  },
];

@NgModule({
  declarations: [
    CbMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SocketIoModule.forRoot(config),
  ]
})
export class CbMapModule { }
