import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { About } from './../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irAbout():void{

    this.navCtrl.push(About);
  }

}
