import { Moment } from 'moment';
import { IParamEslesme } from './param-eslesme.model';
import { ISonuclar } from './sonuclar.model';
import { IParametreGrup } from './parametre-grup.model';

export interface IParametre {
  id?: number;
  tipi?: number;
  eslesmeKodu?: string;
  siraNo?: number;
  aciklama?: string;
  aktifMi?: boolean;
  referansAlt?: number;
  referansUst?: number;
  renk?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  paramEslesmes?: IParamEslesme[];
  sonuclars?: ISonuclar[];
  parametreGrup?: IParametreGrup;
}

export class Parametre implements IParametre {
  constructor(
    public id?: number,
    public tipi?: number,
    public eslesmeKodu?: string,
    public siraNo?: number,
    public aciklama?: string,
    public aktifMi?: boolean,
    public referansAlt?: number,
    public referansUst?: number,
    public renk?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public paramEslesmes?: IParamEslesme[],
    public sonuclars?: ISonuclar[],
    public parametreGrup?: IParametreGrup
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
