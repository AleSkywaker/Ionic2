import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Asc } from './asc';

@NgModule({
  declarations: [
    Asc,
  ],
  imports: [
    IonicPageModule.forChild(Asc),
  ],
  exports: [
    Asc
  ]
})
export class AscModule {}
