import { About } from './../pages/about/about';
import { Contacto } from './../pages/contacto/contacto';
import { Alex } from './../pages/alex/alex';
import { Mytabs } from './../pages/mytabs/mytabs';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { DinamicAlex } from './../pages/dinamic-alex/dinamic-alex';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AscComponent } from './../components/asc/asc.component';



import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { BackgroundYellowDirective } from './../components/background-yellow/background-yellow.directive';
import { GithubService } from "./../providers/github.service";


@NgModule({
  declarations: [
    Mytabs,
    Alex,
    Contacto,
    About,
    MyApp,
    DinamicAlex,
    CapitalizePipe,
    HomePage,
    ListPage,
    AscComponent,
    BackgroundYellowDirective
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DinamicAlex,
    ListPage, 
    Mytabs,
    Alex,
    Contacto,
    About,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubService
  ]
})
export class AppModule {}
