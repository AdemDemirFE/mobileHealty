import { Moment } from 'moment';
import { ICihaz } from './cihaz.model';
import { IHasta } from './hasta.model';

export interface IHastaCihaz {
  id?: number;
  verilisTarihi?: Moment;
  verenId?: number;
  vermeNedeni?: string;
  sonkullanimTarihi?: Moment;
  aktifMi?: boolean;
  iadeTarihi?: Moment;
  iadeNedeni?: string;
  iadeAlanId?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  cihaz?: ICihaz;
  hasta?: IHasta;
}

export class HastaCihaz implements IHastaCihaz {
  constructor(
    public id?: number,
    public verilisTarihi?: Moment,
    public verenId?: number,
    public vermeNedeni?: string,
    public sonkullanimTarihi?: Moment,
    public aktifMi?: boolean,
    public iadeTarihi?: Moment,
    public iadeNedeni?: string,
    public iadeAlanId?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public cihaz?: ICihaz,
    public hasta?: IHasta
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
