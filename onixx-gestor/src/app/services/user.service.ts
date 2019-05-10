import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private readonly RESOURCE = `${environment.url}/users/`;

    constructor(private http: HttpClient) { }

    listAll() {
        return this.http.get<User[]>(this.RESOURCE);
    }

    listOne(id: number) {
        return this.http.get<User>(`${this.RESOURCE}${id}`);
    }

    create(u: User) {
        return this.http.post<User>(this.RESOURCE, u).pipe(take(1));
    }

    edit(u) {
        return this.http.put<User>(`${this.RESOURCE}${u.id}`, u).pipe(take(1));
    }

    editPassword(u) {
        const user = {
            id: u.id,
            password: u.newPassword
        }
        return this.http.put<User>(`${this.RESOURCE}${u.id}`, user).pipe(take(1));
    }
}
