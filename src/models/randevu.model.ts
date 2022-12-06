import { Moment } from 'moment';
import { IGorusme } from './gorusme.model';
import { IslemGrubu } from './islem-grubu.model';
import { IIslem } from './islem.model';
import { IRandevuKatilimci } from './randevu-katilimci.model';
export interface IRandevu {
    id?: number;
    aciklama?: string;
    randevuTipi?: any;
    randevuDurumu?: any;
    olusturan?: string;
    olusturmaTarihi?: Moment;
    guncelleyen?: string;
    guncelemeTarihi?: Moment;
    tarihSaat?: Moment;
    sure?: any;
    tekrarli?: boolean;
    tekrarPeriyodu?: number;
    tekrarEdilecekSonTarih?: Moment;
    katilimciMesaj?: string;
    randevuKayitKatilimciDTOS?: IRandevuKatilimci[];
    iptalTarih?: Moment;
    bagliRandevu?: number;
    gorusme?: IGorusme[];
    islemGrubu?: IslemGrubu;
    iptalTarihi?: any,
    iptalNedeni?: any,
    iptalEden?: any,
    randTekrarli?: any,
    randevu?: any,
    katilimciList?: any,

}

export class Randevu implements IRandevu {
    constructor(

        public iptalTarihi?: any,
        public iptalNedeni?: any,
        public iptalEden?: any,
        public randTekrarli?: any,
        public randevu?: any,
        public katilimciList?: any,
        public id?: number,
        public aciklama?: string,
        public randevuTipi?: any,
        public randevuDurumu?: any,
        public olusturan?: string,
        public olusturmaTarihi?: Moment,
        public guncelleyen?: string,
        public guncelemeTarihi?: Moment,
        public tarihSaat?: Moment,
        public sure?: any,
        public tekrarli?: boolean,
        public tekrarPeriyodu?: number,
        public tekrarEdilecekSonTarih?: Moment,
        public katilimciMesaj?: string,
        public randevuKayitKatilimciDTOS?: IRandevuKatilimci[],
        public iptalTarih?: Moment,
        public bagliRandevu?: number,
        public gorusme?: IGorusme[],
        public islemGrubu?: IslemGrubu,
    ) {
        this.tekrarli = this.tekrarli || false;

    }
  }