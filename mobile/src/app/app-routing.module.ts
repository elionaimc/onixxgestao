import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '',
    loadChildren: './login/login.module#LoginModule'},
  { path: 'home',
    loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard]},
  { path: 'users',
    loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuard]},
  { path: 'prefectures',
    loadChildren: './prefectures/prefectures.module#PrefecturesModule', canActivate: [AuthGuard]},
  { path: 'outfitters',
    loadChildren: './outfitters/outfitters.module#OutfittersModule', canActivate: [AuthGuard]},
  { path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule', canActivate: [AuthGuard]},
  { path: 'expenses',
    loadChildren: './expenses/expenses.module#ExpensesModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
