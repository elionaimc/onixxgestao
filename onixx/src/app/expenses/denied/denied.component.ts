import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { faSync, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  preserveWhitespaces: true
})
export class DeniedComponent implements OnInit {

  splash = true;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();
  faSync = faSync;
  faPlus = faPlus;

  constructor(private service: ExpensesService) { }

  ngOnInit() {
    this.onRefresh();
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

  create() {
    ////
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
