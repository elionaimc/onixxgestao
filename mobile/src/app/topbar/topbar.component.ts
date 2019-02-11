import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  faPowerOff,
  faUserCircle,
  faUserCog
} from '@fortawesome/free-solid-svg-icons';

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
  sidebar = false;
  @Output() showSidebar = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.sidebar = !this.sidebar;
    this.showSidebar.emit(this.sidebar);
  }

}
