import { Moment } from 'moment';
import { IHastaCihaz } from './hasta-cihaz.model';
import { ICihazTur } from './cihaz-tur.model';
import { IParametreGrup } from './parametre-grup.model';

export interface ICihaz {
  id?: number;
  marka?: string;
  model?: string;
  durum?: number;
  resimContentType?: string;
  resim?: any;
  seriNo?: string;
  barkod?: string;
  sicilNo?: string;
  sonkullanmaTarihi?: Moment;
  aktifMi?: boolean;
  aciklama?: string;
  rfid?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  hastaCihazs?: IHastaCihaz[];
  cihazTur?: ICihazTur;
  paramereGrup?: IParametreGrup;
}

export class Cihaz implements ICihaz {
  constructor(
    public id?: number,
    public marka?: string,
    public model?: string,
    public durum?: number,
    public resimContentType?: string,
    public resim?: any,
    public seriNo?: string,
    public barkod?: string,
    public sicilNo?: string,
    public sonkullanmaTarihi?: Moment,
    public aktifMi?: boolean,
    public aciklama?: string,
    public rfid?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public hastaCihazs?: IHastaCihaz[],
    public cihazTur?: ICihazTur,
    public paramereGrup?: IParametreGrup
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
