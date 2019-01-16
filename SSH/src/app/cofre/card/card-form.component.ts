import { Card } from './card.model';
import { CardService } from './card.service';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@Component({
    selector: 'app-cofre',
    templateUrl: 'card-form.component.html',
  })
export class CardFormComponent {

    public card: Card;
    public cep: String;

    constructor(
        private cardService: CardService
    ) {
        this.initializeApp();
     }


     initializeApp() {

     this.card = new Card();

    }

    save() {
         console.table(this.card);
    }


  getFlagCard() { }

  getCEP(cep) {
      if (cep.detail.value.length >= 8) {
        this.cardService.getCEP(cep.detail.value).subscribe(res => {
            this.card.state = res.uf;
            this.card.city = res.localidade;
            this.card.address = res.bairro;
            this.card.country = 'Brasil';
          });
      }
  }


}

