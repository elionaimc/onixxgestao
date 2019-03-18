import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ProvidersService } from 'src/app/services/providers.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  preserveWhitespaces: true
})
export class ListComponent implements OnInit {

  providers$: Observable<Provider[]>;
  error$ = new Subject<boolean>();

  constructor(private service: ProvidersService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.providers$ = this.service.listAll()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

}
