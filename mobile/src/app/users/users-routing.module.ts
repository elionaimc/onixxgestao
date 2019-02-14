import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsersGuard } from './users.guard';

const routes: Routes = [
  { path: '', component: UserComponent,
    canActivateChild: [UsersGuard],
    children: [
      { path: ':id', component: PerfilComponent },
      { path: 'novo', component: PerfilComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
