import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { C_Utils } from 'src/providers/utils';
import { Birimler, SecilenBirim, HastaListFilterData } from 'src/app/pages';
import * as moment from "moment";
import { Api } from 'src/providers/api/api';
import { ServiceList } from 'src/providers/service/serviceList';

@Component({
  selector: 'app-modal-ogrenci-filter',
  templateUrl: './modal-ogrenci-filter.page.html',
  styleUrls: ['./modal-ogrenci-filter.page.scss'],
})
export class ModalOgrenciFilterPage implements OnInit {

  filterData: any;
  startDate: any;
  endDate: any;
  personeller: any[] = [];
  birimler = Birimler;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public c_utils: C_Utils,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public api: Api,
    public serviceList: ServiceList,
    public translate: TranslateService,
    public c_Utils: C_Utils,
  ) {

    this.filterData = this.navParams.get('data');
 
    if(Birimler.length>0 && (this.filterData?.birim==undefined || this.filterData?.birim==null)){
      if(SecilenBirim.length>0)
      {
        this.filterData.birim=SecilenBirim[0];
      }else
      {
        this.filterData.birim=Birimler[0];
      }
    }
    this.startDate = moment(this.filterData.startDate, 'DD/MM/YYYY').toISOString();//moment(this.filterData.startDate, 'DD/MM/YYYY').format('DD/MM/YYYY');
    this.endDate = moment(this.filterData.endDate, 'DD/MM/YYYY').toISOString();//moment(this.filterData.endDate, 'DD/MM/YYYY').format( 'DD/MM/YYYY');
 
  }

  ngOnInit() {
    //this.getBirimPersonelList();
  }



  getBirimPersonelList() {
 
  }

  async filter() {
    this.filterData.startDate = moment(this.startDate).format('DD/MM/YYYY');
    this.filterData.endDate = moment(this.endDate).format('DD/MM/YYYY'); 
    SecilenBirim.splice(0,SecilenBirim.length);
    if(this.filterData?.birim){
      SecilenBirim.push(this.filterData?.birim);
    }
    if(this.filterData)
    HastaListFilterData[0] = this.filterData;
    await this.modalCtrl.dismiss(this.filterData);
  }

 

  async Close() {
    await this.modalCtrl.dismiss(null);
  }


}
