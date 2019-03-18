import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Provider } from 'src/app/models/provider.model';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  splash = true;
  id: number;
  provider$: Observable<Provider>;
  error$ = new Subject<boolean>();

  constructor(private router: ActivatedRoute, private service: ProvidersService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.provider$ = this.service.listOne(this.id)
        .pipe(
          catchError(error => {
            this.error$.next(true);
            return EMPTY;
          })
        );
    });
  }

}
