import { IIslemGrubuDet } from "./islem-grubu-det.model";

export interface IIslem {
  id?: number;
  aciklama?: string;
  aktifMi?: boolean;
  islemTipi?: number;
  detay?: string;
  barkod?: string;
  dosyaContentType?: string;
  dosya?: any;
  uygulamaSekli?: string;
  yanEtkileri?: string;
  islemGrubuDets?: IIslemGrubuDet[];
}

export class Islem implements IIslem {
  constructor(
    public id?: number,
    public aciklama?: string,
    public aktifMi?: boolean,
    public islemTipi?: number,
    public detay?: string,
    public barkod?: string,
    public dosyaContentType?: string,
    public dosya?: any,
    public uygulamaSekli?: string,
    public yanEtkileri?: string,
    public islemGrubuDets?: IIslemGrubuDet[]
  ) {
    this.aktifMi = this.aktifMi || true;
  }
}
