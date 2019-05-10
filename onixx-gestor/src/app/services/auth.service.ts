import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { FcmService } from './fcm.service';
import { ToastService } from './toast.service';
import { ToastController } from '@ionic/angular';
import { User } from '../models/user.model';
import { UsersService } from './user.service';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private platform: Platform,
    private alertController: AlertController,
    private fcm: FcmService,
    private toastr: ToastService,
    public toastController: ToastController,
    private usersService: UsersService
    ) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  getUser() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        console.log(this.helper.decodeToken(token));
        return this.helper.decodeToken(token);
        }
        return false;
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  register(credentials) {
    return this.http.post(`${this.url}/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post(`${this.url}/login`, credentials)
      .pipe(
        tap(res => {
          if (res['role'] === 'gestor' || res['role'] === 'god') {
            this.storage.set(TOKEN_KEY, res['token']);
            this.user = this.helper.decodeToken(res['token']);
            this.authenticationState.next(true);
            this.notificationSetup(res);
          } else {
            this.showAlert('Nível de acesso não permitido.');
          }
        }),
        catchError(e => {
          this.showAlert(e.error.message);
          throw new Error(e);
        })
      );
  }

  private async notificationSetup(user) {
    const smarttoken = await this.fcm.getToken().then(
      smarttoken => {
        this.usersService.edit({
          id: user.id,
          smarttoken: smarttoken
        }).subscribe();
      }
    );
    
    // let u = user;
    // u.smarttoken = await this.fcm.getToken();
    
    // this.presentToast(u.smarttoken);
    // this.http.put<User>(`${this.url}/users/${user['id']}`, u).pipe(take(1));

    // const u = {
    //   id: user.id,
    //   smarttoken: this.fcm.getToken()
    // }
    // return this.http.put<User>(`${this.url}/users/${user['id']}`, u).pipe(take(1));

    // this.http.post(`${this.url}/login`, {id: user.id, smarttoken: token}).pipe(
    //   tap(res => {
    //     // if (res['role'] === 'gestor' || res['role'] === 'god') {
    //     //   this.storage.set(TOKEN_KEY, res['token']);
    //     //   this.user = this.helper.decodeToken(res['token']);
    //     //   this.authenticationState.next(true);
    //     //   this.notificationSetup(this.user);
    //     // } else {
    //     //   this.showAlert('Nível de acesso não permitido.');
    //     // }
    //   }),
    //   catchError(e => {
    //     this.showAlert(e.error.message);
    //     throw new Error(e);
    //   })
    // );

    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.aps.alert);
        } else {
          this.presentToast(msg.body);
        }
      });
  }

  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  showAlert(msg) {
    let m = msg ? msg : 'Verifique os dados e tente novamente.';
    const alert = this.alertController.create({
      header: 'Ooops!',
      message: m,
      buttons: [
        {
          text: 'OK',
          handler: () => { }
        }
      ]
    });

    alert.then(alert => alert.present());
  }
}
