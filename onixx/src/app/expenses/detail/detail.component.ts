import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {

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
      //this.id = params['id'];
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
    this.service.updateOne(this.id, f.form.value.authorizedValue, status)
      .subscribe();
  }

  ngOnDestroy(): void {
    this.control.unsubscribe();
  }

}
