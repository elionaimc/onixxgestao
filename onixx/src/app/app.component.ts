import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  sidebar = false;
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  showMenu(sidebar: boolean) {
    this.sidebar = sidebar;
  }

  logout() {
    this.router.navigate(['/logout']);
  }
}
