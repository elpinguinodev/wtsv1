import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TessSeal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tess-seal',
  templateUrl: 'tess-seal.html'
})
export class TessSeal {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TessSeal Page');
  }

}
