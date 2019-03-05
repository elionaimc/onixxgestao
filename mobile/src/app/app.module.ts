import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AuthService } from './login/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './login/auth.guard';
import { UsersGuard } from './users/users.guard';
import { JwtInterceptor } from './login/jwt.interceptor';
import { ErrorInterceptor } from './login/error.interceptor';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpenseComponent } from './expenses/expense/expense.component';
import { ExpenseDetailComponent } from './expenses/expense-detail/expense-detail.component';
import { AuthorizedExpensesComponent } from './expenses/authorized-expenses/authorized-expenses.component';
import { DeniedExpensesComponent } from './expenses/denied-expenses/denied-expenses.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent],
  entryComponents: [ExpenseComponent, ExpenseDetailComponent, AuthorizedExpensesComponent, DeniedExpensesComponent],
  imports: [
    BrowserModule,
    PopoverModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    ExpensesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService,
    AuthGuard,
    UsersGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR' // 'de' for Germany, 'fr' for France ...
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
