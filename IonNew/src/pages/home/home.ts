import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
 
})
export class HomePage {

  public haConfirmadoPedido: boolean;

  constructor(public navCtrl: NavController) {

    this.haConfirmadoPedido = false;

  }

  confirmarPedido():void{
  
    this.haConfirmadoPedido = true;

  }
  cancelarPedido():void{
  
    this.haConfirmadoPedido = false;

  }

}
