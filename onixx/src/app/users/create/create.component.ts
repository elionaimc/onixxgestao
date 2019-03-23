import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
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
  user: any;
  currentUser: User;
  modalRef: BsModalRef;

  constructor(
    private usersService: UsersService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (f.invalid) {
      return;
    }
    this.user = {
      name: f.form.value.name,
      email: f.form.value.email,
      role: f.form.value.role,
      password: f.form.value.password,
      PrefectureId: this.currentUser['PrefectureId']
    };
    this.usersService.create(this.user)
      .subscribe(
        success => {
          if (success['success']) this.confirm();
          else { this.error = 'Erro ao criar um novo usuário. Verifique os dados e tente novamente.' }
        },
        error => this.error = error
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
