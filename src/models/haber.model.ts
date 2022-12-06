import { Moment } from 'moment';
import { IBelge } from './belge.model';
import { IHaberGrup } from './haber-grup.model';

export interface IHaber {
  id?: number;
  kayitTarihi?: any;
  resimContentType?: string;
  resim?: any;
  resimYolu?: string;
  baslik?: string;
  icerik?: string;
  videoYolu?: string;
  olusturan?: string;
  olusturmaTarihi?: any;
  guncelleyen?: string;
  guncelemeTarihi?: any;
  belges?: IBelge[];
  haberGrup?: IHaberGrup;
}

export class Haber implements IHaber {
  constructor(
    public id?: number,
    public kayitTarihi?: any,
    public resimContentType?: string,
    public resim?: any,
    public resimYolu?: string,
    public baslik?: string,
    public icerik?: string,
    public videoYolu?: string,
    public olusturan?: string,
    public olusturmaTarihi?: any,
    public guncelleyen?: string,
    public guncelemeTarihi?: any,
    public belges?: IBelge[],
    public haberGrup?: IHaberGrup
  ) {}
}
