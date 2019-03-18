import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faWallet,
  faTimes,
  faSitemap,
  faUserCog,
  faTruck,
  faCheckDouble,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  sidebar = false;
  currentUser: User;
  faPaperClip = faPaperclip;
  faCheckDouble = faCheckDouble;
  faTruck = faTruck;
  faSitemap = faSitemap;
  faUserCog = faUserCog;
  faTimes = faTimes;
  faWallet = faWallet;

  @Output() showSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  toggleMenu() {
    this.sidebar = !this.sidebar;
    this.showSidebar.emit(this.sidebar);
  }

}
