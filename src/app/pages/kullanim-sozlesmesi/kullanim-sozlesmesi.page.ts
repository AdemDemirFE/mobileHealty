import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Api } from 'src/providers/api/api';
import { ServiceList } from 'src/providers/service/serviceList';
import { C_Utils } from 'src/providers/utils';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { account } from 'src/app/pages';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-kullanim-sozlesmesi',
  templateUrl: './kullanim-sozlesmesi.page.html',
  styleUrls: ['./kullanim-sozlesmesi.page.scss'],
})
export class KullanimSozlesmesiPage implements OnInit {
  moment = moment;
  onayla = false;
  account = account;

  constructor(
    public loadingController: LoadingController,
    public c_Utils: C_Utils,
    public navCtrl: NavController,
    public modalController: ModalController,
    private translateService: TranslateService,
    public api: Api,
    public serviceList: ServiceList,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public translate: TranslateService,
    public navParams: NavParams,
  ) { 
   }
  ngOnInit() {
  }

 

   async kabulEt(){
    this.onayla = true;
    await this.modalController.dismiss(this.onayla);

  }

  async exitModal(){
    await this.modalController.dismiss(this.onayla);

  }

}
