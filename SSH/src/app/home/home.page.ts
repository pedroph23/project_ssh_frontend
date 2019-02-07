import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    effect: 'flip'
  };

  public name: string;

  constructor(
    private homeService: HomeService
   ) {}

  ngOnInit() {
    this.getNameAndEmail();
  }


  getNameAndEmail() {
    this.homeService.getNameAndEmail(window.localStorage.getItem('eid')).subscribe(res => {
      this.name = res[0].name;
    });
  }
}
