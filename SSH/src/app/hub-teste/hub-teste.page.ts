import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@Component({
  selector: 'app-hub-teste',
  templateUrl: './hub-teste.page.html',
  styleUrls: ['./hub-teste.page.scss'],
})
export class HubTestePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuController.enable(true);
  }
}
