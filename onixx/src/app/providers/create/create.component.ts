import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';
import { Provider } from 'src/app/models/provider.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  preserveWhitespaces: true
})
export class CreateComponent implements OnInit {

  submitted = false;
  error: string;
  provider: Provider;
  currentUser: User;

  constructor(
    private providersService: ProvidersService,
    private router: Router
    ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (f.invalid) {
      return;
    }
    this.provider = {
      razaoSocial: f.form.value.razaoSocial,
      CNPJ: f.form.value.CNPJ,
      PrefectureId: this.currentUser.PrefectureId,
      UserId: this.currentUser.id
    };
    this.providersService.create(this.provider)
      .subscribe(
        success => this.router.navigate(['/providers']),
        error => this.error = error
      );
  }

}
