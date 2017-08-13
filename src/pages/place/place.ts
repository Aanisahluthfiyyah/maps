import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { AgmCoreModule, AgmMap } from '@agm/core';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
  styles: [`
  agm-map {
    height: 300px;
  }
`]

})
export class PlacePage {
    lat: number;
    lng: number;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }


}
