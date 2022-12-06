import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRadioPageRoutingModule } from './modal-radio-routing.module';

import { ModalRadioPage } from './modal-radio.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ModalRadioPageRoutingModule
  ],
  declarations: [ModalRadioPage]
})
export class ModalRadioPageModule {}
