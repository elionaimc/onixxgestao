import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
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
    private usersService: UsersService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      name: [null],
      email: [null],
      role: [null],
      password: [null]
    });
    const user$ = this.usersService.listOne(this.id);
    user$.subscribe(data => this.updateForm(data['user']));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.usersService.edit({
      id: this.form.value.id,
      name: this.form.value.name,
      email: this.form.value.email,
      role: this.form.value.role
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
      name: user.name,
      email: user.email,
      role: user.role
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
