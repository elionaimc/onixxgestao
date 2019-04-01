import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Expense } from '../models/expense.model';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly RESOURCE = `${environment.API}/expenses`;
  public new = new HttpParams().set('status', 'nova');
  public authorized = new HttpParams().set('status', 'autorizada');
  public denied = new HttpParams().set('status', 'recusada');

  constructor(private http: HttpClient, private router: Router) { }

  create(expense: Expense) {
    return this.http.post<Expense>(this.RESOURCE, expense).pipe(take(1));
  }

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

  updateOne(id, expense) {
    return this.http.put( this.RESOURCE + '/' + id, expense ).pipe(take(1));
  }

  edit(expense) {
    return this.http.put<Expense>(`${this.RESOURCE}/${expense.id}`, expense).pipe(take(1));
  }
}
