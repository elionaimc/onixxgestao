import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Pendentes',
      url: '/pending',
      icon: 'attach'
    },
    {
      title: 'Autorizadas',
      url: '/authorized',
      icon: 'done-all'
    },
    {
      title: 'Recusadas',
      url: '/denied',
      icon: 'close'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(
        state => {
          if (state) {
            this.router.navigate(['pending']);
          } else {
            this.router.navigate(['login']);
          }
        }
      )
    });
  }
}
