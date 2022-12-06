import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { Langs } from './lang';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.page.html',
  styleUrls: ['./select-lang.page.scss'],
})
export class SelectLangPage implements OnInit {

  languages = Langs;
  type = 0;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private translate: TranslateService,
    public menuCtrl: MenuController
  ) {
    this.route.queryParams.subscribe(params => {
      this.type = params["type"];

    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  backButtonTapped() {
    if (this.type == 1) {
      this.navCtrl.navigateBack("/tabs/tabs/tab1")
    }
  }

  changeLanguage(code: any) {

    this.translate.setDefaultLang(code);
    this.translate.use(code);
    localStorage.setItem('selectDil', code);
    if (this.type == 1) {
      this.navCtrl.navigateBack("/tabs/tabs/tab1")
    } else {
      this.navCtrl.navigateForward("/login");
    }
  }

}
