import { Moment } from 'moment';
import { IHaber } from './haber.model';

export interface IHaberGrup {
  id?: number;
  aciklama?: string;
  dil?: string;
  olusturan?: string;
  olusturmaTarihi?: any;
  guncelleyen?: string;
  guncelemeTarihi?: any;
  habers?: IHaber[];
}

export class HaberGrup implements IHaberGrup {
  constructor(
    public id?: number,
    public aciklama?: string,
    public dil?: string,
    public olusturan?: string,
    public olusturmaTarihi?: any,
    public guncelleyen?: string,
    public guncelemeTarihi?: any,
    public habers?: IHaber[]
  ) {}
}
