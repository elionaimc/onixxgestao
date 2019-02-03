/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

import { Component } from '@angular/core';
import {
    faCoffee,
    faArrowLeft,
    faArrowRight,
    faEllipsisV,
    faPowerOff,
    faCog,
    faWallet,
    faTv,
    faSitemap,
    faUser,
    faUserCircle,
    faTruck,
    faUserCog
  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Onixx Gestor';
  faCoffee = faCoffee;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faEllipsisV = faEllipsisV;
  faPowerOff = faPowerOff;
  faCog = faCog;
  faWallet = faWallet;
  faTv = faTv;
  faSitemap = faSitemap;
  faUser = faUser;
  faUserCircle = faUserCircle;
  faTruck = faTruck;
  faUserCog = faUserCog;
  showMenu = false;

  toggleClass() {
    this.showMenu = !this.showMenu;
  }
}
