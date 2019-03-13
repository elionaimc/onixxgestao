import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { User } from '../users/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  showNavigation = new EventEmitter<boolean>();
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.API}/login`, { username, password })
      .pipe(
        delay(1000),
        map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token && user.role !== 'analista') {
          this.showNavigation.emit(true);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        } else {
          return false;
        }

        return user;
      }));
  }

  logout() {
    this.showNavigation.emit(false);
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
