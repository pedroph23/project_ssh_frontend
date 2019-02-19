import { environment } from './../../../environments/environment';
import { environmentLocal } from './../../../environments/enviroment-dev';
import { Card } from './card.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CardService {

  public urlCard =  '/card';

    constructor(
         public http: HttpClient
         ) {}


  public create(card: Card): Observable<Card> {
    return this.http.post(environmentLocal.URL_API + this.urlCard, card);
  }

  public getCEP(cep: string): Observable<any> {
    return this.http.get('https://viacep.com.br/ws/' + cep + '/json/');
  }

  public getNameAndEmail(email: string): Observable<any> {
    return this.http.get(environmentLocal.URL_API + '/session' + '/person/' + email);
  }

  public getCardsByPerson(idPerson: number): Observable<any> {
    return this.http.get(environmentLocal.URL_API + '/person' + this.urlCard + '/' + idPerson);
  }

  public getCardById(idCard: string): Observable<any> {
    return this.http.get(environmentLocal.URL_API + this.urlCard + '/' + idCard);
  }

  public deleteCard(idCard: string): Observable<any>  {
    return this.http.delete(environmentLocal.URL_API + this.urlCard + '/' + idCard);
  }

  public dynamicSearch(search: string): Observable<any> {
    return this.http.post(environmentLocal.URL_API + this.urlCard + '/dynamic/' + search, null);
  }


}
