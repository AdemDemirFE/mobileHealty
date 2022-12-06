import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KullanimSozlesmesiPage } from './kullanim-sozlesmesi.page';

const routes: Routes = [
  {
    path: '',
    component: KullanimSozlesmesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KullanimSozlesmesiPageRoutingModule {}
