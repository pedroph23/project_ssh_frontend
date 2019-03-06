import { TokenApiService } from './../auth/interceptor/token-api.service';
import { CardService } from './card/card.service';
import { CardFormComponent } from './card/card-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CofreComponent } from '../cofre/cofre.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastMessager } from '../utils/messager/toast.messager.util';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: CofreComponent
      },
      // Card
      {
        path: 'register',
        component: CardFormComponent
      },
      {
        path: 'cards',
        component: CardComponent
      }
    ])
  ],
  declarations: [CofreComponent, CardFormComponent, CardComponent],
  providers: [CardService, CardFormComponent]
})
export class CofreModule {}
