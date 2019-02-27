import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefecturesRoutingModule } from './prefectures-routing.module';
import { PrefectureComponent } from './prefecture/prefecture.component';

@NgModule({
  declarations: [PrefectureComponent],
  imports: [
    CommonModule,
    PrefecturesRoutingModule
  ]
})
export class PrefecturesModule { }
