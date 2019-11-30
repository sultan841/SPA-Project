import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpclient: HttpClient) {
   }
  public getUser() {
    return this._httpclient.get("http://127.0.0.1:8000/api/profiles/");    
  }
}
