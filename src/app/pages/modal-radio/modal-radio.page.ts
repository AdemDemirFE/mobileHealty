import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { C_Utils } from 'src/providers/utils';

@Component({
  selector: 'app-modal-radio',
  templateUrl: './modal-radio.page.html',
  styleUrls: ['./modal-radio.page.scss'],
})
export class ModalRadioPage implements OnInit {

  pageTitle: String = '';
  items: any[] = [];
  itemsTmp: any[] = [];
  selectVal: any = null;

  valField: string = 'val';
  textField: string = 'desc';


  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public c_utils: C_Utils,
    public activatedRoute: ActivatedRoute,
    public translateService: TranslateService,
    public loadingController: LoadingController
  ) {

    this.pageTitle = this.navParams.get('pageTitle');
    let data: any[] = this.navParams.get('data');
    this.textField = this.navParams.get('textField');
    this.valField = this.navParams.get('valField');
    this.selectVal = this.navParams.get('selectVal');
    if (this.selectVal == undefined) {
      this.selectVal = null;
    }

    if (data != undefined) {
      data.forEach(element => {
        this.items.push(element);
        this.itemsTmp.push(element);
      });
      //this.itemsTmp = this.itemsTmp.sort(this.c_utils.sortByProperty(this.textField));
    }

  }

  ngOnInit() {
  }



  filterItems(ev: any) {
    let searchTxt
    try {
      searchTxt = ev.target.value
        .replace("İ", "I").replace("ı", "i")
        .replace("ö", "o").replace("Ö", "O")
        .replace("ş", "s").replace("Ş", "S")
        .replace("ç", "c").replace("Ç", "C")
        .replace("ü", "u").replace("Ü", "U")
        .replace("ğ", "g").replace("Ğ", "g");
    } catch (error) {
      searchTxt = '';
    }

    this.itemsTmp = this.items.filter((location2) => {
      return ((location2[this.textField]).toLowerCase().indexOf(searchTxt.toLowerCase()) > -1);
    }).sort(this.c_utils.sortByProperty(this.textField));

  }


  /**Eski versiyon
  findSelect(searchVal?: any) {
    if (this.selectVal != null) {
      return this.items.filter((location2) => {
        return ((location2[this.valField]).toString().toLowerCase().indexOf(searchVal.toString().toLowerCase()) > -1);
      });
    } else
      return [];
  }
  */

  findSelect(searchVal?: any) {
    if (this.selectVal != null) {
      return this.items.filter((location2) => {
        return ((location2[this.valField]).toString().toLowerCase() === searchVal.toString().toLowerCase());
      });
    } else
      return [];
  }



  async Save() {
    if (this.findSelect(this.selectVal).length > 0) {
      //this.viewCtrl.dismiss(this.findSelect(this.selectVal)[0]);
      let selectVal = this.findSelect(this.selectVal);
      await this.modalCtrl.dismiss(selectVal);
    } else {
      this.translateService.get(['GENEL_MESAJLAR']).subscribe(async values => {
        this.c_utils.getToast(values.GENEL_MESAJLAR.SECIM_BULUNAMADI, 'top', 3000, false, "toastClass");
      });
      //this.c_utils.GetToast('Lütfen Seçim Kayıdı Bulunamadı', 'middle', 2000, false);
    }



  }

  async Close() {
    await this.modalCtrl.dismiss(null);
  }


}
