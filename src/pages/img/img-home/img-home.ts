import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ImgHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-img-home',
  templateUrl: 'img-home.html'
})
export class ImgHome {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ImgHome Page');
  }

}
