import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { Contacto } from './../contacto/contacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

pushPage(): void {
    this.navCtrl.push(Contacto)
}
}
