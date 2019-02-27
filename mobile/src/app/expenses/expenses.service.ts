import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Expense } from './expense/expense.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly RESOURCE = `${environment.API}/expenses`;
  public new = new HttpParams().set('status', 'nova');
  public authorized = new HttpParams().set('status', 'autorizada');
  public denied = new HttpParams().set('status', 'recusada');

  constructor(private http: HttpClient) { }

  listAll() {
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
}
