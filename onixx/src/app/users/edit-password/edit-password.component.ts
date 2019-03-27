import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-password.component.html',
  preserveWhitespaces: true
})
export class EditPasswordComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  error: string;
  currentUser: User;
  id: number;
  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(
    private usersService: UsersService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      newPassword: [null],
      newPasswordConfirm: [null]
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  checkPasswords() { // here we have the 'passwords' group
    let pass = this.form.value.newPassword;
    let confirmPass = this.form.value.newPasswordConfirm;

  return pass === confirmPass ? null : { notSame: true }     
}

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid || this.checkPasswords()) {
      return this.error = 'Erro ao editar um usuário. Verifique os dados e tente novamente.';
    }
    this.usersService.editPassword({
      id: this.form.value.id,
      newPassword: this.form.value.newPassword,
      newPasswordConfirm: this.form.value.newPasswordConfirm
    }).subscribe(
      success => {
        if (success['success']) this.decline();
        else { this.error = 'Erro ao editar um usuário. Verifique os dados e tente novamente.' }
      },
      error => this.error = `Erro ao editar um usuário. Servidor retornou ${error}`
    );
  }

  updateForm(user) {
    this.form.patchValue({
      id: user.id,
      newPassword: '',
      newPasswordConfirm: ''
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
