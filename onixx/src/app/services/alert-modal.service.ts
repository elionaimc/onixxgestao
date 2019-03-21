import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  constructor(private modalService: BsModalService) { }

  showAlertDanger(message: string) {
    if (message === 'Unknown Error') message = 'ERRO: O servidor não está respondendo corretamente!';
    this.showAlert(message, 'danger');
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, 'success');
  }

  showAlertWarning(message: string) {
    this.showAlert(message, 'warning');
  }

  showAlertInfo(message: string) {
    this.showAlert(message, 'info');
  }

  showAlertPrimary(message: string) {
    this.showAlert(message, 'primary');
  }

  showAlertSecondary(message: string) {
    this.showAlert(message, 'secondary');
  }

  showAlertLight(message: string) {
    this.showAlert(message, 'light');
  }

  showAlertDark(message: string) {
    this.showAlert(message, 'dark');
  }

  private showAlert(message: string, type: string) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }
}
