import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { ParamErrorComponent } from '../layout/param-error/param-error.component';
import { ServerErrorComponent } from '../layout/server-error/server-error.component';

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
    CategoriesRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class CategoriesModule { }
