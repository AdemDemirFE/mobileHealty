import { Moment } from 'moment';
import { IHasta } from './hasta.model';
import { IParametre } from './parametre.model';

export interface ISonuclar {
  id?: number;
  hbysTakipNo?: string;
  sonucTipi?: number;
  sonucTarihi?: Moment;
  sayisalSonuc?: number;
  karakterSonuc?: string;
  sonucOlcuBirimi?: string;
  sonucRef?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  hasta?: IHasta;
  parametre?: IParametre;
}

export class Sonuclar implements ISonuclar {
  constructor(
    public id?: number,
    public hbysTakipNo?: string,
    public sonucTipi?: number,
    public sonucTarihi?: Moment,
    public sayisalSonuc?: number,
    public karakterSonuc?: string,
    public sonucOlcuBirimi?: string,
    public sonucRef?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public hasta?: IHasta,
    public parametre?: IParametre
  ) {}
}
