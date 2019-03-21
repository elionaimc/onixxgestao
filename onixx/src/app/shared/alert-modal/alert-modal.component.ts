import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html'
})
export class AlertModalComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    this.bsModalRef.hide();
  }

}
