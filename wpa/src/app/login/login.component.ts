import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth.service';
import { User } from '../users/user/user.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {
  private user: User;
  faSignInAlt = faSignInAlt;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {

  }

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (f.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(f.value.email, f.value.password)
      .pipe(first())
      .subscribe(
        data => {
          if (data === false) {
            this.error = 'Nível de acesso não autorizado.';
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.error = 'Verifique as informações e tente novamente.';
          this.loading = false;
        });
  }

  logout() {
    this.authenticationService.logout();
  }
}
