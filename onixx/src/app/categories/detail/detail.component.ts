import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  defaultMessage: 'Nenhuma categoria encontrada com o identificador fornecido';
  category$: Observable<Category>;
  error$ = new Subject<boolean>();
  id: number;

  constructor(
    private categoriesService: CategoriesService,
    private alertService: AlertModalService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.category$ = this.categoriesService.listOne(this.id)
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
