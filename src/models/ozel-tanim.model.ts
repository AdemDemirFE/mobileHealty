import { Moment } from 'moment';

export interface IOzelTanim {
  id?: number;
  ceviriKodu?: string;
  aciklama?: string;
  karakterDegeri?: string;
  sayisalDegeri?: number;
  durumDegeri?: boolean;
  grupMu?: boolean;
  grupId?: number;
  tipi?: number;
  genelTanimMi?: boolean;
  kullaniciId?: number;
  hastaId?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
}

export class OzelTanim implements IOzelTanim {
  constructor(
    public id?: number,
    public ceviriKodu?: string,
    public aciklama?: string,
    public karakterDegeri?: string,
    public sayisalDegeri?: number,
    public durumDegeri?: boolean,
    public grupMu?: boolean,
    public grupId?: number,
    public tipi?: number,
    public genelTanimMi?: boolean,
    public kullaniciId?: number,
    public hastaId?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment
  ) {
    this.durumDegeri = this.durumDegeri || false;
    this.grupMu = this.grupMu || false;
    this.genelTanimMi = this.genelTanimMi || false;
  }
}
