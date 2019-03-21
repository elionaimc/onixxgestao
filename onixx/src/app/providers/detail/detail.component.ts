import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Provider } from 'src/app/models/provider.model';
import { ProvidersService } from 'src/app/services/providers.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  defaultMessage: 'Nenhum fornecedor encontrado com o identificador fornecido';
  provider$: Observable<Provider>;
  error$ = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private providersService: ProvidersService,
    private alertService: AlertModalService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.provider$ = this.providersService.listOne(id)
        .pipe(
          catchError(error => {
            this.alertService.showAlertDanger(error);
            this.error$.next(true);
            return EMPTY;
          }),
          tap(data => {
            if (!data['success'] && data['message']) {
              if (id != 'new') {
                this.alertService.showAlertWarning(data['message']);
                this.router.navigate(['/providers']);
              }
              return EMPTY;
            }
          })
        );
    });
  }

}
