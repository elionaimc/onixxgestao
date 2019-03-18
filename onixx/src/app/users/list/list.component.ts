import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Subject, Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  preserveWhitespaces: true
})
export class ListComponent implements OnInit {

  splash = true;
  users$: Observable<User[]>;
  error$ = new Subject<boolean>();

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.users$ = this.service.listAll()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
