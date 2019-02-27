import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseDetailComponent } from '../expenses/expense-detail/expense-detail.component';
import { AuthorizedExpensesComponent } from './authorized-expenses/authorized-expenses.component';
import { DeniedExpensesComponent } from './denied-expenses/denied-expenses.component';

const routes: Routes = [
  { path: '', component: ExpenseComponent },
  { path: 'authorized', component: AuthorizedExpensesComponent },
  { path: 'denied', component: DeniedExpensesComponent },
  { path: ':id', component: ExpenseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
