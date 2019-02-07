import { CardService } from './card/card.service';
import { CardFormComponent } from './card/card-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CofreComponent } from '../cofre/cofre.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
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
