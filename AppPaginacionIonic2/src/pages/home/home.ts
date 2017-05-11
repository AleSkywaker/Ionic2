import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { Lifecycle } from './../lifecycle/lifecycle';
import { Contacto } from './../contacto/contacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void {
    this.navCtrl.push(Contacto, {
      tipo: "push",
      anio: 2018,
      mensaje: () => {
        console.log("hola Alex");
      }
    });
  }

  setRo(): void {
    this.navCtrl.setRoot(Contacto, {
      tipo: "set root",
      anio: 2018,

      mensaje: () => {
        console.log("hola Alex")
      }
    });
  }

  lifeCy(): void {
    this.navCtrl.push(Lifecycle)
      .then(()=>{
        console.log('Pagina apilada!!!!');  
      }).catch( e => {
        console.log('Acesso no autorizado' , e);
      });
  }
}
