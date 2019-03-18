import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConciergeRoutingModule } from './concierge-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ConciergeRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    FontAwesomeModule
  ]
})
export class ConciergeModule { }
