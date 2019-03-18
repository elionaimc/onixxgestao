import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {
  submitted = false;
  returnUrl = 'returnUrl';
  error = '';
  faSignInAlt = faSignInAlt;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams[this.returnUrl] || '/home';
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (f.invalid) {
      return null;
    }

    this.authenticationService.login(f.value.email, f.value.password)
      .pipe(first())
      .subscribe(
        user => {
          if (typeof user === user) {
            this.error = 'Nível de acesso não autorizado.';
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.error = 'Verifique as informações e tente novamente.';
        });
  }

  logout() {
    this.authenticationService.logout();
  }
}
