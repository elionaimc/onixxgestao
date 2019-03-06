import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ParamErrorComponent } from './param-error/param-error.component';
import { ServerErrorComponent } from './server-error/server-error.component';

@NgModule({
  declarations: [LoadingComponent, ParamErrorComponent, ServerErrorComponent],
  imports: [
    CommonModule
  ]
})
export class LoadingModule { }
