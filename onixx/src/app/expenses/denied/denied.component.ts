import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { faSync, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CreateComponent } from '../create/create.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  preserveWhitespaces: true
})
export class DeniedComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem despesas recusadas!';
  modalRef: BsModalRef;
  faSync = faSync;
  faPlus = faPlus;

  modalOptions = {
    class: 'modal-lg',
    backdropClick: false
  }


  constructor(
    private service: ExpensesService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.onRefresh();
    this.modalService.onHide.subscribe(() => this.onRefresh());
  }

  onRefresh() {
    this.expenses$ = this.service.listDenied()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  decline(): void {
    this.modalRef.hide();
  }

  create() {
    this.modalService.show(CreateComponent, this.modalOptions);
  }

}
