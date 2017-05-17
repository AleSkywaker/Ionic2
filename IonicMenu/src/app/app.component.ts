import { Component, ViewChild, } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { About } from './../pages/about/about';





@Component({
  templateUrl: 'app.html'
})


export class MyApp {

  @ViewChild(Nav) navi : Nav;
  pages: [{title:string, component:any}]
  rootPage:any = HomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {


     this.pages = [
       { title:  'Pagina de inicio', component: HomePage},
       { title:  'Acerca de ', component: About}
       ]


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 abrirPagina(pagina: {title:string, component:any}):void{
      //this.rootPage = pagina.component; tambien valdria porque pasariamos atributo al propertyBind de la etiqueta ion-nav
      this.navi.setRoot(pagina.component);

 }


}

