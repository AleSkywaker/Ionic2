import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { DinamicAlex } from '../dinamic-alex/dinamic-alex';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myparameter: Function = () => {console.log("Hola Alessandro desde my parameter")} 


  constructor(public navCtrl: NavController) {

  }

  DinamicaPage():void{

    this.navCtrl.push(DinamicAlex);
  }

}
