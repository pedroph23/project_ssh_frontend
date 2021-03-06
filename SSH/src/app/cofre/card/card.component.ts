import { CardValidateUtil } from './../../utils/validators/card.validate.util';
import { Card } from './card.model';
import { NavController } from '@ionic/angular';
import { CardFormComponent } from './card-form.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from './card.service';
import { NgMask } from 'ng-mask';
import { Router } from '@angular/router';
import { utils } from 'protractor';

@Component({
    selector: 'app-cofre-card',
    templateUrl: 'card.component.html',
  })
export class CardComponent implements OnInit {

    public cards: Card[];
    public color = '#062B48';
    // #131616


    constructor (private cardService: CardService,
                 private cardFormComponent: CardFormComponent,
                 private router: Router) {}

    ngOnInit() {
        this.getCard();
    }

    public getCard() {
        this.cardService.getNameAndEmail(window.localStorage.getItem('eid')).subscribe(res => {
            this.cardService.getCardsByPerson(res[0].id).subscribe(resCard => {
                this.cards = resCard.Cards;
            });
        });
    }


    public view(idCard: any) {
        window.localStorage.setItem('idc', idCard);
        this.router.navigate(['/cofre/register']);
    }

   public dynamicSearch(event) {
    //    if (event.valueOf() === '') {
    //      this.getCard();
    //    }
        this.cardService.dynamicSearch(event.detail.value).subscribe(res => {
            this.cards = res;
        });
    }


}
