import { Component } from '@angular/core';
import { Config, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-config-page',
  templateUrl: 'config-page.html',
})
export class ConfigPage {

  constructor(
    public config : Config,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  ConfigTest():void{

      console.log(this.config.getModeConfig('ios'));
      
  }

}
