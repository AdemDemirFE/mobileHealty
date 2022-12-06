import { Moment } from 'moment';
import { IKurum } from './kurum.model';

export interface ILcd {
  id?: number;
  kodu?: string;
  aciklama?: string;
  baglanti?: string;
  baslangicSaati?: string;
  bitisSaati?: string;
  aktifMi?: boolean;
  lcdYenilemeTarihi?: Moment;
  lcdYenidenBaslat?: boolean;
  lcdKapat?: boolean;
  lcdTarihSaat?: string;
  kurum?: IKurum;
}

export class Lcd implements ILcd {
  constructor(
    public id?: number,
    public kodu?: string,
    public aciklama?: string,
    public baglanti?: string,
    public baslangicSaati?: string,
    public bitisSaati?: string,
    public aktifMi?: boolean,
    public lcdYenilemeTarihi?: Moment,
    public lcdYenidenBaslat?: boolean,
    public lcdKapat?: boolean,
    public lcdTarihSaat?: string,
    public kurum?: IKurum
  ) {
    this.aktifMi = this.aktifMi || false;
    this.lcdYenidenBaslat = this.lcdYenidenBaslat || false;
    this.lcdKapat = this.lcdKapat || false;
  }
}
