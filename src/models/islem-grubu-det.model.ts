import { IRandevuIslem } from './randevu-islem.model';
import { IIslem } from './islem.model';
import { IIslemGrubu } from './islem-grubu.model';
 
export interface IIslemGrubuDet {
  id?: number;
  adet?: number;
  doz?: string;
  dozSekli?: string;
  randevuIslems?: IRandevuIslem[];
  islem?: IIslem;
  islemGrubu?: IIslemGrubu;
}

export class IslemGrubuDet implements IIslemGrubuDet {
  constructor(
    public id?: number,
    public adet?: number,
    public doz?: string,
    public dozSekli?: string,
    public randevuIslems?: IRandevuIslem[],
    public islem?: IIslem,
    public islemGrubu?: IIslemGrubu
  ) {}
}
