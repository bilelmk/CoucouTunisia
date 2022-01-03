import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    IonicModule,
    RouterModule
  ],
  exports : [
    SpinnerComponent,
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard{
  constructor(@Optional() @SkipSelf() parentModule : CoreModule) {
    super(parentModule);
  }
}

