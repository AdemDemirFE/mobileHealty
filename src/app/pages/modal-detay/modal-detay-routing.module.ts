import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDetayPage } from './modal-detay.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDetayPageRoutingModule {}
