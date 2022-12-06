import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { TranslateService } from '@ngx-translate/core';
//import { Service } from 'src/providers/service/service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

     slideOptsOne = {
    initialSlide: 0,
    speed: 400,
    autoplay: false,
   
  };
  

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    public translateService: TranslateService,
    //public service: Service,
    private barcodeScanner: BarcodeScanner,
  ) {

  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  goLogin() { //intro atlama bölümü
  
   //this.scan();
   this.router.navigateByUrl('/login')
    
  }

  scan() {
    this.translateService.get(['GENEL', 'MESAJLAR']).subscribe(values => {
      this.barcodeScanner.scan().then((barcodeData) => {
        if (barcodeData.text !== undefined) {
       
            console.log(barcodeData.text);
            alert(barcodeData.text);
            this.router.navigateByUrl('/login')
          
          
        }
      }, (err) => {
        console.log(values.MESAJLAR.HATA_BILINMEYEN);
      //  this.c_Utils.GetToast(values.MESAJLAR.HATA_BILINMEYEN, 'middle', 3000, false);
      });
    });
  }

}
//this.router.navigateByUrl('/login')