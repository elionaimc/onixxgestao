import { Component, OnInit, TemplateRef, EventEmitter } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { UploadOutput, UploadInput, UploaderOptions, UploadFile, humanizeBytes } from 'ngx-uploader';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  preserveWhitespaces: true
})
export class EditComponent implements OnInit {

  submitted = false;
  validFile = false;
  form: FormGroup;
  error: string;
  currentUser: User;
  id: number;
  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor(
    private expensesService: ExpensesService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) {
    this.options = { concurrency: 1, maxUploads: 1 };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      description: [null],
      requestedValue: [null],
      file: [null]
    });
    const expense$ = this.expensesService.listOne(this.id);
    expense$.subscribe(data => {
      this.updateForm(data['expense']);
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let expense = {
      id: this.form.value.id,
      description: this.form.value.description,
      requestedValue: parseFloat(this.form.value.requestedValue.replace('.', '').replace(',', '.'))
    };
    if (this.validFile && this.form.value.file != null) {
      let ext = (this.form.value.file) ? this.form.value.file.split('\\').pop() : null;
      expense['file'] = (ext) ? new Date().valueOf() + '.' + ext.split('.').pop() : null;
    }
    this.expensesService.edit(expense).subscribe(
      success => {
        if (success['success']) {
          if (expense['file'] && this.validFile) this.startUpload(expense['file']);
          this.decline();
        }
        else { this.error = 'Erro ao editar despesa. Verifique os dados e tente novamente.' }
      },
      error => this.error = `Erro ao editar despesa. Servidor retornou ${error}`
    );
  }

  updateForm(expense) {
    this.form.patchValue({
      id: expense.id,
      description: expense.description,
      requestedValue: parseFloat(expense.requestedValue),
      file: expense.file
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

  onUploadOutput(output: UploadOutput): void {
    if (output.file) {
      if (output.file.size > 2248221) {
        this.validFile = false;
        this.error = 'Arquivo inválido. Tamanho máximo permitido: 2MB.';
      } else {
        switch (output.file.type) {
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
    }
  }

  startUpload(expense): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://localhost:1982/upload',
      method: 'POST',
      data: expense
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
