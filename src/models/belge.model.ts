import { Moment } from 'moment';
import { IHaber } from './haber.model';
import { IHasta } from './hasta.model';
import { IKullanici } from './kullanici.model'; 
import { IKurum } from './kurum.model';
import { IMerkez } from './merkez.model';


export interface IBelge {
  id?: number;
  belgeTarihi?: Moment;
  takipId?: number;
  tipi?: number;
  aktifMi?: boolean;
  aciklama?: string;
  uzanti?: string;
  belgeContentType?: string;
  belge?: any;
  belgeYolu?: string;
  grupId?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  kurum?: IKurum;
  merkez?: IMerkez;
  kullanici?: IKullanici;
  hasta?: IHasta;
  //haber?: IHaber;
}

export class Belge implements IBelge {
  constructor(
    public id?: number,
    public belgeTarihi?: Moment,
    public takipId?: number,
    public tipi?: number,
    public aktifMi?: boolean,
    public aciklama?: string,
    public uzanti?: string,
    public belgeContentType?: string,
    public belge?: any,
    public belgeYolu?: string,
    public grupId?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public kurum?: IKurum,
    public merkez?: IMerkez,
    public kullanici?: IKullanici,
    public hasta?: IHasta,
    //public haber?: IHaber
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
