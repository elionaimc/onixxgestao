import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AlertModalService } from './../../services/alert-modal.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { catchError } from 'rxjs/operators';
import { CreateComponent } from '../create/create.component';
import { faCheck, faPencilAlt, faPlus, faSync, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { EditComponent } from '../edit/edit.component';
import { DetailComponent } from '../detail/detail.component';
import { EditPasswordComponent } from '../edit-password/edit-password.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  preserveWhitespaces: true,
  styles: [
    `
      :host >>> .tooltip-inner {
        background-color: #007BFF;
        color: #fff;
      }
      :host >>> .tooltip.left .tooltip-arrow:before,
      :host >>> .tooltip.left .tooltip-arrow {
        border-left-color: #007BFF;
      }
    `
  ]
})
export class ListComponent implements OnInit {

  users$: Observable<User[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem usuários cadastrados!';
  modalRef: BsModalRef;
  currentUser: User;
  faPencilAlt = faPencilAlt;
  faLock = faLock;
  faCheck = faCheck;
  faPlus = faPlus;
  faSync = faSync;
  faEyeSlash = faEyeSlash;
  inactives = false;

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
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  decline(): void {
    this.modalRef.hide();
  }

  create() {
    this.modalService.show(CreateComponent, this.modalOptions);
  }

  edit(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(EditComponent, this.modalOptions);
  }

  editPassword(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(EditPasswordComponent, this.modalOptions);
  }

  detail(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(DetailComponent, this.modalOptions);
  }

  changeState(id, isActive) {
    this.usersService.edit({
      id: id,
      isActive: !isActive
    }).subscribe(
      success => this.modalRef.hide(),
      error => {
        this.modalRef.hide();
        this.alertService.showAlertDanger(`Erro ao editar fornecedor. Servidor retornou ${error}`)
      }
    );
  }

}
