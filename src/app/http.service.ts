import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  gitUserLogin(user) {
      return this._http.get('https://api.github.com/users/' + user).map(data=>data.json()).toPromise()
  }
}
