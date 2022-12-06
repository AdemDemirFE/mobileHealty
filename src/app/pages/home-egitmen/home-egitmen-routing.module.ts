import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEgitmenPage } from './home-egitmen.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEgitmenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEgitmenPageRoutingModule {}
