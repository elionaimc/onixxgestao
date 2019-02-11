import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  preserveWhitespaces: true
})
export class UserComponent implements OnInit {

  // users: User[];

  users$: Observable<User[]>;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.users$ = this.service.list(); // .subscribe( dados => { this.users = dados } );
  }

  onRefresh() {}

}
