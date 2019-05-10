import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-denied',
  templateUrl: './denied.page.html',
  styleUrls: ['./denied.page.scss'],
})
export class DeniedPage implements OnInit, OnDestroy {

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
    this.storage.remove('access_token');

    const toast = this.toastController.create({
      message: 'Sessão encerrada com sucesso.',
      duration: 3000
    });
    toast.then(toast => toast.present());
    this.authService.logout();
  }

  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();

  onRefresh() {
    this.expenses$ = this.service.listDenied()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  ngOnDestroy() {
    this.expenses$.subscribe().unsubscribe();
  }

}
