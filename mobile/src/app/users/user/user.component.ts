import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from './user.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  preserveWhitespaces: true
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;
  error$ = new Subject<boolean>();

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.users$ = this.service.listAll()
    .pipe(
      delay(2000),
      catchError(error => {
        this.error$.next(true);
        return EMPTY;
      })
    );
  }

}
