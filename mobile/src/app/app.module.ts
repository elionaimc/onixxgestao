import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './login/auth.guard';
import { UsersGuard } from './users/users.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    PopoverModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
