import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { UsersGuard } from './users/users.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'},
  { path: 'home', redirectTo: '/expenses'},
  { path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [AuthGuard],
    canActivateChild: [UsersGuard]},
  { path: 'prefectures',
    loadChildren: './prefectures/prefectures.module#PrefecturesModule',
    canActivate: [AuthGuard]},
  { path: 'outfitters',
    loadChildren: './outfitters/outfitters.module#OutfittersModule',
    canActivate: [AuthGuard]},
  { path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule',
    canActivate: [AuthGuard]},
  { path: 'expenses',
    loadChildren: './expenses/expenses.module#ExpensesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
