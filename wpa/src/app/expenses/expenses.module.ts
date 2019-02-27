import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseComponent } from './expense/expense.component';
import { AlertModule } from 'ngx-bootstrap';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { AuthorizedExpensesComponent } from './authorized-expenses/authorized-expenses.component';
import { DeniedExpensesComponent } from './denied-expenses/denied-expenses.component';

@NgModule({
  declarations: [ExpenseComponent, ExpenseDetailComponent, AuthorizedExpensesComponent, DeniedExpensesComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    AlertModule.forRoot()
  ]
})
export class ExpensesModule { }
