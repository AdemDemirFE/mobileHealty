import { ActionSheetController, ModalController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { LoadingController } from '@ionic/angular';
import { ModalDetayPage } from 'src/app/pages/modal-detay/modal-detay.page';

@Injectable()
export class C_Utils {
    loading: any;
    constructor(
        public toastCtrl: ToastController,
        public loadingController: LoadingController,
        public actionSheetCtrl: ActionSheetController,
        public modalController: ModalController,
    ) {

    }

    /**
     * @param message_ //Mesaj içeriği
     * @param position_ //alert konumu // top,bottom,middle
     * @param duration_ //ne kadar süre ekranda kalsın
     * @param showCloseButton_ //kapatma butonu olsun mu
     */
    async getToast(message_: string, position_: any, duration_: number, showCloseButton_: boolean, cssClass_: string) {
        let toast = await this.toastCtrl.create({
            message: message_,
            duration: duration_,
            position: position_,
            animated: false,
            cssClass: cssClass_,
        });

        toast.present();
    }

    /**
   * @param message_ //Mesaj içeriği
   * @param position_ //alert konumu // top,bottom,middle
   * @param duration_ //ne kadar süre ekranda kalsın
   * @param showCloseButton_ //kapatma butonu olsun mu
   *  @param color_ //default color
   */
    async getToast2(message_: string, position_: any, duration_: number, showCloseButton_: boolean, cssClass_: string, color_: string) {
        let toast = await this.toastCtrl.create({
            message: message_,
            duration: duration_,
            position: position_,
            animated: false,
            cssClass: cssClass_,
            color: color_
        });

        toast.present();
    }


    async presentLoading(_message: any) {
        this.loading = await this.loadingController.create({
            message: _message,
        });
        await this.loading.present();

    }

    async dismissLoading() {
        this.loading.dismiss();
    }

    find_in_object(my_object: any, my_criteria: any) {
        try {
            return my_object.filter(function (obj) {
                return Object.keys(my_criteria).every(function (c) {
                    return obj[c] == my_criteria[c];
                });
            });
        } catch (error) {
            return [];
        }
    }

    sortByProperty(property) {

        return function (x, y) {

            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));

        };

    };

    sortByPropertyDesc(property) {

        return function (x, y) {

            return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));

        };

    };
    /**
*
* @param buttons button event ve text oluşan array
* @param title  başlık
* @param subTitle altı başlık
*/
    openActionSheet(buttons: any, title: any, subTitle?: any) {
        let actionSheet = this.actionSheetCtrl.create({
            //header:title,
            //cssClass: 'action-sheets',
            buttons: buttons
        }).then(actionsheet => {
            actionsheet.present();
        });



    }

    async openDataDetayModal(detayFields: any) {


        const detayModal = await this.modalController.create({
            component: ModalDetayPage,
            backdropDismiss: false,
            cssClass: 'modalClass',
            componentProps: { DetayFields: detayFields }
          });
    
          await detayModal.present();
          detayModal.onDidDismiss().then(result => {
            if (result.data != null) {
    
            }
    
          });
    
    
    
      }



}