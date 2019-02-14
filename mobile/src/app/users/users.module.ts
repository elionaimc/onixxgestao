import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { UsersGuard } from './users.guard';

@NgModule({
  declarations: [UserComponent, PerfilComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [
    UsersGuard
  ]
})
export class UsersModule { }
