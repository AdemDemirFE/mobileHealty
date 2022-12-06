import { Moment } from 'moment';
import { IHasta } from './hasta.model';
import { ISiviTipi } from './sivi-tipi.model';

export interface ISiviDengesi {
  id?: number;
  degeri?: number;
  tipi?: number;
  aciklama?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  hasta?: IHasta;
  siviTipi?: ISiviTipi;
}

export class SiviDengesi implements ISiviDengesi {
  constructor(
    public id?: number,
    public degeri?: number,
    public tipi?: number,
    public aciklama?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public hasta?: IHasta,
    public siviTipi?: ISiviTipi
  ) {}
}
