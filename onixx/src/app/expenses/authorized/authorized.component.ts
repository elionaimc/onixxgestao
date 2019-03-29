import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { faSync, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  preserveWhitespaces: true
})
export class AuthorizedComponent implements OnInit {

  splash = true;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();
  faSync = faSync;
  faPlus = faPlus;
  faTimes = faTimes;

  constructor(private service: ExpensesService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.expenses$ = this.service.listAuthorized()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  create() {
    ///
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
