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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
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
      }
    ])
  ],
  declarations: [CofreComponent, CardFormComponent],
  providers: [CardService]
})
export class CofreModule {}
