import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { Platform, AlertController } from '@ionic/angular';

import { User } from '../users/user/user.model';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'currentUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | boolean>;
  public currentUser: Observable<User | boolean>;
  showNavigation = new EventEmitter<boolean>();
  url = environment.API;

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController
    ) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }

  public get currentUserValue(): User | boolean {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.API}/login`, { username, password })
      .pipe(
        delay(1000),
        map(user => {
          user = user['user'];
        // login successful if there's a jwt token in the response
        if (user && user.token && user.role !== 'analista') {
          this.showNavigation.emit(true);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.storage.set(TOKEN_KEY, user);
          this.currentUser = this.helper.decodeToken(user['token']);
          this.currentUserSubject.next(true);
          console.log(this.currentUser);
        } else {
          return false;
        }

        return user;
      }));
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token['token']);
        let isExpired = this.helper.isTokenExpired(token['token']);

        if (!isExpired) {
          this.currentUser = token;
          this.currentUserSubject.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.currentUserSubject.next(false);
    });
  }

  isAuthenticated() {
    return this.currentUserSubject.value;
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Fudeu!',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
