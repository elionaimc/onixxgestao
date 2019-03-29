import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  preserveWhitespaces: true
})
export class DetailComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  error: string;
  currentUser: User;
  id: number;
  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private expensesService: ExpensesService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      requestedValue: [null],
      authorizedValue: [null]
    });
    const expenses$ = this.expensesService.listOne(this.id);
    expenses$.subscribe(data => {
      this.updateForm(data['expense']);
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit() {
    console.log('Enviou form');
    // this.submitted = true;
    // if (this.form.invalid) {
    //   return;
    // }
    // this.expensesService.edit({
    //   id: this.form.value.id,
    //   socialName: this.form.value.socialName,
    //   cnpj: this.form.value.cnpj
    // }).subscribe(
    //   success => {
    //     if (success['success']) this.decline();
    //     else { this.error = 'Erro ao editar fornecedor. Verifique os dados e tente novamente.' }
    //   },
    //   error => this.error = `Erro ao editar fornecedor. Servidor retornou ${error}`
    // );
  }

  updateForm(expense) {
    this.form.patchValue({
      id: expense.id,
      requestedValue: parseFloat(expense.requestedValue)
    });
  }

  onClose() {
    this.error = null;
    this.bsModalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        if (reason) this.decline();
      }
      ))
  };

  decline(): void {
    this.error = null;
    this.modalRef.hide();
    this.bsModalRef.hide();
  }

}
