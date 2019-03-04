import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseComponent } from './expense/expense.component';
import { AlertModule } from 'ngx-bootstrap';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { AuthorizedExpensesComponent } from './authorized-expenses/authorized-expenses.component';
import { DeniedExpensesComponent } from './denied-expenses/denied-expenses.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [ExpenseComponent, ExpenseDetailComponent, AuthorizedExpensesComponent, DeniedExpensesComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    IonicModule,
    AlertModule.forRoot()
  ],
  entryComponents: [ExpenseComponent, ExpenseDetailComponent, AuthorizedExpensesComponent, DeniedExpensesComponent]
})
export class ExpensesModule { }
