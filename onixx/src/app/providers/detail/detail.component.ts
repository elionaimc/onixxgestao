import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, take } from 'rxjs/operators';
import { Provider } from 'src/app/models/provider.model';
import { ProvidersService } from 'src/app/services/providers.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  defaultMessage: 'Nenhum fornecedor encontrado com o identificador fornecido';
  provider$: Observable<Provider>;
  error$ = new Subject<boolean>();
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private providersService: ProvidersService,
    private alertService: AlertModalService,
    private bsModalRef: BsModalRef
    ) { }

  ngOnInit() {
    this.provider$ = this.providersService.listOne(this.id)
        .pipe(
          take(1),
          catchError(error => {
            this.alertService.showAlertDanger(error);
            this.error$.next(true);
            return EMPTY;
          })
        );
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
