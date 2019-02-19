import { TokenApiService } from './../auth/interceptor/token-api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from '../app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  declarations: [LoginComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class LoginModule {}
