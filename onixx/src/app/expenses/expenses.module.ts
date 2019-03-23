import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { NewComponent } from './new/new.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { DeniedComponent } from './denied/denied.component';
import { DetailComponent } from './detail/detail.component';
import { LoadingComponent } from '../layout/loading/loading.component';
import { ParamErrorComponent } from '../layout/param-error/param-error.component';
import { ServerErrorComponent } from '../layout/server-error/server-error.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NewComponent,
    AuthorizedComponent,
    DeniedComponent,
    DetailComponent
  ],
  entryComponents: [
    NewComponent,
    AuthorizedComponent,
    DeniedComponent,
    DetailComponent,
    LoadingComponent,
    ParamErrorComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    FormsModule,
    LayoutModule,
    FontAwesomeModule
  ]
})
export class ExpensesModule { }
