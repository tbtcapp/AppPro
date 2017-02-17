import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {NsrzgrdPage} from "../nsrzgrd/nsrzgrd"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

turnToNsrzgrd(){
  this.navCtrl.push(NsrzgrdPage);
}
  
}
