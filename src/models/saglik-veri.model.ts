import { Moment } from 'moment';
import { IHasta } from './hasta.model';

export interface ISaglikVeri {
  id?: number;
  kayitTarihi?: Moment;
  kilo?: number;
  nabiz?: number;
  yuksekTansiyon?: number;
  dusukTansiyon?: number;
  agri?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  hasta?: IHasta;
}

export class SaglikVeri implements ISaglikVeri {
  constructor(
    public id?: number,
    public kayitTarihi?: Moment,
    public kilo?: number,
    public nabiz?: number,
    public yuksekTansiyon?: number,
    public dusukTansiyon?: number,
    public agri?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public hasta?: IHasta
  ) {}
}
