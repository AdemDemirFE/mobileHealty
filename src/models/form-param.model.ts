import { Moment } from 'moment';
import { IFormKayitDet } from './form-kayit-det.model';
import { IForm } from './form.model';

export interface IFormParam {
  id?: number;
  aciklama?: string;
  ceviriKodu?: string;
  siraNo?: number;
  aktifMi?: boolean;
  grupMu?: boolean;
  grupId?: number;
  veriTipi?: number;
  altDeger?: number;
  ustDeger?: number;
  karakterDeger?: string;
  durumDeger?: boolean;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  formKayitDets?: IFormKayitDet[];
  form?: IForm;
  select?:boolean;
  index?:number;
}

export class FormParam implements IFormParam {
  constructor(
    public id?: number,
    public aciklama?: string,
    public ceviriKodu?: string,
    public siraNo?: number,
    public aktifMi?: boolean,
    public grupMu?: boolean,
    public grupId?: number,
    public veriTipi?: number,
    public altDeger?: number,
    public ustDeger?: number,
    public karakterDeger?: string,
    public durumDeger?: boolean,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public formKayitDets?: IFormKayitDet[],
    public form?: IForm,
    public select?:boolean,
    public index?:number
  ) {
    this.aktifMi = this.aktifMi || false;
    this.grupMu = this.grupMu || false;
    this.durumDeger = this.durumDeger || false;
    this.select = this.select || false;
  }
}
