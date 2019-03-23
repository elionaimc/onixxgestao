import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';
import { Provider } from 'src/app/models/provider.model';
import { User } from 'src/app/models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  modalRef: BsModalRef;

  constructor(
    private providersService: ProvidersService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
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
          if (success['success']) this.confirm();
          else { this.error = 'Erro ao criar um novo fornecedor. Verifique os dados e tente novamente.' }
        },
        error => {
          this.error = 'Verifique os dados (incluindo o CNPJ) e tente novamente.';
        }
      );
  }

  onClose() {
    this.bsModalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirm(): void {
    this.modalRef.hide();
    this.bsModalRef.hide();
  }

  decline(): void {
    this.error = null;
    this.modalRef.hide();
  }
}
