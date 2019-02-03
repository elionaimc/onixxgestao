/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Sidebar navigation
*/

import { Component, OnInit } from '@angular/core';
import {
  faThLarge,
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
  faUserCog,
  faHome
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  faThLarge = faThLarge;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faEllipsisV = faEllipsisV;
  faPowerOff = faPowerOff;
  faCog = faCog;
  faWallet = faWallet;
  faTv = faTv;
  faTruck = faTruck;
  faSitemap = faSitemap;
  faUser = faUser;
  faUserCircle = faUserCircle;
  faUserCog = faUserCog;
  faHome = faHome;

  constructor() { }

  ngOnInit() {
  }

}
