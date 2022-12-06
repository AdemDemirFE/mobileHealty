import { Moment } from 'moment';
import { ISiviDengesi } from './sivi-dengesi.model';
import { IHasta } from './hasta.model';

export interface ISiviTipi {
  id?: number;
  ceviriKodu?: string;
  aciklama?: string;
  aktifMi?: boolean;
  varsayilanDegeri?: number;
  birimi?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  siviDengesis?: ISiviDengesi[];
  hasta?: IHasta;
}

export class SiviTipi implements ISiviTipi {
  constructor(
    public id?: number,
    public ceviriKodu?: string,
    public aciklama?: string,
    public aktifMi?: boolean,
    public varsayilanDegeri?: number,
    public birimi?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public siviDengesis?: ISiviDengesi[],
    public hasta?: IHasta
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
