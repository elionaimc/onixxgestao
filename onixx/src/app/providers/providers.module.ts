import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { ParamErrorComponent } from '../layout/param-error/param-error.component';
import { ServerErrorComponent } from '../layout/server-error/server-error.component';
import { EditComponent } from './edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ListComponent, DetailComponent, CreateComponent, EditComponent],
  entryComponents: [
    ListComponent,
    DetailComponent,
    CreateComponent,
    EditComponent,
    ParamErrorComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule
  ]
})
export class ProvidersModule { }
