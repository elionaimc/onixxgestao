import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutfitterComponent } from './outfitter/outfitter.component';

const routes: Routes = [
  { path: '', component: OutfitterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutfittersRoutingModule { }
