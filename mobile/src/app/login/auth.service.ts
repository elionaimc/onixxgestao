import { Injectable } from '@angular/core';
import { User } from '../users/user/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthorized = false;

  constructor(private router: Router) { }

  doLogin(user: User){
    if (user.email === 'eli.embits@gmail.com' && user.password === '123456') {
      this.userAuthorized = true;
      this.router.navigate(['/']);
    }
  }
}
