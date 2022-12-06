import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOgrenciFilterPage } from './modal-ogrenci-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOgrenciFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOgrenciFilterPageRoutingModule {}
