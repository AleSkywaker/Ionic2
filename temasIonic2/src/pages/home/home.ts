import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ConfigPage } from './../config-page/config-page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onConfig():void{

    this.navCtrl.push(ConfigPage);
  }

}
