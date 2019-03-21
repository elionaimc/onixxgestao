import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
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
    private usersService: UsersService,
    private bsModalRef: BsModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      name: [null],
      email: [null],
      role: [null]
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
        this.bsModalRef.hide();
      },
      error => this.error = `Erro ao editar usuário. Servidor retornou ${error}`
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

  onCancel() {
    this.form.reset();
    this.bsModalRef.hide();
  }

}
