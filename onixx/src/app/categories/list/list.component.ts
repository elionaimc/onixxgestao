import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AlertModalService } from './../../services/alert-modal.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { catchError } from 'rxjs/operators';
import { CreateComponent } from '../create/create.component';
import { faCheck, faPencilAlt, faPlus, faSync, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { EditComponent } from '../edit/edit.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  preserveWhitespaces: true,
  styles: [
    `
      :host >>> .tooltip-inner {
        background-color: #007BFF;
        color: #fff;
      }
      :host >>> .tooltip.left .tooltip-arrow:before,
      :host >>> .tooltip.left .tooltip-arrow {
        border-left-color: #007BFF;
      }
    `
  ]
})
export class ListComponent implements OnInit {

  categories$: Observable<Category[]>;
  error$ = new Subject<boolean>();
  emptyMessage = 'Não exitem categorias cadastradas!';
  modalRef: BsModalRef;
  faPencilAlt = faPencilAlt;
  faCheck = faCheck;
  faPlus = faPlus;
  faSync = faSync;
  faEyeSlash = faEyeSlash;
  inactives = false;

  modalOptions = {
    class: 'modal-lg'
  }

  constructor(
    private categoriesService: CategoriesService,
    private alertService: AlertModalService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.onRefresh();
    this.modalService.onHide.subscribe(() => this.onRefresh());
  }

  onRefresh() {
    this.categories$ = this.categoriesService.listAll()
      .pipe(
        catchError(error => {
          this.alertService.showAlertDanger(error);
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  decline(): void {
    this.modalRef.hide();
  }

  create() {
    this.modalService.show(CreateComponent, this.modalOptions);
  }

  edit(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(EditComponent, this.modalOptions);
  }

  detail(id) {
    this.modalOptions['initialState'] = { id: id };
    this.modalService.show(DetailComponent, this.modalOptions);
  }

  changeState(id, isActive) {
    this.categoriesService.edit({
      id: id,
      isActive: !isActive
    }).subscribe(
      success => this.onRefresh(),
      error => this.alertService.showAlertDanger(`Erro ao editar categoria. Servidor retornou ${error}`)
    );
    this.modalRef.hide();
  }

}
