import { Moment } from 'moment';
import { IAile } from './aile.model';
import { IHasta } from './hasta.model';
import { IAkraba } from './akraba.model';

export interface IBirey {
  id?: number;
  sorumlu?: boolean;
  aktifMi?: boolean;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  aile?: IAile;
  hasta?: IHasta;
  akraba?: IAkraba;
}

export class Birey implements IBirey {
  constructor(
    public id?: number,
    public sorumlu?: boolean,
    public aktifMi?: boolean,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public aile?: IAile,
    public hasta?: IHasta,
    public akraba?: IAkraba
  ) {
    this.sorumlu = this.sorumlu || false;
    this.aktifMi = this.aktifMi || false;
  }
}
