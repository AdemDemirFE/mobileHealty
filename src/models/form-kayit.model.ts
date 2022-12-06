import { Moment } from 'moment';
import { IFormKayitDet } from './form-kayit-det.model';
import { IForm } from './form.model';

export interface IFormKayit {
  id?: number;
  aciklama?: string;
  uygulamaTarihi?: Moment;
  grupMu?: boolean;
  grupId?: number;
  uygulayan?: string;
  sayisalSonuc?: number;
  karakterSonuc?: string;
  sonucOlcuBirimi?: string;
  sonucRef?: string;
  sonucTarihi?: Moment;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  formKayitDets?: IFormKayitDet[];
  form?: IForm;
}

export class FormKayit implements IFormKayit {
  constructor(
    public id?: number,
    public aciklama?: string,
    public uygulamaTarihi?: Moment,
    public grupMu?: boolean,
    public grupId?: number,
    public uygulayan?: string,
    public sayisalSonuc?: number,
    public karakterSonuc?: string,
    public sonucOlcuBirimi?: string,
    public sonucRef?: string,
    public sonucTarihi?: Moment,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public formKayitDets?: IFormKayitDet[],
    public form?: IForm
  ) {
    this.grupMu = this.grupMu || false;
  }
}
