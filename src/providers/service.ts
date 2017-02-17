import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AppConfig} from "../app/app.config";
import { Md5 } from 'ts-md5/dist/md5';


@Injectable()
export class AppService {

  constructor(public http: Http) {
    console.log('Hello AppService Provider');

  }

  presentLoading(classname,methodname,nsrxx) {
    var timestamp = new Date().getTime();
    var signature = Md5.hashStr(timestamp+AppConfig.getToken());
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    let paramter = JSON.stringify(nsrxx);
    let pramas = 'classname='+classname+'&methodname='+methodname+'&param={"timestamp":"'+timestamp+'","signature":"'+signature+'","parameter":'+paramter+'}';
    return  this.http.post(AppConfig.getWxservice_url(), pramas , {headers: header})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}