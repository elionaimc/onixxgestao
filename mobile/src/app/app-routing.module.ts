import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'prefectures', loadChildren: './prefectures/prefectures.module#PrefecturesModule' },
  { path: 'outfitters', loadChildren: './outfitters/outfitters.module#OutfittersModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
  { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
