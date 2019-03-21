import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BsModalRef } from 'ngx-bootstrap';

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

  constructor(
    private providersService: ProvidersService,
    private fb: FormBuilder,
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
        this.bsModalRef.hide();
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

  onCancel() {
    this.form.reset();
    this.bsModalRef.hide();
  }

}
