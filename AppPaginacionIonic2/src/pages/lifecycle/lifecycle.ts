
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lifecycle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lifecycle',
  templateUrl: 'lifecycle.html',
})
export class Lifecycle{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewCanEnter(): Promise<any> {

   /* console.log('01 ionViewDidLoad called');
    return false;*/


console.log('01 ionViewDidLoad called');

    return new Promise((resolve, reject)=>{
         console.log("Aguardando durante 2 segundos......");

      setTimeout(()=>{
       let number = Math.round(Math.random()*100);
       if (number % 2 == 0){
         resolve();
         console.log(`${number} - Autorizado`);
       }else{
         reject();
         console.log(`${number} - No Autorizado`);
       }
      }, 2000);   
    });


  }
  ionViewDidLoad() {
    console.log('02 ionViewDidLoad called');
  }
  ionViewWillEnter() {
    console.log('03 ionViewDidLoad called');
  }
  ionViewDidEnter() {
    console.log('04 ionViewDidLoad called');
  }
  ionViewCanLeave(): boolean {
    console.log('05 ionViewDidLoad called');
    return true;
  }
  ionViewWillLeave() {
    console.log('06 ionViewDidLoad called');
  }
  ionViewDidLeave() {
    console.log('07 ionViewDidLoad called');
  }
  ionViewWillUnload() {
    console.log('08 ionViewDidLoad called');
  }
   onPop():void{
    this.navCtrl.pop()
    .then(()=>{
      console.log("Salio");   
    }).catch(error =>{
      console.log("No Salio", error);  
    });
  }
 
}

