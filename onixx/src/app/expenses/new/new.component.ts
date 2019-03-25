import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { faPencilAlt, faCheck, faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  preserveWhitespaces: true
})
export class NewComponent implements OnInit {

  splash = true;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem despesas pendentes!';
  faPencilAlt = faPencilAlt;
  faCheck = faCheck;
  faPlus = faPlus;
  faSync = faSync;

  modalOptions = {
    class: 'modal-lg'
  }

  constructor(
    private service: ExpensesService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.onRefresh();
  }

  edit(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(DetailComponent, this.modalOptions);
  }

  onRefresh() {
    this.expenses$ = this.service.listNew()
    .pipe(
      catchError(error => {
        this.error$.next(true);
        return EMPTY;
      })
    );
  }
}
