import { environmentLocal } from './../../environments/enviroment-dev';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ComponentIotService {
    public urlModule =  '/module';

    constructor(
         public http: HttpClient
         ) {}

    public eventLed(event: string): Observable<any> {
        return this.http.post('http://192.168.0.240:3010' + this.urlModule + '/' + event, null);
        // return this.http.post(environmentLocal.URL_API + this.urlModule + '/' + event, null);
    }
}
