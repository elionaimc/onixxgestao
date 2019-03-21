import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly RESOURCE = `${environment.API}/categories/`;

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<Category[]>(this.RESOURCE);
  }

  listOne(id: number) {
    return this.http.get<Category>(`${this.RESOURCE}${id}`);
  }

  create(category: Category) {
    return this.http.post<Category>(this.RESOURCE, category).pipe(take(1));
  }

  edit(category) {
    return this.http.put<Category>(`${this.RESOURCE}${category.id}`, category).pipe(take(1));
  }
}
