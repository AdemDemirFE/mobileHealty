import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-detay',
  templateUrl: './modal-detay.page.html',
  styleUrls: ['./modal-detay.page.scss'],
})
export class ModalDetayPage implements OnInit {
  detayFields:any;
  rowData:any;
  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
  ) {

  }

  ngOnInit() {
        /**
     * Örnek  data
     * value label karşılık gelece data
     * translate dil dosyasında datayı anlamlı kılacak labek text
     */
    /*let detayFields = [
      { value: row.hastaAdiSoyadi, translate: "TEKIKSONUC.ADISOYADI" },
      { value: row.istekZamani, translate: "TEKIKSONUC.ISTEKTARIHI" },
    ];*/

    if (this.navParams.get('DetayFields') != null && this.navParams.get('DetayFields') != undefined )
    this.detayFields = this.navParams.get('DetayFields');
  }


  async Close() {
    await this.modalCtrl.dismiss(null);
  }


}
