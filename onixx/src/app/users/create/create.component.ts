import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  preserveWhitespaces: true
})
export class CreateComponent implements OnInit {

  submitted = false;
  error: string;
  user: any;
  currentUser: User;

  constructor(
    private usersService: UsersService,
    private bsModalRef: BsModalRef,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (f.invalid) {
      return;
    }
    this.user = {
      name: f.form.value.name,
      email: f.form.value.email,
      role: f.form.value.role,
      password: f.form.value.password,
      PrefectureId: this.currentUser['PrefectureId']
    };
    this.usersService.create(this.user)
      .subscribe(
        success => {
          this.bsModalRef.hide();
          this.router.navigate(['/users']);
        },
        error => this.error = error
      );
  }

  onClose() {
    this.bsModalRef.hide();
    this.router.navigate(['/users']);
  }

}
