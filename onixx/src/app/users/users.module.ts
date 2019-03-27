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
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ListComponent, DetailComponent, CreateComponent, EditComponent, EditPasswordComponent],
  entryComponents: [
    ListComponent,
    DetailComponent,
    CreateComponent,
    EditComponent,
    EditPasswordComponent,
    ParamErrorComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TooltipModule.forRoot()
  ]
})
export class UsersModule { }
