import { Component, OnInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  preserveWhitespaces: true
})
export class EditComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  error: string;
  currentUser: User;
  id: number;
  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(
    private providersService: ProvidersService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      cnpj: [null],
      socialName: [null]
    });
    const provider$ = this.providersService.listOne(this.id);
    provider$.subscribe(data => this.updateForm(data['provider']));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.providersService.edit({
      id: this.form.value.id,
      socialName: this.form.value.socialName,
      cnpj: this.form.value.cnpj
    }).subscribe(
      success => {
        if (success['success']) this.decline();
        else { this.error = 'Erro ao editar fornecedor. Verifique os dados e tente novamente.' }
      },
      error => this.error = `Erro ao editar fornecedor. Servidor retornou ${error}`
    );
  }

  updateForm(provider) {
    this.form.patchValue({
      id: provider.id,
      socialName: provider.socialName,
      cnpj: provider.cnpj
    });
  }

  onClose() {
    this.error = null;
    this.bsModalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        if (reason) this.decline();
      }
      ))
  };

  decline(): void {
    this.error = null;
    this.modalRef.hide();
    this.bsModalRef.hide();
  }
}
