import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../users/user/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthorized = false;

  showNavigation = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    if (user.email === 'eli.embits@gmail.com' && user.password === '123456') {
      this.userAuthorized = true;
      this.showNavigation.emit(this.userAuthorized);
      this.router.navigate(['/home']);
    } else {
      this.userAuthorized = false;
      this.showNavigation.emit(this.userAuthorized);
    }
  }

  isAuthorized() {
    return this.userAuthorized;
  }
}
