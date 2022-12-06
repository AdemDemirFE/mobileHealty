import { Moment } from 'moment';
import { IAile } from './aile.model';
import { IHasta } from './hasta.model';
import { IBelge } from './belge.model';
import { IKullanici } from './kullanici.model';
import { IKurum } from './kurum.model';

export interface IMerkez {
  id?: number;
  merkezAdi?: string;
  aciklama?: string;
  tipi?: number;
  hbysEslesmeKodu?: string;
  aktifMi?: boolean;
  ulke?: string;
  sehir?: string;
  adres?: string;
  postaKodu?: string;
  logoContentType?: string;
  logo?: any;
  logoYolu?: string;
  telefon?: string;
  skype?: string;
  fax?: string;
  konum?: string;
  webToplantiServer?: string;
  webToplantiAnahtar?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  ailes?: IAile[];
  hastas?: IHasta[];
  belges?: IBelge[];
  kullanicis?: IKullanici[];
  kurum?: IKurum;
}

export class Merkez implements IMerkez {
  constructor(
    public id?: number,
    public merkezAdi?: string,
    public aciklama?: string,
    public tipi?: number,
    public hbysEslesmeKodu?: string,
    public aktifMi?: boolean,
    public ulke?: string,
    public sehir?: string,
    public adres?: string,
    public postaKodu?: string,
    public logoContentType?: string,
    public logo?: any,
    public logoYolu?: string,
    public telefon?: string,
    public skype?: string,
    public fax?: string,
    public konum?: string,
    public webToplantiServer?: string,
    public webToplantiAnahtar?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public ailes?: IAile[],
    public hastas?: IHasta[],
    public belges?: IBelge[],
    public kullanicis?: IKullanici[],
    public kurum?: IKurum
  ) {
    this.aktifMi = this.aktifMi || true;
  }
}
