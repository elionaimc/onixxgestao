import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { ParamErrorComponent } from '../layout/param-error/param-error.component';
import { ServerErrorComponent } from '../layout/server-error/server-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    UsersRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class UsersModule { }
