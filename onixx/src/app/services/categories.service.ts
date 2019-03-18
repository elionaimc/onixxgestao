import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly RESOURCE = `${environment.API}/categories`;

  constructor(private http: HttpClient, private router: Router) { }

  listAll() {
    return this.http.get<Category[]>(this.RESOURCE);
  }

  listOne(id: number) {
    return this.http.get<Category>(this.RESOURCE + '/' + id);
  }

  create(description: string) {
    return this.http.post<Category>(this.RESOURCE + '/', { description }).pipe(
      map(success => {
        if (success) {
          this.router.navigate(['/categories']);
        }
      })
    );
  }
}
