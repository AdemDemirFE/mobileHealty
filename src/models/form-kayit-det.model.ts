import { Moment } from 'moment';
import { IFormKayit } from './form-kayit.model';
import { IFormParam } from './form-param.model';

export interface IFormKayitDet {
  id?: number;
  sayisalDeger?: number;
  karakterDeger?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  formKayit?: IFormKayit;
  formParam?: IFormParam;
}

export class FormKayitDet implements IFormKayitDet {
  constructor(
    public id?: number,
    public sayisalDeger?: number,
    public karakterDeger?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public formKayit?: IFormKayit,
    public formParam?: IFormParam
  ) {
    this.sayisalDeger=1;
  }
}
