import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRadioPage } from './modal-radio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRadioPageRoutingModule {}
