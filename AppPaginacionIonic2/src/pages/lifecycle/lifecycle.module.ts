import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lifecycle } from './lifecycle';

@NgModule({
  declarations: [
    Lifecycle,
  ],
  imports: [
    IonicPageModule.forChild(Lifecycle),
  ],
  exports: [
    Lifecycle
  ]
})
export class LifecycleModule {}
