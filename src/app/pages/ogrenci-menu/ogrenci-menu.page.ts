import { Component, ViewChild } from '@angular/core';
import { MenuController, ModalController, NavController, ActionSheetController, LoadingController, Platform, IonInfiniteScroll } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { C_Utils } from 'src/providers/utils';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ogrenci-menu',
  templateUrl: './ogrenci-menu.page.html',
  styleUrls: ['./ogrenci-menu.page.scss'],
})
export class OgrenciMenuPage {

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1.1,
    autoplay: true,
    
  };
  constructor() { }

  ngOnInit() {
  }

}
