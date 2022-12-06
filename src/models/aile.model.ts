import { Moment } from 'moment';
import { IBirey } from './birey.model'; 
import { IKurum } from './kurum.model';
import { IMerkez } from './merkez.model';

export interface IAile {
  id?: number;
  aciklama?: string;
  durum?: number;
  tipi?: number;
  il?: number;
  ilce?: number;
  bucak?: number;
  mahalle?: number;
  cadde?: number;
  sokak?: number;
  binaNo?: number;
  daireNo?: number;
  digerDetay?: string;
  adresNo?: string;
  konum?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  bireys?: IBirey[];
  kurum?: IKurum;
  merkez?: IMerkez;
}

export class Aile implements IAile {
  constructor(
    public id?: number,
    public aciklama?: string,
    public durum?: number,
    public tipi?: number,
    public il?: number,
    public ilce?: number,
    public bucak?: number,
    public mahalle?: number,
    public cadde?: number,
    public sokak?: number,
    public binaNo?: number,
    public daireNo?: number,
    public digerDetay?: string,
    public adresNo?: string,
    public konum?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public bireys?: IBirey[],
    public kurum?: IKurum,
    public merkez?: IMerkez
  ) {}
}
