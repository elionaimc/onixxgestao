import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Expense } from '../models/expense.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly RESOURCE = `${environment.API}/expenses`;
  public new = new HttpParams().set('status', 'nova');
  public authorized = new HttpParams().set('status', 'autorizada');
  public denied = new HttpParams().set('status', 'recusada');

  constructor(private http: HttpClient, private router: Router) { }

  listNew() {
    return this.http.get<Expense[]>(this.RESOURCE, { params: this.new });
  }

  listAuthorized() {
    return this.http.get<Expense[]>(this.RESOURCE, { params: this.authorized });
  }

  listDenied() {
    return this.http.get<Expense[]>(this.RESOURCE, { params: this.denied });
  }

  listOne(id: number) {
    return this.http.get<Expense>(this.RESOURCE + '/' + id);
  }

  updateOne(id, authorized_value, status) {
    return this.http.put(
      this.RESOURCE + '/' + id,
      { authorized_value: authorized_value, status: status }
    ).pipe(
      map(success => {
        if (success) {
          this.router.navigate(['/expenses']);
        }
      })
    );
  }
}
