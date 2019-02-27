import { Component, OnInit } from '@angular/core';
import {
  faThLarge,
  faWallet,
  faSitemap,
  faUser,
  faTruck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  faThLarge = faThLarge;
  faWallet = faWallet;
  faTruck = faTruck;
  faSitemap = faSitemap;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
