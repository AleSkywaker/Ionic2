import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
 import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';

declare var google: any;


@Component({
  selector: 'mapa',
  templateUrl: 'mapa.html'
})
export class Mapa implements OnInit {


  @Input() haConfirmadoPedido: boolean;
  public map;

  constructor(public loadingCtrl: LoadingController) {

  }
  ngOnInit() {
    this.map = this.createMap();
  }

  getCurrentLocation() {

    let loading =  this.loadingCtrl.create({content:'Locating...'});
    loading.present();
    loading.dismiss();

    let options = { timeout: 1000, enableHighAccuracy: true };

    let locationObs = Observable.create(observable => {

      Geolocation.getCurrentLocation(options)
        .then(resp => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;

          let location = new google.maps.LatLng(lat, lng);

        observable.next(location);

        },
        (err) => {
          console.log('Geolocation err: ' + err);
        })
    })


  }


  createMap(location = new google.maps.LatLng(40.4147039, -3.6818427, 16.5)) {
    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      diseableDefaultUI: true
    }
    let mapEl = document.getElementById('map');
    let map = new google.maps.Map(mapEl, mapOptions);
    return map;

  }

}
