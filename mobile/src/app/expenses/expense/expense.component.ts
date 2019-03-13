import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Expense } from './expense.model';
import { ExpensesService } from '../expenses.service';
import { catchError } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ExpenseComponent implements OnInit {

  splash = true;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ExpensesService, public navCtrl: NavController) { }

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
