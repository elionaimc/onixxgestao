import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingComponent } from './pending/pending.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { DeniedComponent } from './denied/denied.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: PendingComponent },
  { path: 'authorized', component: AuthorizedComponent },
  { path: 'denied', component: DeniedComponent },
  { path: ':id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
