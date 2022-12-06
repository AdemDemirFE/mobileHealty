import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEgitmenPageRoutingModule } from './home-egitmen-routing.module';

import { HomeEgitmenPage } from './home-egitmen.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEgitmenPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [HomeEgitmenPage]
})
export class HomeEgitmenPageModule {}
