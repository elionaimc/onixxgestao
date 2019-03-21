import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-param-error',
  templateUrl: './param-error.component.html'
})
export class ParamErrorComponent implements OnInit {

  @Input() type = '';
  @Input() message = '';

  constructor() { }

  ngOnInit() {
  }

}
