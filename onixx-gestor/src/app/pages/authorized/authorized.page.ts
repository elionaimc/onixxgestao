import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Expense } from 'src/app/models/expense.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.page.html',
  styleUrls: ['./authorized.page.scss'],
})
export class AuthorizedPage implements OnInit {
  RESOURCE = environment.url;

  expenses$: Observable<Expense[]>;
  error$ = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private toastController: ToastController,
    private service: ExpensesService,
    private document: DocumentViewer,
    private transfer: FileTransfer,
    private file: File,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  logout() {
    this.storage.remove('access_token');

    const toast = this.toastController.create({
      message: 'Sessão encerrada com sucesso.',
      duration: 3000
    });
    toast.then(toast => toast.present());
    this.authService.logout();
  }

  onRefresh() {
    this.expenses$ = this.service.listAuthorized()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      );
  }

  downloadAndOpenPdf(file: string) {
    const options: DocumentViewerOptions = {
      title: 'Autorização de despesa: ' + file
    };

    let path = null;
    const f = `${this.RESOURCE}/download/${file}.pdf`;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }
    const transfer = this.transfer.create();
    transfer.download(f, `${path}${file}.pdf`).then( entry => {
      const u = entry.toURL();
      this.document.viewDocument(u, 'application/pdf', options);
    });
  }

}
