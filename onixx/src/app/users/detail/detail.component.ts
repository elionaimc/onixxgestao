import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  defaultMessage: 'Nenhum usuário encontrado com o identificador fornecido';
  users$: Observable<User>;
  error$ = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.users$ = this.usersService.listOne(id)
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
                this.router.navigate(['/users']);
              }
              return EMPTY;
            }
          })
        );
    });
  }

}
