import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Card } from './card.model';
import { CardService } from './card.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@Component({
    selector: 'app-cofre',
    templateUrl: 'card-form.component.html',
  })
export class CardFormComponent implements OnInit {

    public card: Card;


    constructor(
        private cardService: CardService,
        private navController: NavController,
        private router: Router
    ) {}


    ngOnInit() {
        this.card = new Card();
        if (window.localStorage.getItem('idc') !=  null) {
            return this.showCard(window.localStorage.getItem('idc'));
        }
         this.getPersonSession();
    }


    save() {
         this.cardService.create(this.card).subscribe( res => {
            location.reload();
            this.router.navigate(['/cofre/cards']);
        });
    }


  getPersonSession() {
    this.cardService.getNameAndEmail(window.localStorage.getItem('eid')).subscribe(res => {
        this.card.fk_tb_person = res[0].id;
    });
   }

   showCard(idCard: string) {
     this.cardService.getCardById(idCard).subscribe( (res: Card) => {
         this.card = res;
     });
     window.localStorage.removeItem('idc');
    }


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

  returnPageCards() {
    location.reload();
    this.router.navigate(['/cofre/cards']);
  }


}

