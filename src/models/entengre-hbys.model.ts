import { Moment } from 'moment';
import { IKurum } from './kurum.model';
import { IParamEslesme } from './param-eslesme.model';

export interface IEntengreHbys {
  id?: number;
  kodu?: string;
  aciklama?: string;
  servisUrl1?: string;
  servisUrl2?: string;
  sslDurumu?: boolean;
  tipi?: number;
  aktifMi?: boolean;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  kurums?: IKurum[];
  paramEslesmes?: IParamEslesme[];
}

export class EntengreHbys implements IEntengreHbys {
  constructor(
    public id?: number,
    public kodu?: string,
    public aciklama?: string,
    public servisUrl1?: string,
    public servisUrl2?: string,
    public sslDurumu?: boolean,
    public tipi?: number,
    public aktifMi?: boolean,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public kurums?: IKurum[],
    public paramEslesmes?: IParamEslesme[]
  ) {
    this.sslDurumu = this.sslDurumu || false;
    this.aktifMi = this.aktifMi || false;
  }
}
