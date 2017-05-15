import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinamicAlex } from './dinamic-alex';

@NgModule({
  declarations: [
    DinamicAlex,
  ],
  imports: [
    IonicPageModule.forChild(DinamicAlex),
  ],
  exports: [
    DinamicAlex
  ]
})
export class DinamicAlexModule {}
