import { BsModalService } from 'ngx-bootstrap';
import { AlertModalService } from './../../services/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { catchError } from 'rxjs/operators';
import { CreateComponent } from '../create/create.component';
import { faCheck, faPencilAlt, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  preserveWhitespaces: true
})
export class ListComponent implements OnInit {

  users$: Observable<User[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem usuários cadastrados!';
  faPencilAlt = faPencilAlt;
  faCheck = faCheck;
  faPlus = faPlus;
  faSync = faSync;

  modalOptions = {
    class: 'modal-lg'
  }

  constructor(
    private usersService: UsersService,
    private alertService: AlertModalService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.onRefresh();
    this.modalService.onHide.subscribe(() => this.onRefresh());
  }

  onRefresh() {
    this.users$ = this.usersService.listAll()
      .pipe(
        catchError(error => {
          this.alertService.showAlertDanger(error);
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  create() {
    this.modalService.show(CreateComponent, this.modalOptions);
  }

  edit(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(EditComponent, this.modalOptions);
  }

  changeState(id, isActive) {
    this.usersService.edit({
      id: id,
      isActive: !isActive
    }).subscribe(
      success => this.onRefresh(),
      error => this.alertService.showAlertDanger(`Erro ao editar usuário. Servidor retornou ${error}`)
    );
  }

}
