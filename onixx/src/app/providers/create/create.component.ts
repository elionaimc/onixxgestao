import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';
import { Provider } from 'src/app/models/provider.model';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute} from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';

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
    private bsModalRef: BsModalRef,
    private router: Router,
    public route: ActivatedRoute
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
      socialName: f.form.value.socialName,
      cnpj: f.form.value.cnpj,
      PrefectureId: this.currentUser['PrefectureId'],
      UserId: this.currentUser['id']
    };
    this.providersService.create(this.provider)
      .subscribe(
        success => {
          this.bsModalRef.hide();
          this.router.navigate(['/providers']);
        },
        error => this.error = error
      );
  }

  onClose() {
    this.bsModalRef.hide();
    this.router.navigate(['/providers']);
  }

}
