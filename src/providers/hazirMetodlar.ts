import { Injectable } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { SecilenBirim } from "src/app/pages";
import { Api } from "./api/api";
import { ServiceList } from "./service/serviceList";
import { C_Utils } from "./utils";


@Injectable()

export class C_HazirMetodlar {
  constructor(
    public c_Utils: C_Utils,
    public loadingCtrl: LoadingController,
    public api: Api,
    public serviceList: ServiceList,
    private alertCtrl: AlertController
  ) { }

  /**
   * lookup listesinde isme göre value sını getirir
   * @param filtreArr
   * @param filtreText
   */
  lookUpListFilterGetValue(filtreArr: any, filtreText: any) {
    if (
      filtreArr.length > 0 &&
      filtreText != "" &&
      filtreText != undefined &&
      filtreText != null
    ) {
      return filtreArr.filter((data) => {
        if (data.dsc == filtreText) {
          return data;
        }
      })[0].value;
    } else {
      return "";
    }
  }

  /**
   *lookupları çeker
   * @param lookupId
   * @param callback
   */
  getLookup(lookupId: any, callback: any) {
    let dt = this.api.get2(this.serviceList.IC_GetLookup.path, {
      lookupId: lookupId,
    });

    dt.subscribe((response: any) => {
      let data = response;
      if (data.status == 200 || data.status == 201) {
        if (data.body != null) {
          let jsonData = data.body;
          callback(jsonData);
        }
      }
    });
  }


  /**
   * lookup listesinde value sını göre ismi getirir
   * @param filtreArr
   * @param value
   */
  lookUpListFilterGetDsc(filtreArr: any, value: any) {
    if (
      filtreArr.length == 0 ||
      value === "" ||
      value == undefined ||
      value == null
    ) {
      return "";
    } else {
      var data = filtreArr.filter((item) => {
        if (item.value == value) {
          return item;
        }
      });
      if (data.length > 0) {
        return data[0].dsc;
      }
    }
  }

  /**
      * Tanı Ekleme Modalında Tanı listesini çeker.
      * @param data  (start,limit,taniIds,yuksekRiskliTanilar,query)
    */
  async getSelectableTanilar(data: any, callback: any) {
    let loading = this.loadingCtrl.create({
      message: 'Lütfen Bekleyiniz...'
    });
    (await loading).present();
    let params = {
      start: data.start,
      limit: data.limit,
      taniIds: data.taniIds,
      yuksekRiskliTanilar: data.yuksekRiskliTanilar,
      query: data.query
    }
    let dt = this.api.get2(this.serviceList.IC_GetSelectableTanilar.path, params)
    dt.subscribe(async (response: any) => {
      let data = response;
      if (data.status == 200 || data.status == 201) {
        if (data.body != null) {
          if (data.body.data.length > 0) {
            let deg = data.body;
            callback(deg);
          }
        }
        (await loading).dismiss();
      }
    },
      async (error) => {
        console.log("getSelectableTanilar ERROR------->", JSON.stringify(error));
        (await loading).dismiss();
      });
  }


  /**
    * Mesleki maruziyet sayfasında meslek listesini getirir
    * @param data  (start,limit,seviye)
  */
 async loadMeslekler(data: any, callback: any) {
  let loading = this.loadingCtrl.create({
    message: 'Lütfen Bekleyiniz...'
  });
  (await loading).present();
  let dt = this.api.get2(this.serviceList.IC_LoadMeslekler.path,data);
  dt.subscribe(async (response: any) => {
    let data = response;
    if (data.status == 200 || data.status == 201) {
      if (data.body != null) {
        if (data.body.data.length > 0) {
          let deg = data.body;
          callback(deg);
        }
      }
      (await loading).dismiss();
    }
  },
    async (error) => {
      console.log("loadMeslekler ERROR------->", JSON.stringify(error));
      (await loading).dismiss();
    });
}


}
