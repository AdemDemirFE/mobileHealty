import { Component, ViewChild } from '@angular/core';
import { MenuController, ModalController, NavController, ActionSheetController, LoadingController, Platform, IonInfiniteScroll } from '@ionic/angular';
import { C_Utils } from 'src/providers/utils';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { account, SecilenHasta } from 'src/app/pages';
import { NavigationExtras } from '@angular/router';
import { PasswordChangePage } from '../password-change/password-change.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {


  _account = account;
  yaklasanRandevu: any = moment(new Date(), 'YYYY-MM-DD HH:mm').format();
  yaklasanRandevuId : any = 0;
  days = "";
  hours = "";
  minutes = 0;
  secondsString = '';
  minutesString = '';
  hoursString = '';
  daysString = '';
  randevuVar : boolean = true;
  randevuAktif : boolean = true;
  kullanici: any = "";
  remainingTime = 0;
  countDownDate = 0;
  countDownDateSayac = 0;
  countData  = 0;
  changeLang = "";
  goProfile = "";
  myFamily = "";
  logout = "";
  changePass: string;
  actionSheet: any;
  moment = moment;
  segmentName = "gelecekRandevularSegment";
  gecmisRandevularList: any = [];
  gelecekRandevularList: any = [];
  gelecekRandevularSecilen: any = [];
  today: any = "";
  gecmisRandevuBadge: any = 0;
  gelecekRandevuBadge: any = 0;
  gecmisRandevu: boolean = false;  
  user = "";
  personel: boolean = false;
  secilenHasta = SecilenHasta;
  randevuDetay: any;
  
  constructor(
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private navCtrl: NavController,
    public c_Utils: C_Utils,
    public translateService: TranslateService,
    public actionSheetCtrl: ActionSheetController,
    public loadingController: LoadingController,
    public platform: Platform,
    public menu: MenuController,
    public http: HttpClient,
  ) {
    this.startTimer();
  }


  segmentChanged(ev: any) {
    if (ev.detail.value == "gecmisRandevularSegment") {
      this.segmentName = "gecmisRandevularSegment";
    } else if (ev.detail.value == "gelecekRandevularSegment") {
      this.segmentName = "gelecekRandevularSegment";
    }
  }
  
  startTimer() {  
  
    this.yaklasanRandevu = "2022-12-05T00:00:00"
    this.countDownDate = new Date(this.yaklasanRandevu).getTime();
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    this.remainingTime = Math.floor((distance % (1000 * 60 * 60 *60 * 24)) / 1000);
    if( this.randevuAktif != false || this.randevuVar != false) {
      this.remainingTime += 60;
    }
  
    let counter = setTimeout(() => {
      let time = this.getTimerClock(this.remainingTime);
      if ( this.remainingTime >= 0 && this.remainingTime <= 600 ) {
        this.startTimer();
        this.randevuVar = false;
        this.randevuAktif = true;
        this.remainingTime--;
        if( this.remainingTime == 0) {
          this.randevuAktif = false;
          this.randevuVar = false;
        }
      }
      else if (this.remainingTime > 0  && this.remainingTime > 600 ) {
        this.startTimer();
        this.randevuVar = true;
        this.remainingTime--;
        this.randevuAktif = false;
      }
      else {
        this.remainingTime--;
        this.startTimer();
        this.randevuVar = false;
        this.randevuAktif = false;
        clearInterval(counter);
        //this.randevuAktif = false;
     }
    }, 1000);
   }
   
   getTimerClock(getSeconds: number) {
    let secNum = parseInt(getSeconds.toString(), 10);
    this.remainingTime = secNum;
    let days = Math.floor((secNum / 3600) / 24);
    let hours = Math.floor(secNum / 3600 - (days * 24));
    let minutes = Math.floor((secNum - (days * 24 * 3600 + hours * 3600) ) / 60);
    let seconds = secNum - ( days * 24 * 3600 + hours * 3600 + minutes * 60);
    this.daysString = days.toString();
    this.hoursString = (hours < 10) ? "0" + hours : hours.toString();
    this.minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    this.secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();  
    return this.daysString + ':' + this.hoursString + ':' + this.minutesString + ':' + this.secondsString;
  }



  openActionSheet(ev?: any) {
    if (account.kimlikNo != 'U1000010677') {
      this.translateService.get("CHANGE_LANG").subscribe(value => {
        this.changeLang = value;
      });
      this.translateService.get("GO_PROFILE").subscribe(value => {
        this.goProfile = value;
      });
      this.translateService.get("LOGOUT").subscribe(value => {
        this.logout = value;
      });
      this.translateService.get("NEW_PASSWORD_SELECT").subscribe(value => {
        this.changePass = value;
      });
      this.translateService.get("MY_FAMILY").subscribe(value => {
        this.myFamily = value;
      });
      this.actionSheet = this.actionSheetCtrl.create({
        cssClass: 'action-sheets',
        buttons: [
          {
            text: this.goProfile,
            icon: 'person-outline',
            handler: () => {
              this.navCtrl.navigateForward("/my-profile");
            }
          },
          {
            text: this.changeLang,
            icon: 'globe-outline',
            handler: () => {
              this.changeLanguage();
            }
          },
       /*   {
            text: this.myFamily,
            icon: 'people-outline',
            handler: () => {
              this.navCtrl.navigateForward("/family");
            }
          },*/
          {
            text: this.changePass,
            icon: 'key-outline',
            handler: () => {
              this.openPasswordChangeModal({});
            }
          },
          {
            text: this.logout,
            icon: 'lock-closed-outline',
            handler: () => {
              this.navCtrl.navigateForward("/passcode");
            }
          },
        ]
      }).then(actionsheet => {
        actionsheet.present();
      });
    }
  }
  changeLanguage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: 1,
      }
    };
    this.navCtrl.navigateForward("/select-lang", navigationExtras);
  }


  async openPasswordChangeModal(data: any) {

    const modal = await this.modalCtrl.create({
      component: PasswordChangePage,
      //cssClass: 'genis-modal',
      cssClass: 'custom-modal2',
      backdropDismiss: true,
      componentProps: {
        'data': data
      }
    });
    await modal.present();
    modal.onDidDismiss().then(result => {
      this.navCtrl.navigateRoot("/tabs/tabs/tab1");
    })
  }

}