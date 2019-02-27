import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutfittersRoutingModule } from './outfitters-routing.module';
import { OutfitterComponent } from './outfitter/outfitter.component';

@NgModule({
  declarations: [OutfitterComponent],
  imports: [
    CommonModule,
    OutfittersRoutingModule
  ]
})
export class OutfittersModule { }
