import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Provider } from '../models/provider.model';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProvidersService {

    private readonly RESOURCE = `${environment.API}/providers/`;

    constructor(private http: HttpClient) { }

    listAll() {
        return this.http.get<Provider[]>(this.RESOURCE);
    }

    listOne(id: number) {
        return this.http.get<Provider>(`${this.RESOURCE}${id}`);
    }

    create(provider: Provider) {
        return this.http.post<Provider>(this.RESOURCE, provider).pipe(take(1));
    }

    edit(provider) {
        return this.http.put<Provider>(`${this.RESOURCE}${provider.id}`, provider).pipe(take(1));
    }
}
