import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { catchError,  take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  defaultMessage: 'Nenhum usuário encontrado com o identificador fornecido';
  users$: Observable<User>;
  error$ = new Subject<boolean>();
  id: number;

  constructor(
    private usersService: UsersService,
    private alertService: AlertModalService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.users$ = this.usersService.listOne(this.id)
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
