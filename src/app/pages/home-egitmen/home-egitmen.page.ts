import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Api } from 'src/providers/api/api';
import { ServiceList } from 'src/providers/service/serviceList';
import { C_Utils } from 'src/providers/utils';
import { AppComponent } from '../../app.component';
import { account, Birimler, GeneralSettings, HastaListFilterData, kullaniciYetkileri, menuAcikHasta, Personeller, SecilenBirim, SecilenHasta } from '../../pages';
import { ModalOgrenciFilterPage } from './modal-ogrenci-filter/modal-ogrenci-filter.page';

@Component({
  selector: 'app-home-egitmen',
  templateUrl: './home-egitmen.page.html',
  styleUrls: ['./home-egitmen.page.scss'],
})
export class HomeEgitmenPage implements OnInit {

 
  hastaListTmp;
  hastaListFilterData: any = {};
  menuAcikHasta = menuAcikHasta;
  searchTxt: any = "";
  constructor(
    public menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    public c_Utils: C_Utils, 
    public modalController: ModalController,
    public loadingController: LoadingController,
    public api: Api,
    public serviceList: ServiceList,
    public myApp: AppComponent,
    private router: Router,
    public http: HttpClient,
    private navCtrl: NavController,
  ) {

    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

  async closeMenu() {
    await this.menuCtrl.close();
  }

  openHastafilter() {

    this.translate.get(['MODALFORM']).subscribe(async values => {

      const modalfilter = await this.modalController.create({
        component: ModalOgrenciFilterPage,
        backdropDismiss: false,
        cssClass: 'modalClass',
        componentProps: { data: this.hastaListFilterData }
      });

      await modalfilter.present();
      modalfilter.onDidDismiss().then(result => {
        if (result.data != null) {
          this.hastaListFilterData = result.data;
          // this.getPoliklinikGridData();
          //this.hastaListele();
        }
      });
    });
  }

}
