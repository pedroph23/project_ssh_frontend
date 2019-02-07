import { Component , OnInit} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuController, NavController, LoadingController  } from '@ionic/angular';

import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

   public email: string;
   public password: string;
   public itsOk = false;


    constructor (private ofAuth: AngularFireAuth,
                 public navCtrl: NavController,
                 private menuController: MenuController,
                 private loadingCtrl: LoadingController) {}

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
                    window.localStorage.setItem('at',  idToken);
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
