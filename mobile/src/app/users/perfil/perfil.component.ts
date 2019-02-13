import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, EMPTY, Observable, Subject } from 'rxjs';
import { User } from '../user/user.model';
import { UsersService } from '../users.service';
import { catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  preserveWhitespaces: true
})
export class PerfilComponent implements OnInit {

  splash = true;
  id: number;
  user$: Observable<User>;
  error$ = new Subject<boolean>();
  control: Subscription;

  constructor(private router: ActivatedRoute, private service: UsersService) { }

  ngOnInit() {
    this.control = this.router.params.subscribe(params => {
      this.id = params['id'];
      this.user$ = this.service.listOne(this.id)
        .pipe(
          delay(1000),
          catchError(error => {
            this.error$.next(true);
            return EMPTY;
          })
        );
    });
  }

  ngOnDestroy(): void {
    this.control.unsubscribe();
  }

}
