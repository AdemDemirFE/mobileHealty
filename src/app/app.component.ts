import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GeneralSettings } from './pages';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subjects;

  selectedLanguage:string;
  constructor(
    public translate: TranslateService,
    public router: Router
  ) {
    this.initTranslate();

  }
  initTranslate() {
    try {
      let dil = localStorage.getItem('selectDil');
      if (this.translate.currentLang != undefined) {
        if (this.translate.currentLang != dil) {
          if (dil == null) {
            dil = GeneralSettings.dil;
          }
          this.translate.use(dil);
          this.translate.setDefaultLang(dil);
        }
      } else {
        if (dil != null) {
          this.translate.use(dil)
          this.translate.setDefaultLang(dil);
        }
        else {
          this.translate.use(GeneralSettings.dil)
          this.translate.setDefaultLang(GeneralSettings.dil);
        }
      }
    } catch (error) {
      this.translate.use(GeneralSettings.dil)
      this.translate.setDefaultLang(GeneralSettings.dil);
    }
  }
  ngOnInit() {
    this.subjects = [
      {
        name:'Anasayfa',
        url:'/tabs/home'
      },
      {
        name:'İletişim',
        url:'/tabs/iletisim'
      },
      {
        name:'Giriş Yap',
        url:'/login'
      },
      
    ];
  }
}