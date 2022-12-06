import { IIslemGrubuDet } from './islem-grubu-det.model';
import { IRandevuTekrarli } from './randevu-tekrarli.model';
import { IRandevu } from './randevu.model';

export interface IIslemGrubu {
  id?: number;
  aciklama?: string;
  aktifMi?: boolean;
  barkod?: string;
  belgeId?: number;
  islemGrubuDets?: IIslemGrubuDet[];
  randevuTekrarlis?: IRandevuTekrarli[];
  randevus?: IRandevu[];
}

export class IslemGrubu implements IIslemGrubu {
  constructor(
    public id?: number,
    public aciklama?: string,
    public aktifMi?: boolean,
    public barkod?: string,
    public belgeId?: number,
    public islemGrubuDets?: IIslemGrubuDet[],
    public randevuTekrarlis?: IRandevuTekrarli[],
    public randevus?: IRandevu[]
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}