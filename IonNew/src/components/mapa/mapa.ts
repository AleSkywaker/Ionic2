import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, NavController} from 'ionic-angular';
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

  constructor(
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    public nav: NavController ) {

  }
  ngOnInit() {
    this.map = this.createMap();

    this.getCurrentLocation().subscribe(location => {
     
     this.centrarLocation(location);
     // this.map.panTo(location);
    })
  }

  getCurrentLocation() {

    let loading =  this.loadingCtrl.create({content:'Locating...'});

 
  
    loading.present(loading);
    

    let options = { timeout: 1000, enableHighAccuracy: true };

    let locationObs = Observable.create(observable => {

      this.geolocation.getCurrentPosition(options)
        .then(resp => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;

          let location = new google.maps.LatLng(lat, lng);

        observable.next(location);
        loading.dismiss();
        },
        (err) => {
          console.log('Geolocation err: ' + err);
          loading.dismiss();
        })
    })

      return locationObs;
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

  centrarLocation(location){
    if(location){
     this.map.panTo(location);
    }else{
       this.getCurrentLocation().subscribe(currentlocation => {
     
     this.map.panTo(currentlocation);
    })

    }

  }

}
