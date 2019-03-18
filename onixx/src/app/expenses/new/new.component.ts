import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  preserveWhitespaces: true
})
export class NewComponent implements OnInit {

  splash = true;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ExpensesService) { }

  ngOnInit() {
    this.onRefresh();
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

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 1000);
  }

}
