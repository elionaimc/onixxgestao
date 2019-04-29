import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensesService } from '../../services/expenses.service';
import { Expense } from 'src/app/models/expense.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  preserveWhitespaces: true
})
export class DetailPage implements OnInit {
  authorizationForm: FormGroup;

  constructor(
    public activeRoute: ActivatedRoute,
    private expensesService: ExpensesService,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private helper: JwtHelperService,
    private storage: Storage,
  ) {
  }

  expense: Expense;
  id = this.activeRoute.snapshot.paramMap.get('expense');
  authorizationValue: number;

  ngOnInit() {
    const expenses$ = this.expensesService.listOne(this.id);
    expenses$.subscribe(data => {
      this.expense = data['expense'];
      this.authorizationForm = this.formBuilder.group({
        authorizationValue: ['']
      });
      this.updateForm(data['expense']);
    });
  }

  updateForm(expense) {
    console.log('valor puro: ', expense['requestedValue']);
    this.authorizationValue = parseFloat(expense['requestedValue']);
    console.log('valor parseado: ', parseFloat(expense['requestedValue']));
  }

  cancel() {
      const alert = this.alertController.create({
        header: 'Tem certeza que deseja recusar?',
        message: `(Despesa #${this.id})`,
        buttons: [
          {
            text: 'NÃO',
            handler: () => { }
          },
          {
            text: 'SIM',
            handler: () => { 
              this.storage.get('access_token').then(token => {
                if (token) {
                  let denied = {
                    status: 'recusada',
                    DeciderId: this.helper.decodeToken(token)['user_id'],
                    decisionDate: new Date(),
                    authorizedValue: null,
                    authorizationCode: null
                  };
                  this.expensesService.updateOne(this.id, denied).subscribe(
                    success => {
                      if (success['success'] === true) {
                        this.router.navigate(['/denied']);
                      }
                    },
                    error => {
                      this.alertController.create({
                        header: 'Ooops!',
                        message: `Não foi possível recusar a despesa #${this.id}. Tente novamente mais tarde!`,
                        buttons: [
                          {
                            text: 'OK',
                            handler: () => { }
                          }]
                      });
                      alert.then(alert => alert.present());
                    }
                  );
                }
              })
            }
          }
        ]
      });

      alert.then(alert => alert.present());
  }

  authorize() {
    const alert = this.alertController.create({
      header: 'Tem certeza que deseja autorizar?',
      message: `(Despesa #${this.id})`,
      buttons: [
        {
          text: 'NÃO',
          handler: () => { }
        },
        {
          text: 'SIM',
          handler: () => {
            this.storage.get('access_token').then(token => {
              if (token) {
                let denied = {
                  status: 'autorizada',
                  DeciderId: this.helper.decodeToken(token)['user_id'],
                  decisionDate: new Date(),
                  authorizedValue: this.authorizationForm.value.authorizationValue
                };
                this.expensesService.updateOne(this.id, denied).subscribe(
                  success => {
                    if (success['success'] === true) {
                      this.router.navigate(['/authorized']);
                    }
                  },
                  error => {
                    this.alertController.create({
                      header: 'Ooops!',
                      message: `Não foi possível autorizar a despesa #${this.id}. Tente novamente mais tarde!`,
                      buttons: [
                        {
                          text: 'OK',
                          handler: () => { }
                        }]
                    });
                    alert.then(alert => alert.present());
                  }
                );
              }
            })
          }
        }
      ]
    });
    alert.then(alert => alert.present());
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

}
