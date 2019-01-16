import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CardService {

    constructor(
         public http?: HttpClient
         ) {}


  public getCEP(cep: String): Observable<any> {
    return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
  }

}
