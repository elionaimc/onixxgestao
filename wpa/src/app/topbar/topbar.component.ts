import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  faPowerOff,
  faUserCircle,
  faUserCog,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { User } from '../users/user/user.model';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPowerOff = faPowerOff;
  faUserCircle = faUserCircle;
  faUserCog = faUserCog;
  faBars = faBars;
  sidebar = false;
  currentUser: User;

  @Output() showSidebar = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  toggleMenu() {
    this.sidebar = !this.sidebar;
    this.showSidebar.emit(this.sidebar);
  }

}
