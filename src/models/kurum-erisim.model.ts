import { Moment } from 'moment';
import { IKurum } from './kurum.model';

export interface IKurumErisim {
  id?: number;
  altIP?: string;
  ustIP?: string;
  aktifMi?: boolean;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  kurum?: IKurum;
}

export class KurumErisim implements IKurumErisim {
  constructor(
    public id?: number,
    public altIP?: string,
    public ustIP?: string,
    public aktifMi?: boolean,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public kurum?: IKurum
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
