import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'authorized',
    loadChildren: './pages/authorized/authorized.module#AuthorizedPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'denied',
    loadChildren: './pages/denied/denied.module#DeniedPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'pending',
    loadChildren: './pages/pending/pending.module#PendingPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'detail',
    loadChildren: './pages/detail/detail.module#DetailPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'detail/:expense',
    loadChildren: './pages/detail/detail.module#DetailPageModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
