import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastMessager {

    constructor(
        private toastController: ToastController,
    ) {}

  async messager(msg: string, time?: number) {
     const toast = await this.toastController.create({
            message: msg,
            duration: time
          });
        toast.present();
    }
}
