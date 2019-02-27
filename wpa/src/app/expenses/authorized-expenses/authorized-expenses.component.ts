import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Expense } from '../expense/expense.model';
import { ExpensesService } from '../expenses.service';
import { catchError } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-authorized-expenses',
  templateUrl: './authorized-expenses.component.html',
  preserveWhitespaces: true
})
export class AuthorizedExpensesComponent implements OnInit {

  splash = true;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ExpensesService, public navCtrl: NavController) { }

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

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
