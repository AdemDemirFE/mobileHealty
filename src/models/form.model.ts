import { Moment } from 'moment';
import { IFormParam } from './form-param.model';
import { IFormKayit } from './form-kayit.model';

export interface IForm {
  id?: number;
  kodu?: string;
  ceviriKodu?: string;
  aciklama?: string;
  aktifMi?: boolean;
  tipi?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  formParams?: IFormParam[];
  formKayits?: IFormKayit[];
}

export class Form implements IForm {
  constructor(
    public id?: number,
    public kodu?: string,
    public ceviriKodu?: string,
    public aciklama?: string,
    public aktifMi?: boolean,
    public tipi?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public formParams?: IFormParam[],
    public formKayits?: IFormKayit[]
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
