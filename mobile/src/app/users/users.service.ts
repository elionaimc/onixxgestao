import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.model';
import { tap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly APP_API = `${environment.API}/users`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<User[]>(this.APP_API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
}
