import { BsModalService } from 'ngx-bootstrap';
import { AlertModalService } from './../../services/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ProvidersService } from 'src/app/services/providers.service';
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

  providers$: Observable<Provider[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem fornecedores cadastrados!';
  faPencilAlt = faPencilAlt;
  faCheck = faCheck;
  faPlus = faPlus;
  faSync = faSync;

  modalOptions = {
    class: 'modal-lg'
  }

  constructor(
    private providersService: ProvidersService,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    ) { }

  ngOnInit() {
    this.onRefresh();
    this.modalService.onHide.subscribe(() => this.onRefresh());
  }

  onRefresh() {
    this.providers$ = this.providersService.listAll()
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

  changeState(id, isActive){
    this.providersService.edit({
      id: id,
      isActive: !isActive
    }).subscribe(
      success => this.onRefresh(),
      error => this.alertService.showAlertDanger(`Erro ao editar fornecedor. Servidor retornou ${error}`)
    );
  }

}
