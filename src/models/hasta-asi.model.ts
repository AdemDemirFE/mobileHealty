import { Moment } from 'moment';
import { IAsi } from './asi.model';
import { IHasta } from './hasta.model';

export interface IHastaAsi {
  id?: number;
  yapildi?: boolean;
  tarih?: Moment;
  aciklama?: string;
  asi?: IAsi;
  hasta?: IHasta;
}

export class HastaAsi implements IHastaAsi {
  constructor(
    public id?: number,
    public yapildi?: boolean,
    public tarih?: Moment,
    public aciklama?: string,
    public asi?: IAsi,
    public hasta?: IHasta
  ) {
    this.yapildi = this.yapildi || false;
  }
}
