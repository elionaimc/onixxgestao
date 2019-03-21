import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './concierge/jwt.interceptor';
import { ErrorInterceptor } from './concierge/error.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [SidebarComponent, TopbarComponent, AlertModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    AuthenticationGuard,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
