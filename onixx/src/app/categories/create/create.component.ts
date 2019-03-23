import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { User } from 'src/app/models/user.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

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
  modalRef: BsModalRef;

  constructor(
    private categoriesService: CategoriesService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
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
          if (success['success']) this.confirm();
          else { this.error = 'Erro ao criar uma nova categoria. Verifique os dados e tente novamente.' }
        },
        error => {
          this.error = 'Não é possível cadastrar uma categoria que já existe.';
        }
      );
  }

  onClose() {
    this.bsModalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirm(): void {
    this.modalRef.hide();
    this.bsModalRef.hide();
  }

  decline(): void {
    this.error = null;
    this.modalRef.hide();
  }
}