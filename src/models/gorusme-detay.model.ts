import { Moment } from 'moment';
import { IGorusme } from './gorusme.model';
import { IHasta } from './hasta.model';
import { IKullanici } from './kullanici.model';

export interface IGorusmeDetay {
  id?: number;
  avatarUrl?: string;
  katildi?: boolean;
  girisTarihi?: Moment;
  cikisTarihi?: Moment;
  sure?: number;
  gorusme?: IGorusme;
  hasta?: IHasta;
  kullanici?: IKullanici;
}

export class GorusmeDetay implements IGorusmeDetay {
  constructor(
    public id?: number,
    public avatarUrl?: string,
    public katildi?: boolean,
    public girisTarihi?: Moment,
    public cikisTarihi?: Moment,
    public sure?: number,
    public gorusme?: IGorusme,
    public hasta?: IHasta,
    public kullanici?: IKullanici
  ) {
    this.katildi = this.katildi || false;
  }
}
