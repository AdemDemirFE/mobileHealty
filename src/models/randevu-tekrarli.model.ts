import { Moment } from 'moment';
import { IRandevu } from './randevu.model';
import { IGorusme } from './gorusme.model';
import { IIslemGrubu } from './islem-grubu.model';

export interface IRandevuTekrarli {
  id?: number;
  aciklama?: string;
  randevuTipi?: number;
  tekrarTipi?: number;
  periyodu?: number;
  aktifMi?: boolean;
  sonRandevuId?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  randevus?: IRandevu[];
  gorusme?: IGorusme;
  islemGrubu?: IIslemGrubu;
}

export class RandevuTekrarli implements IRandevuTekrarli {
  constructor(
    public id?: number,
    public aciklama?: string,
    public randevuTipi?: number,
    public tekrarTipi?: number,
    public periyodu?: number,
    public aktifMi?: boolean,
    public sonRandevuId?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public randevus?: IRandevu[],
    public gorusme?: IGorusme,
    public islemGrubu?: IIslemGrubu
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
