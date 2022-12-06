import { Moment } from 'moment';
import { IUygulama } from './uygulama.model';

export interface IYetki {
  id?: number;
  tipi?: number;
  ozelKodu?: string;
  gizliMi?: boolean;
  ceviriKodu?: string;
  aktifMi?: boolean;
  varsayilan?: boolean;
  aciklama?: string;
  ozelDurum?: string;
  iconContentType?: string;
  icon?: any;
  iconYolu?: string;
  erisimYolu?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  uygulama?: IUygulama;
  secim?:boolean;
}

export class Yetki implements IYetki {
  constructor(
    public id?: number,
    public tipi?: number,
    public ozelKodu?: string,
    public gizliMi?: boolean,
    public ceviriKodu?: string,
    public aktifMi?: boolean,
    public varsayilan?: boolean,
    public aciklama?: string,
    public ozelDurum?: string,
    public iconContentType?: string,
    public icon?: any,
    public iconYolu?: string,
    public erisimYolu?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public uygulama?: IUygulama,
    public secim?:boolean
  ) {
    this.gizliMi = this.gizliMi || false;
    this.aktifMi = this.aktifMi || true;
    this.secim = this.secim || false;
    this.varsayilan = this.varsayilan || false;
  }
}
