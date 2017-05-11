import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Contacto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class Contacto {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    console.log(this.navParams.get('tipo'));


    this.navParams.data.mensaje();
    console.log(this.navParams.data.anio);
    console.log(this.navParams.data.tipo);
    
    this.navParams.data['mensaje']();
    
  }

  pushPage(){
     this.navCtrl.push(Contacto);
  }
  popPage(){
     this.navCtrl.pop(Contacto);
  }

}
