
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ComponentIot } from '../component-iot/component.iot';
import { ComponentIotService } from '../component-iot/component.iot.service';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HttpModule,
      RouterModule.forChild([
        {
          path: '',
          component: ComponentIot
        }
      ])
    ],
    declarations: [ComponentIot],
    providers: [ComponentIotService],

  })
export class ComponentIotModule { }
