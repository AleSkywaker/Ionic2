

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from "../../providers/github.service";



@IonicPage()
@Component({
  selector: 'page-dinamic-alex',
  templateUrl: 'dinamic-alex.html',
  providers:[GithubService]
  
})
export class DinamicAlex {

  constructor(
    public gh: GithubService,
    public navCtrl: NavController, 
    public navParams: NavParams 
    ) { }

  ionViewDidLoad() {
    console.log('Estas en la pagina DinamicAlex');

    this.gh.getUsers()
    .subscribe((users: [{}]) => {
      console.log(users);
    });


  }

 contador():void{
   console.log(this.gh.incrementar());
   
 }

}
