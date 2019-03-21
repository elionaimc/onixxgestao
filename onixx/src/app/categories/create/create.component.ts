import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
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
  category: Category;
  currentUser: User;

  constructor(
    private categoriesService: CategoriesService,
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
    this.category = {
      description: f.form.value.description,
      PrefectureId: this.currentUser['PrefectureId'],
      UserId: this.currentUser['id']
    };
    this.categoriesService.create(this.category)
      .subscribe(
        success => {
          this.bsModalRef.hide();
          this.router.navigate(['/categories']);
        },
        error => this.error = error
      );
  }

  onClose() {
    this.bsModalRef.hide();
    this.router.navigate(['/categories']);
  }

}
