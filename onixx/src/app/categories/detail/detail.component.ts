import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  defaultMessage: 'Nenhuma categoria encontrada com o identificador fornecido';
  category$: Observable<Category>;
  error$ = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.category$ = this.categoriesService.listOne(id)
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
                this.router.navigate(['/categories']);
              }
              return EMPTY;
            }
          })
        );
    });
  }

}
