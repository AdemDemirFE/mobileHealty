import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from 'src/providers/service/service';



//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthInterceptor } from '../providers/auth/auth-interceptor';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './translate-config.service';
//import { IonicStorageModule } from '@ionic/storage';
import { SafeUrlPipe } from './safe-url.pipe';
import { C_Utils } from '../providers/utils';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
//import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Api } from 'src/providers/api/api';
import { ServiceList } from 'src/providers/service/serviceList';
import { C_HazirMetodlar } from 'src/providers/hazirMetodlar';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, SafeUrlPipe],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
  ],
  providers: [
    TranslateConfigService,
    C_Utils,
    BarcodeScanner,
    Api,
    C_Utils,
    ServiceList,
    C_HazirMetodlar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
