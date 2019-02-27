import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, EMPTY, Observable, Subject } from 'rxjs';
import { Expense } from '../expense/expense.model';
import { ExpensesService } from '../expenses.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html'
})
export class ExpenseDetailComponent implements OnInit {

  splash = true;
  id: number;
  expense$: Observable<Expense>;
  error$ = new Subject<boolean>();
  control: Subscription;

  constructor(private router: ActivatedRoute, private service: ExpensesService) { }

  ngOnInit() {
    this.control = this.router.params.subscribe(params => {
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

  ngOnDestroy(): void {
    this.control.unsubscribe();
  }
}
