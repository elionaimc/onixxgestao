import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { PendingComponent } from './pending/pending.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { DeniedComponent } from './denied/denied.component';
import { DetailComponent } from './detail/detail.component';
import { LoadingComponent } from '../layout/loading/loading.component';
import { ParamErrorComponent } from '../layout/param-error/param-error.component';
import { ServerErrorComponent } from '../layout/server-error/server-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TooltipModule, TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgxUploaderModule } from 'ngx-uploader';

@NgModule({
  declarations: [
    PendingComponent,
    AuthorizedComponent,
    DeniedComponent,
    DetailComponent,
    EditComponent,
    CreateComponent
  ],
  entryComponents: [
    PendingComponent,
    AuthorizedComponent,
    DeniedComponent,
    DetailComponent,
    EditComponent,
    CreateComponent,
    LoadingComponent,
    ParamErrorComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxUploaderModule,
    FontAwesomeModule
  ]
})
export class ExpensesModule { }
