import { About } from './../about/about';
import { Contacto } from './../contacto/contacto';
import { Alex } from './../alex/alex';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Mytabs tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-mytabs',
  templateUrl: 'mytabs.html'
})
@IonicPage()
export class Mytabs {

  tab1Root: any = Alex;
  tab2Root: any = Contacto;
  tab3Root: any = About;

  constructor(public navCtrl: NavController) {}

}
