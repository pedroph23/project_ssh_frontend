import { ComponentIotService } from './component.iot.service';
import { Component } from '@angular/core';
@Component({
    selector: 'app-component-iot',
    templateUrl: 'component-iot.html',
  })
  export class ComponentIot {

    constructor(
      private componentIotService: ComponentIotService
    ) { }

    eventLed(event: string) {
      this.componentIotService.eventLed(event).subscribe(res => {});
    }

}
