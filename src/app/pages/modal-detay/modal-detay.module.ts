import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetayPageRoutingModule } from './modal-detay-routing.module';

import { ModalDetayPage } from './modal-detay.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ModalDetayPageRoutingModule
  ],
  declarations: [ModalDetayPage]
})
export class ModalDetayPageModule {}
