import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { ParamErrorComponent } from '../layout/param-error/param-error.component';
import { ServerErrorComponent } from '../layout/server-error/server-error.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, CreateComponent],
  entryComponents: [
    ListComponent,
    DetailComponent,
    CreateComponent,
    ParamErrorComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    FormsModule,
    LayoutModule
  ]
})
export class ProvidersModule { }
