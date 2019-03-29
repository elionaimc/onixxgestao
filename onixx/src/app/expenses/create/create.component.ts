import { Component, OnInit, OnDestroy, TemplateRef, ViewChild, HostListener, EventEmitter } from '@angular/core';
import { Observable, Subject, Subscription, EMPTY } from 'rxjs';
import { Provider } from 'src/app/models/provider.model';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from 'src/app/services/expenses.service';
import { catchError, tap, take } from 'rxjs/operators';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef, BsDatepickerDirective } from 'ngx-bootstrap';
import { User } from 'src/app/models/user.model';
import { ProvidersService } from 'src/app/services/providers.service';
import { AlertModalService } from 'src/app/services/alert-modal.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-detail',
  templateUrl: './create.component.html',
  preserveWhitespaces: true
})
export class CreateComponent implements OnInit {

  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

  submitted = false;
  form: FormGroup;
  error: string;
  currentUser: User;
  minDate = new Date();
  id: number;
  ncat: number;
  modalRef: BsModalRef;
  error$ = new Subject<boolean>();
  providers: any[] = [];
  providers$: Observable<Provider[]>;
  categories: any[] = [];
  categories$: Observable<Category[]>;
  subscriptions: Subscription[] = [];
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  validFile = false;

  constructor(
    private providersService: ProvidersService,
    private categoriesService: CategoriesService,
    private alertService: AlertModalService,
    private route: ActivatedRoute,
    private expensesService: ExpensesService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) {
    this.options = { concurrency: 1, maxUploads: 3 };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
   }

  ngOnInit() {
    this.providers$ = this.providersService.listAll()
    .pipe(
      take(1),
      catchError(error => {
        this.alertService.showAlertDanger(error);
        this.error$.next(true);
        return EMPTY;
      })
    );
    this.providers$.subscribe(
      providers => {
        for (let p in providers['providers']) {
          if (providers['providers'][p]['isActive']) {
            this.providers.push({
              id: providers['providers'][p]['id'],
              socialName: providers['providers'][p]['socialName']
            });
          }
        }
      }
    );
    this.categories$ = this.categoriesService.listAll()
    .pipe(
      take(1),
      catchError(error => {
        this.alertService.showAlertDanger(error);
        this.error$.next(true);
        return EMPTY;
      })
    );
    this.categories$.subscribe(
    categories => {
      this.ncat = 0;
      for (let c in categories['categories']) {
        this.ncat++;
        if (categories['categories'][c]['isActive']) {
          this.categories.push({
            id: categories['categories'][c]['id'],
            description: categories['categories'][c]['description']
          });
        }
      }
    });
    this.form = this.fb.group({
      description: [null],
      requestedValue: [null],
      dueDate: [null],
      provider: [null],
      ProviderId: [null],
      category: [null],
      CategoryId: [null],
      UserId: [null],
      PrefectureId: [null],
      file: [null]
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let expense = this.form.value;

    for (let cat of this.categories) {
      if (cat['description'] == [this.form.value.category]) {
        expense.CategoryId = cat['id'];
      }
    }
    for (let provider of this.providers) {
      if (provider['socialName'] == [this.form.value.provider]) {
        expense.ProviderId = provider['id'];
      }
    }
    expense.PrefectureId = this.currentUser['PrefectureId'];
    expense.UserId = this.currentUser['id'];
    expense.file = (this.form.value.file) ? this.form.value.file.split('\\').pop() : null;
    
    this.startUpload(expense);
    this.expensesService.create(expense).subscribe(
      success => {
        if (success['success']) {
          this.decline();
        }
        else { this.error = 'Erro ao cadastrar despesa. Verifique os dados e tente novamente.' }
      },
      error => this.error = `Erro ao cadastrar despesa. Servidor retornou ${error}`
    );
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

  onUploadOutput(output: UploadOutput): void {
    if (output.file && output.file.type !== 'text/plain') {
      console.log(output.file.type);
      switch(output.file.type) {
        case 'application/pdf': ;
        case 'image/png': ;
        case 'image/jpeg': ;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 
        this.validFile = true;
        this.error = '';
        break;
        default: {
          this.validFile = false;
          this.error = 'Selecione um arquivo .png, .jpg, .pdf ou .docx';
          break;
        }
      }
    }
    // switch (output.type) {
    //   case 'allAddedToQueue':
    //     // uncomment this if you want to auto upload files when added
    //     // const event: UploadInput = {
    //     //   type: 'uploadAll',
    //     //   url: '/upload',
    //     //   method: 'POST',
    //     //   data: { foo: 'bar' }
    //     // };
    //     // this.uploadInput.emit(event);
    //     break;
    //   case 'addedToQueue':
    //     if (typeof output.file !== 'undefined') {
    //       this.files.push(output.file);
    //     }
    //     break;
    //   case 'uploading':
    //     if (typeof output.file !== 'undefined') {
    //       // update current data in files array for uploading file
    //       const index = this.files.findIndex((file) => typeof output.file !== 'undefined' && file.id === output.file.id);
    //       this.files[index] = output.file;
    //     }
    //     break;
    //   case 'removed':
    //     // remove file from array when removed
    //     this.files = this.files.filter((file: UploadFile) => file !== output.file);
    //     break;
    //   case 'dragOver':
    //     this.dragOver = true;
    //     break;
    //   case 'dragOut':
    //   case 'drop':
    //     this.dragOver = false;
    //     break;
    //   case 'done':
    //     // The file is downloaded
    //     break;
    // }
  }

  startUpload(expense): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://localhost:1982/upload',
      method: 'POST',
      data: { expense: expense }
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }
}