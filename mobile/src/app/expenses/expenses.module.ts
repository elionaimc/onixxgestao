import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseComponent } from './expense/expense.component';
import { AlertModule } from 'ngx-bootstrap';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { AuthorizedExpensesComponent } from './authorized-expenses/authorized-expenses.component';
import { DeniedExpensesComponent } from './denied-expenses/denied-expenses.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from '../loading/loading/loading.component';
import { ParamErrorComponent } from '../loading/param-error/param-error.component';
import { ServerErrorComponent } from '../loading/server-error/server-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseDetailComponent,
    AuthorizedExpensesComponent,
    DeniedExpensesComponent,
    LoadingComponent,
    ParamErrorComponent,
    ServerErrorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ExpensesRoutingModule,
    IonicModule,
    AlertModule.forRoot()
  ],
  entryComponents: [
    ExpenseComponent,
    ExpenseDetailComponent,
    AuthorizedExpensesComponent,
    DeniedExpensesComponent,
    LoadingComponent,
    ParamErrorComponent]
})
export class ExpensesModule { }
