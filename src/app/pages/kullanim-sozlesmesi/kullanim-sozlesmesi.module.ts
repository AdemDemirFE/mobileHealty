import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KullanimSozlesmesiPageRoutingModule } from './kullanim-sozlesmesi-routing.module';

import { KullanimSozlesmesiPage } from './kullanim-sozlesmesi.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    KullanimSozlesmesiPageRoutingModule
  ],
  declarations: [KullanimSozlesmesiPage]
})
export class KullanimSozlesmesiPageModule {}
