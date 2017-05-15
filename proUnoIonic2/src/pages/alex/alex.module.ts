import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alex } from './alex';

@NgModule({
  declarations: [
    Alex,
  ],
  imports: [
    IonicPageModule.forChild(Alex),
  ],
  exports: [
    Alex
  ]
})
export class AlexModule {}
