import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  modalRef: BsModalRef;


  constructor(
    private categoriesService: CategoriesService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private fb: FormBuilder
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
        if (success['success']) this.confirm();
        else { this.error = 'Erro ao editar. Verifique os dados e tente novamente.' }
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
