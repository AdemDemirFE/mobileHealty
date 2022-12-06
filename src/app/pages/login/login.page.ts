import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { C_Utils } from '../../../providers/utils';
import { TranslateService } from '@ngx-translate/core';
import { account, Kurumlar, personelType, appVersion, GeneralSettings, appCode } from '../../pages';
import { Api } from 'src/providers/api/api';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder } from '@angular/forms';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { KullanimSozlesmesiPage } from '../kullanim-sozlesmesi/kullanim-sozlesmesi.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  appVersion = appVersion;
  account = account;
  identificationNumber = "12345678910";
  identificationPass = "";
  loginBtnName = "";
  segmentName = "ogrenci"
  username = "adem.demir";// "mesut.demir";
  password = "1234"; //"1";
  kurumlar_ = Kurumlar;
  personelType_ = personelType;
  qrCodeScreen:boolean=false;
  formGroup: any;
  onayla = false;
  toggleOnayla = false;
  formGrupId = "";
  generalSettings=GeneralSettings;
  appKodu=appCode; 
  kodu: any = ""; 


  constructor(
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public alertController: AlertController,
    public c_Utils: C_Utils,
    public translateService: TranslateService,
    public loadingController: LoadingController,
    public api: Api,
    public myApp: AppComponent,
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  async kullanimSozlesmesi() {
    //async kullanimSozlesmesi(data) {
    const modal = await this.modalCtrl.create({
      component: KullanimSozlesmesiPage,
      cssClass: 'genis-modal',
      componentProps: { 
      }
    });
    await modal.present();
    modal.onDidDismiss().then((data) => {
      const onayla = data.data; 
       
      if(onayla == true) {
        this.toggleOnayla = true; 
      }
      else {
        this.toggleOnayla = false;
        this.sozlesmeAlert();
      }
      account.formGrupId = this.formGrupId;
      this.navCtrl.navigateRoot("/login");
    })
  }
  async sozlesmeAlert() {
		const alert = await this.alertController.create({
			header: 'Lütfen Kullanım Sözleşmesini Onaylayın.',
			buttons: [
				{
					text: 'Vazgeç',
					role: 'cancel',
					cssClass: 'secondary',
				},
				{
					text: 'Tamam',
					handler: data => {
						this.kullanimSozlesmesi();
					},
				},
			],
		});

		await alert.present();
	}
  ngOnInit() {
  }
  segmentChanged(ev: any) {
    if (ev.detail.value == "ogrenci") {
      this.segmentName = "ogrenci"
    } else {
      this.segmentName = "egitmen"
    }

  }

  goEgitmenHome() {
    this.navCtrl.navigateForward('/home-egitmen');
  }
  
  goHome() {
    //this.navCtrl.navigateForward("/tabs/tabs/tab1");
    //this.navCtrl.navigateBack('/tabs/tab1');
    this.router.navigateByUrl('/tabs/tabs/tab1');

  }
  changeLangue(){
    this.navCtrl.navigateForward("/select-lang");

  }
  
}