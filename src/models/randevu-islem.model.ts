import { Moment } from 'moment';
import { IRandevu } from './randevu.model';
import { IIslemGrubuDet } from './islem-grubu-det.model';

export interface IRandevuIslem {
  id?: number;
  uygulandi?: boolean;
  uygulayan?: string;
  uygulamaTarihi?: Moment;
  iptalEdildi?: boolean;
  iptalEden?: string;
  iptalTarihi?: Moment;
  iptalNedeni?: string;
  belgeId?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  randevu?: IRandevu;
  islemGrubuDet?: IIslemGrubuDet;
}

export class RandevuIslem implements IRandevuIslem {
  constructor(
    public id?: number,
    public uygulandi?: boolean,
    public uygulayan?: string,
    public uygulamaTarihi?: Moment,
    public iptalEdildi?: boolean,
    public iptalEden?: string,
    public iptalTarihi?: Moment,
    public iptalNedeni?: string,
    public belgeId?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public randevu?: IRandevu,
    public islemGrubuDet?: IIslemGrubuDet
  ) {
    this.uygulandi = this.uygulandi || false;
    this.iptalEdildi = this.iptalEdildi || false;
  }
}
