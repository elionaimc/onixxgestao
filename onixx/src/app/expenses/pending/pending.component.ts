import { Component, OnInit, TemplateRef } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { faPencilAlt, faCheck, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { DetailComponent } from '../detail/detail.component';
import { EditComponent } from '../edit/edit.component';
import { CreateComponent } from '../create/create.component';
import { AlertModalService } from 'src/app/services/alert-modal.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  preserveWhitespaces: true
})
export class PendingComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem despesas pendentes!';
  modalRef: BsModalRef;
  faPencilAlt = faPencilAlt;
  faCheck = faCheck;
  faPlus = faPlus;
  faSync = faSync;

  modalOptions = {
    class: 'modal-lg',
    backdropClick: false
  }

  constructor(
    private service: ExpensesService,
    private alertService: AlertModalService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.onRefresh();
    this.modalService.onHide.subscribe(() => this.onRefresh());
  }

  onRefresh() {
    this.expenses$ = this.service.listNew()
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

  detail(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(DetailComponent, this.modalOptions);
  }
}
