import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OgrenciMenuPage } from './ogrenci-menu.page';

const routes: Routes = [
  {
    path: '',
    component: OgrenciMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OgrenciMenuPageRoutingModule {}
