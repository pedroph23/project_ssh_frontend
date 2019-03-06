import { ToastMessager } from './../../utils/messager/toast.messager.util';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Card } from './card.model';
import { CardService } from './card.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CardValidateUtil } from '../../utils/validators/card.validate.util';
import { NgMask } from 'ng-mask';


@Component({
    selector: 'app-cofre',
    templateUrl: 'card-form.component.html',
  })
export class CardFormComponent implements OnInit, OnDestroy {

    public card: Card;
    public isEdit = false;
    public util = new CardValidateUtil;

    constructor(
        private cardService: CardService,
        private navController: NavController,
        private router: Router,
        private toast: ToastMessager,
    ) {}


    ngOnInit() {
        this.card = new Card();

        if (localStorage.getItem('idc') !=  null) {
            return this.showCard(localStorage.getItem('idc'));
        }

         this.getPersonSession();
    }


    save() {
        if (this.util.validate(this.card)) {
           return  this.cardService.create(this.card).subscribe( res => {
                location.reload();
                this.router.navigate(['/cofre/cards']);
            });
        }
        this.toast.messager('Dados inválidos, reveja !', 2000);
    }

  getPersonSession() {
    this.cardService.getNameAndEmail(window.localStorage.getItem('eid')).subscribe(res => {
        this.card.fk_tb_person = res[0].id;
    });
   }

   showCard(idCard: string) {
     this.cardService.getCardById(idCard).subscribe( (res: Card) => {
        //  this.isEdit = true;
         this.card = res;
     });
     window.localStorage.removeItem('idc');
    }

   delete(idCard) {
        localStorage.setItem('idc', idCard);
        this.cardService.deleteCard(localStorage.getItem('idc')).subscribe(res => {
            localStorage.removeItem('idc');
        });
         location.reload();
        this.navController.navigateRoot('cofre/cards');
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

  ngOnDestroy() {
      this.ngOnInit();
  }


}

