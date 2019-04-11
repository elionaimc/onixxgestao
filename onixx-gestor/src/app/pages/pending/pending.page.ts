import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private toastController: ToastController,
    private service: ExpensesService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  logout() {
    this.authService.logout();
  }

  clearToken() {
    this.storage.remove('access_token');

    let toast = this.toastController.create({
      message: 'Token expirou por isso foi removido',
      duration: 3000
    });
    toast.then(toast => toast.present());
    this.logout();
  }

  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();

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
