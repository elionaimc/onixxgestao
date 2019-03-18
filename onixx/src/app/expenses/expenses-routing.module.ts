import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { DeniedComponent } from './denied/denied.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: NewComponent },
  { path: 'authorized', component: AuthorizedComponent },
  { path: 'denied', component: DeniedComponent },
  { path: ':id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
