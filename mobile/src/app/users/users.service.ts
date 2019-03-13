import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly RESOURCE = `${environment.API}/users`;

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<User[]>(this.RESOURCE);
  }

  listOne(id: number) {
    return this.http.get<User>(this.RESOURCE + '/' + id);
  }
}
