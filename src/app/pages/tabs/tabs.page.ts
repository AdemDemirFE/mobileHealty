import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GeneralSettings } from 'src/app/pages';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  generalSettings=GeneralSettings;

  constructor(
    public navCtrl: NavController
  ) {
  }

  goToPage(pageRootName: any) {
    pageRootName ? this.navCtrl.navigateForward('/' + pageRootName) : "";
  } 
}
