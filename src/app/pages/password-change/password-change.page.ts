import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PickerController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { C_Utils } from 'src/providers/utils';
import { account } from '../../pages';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

  passCode: String = "";
  password;
  constructor(public navParams: NavParams,
    public modalController: ModalController,
    public pickerController: PickerController,
    public translateService: TranslateService,
    public c_Utils: C_Utils,
    public loadingController: LoadingController
  ) 
    //if(this.navParams.get('password')!=undefined)
    
    
    //this.password=this.navParams.get('password');
   {
    if(this.navParams.get('password')!=undefined)
   { 
    
    this.password=this.navParams.get('password');
   }

  }
  ionViewWillEnter() {

  }
  change(value){
    //manually launch change detection
    
    try {
      this.passCode = value.toString().length >4 ? value.toString().substring(0,4) : value;
 
    } catch (error) {
      this.passCode= this.passCode;
    }
  
  }
  ngOnInit() {
  }

  validCode() {
    try {

      if (this.passCode != null && this.passCode.toString().length > 4) {
        this.passCode = this.passCode.toString().substring(0, 4);
      }
    } catch (error) {

    }

  }

  async exitModal() {
    await this.modalController.dismiss(null);
  }



}
