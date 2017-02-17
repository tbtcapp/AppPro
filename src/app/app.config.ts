import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

export class AppConfig{

  public static getWxservice_url() {
    return "http://www.baidu.com";
  }

  public static getToken() {
    return "232132111";
  }
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {


  constructor(platform: Platform) {
  }
}
