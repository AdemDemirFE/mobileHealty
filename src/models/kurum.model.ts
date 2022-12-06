import { Moment } from 'moment';
import { IKurumErisim } from './kurum-erisim.model';
import { IMerkez } from './merkez.model';
import { IBelge } from './belge.model';
import { ILcd } from './lcd.model';
import { IAile } from './aile.model';
import { IKullanici } from './kullanici.model';
import { IEntengreHbys } from './entengre-hbys.model';

export interface IKurum {
  id?: number;
  kurumAdi?: string;
  kodu?: string;
  aciklama?: string;
  yetkili?: string;
  ulke?: string;
  sehir?: string;
  adres?: string;
  postaKodu?: string;
  logoContentType?: string;
  logo?: any;
  logoYolu?: string;
  telefon?: string;
  fax?: string;
  konum?: string;
  webToplantiTipi?: number;
  webToplantiServer?: string;
  webToplantiAnahtar?: string;
  hbysKullanici?: string;
  hbysSifre?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  kurumErisims?: IKurumErisim[];
  merkezs?: IMerkez[];
  belges?: IBelge[];
  lcds?: ILcd[];
  ailes?: IAile[];
  kullanicis?: IKullanici[];
  entengreHbys?: IEntengreHbys;
  isActive?:boolean;
  
}

export class Kurum implements IKurum {
  constructor(
    public id?: number,
    public kurumAdi?: string,
    public kodu?: string,
    public aciklama?: string,
    public yetkili?: string,
    public ulke?: string,
    public sehir?: string,
    public adres?: string,
    public postaKodu?: string,
    public logoContentType?: string,
    public logo?: any,
    public logoYolu?: string,
    public telefon?: string,
    public fax?: string,
    public konum?: string,
    public webToplantiTipi?: number,
    public webToplantiServer?: string,
    public webToplantiAnahtar?: string,
    public hbysKullanici?: string,
    public hbysSifre?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public kurumErisims?: IKurumErisim[],
    public merkezs?: IMerkez[],
    public belges?: IBelge[],
    public lcds?: ILcd[],
    public ailes?: IAile[],
    public kullanicis?: IKullanici[],
    public entengreHbys?: IEntengreHbys,
    public isActive?:boolean
  ) {
    this.isActive=false;
  }
}
