import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoadingComponent } from './loading/loading.component';
import { ParamErrorComponent } from './param-error/param-error.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { HomeComponent } from './home/home.component';
import { ModalModule, AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    LoadingComponent,
    ParamErrorComponent,
    ServerErrorComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    LoadingComponent,
    ParamErrorComponent,
    ServerErrorComponent
  ]
})
export class LayoutModule { }
