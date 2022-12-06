import { Moment } from 'moment';
import { IHasta } from './hasta.model';
import { IKullanici } from './kullanici.model';
import { IMobilCihazlar } from './mobil-cihazlar.model';
import { IUygulama } from './uygulama.model';
 

export interface IBildirim {
  id?: number;
  bildirimTipi?: number;
  oncelik?: number;
  aktifMi?: boolean;
  baslik?: string;
  aciklama?: string;
  tarih?: Moment;
  kapanmaTarihi?: Moment;
  uygulamaAdi?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  kullanici?: IKullanici;
  uygulama?: IUygulama;
  mobilCihazlar?: IMobilCihazlar;
  hasta?: IHasta;
}

export class Bildirim implements IBildirim {
  constructor(
    public id?: number,
    public bildirimTipi?: number,
    public oncelik?: number,
    public aktifMi?: boolean,
    public baslik?: string,
    public aciklama?: string,
    public tarih?: Moment,
    public kapanmaTarihi?: Moment,
    public uygulamaAdi?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public kullanici?: IKullanici,
    public uygulama?: IUygulama,
    public mobilCihazlar?: IMobilCihazlar,
    public hasta?: IHasta
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
