import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../../providers/service';

/*
  Generated class for the Nsrzgrd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nsrzgrd',
  templateUrl: 'nsrzgrd.html',
  providers:[AppService]
})
export class NsrzgrdPage {

  returnCode:any;
  returnObj:any;
  returnStr:string;
  nsrxxForm = this.formBuilder.group({
    'nsrsbh': ['91350200260138428Y', [Validators.required, Validators.minLength(4)]],
    'nsrmc': ['', [Validators.required, Validators.minLength(4)]]
  });
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder
  , public service:AppService,public alertCtrl: AlertController) {}

  queryNsrzg(nsrxx, _event) {
    _event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作
    this.service.presentLoading('ISscxService','queryNsrzgrdxxInterface',nsrxx).then(res => {
      this.returnCode = res.returnCode;
      if(this.returnCode == '2'){
        this.returnObj = res.returnObj;
      }else{
        this.returnStr = res.returnObj;
        let alert = this.alertCtrl.create({
          title: '提示',
          subTitle: this.returnStr,
          buttons: ['确定']
        });
        alert.present();
      }
    }, err => {
        let alert = this.alertCtrl.create({
          title: '提示',
          subTitle: this.returnObj,
          buttons: ['确定']
        });
        alert.present();
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NsrzgrdPage');
  }

}
