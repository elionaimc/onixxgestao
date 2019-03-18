import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject, Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit, OnDestroy {

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
