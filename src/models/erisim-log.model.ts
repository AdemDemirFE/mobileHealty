import { Moment } from 'moment';

export interface IErisimLog {
  id?: number;
  ip?: string;
  mac?: string;
  tarih?: Moment;
  uygulamaAdi?: string;
  kullaniciId?: number;
  hastaId?: number;
  merkezId?: number;
  marka?: string;
  model?: string;
  uid?: string;
  oturumBilgi?: string;
  oturumDurumu?: number;
  isletimSistemi?: string;
  ulke?: string;
  sehir?: string;
  corX?: string;
  corY?: string;
}

export class ErisimLog implements IErisimLog {
  constructor(
    public id?: number,
    public ip?: string,
    public mac?: string,
    public tarih?: Moment,
    public uygulamaAdi?: string,
    public kullaniciId?: number,
    public hastaId?: number,
    public merkezId?: number,
    public marka?: string,
    public model?: string,
    public uid?: string,
    public oturumBilgi?: string,
    public oturumDurumu?: number,
    public isletimSistemi?: string,
    public ulke?: string,
    public sehir?: string,
    public corX?: string,
    public corY?: string
  ) {}
}
