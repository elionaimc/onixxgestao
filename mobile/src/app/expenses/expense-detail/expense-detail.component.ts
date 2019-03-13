import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, EMPTY, Observable, Subject } from 'rxjs';
import { Expense } from '../expense/expense.model';
import { ExpensesService } from '../expenses.service';
import { catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  preserveWhitespaces: true
})
export class ExpenseDetailComponent implements OnInit {

  splash = true;
  id: number;
  expense$: Observable<Expense>;
  error$ = new Subject<boolean>();
  control: Subscription;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private service: ExpensesService) { }

  ngOnInit() {
    this.control = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.expense$ = this.service.listOne(this.id)
        .pipe(
          catchError(error => {
            this.error$.next(true);
            return EMPTY;
          })
        );
    });
  }

  onSubmit(f: NgForm, status) {
    this.submitted = true;
    if (f.invalid) {
      return;
    }
    this.service.updateOne(this.id, f.form.value.authorized_value, status)
      .subscribe();
  }

  ngOnDestroy(): void {
    this.control.unsubscribe();
  }
}
