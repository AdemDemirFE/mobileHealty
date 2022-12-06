import { Moment } from 'moment';
import { IBildirim } from './bildirim.model';
import { IKullanici } from './kullanici.model';

export interface IMobilCihazlar {
  id?: number;
  marka?: string;
  model?: string;
  mac?: string;
  uid?: string;
  aktifMi?: string;
  olusturanId?: number;
  olusturmaTarh?: Moment;
  guncelleyenId?: number;
  guncelemeTarh?: Moment;
  bildirims?: IBildirim[];
  kullanici?: IKullanici;
}

export class MobilCihazlar implements IMobilCihazlar {
  constructor(
    public id?: number,
    public marka?: string,
    public model?: string,
    public mac?: string,
    public uid?: string,
    public aktifMi?: string,
    public olusturanId?: number,
    public olusturmaTarh?: Moment,
    public guncelleyenId?: number,
    public guncelemeTarh?: Moment,
    public bildirims?: IBildirim[],
    public kullanici?: IKullanici
  ) {}
}
