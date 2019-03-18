import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UsersGuard } from './guards/users.guard';
import { HomeComponent } from './layout/home/home.component';
import { LogoutGuard } from './guards/logout.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './concierge/concierge.module#ConciergeModule'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'expenses',
    loadChildren: './expenses/expenses.module#ExpensesModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'providers',
    loadChildren: './providers/providers.module#ProvidersModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [AuthenticationGuard],
    canActivateChild: [UsersGuard]
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [LogoutGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
