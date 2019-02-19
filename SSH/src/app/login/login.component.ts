import { TokenService } from './../auth/token.service';
import { Component , OnInit} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuController, NavController, LoadingController  } from '@ionic/angular';

import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { headersToString } from 'selenium-webdriver/http';
import { Headers } from '@angular/http';

@IonicPage()
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

   public email: string;
   public password: string;
   public itsOk = false;
   public request = new XMLHttpRequest();


    constructor (private ofAuth: AngularFireAuth,
                 public navCtrl: NavController,
                 private menuController: MenuController,
                 private loadingCtrl: LoadingController,
                 private tokenService: TokenService) {}

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.menuController.enable(false);
    }

    // presentLoadingDefault() {
    //     let loading = this.loadingCtrl.create({
    //       content: 'Please wait...'
    //     });
    //     loading.present();
    //     setTimeout(() => {
    //       loading.dismiss();
    //     }, 5000);
    //   }

    async signIn () {
        try {
            this.ofAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
            if (res.user) {
                 this.ofAuth.auth.currentUser.getIdToken(true).then( idToken => {
                    window.localStorage.setItem('eid', this.ofAuth.auth.currentUser.email);
                    this.tokenService.token = idToken;
                });
                setTimeout( time => {
                    this.menuController.enable(true);
                    this.navCtrl.navigateRoot('home');
                }, 1000);
            }
          });
        } catch (e) {
          console.error(e);
        }
    }
}
