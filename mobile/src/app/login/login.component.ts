import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth.service';
import { User } from '../users/user/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {
  private user: User;
  faUserLock = faSignInAlt;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.user = f.value;

    this.authService.doLogin(this.user);
  }
}
