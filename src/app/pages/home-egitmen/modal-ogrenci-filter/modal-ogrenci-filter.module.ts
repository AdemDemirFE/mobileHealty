import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOgrenciFilterPageRoutingModule } from './modal-ogrenci-filter-routing.module';

import { ModalOgrenciFilterPage } from './modal-ogrenci-filter.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOgrenciFilterPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ModalOgrenciFilterPage]
})
export class ModalOgrenciFilterPageModule {}
