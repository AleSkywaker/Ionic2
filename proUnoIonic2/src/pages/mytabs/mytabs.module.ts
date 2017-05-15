import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mytabs } from './mytabs';

@NgModule({
  declarations: [
    Mytabs,
  ],
  imports: [
    IonicPageModule.forChild(Mytabs),
  ]
})
export class MytabsModule {}
