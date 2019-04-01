import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable, Subject, EMPTY } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { faSync, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CreateComponent } from '../create/create.component';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  preserveWhitespaces: true
})
export class AuthorizedComponent implements OnInit {

  error = null;
  currentUser: User;
  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();
  modalRef: BsModalRef;
  RESOURCE = environment.API;
  faSync = faSync;
  faPlus = faPlus;
  faTimes = faTimes;
  id:null;

  modalOptions = {
    class: 'modal-lg',
    backdropClick: false
  }

  constructor(
    private expensesService: ExpensesService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onRefresh();
    this.modalService.onHide.subscribe(() => this.onRefresh());
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  openModal(template: TemplateRef<any>, id) {
    this.id = id;
    this.modalRef = this.modalService.show(template, this.modalOptions);
  }

  onRefresh() {
    this.expenses$ = this.expensesService.listAuthorized()
    .pipe(
      catchError(error => {
        this.error$.next(true);
        return EMPTY;
      })
    );
  }

  decline(): void {
    this.modalRef.hide();
  }

  create() {
    this.modalService.show(CreateComponent, this.modalOptions);
  }

  deny(id) {
    let expense = {
      status: 'recusada',
      DeciderId: this.currentUser['id'],
      decisionDate: new Date(),
      authorizationCode: null
    };
    this.expensesService.updateOne(id, expense).subscribe(
      success => {
        if (success) {
          this.decline();
          this.router.navigate(['/expenses/denied']);
        } else {
          this.error = 'Erro ao desautorizar despesa. Verifique os dados e tente novamente.';
        }
      },
      error => {
        console.log('erro: ', error);
        this.error = `Erro ao desautorizar despesa. Servidor retornou ${error}`
      }
    );
  }

}
