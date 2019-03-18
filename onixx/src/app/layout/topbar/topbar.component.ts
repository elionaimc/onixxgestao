import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {
  faUserCircle,
  faBars,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {

  sidebar = false;
  currentUser: User;
  faBars = faBars;
  faSignOutAlt = faSignOutAlt;
  faUserCircle = faUserCircle;

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
