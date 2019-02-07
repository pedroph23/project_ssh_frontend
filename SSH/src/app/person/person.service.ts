import { environmentLocal } from '../../environments/enviroment-dev';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

    public urlPerson: string =  '/person';

    constructor(
        private http?: HttpClient
    ) {}

 getAll() {
        this.http.get(environmentLocal.URL_API + this.urlPerson);
    }
}
