import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OgrenciMenuPageRoutingModule } from './ogrenci-menu-routing.module';

import { OgrenciMenuPage } from './ogrenci-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OgrenciMenuPageRoutingModule
  ],
  declarations: [OgrenciMenuPage]
})
export class OgrenciMenuPageModule {}
