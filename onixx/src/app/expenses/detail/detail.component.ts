import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ExpensesService } from 'src/app/services/expenses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  expense: Expense;
  RESOURCE = environment.API;

  constructor(
    private expensesService: ExpensesService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      authorizedValue: [null]
    });
    const expenses$ = this.expensesService.listOne(this.id);
    expenses$.subscribe(data => {
      this.updateForm(data['expense']);
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(status) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let denied = {
      status: status,
      DeciderId: this.currentUser['id'],
      decisionDate: new Date(),
      authorizedValue: null,
      authorizationCode: null
    };
    let authorized = {};
    if(status === 'autorizada') {
      // const v = '' + this.form.value.authorizedValue;
      // let cyphers = v.split('.');
      // let value = '';
      // for (let c in cyphers) value += cyphers[c];
      authorized = {
      authorizedValue: parseFloat(this.form.value.authorizedValue.replace(',', '.')),
      status: status,
      DeciderId: this.currentUser['id'],
      decisionDate: new Date(),
      real: this.real(this.form.value.authorizedValue)
      }
    };
    let expense_ = (status === 'recusada') ? denied : authorized;
    this.expensesService.updateOne(this.id, expense_).subscribe(
      success => {
        if (success && status === 'recusada') {
          this.decline();
          this.router.navigate(['/expenses/denied']);
        } else if (success && status === 'autorizada') {
          this.decline();
          this.router.navigate(['/expenses/authorized']);
        } else {
          this.error = 'Erro ao atualizar despesa. Verifique os dados e tente novamente.';
        }
      },
      error => {
        this.error = `Erro ao atualizar despesa. Servidor retornou ${error}`
      }
    );
  }

  real(total) {
    const digits = (parseInt(total.length) - 3);
    let v = '';
    let partial = '';
    if (digits / 3 <= 1) { }
    let dot = 0;
    for (let i = digits - 1; i >= 0; i--) {
      if (dot < 3) {
        partial += total[i];
        dot++;
      } else {
        partial += '.' + total[i];
        dot = 1;
      }
    }
    partial = total.toString()[digits + 2] + total.toString()[digits + 1] + ',' + partial;
    for (let i = partial.length - 1; i >= 0; i--) v += partial[i];
    return v;
  }

  updateForm(expense) {
    this.expense = expense;
    this.form.patchValue({
      id: expense.id,
      authorizedValue: expense.requestedValue.replace('.', ',')
    });
  }

  onClose() {
    this.error = null;
    this.bsModalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.subscriptions.push(
      this.modalService.onHide.subscribe(
        (reason: string) => {
          if (reason) this.decline();
        }
      )
    )
  };

  decline(): void {
    this.error = null;
    this.modalRef.hide();
    this.bsModalRef.hide();
  }

}
