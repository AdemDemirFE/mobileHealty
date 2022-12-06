import { Moment } from 'moment';
import { IGorusmeDetay } from './gorusme-detay.model';
import { IRandevuTekrarli } from './randevu-tekrarli.model';
import { IRandevu } from './randevu.model';

export interface IGorusme {
  id?: number;
  anahtar?: string;
  aciklama?: string;
  mesaj?: string;
  kayitEt?: boolean;
  otomatikKayitBaslat?: boolean;
  kayitYolu?: string;
  bildirimMesaji?: string;
  olusturanId?: number;
  olusturmaTarihi?: Moment;
  sonlandiranId?: number;
  sonlanmaTarhi?: Moment;
  sure?: number;
  gorusmeDetays?: IGorusmeDetay[];
  randevuTekrarlis?: IRandevuTekrarli[];
  randevus?: IRandevu[];
}

export class Gorusme implements IGorusme {
  constructor(
    public id?: number,
    public anahtar?: string,
    public aciklama?: string,
    public mesaj?: string,
    public kayitEt?: boolean,
    public otomatikKayitBaslat?: boolean,
    public kayitYolu?: string,
    public bildirimMesaji?: string,
    public olusturanId?: number,
    public olusturmaTarihi?: Moment,
    public sonlandiranId?: number,
    public sonlanmaTarhi?: Moment,
    public sure?: number,
    public gorusmeDetays?: IGorusmeDetay[],
    public randevuTekrarlis?: IRandevuTekrarli[],
    public randevus?: IRandevu[]
  ) {
    this.kayitEt = this.kayitEt || false;
    this.otomatikKayitBaslat = this.otomatikKayitBaslat || false;
  }
}
