import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  preserveWhitespaces: true
})
export class EditComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  error: string;
  currentUser: User;
  id: number;


  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      description: [null]
    });
    const category$ = this.categoriesService.listOne(this.id);
    category$.subscribe(data => this.updateForm(data['category']));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.categoriesService.edit({
      id: this.form.value.id,
      description: this.form.value.description
    }).subscribe(
      success => {
        this.bsModalRef.hide();
      },
      error => this.error = `Erro ao editar categoria. Servidor retornou ${error}`
    );
  }

  updateForm(category) {
    this.form.patchValue({
      id: category.id,
      description: category.description
    });
  }

  onCancel() {
    this.form.reset();
    this.bsModalRef.hide();
  }

}
